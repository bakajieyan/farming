# AGENTS — farming adventure pack

> **Audience:** AI assistants helping document this DeFi farming adventure.
> **This pack is documentation.** No transactions, no signing, no private keys, no exploit/PoC work.
> **Entry:** this file. **Slash commands:** `.cursor/commands/`. **Procedures:** `.cursor/skills/`. **Invariants:** `.cursor/rules/`.
> **Paths:** this directory is repo root ([bakajieyan/farming](https://github.com/bakajieyan/farming)). Nested in another workspace, prefix with `farming/`.

---

## Bootstrap (every farming session)

```
1. Read this file (AGENTS.md)
2. Canonical store: db/adventure.sqlite (Bun). Markdown is the readable chronicle.
3. Read adventure/STATE.md — current capital, phase, buckets
4. Skim adventure/CHANGELOG.md — last 5 entries
5. Before a skill → read .cursor/skills/<slug>/SKILL.md (never from memory)
6. Human money decisions → AskQuestion (never A/B/C prose)
7. Every material change → /update (SQLite + LOG + CHANGELOG + STATE if numbers moved)
```

Lost? → skill `farming-adventure`. Updating history? → `/update` → skill `update-log`.

---

## Layout

```
farming/
├── README.md
├── AGENTS.md                 ← this file (pipelines + router)
├── db/                       ← canonical Bun SQLite
│   ├── schema.sql
│   └── adventure.sqlite
├── scripts/db-init.ts        ← create/seed sqlite
├── adventure/                ← readable chronicle (kept in sync)
│   ├── SOURCE.md             ← original ChatGPT conversation
│   ├── LOG.md                ← narrative chronicle
│   ├── CHANGELOG.md          ← append-only change history
│   ├── STATE.md              ← current snapshot (one file, overwritten carefully)
│   ├── DECISIONS.md          ← dated decisions + why
│   └── snapshots/            ← dated copies of STATE after checkpoints
└── .cursor/
    ├── commands/             ← /update /status /monthly …
    ├── skills/               ← procedures
    ├── rules/                ← invariants (globs: farming/** + adventure/** …)
    ├── references/           ← math, phases, protocols
    └── agents/               ← chronicler / auditor
```

---

## Operating rules

| Rule                         | Detail                                                                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Docs only**                | Never execute on-chain actions. Never ask for seed phrases or keys.                                                    |
| **Canonical store**          | Bun SQLite `db/adventure.sqlite`. Markdown under `adventure/` is the readable chronicle — write **both** on `/update`. |
| **Log everything**           | Strategy shifts, contribution amounts, APY snapshots, protocol picks, "we decided not to" — all go through `/update`.  |
| **No parked questions**      | Prefer a decision (or "policy + live pick at /deploy") over an open-question row.                                      |
| **Cite sources**             | Live rates need a source + date. Unsourced APY is a rumor, not a plan.                                                 |
| **Separate engines**         | DeFi treasury vs memecoin/alpha. Never merge the two pots in STATE.                                                    |
| **No leverage in Phase 1**   | Survival > speed at $1k.                                                                                               |
| **Don't chase headline APY** | Split base APY vs reward APY. Tiny-TVL 50,000% is not a business.                                                      |
| **Yield compounds**          | At current capital, yield → reinvest, not spending.                                                                    |
| **AskQuestion**              | Allocation changes, chain switches, leverage, new protocols → human gate.                                              |

---

## Pipelines

Unsure which path? → `/status` then `farming-adventure`.

### P1 — Update (default)

Any new fact, decision, yield check, or conversation outcome.

```
/update
  → skill update-log
  → append adventure/LOG.md
  → append adventure/CHANGELOG.md
  → if numbers/phase/allocation moved → rewrite adventure/STATE.md
  → if a choice was made → append adventure/DECISIONS.md
  → upsert db/adventure.sqlite (Bun)
```

### P2 — Monthly ritual

```
/monthly
  → skill monthly-ritual
  → 1 collect yield (document, don't spend)
  → 2 check APY (source + date; split base vs rewards)
  → 3 check TVL
  → 4 check protocol health
  → 5 check stablecoin peg
  → 6 check incentives (expiring?)
  → 7 compound (plan; docs only)
  → 8 rebalance vs phase targets
  → /update
```

### P3 — Status / continue the story

```
/status  → read STATE.md + last CHANGELOG entries
/log     → read or continue LOG.md
```

### P4 — Research a yield

```
/research
  → skill yield-math (required capital / daily $)
  → skill solana-stack (venue map)
  → skill risk-screen (hard nos)
  → write sourced snapshot into LOG via /update
  ⊥ treat reward APY as USDT income
```

### P5 — Screen a farm

```
/risk
  → skill risk-screen
  → pass / fail / watch
  → /update with the verdict
```

### P6 — Deployment plan (docs)

```
/deploy
  → skill allocation (phase buckets)
  → skill solana-stack
  → skill risk-screen
  → write dated plan: chain → stable → protocol → pool → expected APY → gas → risk → exact $
  → /update
  ⊥ send transactions
```

### P7 — Phase / milestone

```
/milestone
  → skill yield-math + references/phases.md
  → compare STATE capital vs ladder
  → if crossing a level → AskQuestion then /update (phase change is a decision)
```

### P8 — Contribution

```
/contribute
  → log amount + date
  → split per current phase monthly recipe
  → update STATE.md totals
  → /update
```

### P9 — Rebalance

```
/rebalance
  → skill allocation
  → actual % vs target %
  → propose moves (docs)
  → AskQuestion before treating as decided
  → /update
```

---

## Decision router

```
Something happened / we talked / numbers changed  → /update
Where are we?                                     → /status
Tell the story / continue the chronicle           → /log
Month-end checklist                               → /monthly
I added cash                                      → /contribute
Is this farm allowed?                             → /risk
What APY / capital do I need?                     → /research
Ready to write a live plan?                       → /deploy
Did we hit a capital level?                       → /milestone
Buckets drifted                                   → /rebalance
Which skill?                                      → farming-adventure
```

---

## Skill index

| Skill             | Path                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------ |
| farming-adventure | [`.cursor/skills/farming-adventure/SKILL.md`](./.cursor/skills/farming-adventure/SKILL.md) |
| update-log        | [`.cursor/skills/update-log/SKILL.md`](./.cursor/skills/update-log/SKILL.md)               |
| yield-math        | [`.cursor/skills/yield-math/SKILL.md`](./.cursor/skills/yield-math/SKILL.md)               |
| monthly-ritual    | [`.cursor/skills/monthly-ritual/SKILL.md`](./.cursor/skills/monthly-ritual/SKILL.md)       |
| allocation        | [`.cursor/skills/allocation/SKILL.md`](./.cursor/skills/allocation/SKILL.md)               |
| risk-screen       | [`.cursor/skills/risk-screen/SKILL.md`](./.cursor/skills/risk-screen/SKILL.md)             |
| solana-stack      | [`.cursor/skills/solana-stack/SKILL.md`](./.cursor/skills/solana-stack/SKILL.md)           |

---

## Command index

| Command       | Path                                                                 |
| ------------- | -------------------------------------------------------------------- |
| `/update`     | [`.cursor/commands/update.md`](./.cursor/commands/update.md)         |
| `/status`     | [`.cursor/commands/status.md`](./.cursor/commands/status.md)         |
| `/log`        | [`.cursor/commands/log.md`](./.cursor/commands/log.md)               |
| `/monthly`    | [`.cursor/commands/monthly.md`](./.cursor/commands/monthly.md)       |
| `/contribute` | [`.cursor/commands/contribute.md`](./.cursor/commands/contribute.md) |
| `/rebalance`  | [`.cursor/commands/rebalance.md`](./.cursor/commands/rebalance.md)   |
| `/risk`       | [`.cursor/commands/risk.md`](./.cursor/commands/risk.md)             |
| `/research`   | [`.cursor/commands/research.md`](./.cursor/commands/research.md)     |
| `/deploy`     | [`.cursor/commands/deploy.md`](./.cursor/commands/deploy.md)         |
| `/milestone`  | [`.cursor/commands/milestone.md`](./.cursor/commands/milestone.md)   |

---

## Rule index

All farming rules: **`alwaysApply: false`**. Globs cover this repo (`adventure/**`, `.cursor/**`, …) and a nested `farming/**` checkout.

| Rule       | Path                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| docs-only  | [`.cursor/rules/farming-docs.mdc`](./.cursor/rules/farming-docs.mdc)             |
| invariants | [`.cursor/rules/farming-invariants.mdc`](./.cursor/rules/farming-invariants.mdc) |
| hard-no    | [`.cursor/rules/farming-hard-no.mdc`](./.cursor/rules/farming-hard-no.mdc)       |
| allocation | [`.cursor/rules/farming-allocation.mdc`](./.cursor/rules/farming-allocation.mdc) |

---

## Agent index

| Agent              | Path                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| farming-chronicler | [`.cursor/agents/farming-chronicler.md`](./.cursor/agents/farming-chronicler.md) |
| farming-auditor    | [`.cursor/agents/farming-auditor.md`](./.cursor/agents/farming-auditor.md)       |

---

## Related

| Doc                                                                        | Role                                   |
| -------------------------------------------------------------------------- | -------------------------------------- |
| [`adventure/SOURCE.md`](./adventure/SOURCE.md)                             | Original ChatGPT thread digest         |
| [`adventure/STATE.md`](./adventure/STATE.md)                               | Live snapshot                          |
| [`.cursor/references/math.md`](./.cursor/references/math.md)               | Capital / daily-$ tables               |
| [`.cursor/references/phases.md`](./.cursor/references/phases.md)           | $1k → $300k ladder                     |
| [`.cursor/references/protocols.md`](./.cursor/references/protocols.md)     | Aave, Curve, Morpho, Pendle, Kamino, … |
| [`.cursor/references/two-engines.md`](./.cursor/references/two-engines.md) | DeFi vs meme/alpha                     |
