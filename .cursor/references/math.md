# Math reference

Formulas and tables distilled from the source thread. Rates in the thread are **historical**. Re-price with `/research`.

## Identities

```
daily_target = 100 USDT
annual_target = 100 × 365 = 36,500
required_capital = 36,500 / net_APY
daily_income ≈ capital × net_APY / 365
```

## Capital for $100/day

| Net APY | Capital    |
| ------- | ---------- |
| 3%      | $1,216,667 |
| 5%      | $730,000   |
| 8%      | $456,250   |
| 10%     | $365,000   |
| 12%     | $304,167   |
| 15%     | $243,333   |
| 20%     | $182,500   |
| 30%     | $121,667   |
| 50%     | $73,000    |
| 100%    | $36,500    |

**Preferred design point:** ~$250k–$365k at 10–15%. Round operational target: **~$300k at 12% ≈ $99/day**.

Prefer `$300k × 12%` over `$50k × 73%`.

## $/day by capital and APY (thread table)

| Capital  | 5%     | 10%     | 15%     | 20%     |
| -------- | ------ | ------- | ------- | ------- |
| $1,000   | $0.14  | $0.27   | $0.41   | $0.55   |
| $5,000   | $0.68  | $1.37   | $2.05   | $2.74   |
| $10,000  | $1.37  | $2.74   | $4.11   | $5.48   |
| $25,000  | $3.42  | $6.85   | $10.27  | $13.70  |
| $50,000  | $6.85  | $13.70  | $20.55  | $27.40  |
| $100,000 | $13.70 | $27.40  | $41.10  | $54.79  |
| $250,000 | $34.25 | $68.49  | $102.74 | $136.99 |
| $365,000 | $50.00 | $100.00 | $150.00 | $200.00 |

At $100k × 12% ≈ $32.88/day. At $250k × 12% ≈ $82/day.

## $1,000 + $200/month (thread, order-of-magnitude)

| Time    | Contributions only | ~10%     | ~15%     | ~20%     |
| ------- | ------------------ | -------- | -------- | -------- |
| 1 year  | $3,400             | ~$3,550  | ~$3,650  | ~$3,750  |
| 2 years | $5,800             | ~$6,500  | ~$6,900  | ~$7,300  |
| 3 years | $8,200             | ~$10,000 | ~$11,100 | ~$12,400 |
| 4 years | $10,600            | ~$13,900 | ~$16,200 | ~$18,900 |
| 5 years | $13,000            | ~$18,700 | ~$22,700 | ~$28,000 |

**Bottleneck:** inflow. $200/month + DeFi does not reach $250k in five years. $500/month + 15% for five years was described as neighborhood **~$45k+** — still not $100/day, but a real book.

## Aave-style example from thread

$100,000 × 3% / 365 ≈ **$8.22/day** → ~$1.22M for $100/day at 3%.
