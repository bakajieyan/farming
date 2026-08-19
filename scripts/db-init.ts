/**
 * Create / seed farming/db/adventure.sqlite (canonical store).
 * Idempotent for questions + meta + state_kv. Changelog/decisions insert
 * the close-Q1–Q6 event only if missing.
 *
 *   bun scripts/db-init.ts
 */
import { Database } from 'bun:sqlite'
import { mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const dbDir = join(root, 'db')
const dbPath = join(dbDir, 'adventure.sqlite')
const schemaPath = join(dbDir, 'schema.sql')

mkdirSync(dbDir, { recursive: true })

const db = new Database(dbPath, { create: true })
db.exec(readFileSync(schemaPath, 'utf8'))

function meta(key: string, value: string) {
  db.run(
    'INSERT INTO meta(key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    [key, value],
  )
}

function state(key: string, value: string) {
  db.run(
    'INSERT INTO state_kv(key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    [key, value],
  )
}

function upsertQuestion(row: {
  id: string
  question: string
  blocking: number
  status: 'open' | 'closed'
  resolution: string
  closed_on: string
}) {
  db.run(
    `INSERT INTO questions(id, question, blocking, status, resolution, closed_on)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       question = excluded.question,
       blocking = excluded.blocking,
       status = excluded.status,
       resolution = excluded.resolution,
       closed_on = excluded.closed_on`,
    [row.id, row.question, row.blocking, row.status, row.resolution, row.closed_on],
  )
}

meta('canonical', 'bun-sqlite')
meta('updated_at', '2026-08-19')
meta('phase', '1')
meta('deployment', 'not-started')
meta('primary_chain', 'solana')
meta('secondary_chain', 'base')

state('defi_planned_usd', '1000')
state('defi_deployed_usd', '0')
state('monthly_usd', '200')
state('core_pct', '60')
state('lp_pct', '25')
state('alpha_pct', '15')
state('core_venue', 'kamino-native-usdc-usdt')
state('lp_venue', 'orca-usdc-usdt-or-usdc-major')
state('leverage', 'off')
state('meme_engine', 'optional-not-committed')
state('open_questions', '0')

const closedOn = '2026-08-19'

upsertQuestion({
  blocking: 0,
  closed_on: closedOn,
  id: 'Q1',
  question: 'Which Kamino USDC/USDT market or curated vault for the first core sleeve?',
  resolution:
    'Kamino native USDC+USDT lending first ($400 USDC / $200 USDT). Not max-APY curated vaults. Market IDs at /deploy.',
  status: 'closed',
})
upsertQuestion({
  blocking: 0,
  closed_on: closedOn,
  id: 'Q2',
  question: 'Which stable LP (venue, pool, TVL, fee tier) for the $250?',
  resolution: 'Orca first, established USDC/USDT (or USDC-major). Pool ID at /deploy.',
  status: 'closed',
})
upsertQuestion({
  blocking: 0,
  closed_on: closedOn,
  id: 'Q3',
  question: 'Base vs Arbitrum as the single EVM backup?',
  resolution: 'Base. Unused until Solana book is live.',
  status: 'closed',
})
upsertQuestion({
  blocking: 0,
  closed_on: closedOn,
  id: 'Q4',
  question: 'Is the ~$1,000 Pump.fun LP already committed, or still optional?',
  resolution: 'Optional and fully separate. Not committed. Never mix into DeFi totals.',
  status: 'closed',
})
upsertQuestion({
  blocking: 0,
  closed_on: closedOn,
  id: 'Q5',
  question: 'Can monthly contribution rise above $200, and when?',
  resolution: 'Stay at $200/mo. Revisit at $5k or year-1. Do not budget a raise.',
  status: 'closed',
})
upsertQuestion({
  blocking: 0,
  closed_on: closedOn,
  id: 'Q6',
  question: 'Wallet / record-keeping method?',
  resolution:
    'Bun SQLite is canonical (farming/db/adventure.sqlite). Markdown is the readable chronicle.',
  status: 'closed',
})

const closeTitle = 'Closed Q1–Q6'
const existing = db.query('SELECT id FROM changelog WHERE title = ?').get(closeTitle)
if (!existing) {
  db.run(
    `INSERT INTO changelog(logged_on, title, kind, summary, why, files)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      closedOn,
      closeTitle,
      'decision',
      'Closed every parked question: Kamino native USDC+USDT; Orca-first LP; Base backup; meme optional; $200/mo stays; Bun SQLite canonical.',
      'Stop a hanging question list; lock policy so /deploy has a recipe.',
      'adventure/DECISIONS.md, adventure/STATE.md, db/, AGENTS.md',
    ],
  )
}

const q6Decision =
  'Q6 closed: Bun SQLite (farming/db/adventure.sqlite) is the canonical operational record.'
const q6Row = db.query('SELECT id FROM decisions WHERE decision = ?').get(q6Decision)
if (!q6Row) {
  const rows: [string, string, string, string | null, string][] = [
    [closedOn, q6Decision, 'Human: "bun sqlite is canonical."', null, 'active'],
    [
      closedOn,
      'Q5 closed: Stay at $200/month. Revisit at $5k or year-1.',
      'Do not budget a raise into the 3–5 year clock.',
      null,
      'active',
    ],
    [
      closedOn,
      'Q4 closed: Pump.fun / memecoin LP is optional and fully separate. Not committed.',
      'Two-engine rule.',
      null,
      'active',
    ],
    [
      closedOn,
      'Q3 closed: EVM backup is Base.',
      'One cheap EVM; Base listed first in the source thread.',
      'Base or Arbitrum, TBD',
      'active',
    ],
    [
      closedOn,
      'Q2 closed: Phase-1 LP sleeve = Orca first, established USDC/USDT (or USDC-major). Pool ID at /deploy.',
      'Quality bar; Orca named for Solana stables.',
      null,
      'active',
    ],
    [
      closedOn,
      'Q1 closed: Phase-1 core = Kamino native USDC+USDT lending ($400 / $200). Market IDs at /deploy.',
      'Learn on boring markets; IDs go stale if parked.',
      null,
      'active',
    ],
  ]
  const insert = db.prepare(
    'INSERT INTO decisions(decided_on, decision, why, replaces, status) VALUES (?, ?, ?, ?, ?)',
  )
  for (const row of rows) {
    insert.run(...row)
  }
}

const open = db.query("SELECT count(*) AS n FROM questions WHERE status = 'open'").get() as {
  n: number
}
console.log(`adventure.sqlite ready at ${dbPath}`)
console.log(`open questions: ${open.n}`)
db.close()
