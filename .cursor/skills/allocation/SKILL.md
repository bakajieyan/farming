---
name: allocation
description: Map DeFi farming capital into Core / Yield / Alpha sleeves by phase. Use on /rebalance, /deploy, /contribute splits, phase changes, or when asked how to divide $1k or monthly $200.
---

# Allocation

Read [`../../references/phases.md`](../../references/phases.md) and [`../../../adventure/STATE.md`](../../../adventure/STATE.md).
Rule: [`../../rules/farming-allocation.mdc`](../../rules/farming-allocation.mdc).

## Current Phase 1 recipe (active decision)

| Sleeve                   | Start $1,000 | Monthly $200 |
| ------------------------ | ------------ | ------------ |
| Core (lending USDC/USDT) | 60% / $600   | $120         |
| LP / yield               | 25% / $250   | $50          |
| Alpha                    | 15% / $150   | $30          |

Superseded: session 0b 70/20/10 — do not revive unless DECISIONS says so.

## Later book (when capital ≥ ~$100k)

| Sleeve | %   | Role                                                        | Portfolio APY aim (sleeve) |
| ------ | --- | ----------------------------------------------------------- | -------------------------- |
| Core   | 60% | Quality lending + high-quality stables / LST as size allows | ~3–7%                      |
| Yield  | 30% | LP / structured (Pendle PT) / higher-quality vaults         | ~7–15%                     |
| Alpha  | 10% | New farms, incentives, airdrop theater                      | 15%+ and **lossy**         |

Mature **portfolio** target is **10–15%**, not every sleeve at 15%.

## Rebalance test

```
drift = actual% - target%
```

Propose moves only if a sleeve is off by **≥5 percentage points** or a hard-no is tripped. AskQuestion before logging as decided.

## Contribute test

Split new cash with the **monthly recipe for the current phase**, not "whatever APY is loudest this week."

## Two engines

Memecoin / Pump.fun capital is **not** a fourth DeFi sleeve. See [`../../references/two-engines.md`](../../references/two-engines.md).
