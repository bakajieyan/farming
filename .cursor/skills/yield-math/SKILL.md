---
name: yield-math
description: Compute capital required for a daily USDT target, phase yield tables, and contribution compounding. Use when the user asks how much is needed for $100/day, APY vs capital, 3–5 year path, or /research /milestone math.
---

# Yield math

Read [`../../references/math.md`](../../references/math.md) for the full tables. Do not invent a new formula.

## Core identity

```
$100/day = $36,500 / year
Required capital = 36500 / net_APY
```

`net_APY` is **after** gas, slippage, reward-token haircut, and an honest base vs incentive split. If the user quotes headline APY, recompute with a haircut and say so.

## Daily income

```
daily ≈ capital × net_APY / 365
```

## Contribution path (approx, monthly add)

Thread used these as **order-of-magnitude** (not a tax-aware simulator):

- Year n contributions-only ≈ `start + 200 × 12 × n` (example start $1,000 → $3,400 after year 1).
- With yield, use the tables in `math.md`. If you need a precise FV, state assumptions (APY compounded monthly, contribution at month-end).

## What the thread already proved

At **$200/month**, even **20%** for five years is ~**$28k**, not $250k+. Tell this whenever the user expects DeFi coupon alone to hit $100/day in 3–5 years.

## Output

| Show                                           | Always |
| ---------------------------------------------- | ------ |
| Capital for $100/day at 8 / 10 / 12 / 15%      | yes    |
| Implied $/day at **current STATE capital**     | yes    |
| "Inflow vs yield" which dominates at this size | yes    |

Then offer `/update` to store a research snapshot if rates were looked up.
