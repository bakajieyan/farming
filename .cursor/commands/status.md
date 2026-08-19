---
description: Show current farming adventure state (capital, phase, allocations).
---

# /status — where the adventure is

**Pack:** `AGENTS.md` (pipeline **P3**)
**Skill:** `.cursor/skills/farming-adventure/SKILL.md`

## Job

1. Read `adventure/STATE.md` (full).
2. Read the newest 5 entries in `adventure/CHANGELOG.md`.
3. Read `adventure/DECISIONS.md` (questions table — should be none open). Optionally `SELECT * FROM questions WHERE status = 'open'` on `db/adventure.sqlite`.
4. Summarize: phase, planned vs deployed $, sleeves, leverage flag, next command (`/deploy` if still undeployed, else `/monthly` or `/update`).
5. Do not invent on-chain balances.

No file writes unless the user then asks `/update`.
