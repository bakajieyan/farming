---
name: risk-screen
description: Screen a DeFi farm, vault, LP, or leverage idea against this adventure's hard-no list. Use on /risk, before /deploy, when APY looks extreme, or when the user names a new protocol.
---

# Risk screen

Read [`../../rules/farming-hard-no.mdc`](../../rules/farming-hard-no.mdc) and [`../../../adventure/STATE.md`](../../../adventure/STATE.md).

## Verdicts

| Verdict   | Meaning                                                  |
| --------- | -------------------------------------------------------- |
| **FAIL**  | Do not add to the plan. Log it.                          |
| **WATCH** | Allowed only in Alpha, sized as if it can go to zero.    |
| **PASS**  | May appear in a `/deploy` draft for the matching sleeve. |

## Always FAIL

- Headline APY **≥ 1,000%** or "too good" on **tiny TVL**
- Unknown / unaudited / brand-new farm as **Core**
- Leverage loop, recursive borrow-supply, or borrow vs **volatile** collateral while Phase < 2 (and still default-FAIL until DECISIONS lifts this)
- Counting **reward tokens** as already-USDT income
- Bridging across many chains to chase **~2%** extra at $1k size
- Merging memecoin LP into DeFi treasury numbers
- Asking the agent to sign, seed, or "just send it"

## Split the APY

```
headline = base (fees/interest) + rewards (emissions)
```

A pool of `2% base + 18% rewards` is not `20% cash`. Haircut rewards unless the user explicitly accepts dump risk in **Alpha**.

## Quality questions (Morpho/Kamino/vaults)

TVL, collateral quality, LLTV, oracle, curator, utilization history, incentive expiry. A 15% vault with $500k TVL is not a 6% vault with hundreds of millions.

## Output

```
Risk screen — <name>
- Verdict: PASS | WATCH | FAIL
- Sleeve if any: Core | Yield | Alpha | none
- Base vs rewards:
- TVL / venue age:
- Hard-no tripped:
- Follow-up: /update (always) · /deploy (only if PASS and human wants a plan)
```

Then skill `update-log` unless the user only wanted a verbal check — still offer to log it.
