---
description: Write a dated live deployment plan for the farming adventure (documentation only, no transactions).
---

# /deploy — paper deployment plan

**Pack:** `AGENTS.md` (pipeline **P6**)
**Skills:** `allocation`, `solana-stack`, `risk-screen`, `update-log`

## Job

Fill this tree (from the source thread). Missing leaves → AskQuestion or open questions in DECISIONS — do not invent pool IDs.

```
$ (from STATE)
 ↓
Which chain?          (default Solana)
 ↓
Which stablecoin?     (USDC + USDT split)
 ↓
Which core venue?     (Kamino market/vault)
 ↓
Which LP?             (Orca/Raydium — TVL, volume, base vs rewards)
 ↓
Pendle PT?            (later / skip in Phase 1 unless decided)
 ↓
Expected APY          (source + date; haircut rewards)
 ↓
Gas cost              (why Solana)
 ↓
Risk score            (/risk each venue)
 ↓
Exact allocation      (Phase 1 60/25/15)
```

Write the plan into LOG + CHANGELOG (kind `docs` or `decision` if the human accepts). STATE `Deployment` stays **not started** until the human says funds actually moved — then `/update` actual $.

**Never** broadcast transactions or request keys.
