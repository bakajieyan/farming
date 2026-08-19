---
name: monthly-ritual
description: Run the 8-step monthly DeFi farming checklist and record it. Use on /monthly, month-end, compound-and-rebalance, or "check the farms."
---

# Monthly ritual

Pipeline **P2**. Document each step even if the answer is "no positions yet."

Read [`../../../adventure/STATE.md`](../../../adventure/STATE.md) first.

## Checklist (copy into the LOG entry)

```
Monthly ritual YYYY-MM
- [ ] 1 Collect yield (amount, token, venue) — do not spend
- [ ] 2 APY — source, date, base vs rewards
- [ ] 3 TVL — pool/vault size vs last month
- [ ] 4 Protocol health — incidents, pauses, governance bombs
- [ ] 5 Stablecoin peg — USDC, USDT vs $1
- [ ] 6 Incentives — expiry, dilution, token you cannot count as USDT
- [ ] 7 Compound plan (docs) — where yield goes (core vs drifted sleeves)
- [ ] 8 Rebalance vs phase targets (skill allocation)
```

## Rules while running

- Phase 1: **no leverage**. Skill `risk-screen` if a step tempts a new farm.
- Yield → core/compound, not lifestyle, until STATE says otherwise.
- If a venue fails `/risk`, the ritual's job is **exit plan in docs**, not "wait and see" without a note.
- Live numbers need sources. If you cannot verify, write `unverified` and AskQuestion.

## Finish

Run skill `update-log`:

- CHANGELOG kind `ritual`
- Snapshot `adventure/snapshots/STATE-YYYY-MM-DD.md` if STATE changed or it is a real month-end
- LOG scene: the eight boxes, filled
