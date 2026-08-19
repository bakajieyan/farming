---
description: Log a cash contribution to the DeFi farming treasury and split it per phase recipe.
---

# /contribute — add cash on paper

**Pack:** `AGENTS.md` (pipeline **P8**)
**Skills:** `allocation` then `update-log`

## Context

Amount, date, currency (default USDC/USDT). If missing → AskQuestion.

## Job

1. Read STATE phase. Split with **current monthly recipe** (Phase 1: $120 core / $50 LP / $30 alpha per $200; scale linearly for other amounts).
2. Increase planned and/or actual totals only as the user states (planned vs already sent).
3. **update-log** kind `contribution`. STATE capital fields must move.
4. Extra engine (meme) contributions: log in notes, **do not** add to DeFi treasury total.

This does not move chain funds.
