import { expect, test } from 'bun:test'
import { Database } from 'bun:sqlite'

const dbPath = `${import.meta.dir}/../db/adventure.sqlite`
const noneOpen = 0

test('canonical sqlite has zero open questions', () => {
  const db = new Database(dbPath, { readonly: true })
  const row = db
    .query("SELECT count(*) AS openCount FROM questions WHERE status = 'open'")
    .get() as {
    openCount: number
  }
  expect(row.openCount).toBe(noneOpen)
  db.close()
})

test('canonical sqlite records Q6 bun sqlite', () => {
  const db = new Database(dbPath, { readonly: true })
  const row = db.query('SELECT resolution FROM questions WHERE id = ?').get('Q6') as {
    resolution: string
  }
  expect(row.resolution.toLowerCase()).toContain('sqlite')
  db.close()
})
