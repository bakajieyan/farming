---
description: Run the 8-step monthly DeFi farming ritual and record it in the adventure log.
---

# /monthly — month-end ritual

**Pack:** `AGENTS.md` (pipeline **P2**)
**Skill:** read `.cursor/skills/monthly-ritual/SKILL.md` then `update-log`

## Job

1. Read STATE. If no positions, still run all 8 steps as "n/a — not deployed" so the month is on paper.
2. Fill the checklist (yield, APY source, TVL, health, peg, incentives, compound plan, rebalance).
3. `risk-screen` any new venue that showed up.
4. Land via **update-log** (kind `ritual`) + snapshot STATE to `adventure/snapshots/STATE-YYYY-MM-DD.md` when anything in STATE changed or this is a real month-end.

Human must supply amounts if they exist. Do not scrape wallets or ask for keys.
