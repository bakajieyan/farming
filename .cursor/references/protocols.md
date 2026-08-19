# Protocols — how they fit this adventure

Roles from the source thread. **Home chain is Solana** (session 0c). EVM names remain for the backup venue and for understanding.

## Solana (primary)

| Venue                               | Role                                                                                                           |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Kamino**                          | Phase 1 core: **native** USDC/USDT lending ($400 / $200). Not max-APY curated vaults. Market IDs at `/deploy`. |
| **Jupiter**                         | Secondary lending / liquidity routing. Example APY in thread was a dated DeFiLlama print — re-research.        |
| **Orca**                            | Phase 1 LP sleeve (established USDC/USDT or USDC-major). Raydium only if Orca fails the quality bar.           |
| **Pendle** (when available / later) | PT to lock yield; YT is speculation. Wait for size.                                                            |

Other Solana lenders named in passing (MarginFi, Drift, Save) are **not** auto-approved. `/risk` each.

## EVM (secondary — **Base**)

| Venue              | Role                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Aave**           | Boring base lending. Will not carry $1k → $100/day. Protects the book from becoming a casino.                |
| **Morpho**         | Possibly better supply APY than Aave in the thread snapshot. Screen TVL, LLTV, oracle, curator, utilization. |
| **Curve / Convex** | LP farming. Split base vs CRV/other rewards. Tiny-TVL moon APYs are FAIL.                                    |
| **Pendle**         | PT vs YT as above. Compare implied APY vs Aave/Morpho vs underlying risk vs maturity.                        |
| **LST / ETH**      | Appeared in diversified EVM buckets; not Phase 1 Solana core.                                                |

## Quality bar (any vault)

```
TVL + collateral + LLTV + oracle + curator
+ borrower quality + utilization history + APY sustainability
```

## Stablecoin risks (never skip)

depeg + smart contract + oracle + bridge + governance + liquidity.
