---
description: Compare actual farming sleeves to phase targets and document a rebalance (no transactions).
---

# /rebalance — sleeves vs targets

**Pack:** `AGENTS.md` (pipeline **P9**)
**Skills:** `allocation`, `risk-screen` if a move adds a venue, `update-log` if accepted

## Job

1. Read STATE actual vs target %.
2. Propose moves only if **≥5pp** drift or a hard-no.
3. AskQuestion before treating as decided.
4. If yes → update-log kind `allocation` and rewrite STATE.

Docs only. No txs.
