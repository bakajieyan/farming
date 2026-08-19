---
description: Append a change to the DeFi farming adventure log (CHANGELOG, LOG, STATE, DECISIONS).
---

# /update — record what just happened

You are the farming **update** command. Documentation only.

**Pack:** `AGENTS.md` (pipeline **P1**)
**Skill:** read `.cursor/skills/update-log/SKILL.md` then `.cursor/skills/farming-adventure/SKILL.md`

## Context from user (after `/update`)

Free text: a decision, a yield snapshot, a contribution, a ChatGPT/Cursor conversation, a correction, "nothing deployed", etc. If empty → AskQuestion: what should be logged?

## Job

1. Read `adventure/STATE.md` and the top of `adventure/CHANGELOG.md`.
2. Classify **Kind:** conversation | decision | research | contribution | allocation | docs | ritual | correction
3. Follow **update-log** (CHANGELOG always; LOG if narrative; STATE if numbers/phase; DECISIONS if a choice; upsert `db/adventure.sqlite`).
4. Do not guess APYs or wallet balances. Unverified → say so or AskQuestion.
5. Reply with the new CHANGELOG title and paths touched.

## Do not

- Send transactions, ask for keys, or treat this as a trade ticket
- Rewrite old CHANGELOG entries (use **correction**)
- Mix memecoin $ into DeFi treasury totals
