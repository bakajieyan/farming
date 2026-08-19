---
name: solana-stack
description: Map this adventure's Solana-first venue list (Kamino, Jupiter, Orca, Raydium, Pendle later) and the cheap-EVM backup. Use on /deploy, /research, chain choice, or when the user asks where to put USDC/USDT on Solana.
---

# Solana stack

Read [`../../references/protocols.md`](../../references/protocols.md) and [`../../../adventure/DECISIONS.md`](../../../adventure/DECISIONS.md).

## Home

**Solana is primary.** EVM backup is **Base** (unused until Solana is live).

Do not design a five-bridge tour. Gas and attention are part of net APY.

## Named venues (from the source thread)

| Role           | Venue                                                       | When                                    |
| -------------- | ----------------------------------------------------------- | --------------------------------------- |
| Core lending   | **Kamino** USDC/USDT (incl. curated vaults)                 | Phase 1 core                            |
| Secondary lend | **Jupiter**                                                 | After core is boring and healthy        |
| Stable LP      | **Orca** first (Raydium only if Orca fails the quality bar) | Yield sleeve; TVL + volume + fees first |
| Structured     | **Pendle** PT                                               | Later — maturities need size            |
| EVM backup     | **Base**                                                    | After Solana book exists                |

EVM names from earlier turns (Aave, Morpho, Curve/Convex) are **secondary-chain tools**, not the Phase 1 home, unless DECISIONS changes.

## Phase 1 core sketch (not a live order)

```
$600 core
  $400 USDC  → Kamino native lending (market ID at /deploy)
  $200 USDT  → Kamino native lending (market ID at /deploy)
$250 LP     → Orca established USDC/USDT or USDC-major (pool ID at /deploy)
$150 alpha  → at most three small experiments
```

## Live rates

This skill does **not** freeze APYs. For numbers: `/research` with source + date, then `/update`.

## Output

Venue map + sleeve. `/deploy` still needs **live** Kamino market IDs and Orca pool ID — those are execution inputs, not open strategy questions. No transaction instructions beyond "human sends from their wallet if they choose."
