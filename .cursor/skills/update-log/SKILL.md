---
name: update-log
description: Append farming adventure history (LOG, CHANGELOG, STATE, DECISIONS). Use on /update, after a farming decision, contribution, yield snapshot, strategy change, or new conversation about this DeFi plan.
---

# Update log

Sole writer of the adventure paper trail. Other skills propose facts; this skill lands them in files.

## Files

| File                     | Mutate how                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| `db/adventure.sqlite`    | **Canonical.** Upsert `changelog`, `questions`, `decisions`, `meta`. Init: `bun scripts/db-init.ts`    |
| `adventure/CHANGELOG.md` | **Always** prepend a new dated entry (readable copy)                                                   |
| `adventure/LOG.md`       | Prepend a short scene when the change is a story, not a one-liner                                      |
| `adventure/STATE.md`     | Rewrite if capital, phase, %, positions, or deployment status moved                                    |
| `adventure/DECISIONS.md` | Append if a choice was made (keep old rows). Do not leave a new open-question row if it can be closed. |
| `adventure/snapshots/`   | Copy STATE on `/monthly` or phase change: `STATE-YYYY-MM-DD.md`                                        |

## CHANGELOG entry (required)

Prepend after the format block, newest first:

```markdown
## YYYY-MM-DD — short title

- **Kind:** conversation | decision | research | contribution | allocation | docs | ritual | correction
- **Summary:**
- **Why:** (omit if N/A)
- **Files:**
```

If the user's date is unknown, use today's date from session context.

## STATE rewrite rules

- One snapshot file. Do not leave stale "planned vs actual" lying.
- If on-chain $ is still zero, say so.
- Never mix memecoin engine $ into DeFi treasury totals.
- After rewrite, point `Last 3 log pointers` at the newest CHANGELOG titles.

## Correction

Do not edit old CHANGELOG bodies. Add **Kind:** `correction` that cites the old title and the fix.

## Checklist

- [ ] CHANGELOG prepended
- [ ] LOG prepended if narrative
- [ ] STATE updated if numbers/phase moved
- [ ] DECISIONS updated if a choice was made
- [ ] SQLite upserted (`bun scripts/db-init.ts` after structural changes, or insert changelog row)
- [ ] No new open questions unless the human explicitly parked one
