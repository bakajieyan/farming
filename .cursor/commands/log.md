---
description: Read or continue the farming adventure narrative log.
---

# /log — chronicle

**Pack:** `AGENTS.md`
**Skills:** `farming-adventure`, then `update-log` if adding a scene

## Job

- **Read (default):** summarize `adventure/LOG.md` (newest first) + point at SOURCE.md for session 0.
- **Continue:** if the user pastes a new conversation or story, prepend a LOG scene **and** run `/update` rules (CHANGELOG too).

If empty: read mode.
If they said "add" / "continue" / pasted a thread: write mode via update-log.
