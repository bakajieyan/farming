# Source — original conversation

This adventure started as a ChatGPT thread, then was distilled into this pack on **2026-08-19**.

- Share: [https://chatgpt.com/share/6a8564f6-7be0-83ec-9518-eba489ea65e4](https://chatgpt.com/share/6a8564f6-7be0-83ec-9518-eba489ea65e4)
- Title on share page: **DEXE Staking Earnings Calculation**
- Distilled into: `farming/` (this folder)

ChatGPT can be wrong. Rates in the thread are **snapshots from that conversation**, not live quotes. Re-check with `/research` before any plan that depends on APY.

---

## What the human asked

1. How to farm on decentralized venues (Aave, Curve, staking, lending, etc.), and **how much capital is needed for $100 USDT/day**.
2. Yes — build a concrete **$1k → $10k → $100k** farming plan (Aave, Curve, Morpho, Pendle, liquid staking).
3. Constraints: **Solana or cheap-gas chains**, prefer **USDT and USDC**, goal **$100 USDT/day in 3–5 years**.

## Constraints carried forward

| Item             | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| Starting capital | ~$1,000                                                                             |
| Monthly add      | ~$200                                                                               |
| Income target    | $100 USDT/day (= $36,500/year)                                                      |
| Horizon          | 3–5 years                                                                           |
| Venue preference | Solana primary; one cheap EVM (Base/Arbitrum) secondary                             |
| Assets           | USDC + USDT (split issuers; USDC larger in core)                                    |
| Other context    | ~$1,000 also mentioned for a Pump.fun memecoin LP — **must stay a separate engine** |

## Thread structure (three turns)

| Turn | Human                                    | Assistant direction                                                                                                                                                       |
| ---- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Farm Aave/Curve/etc. for $100/day        | Yield-engineering math; Aave boring-base; Curve caveats; looping danger; risk buckets; $1k is too small to extract income                                                 |
| 2    | "yes" (build the plan)                   | Capital-growth system; phase ladder; Pendle PT vs YT; Morpho quality checks; 60/30/10 portfolios; monthly 8-step ritual; do not blindly deploy today                      |
| 3    | Solana / cheap gas, USDT+USDC, 3–5 years | Solana primary (Kamino, Jupiter, Orca/Raydium); no leverage yet; contribution math shows $200/mo is the bottleneck; two-engine model; ~$300k @ 12% is the $100/day number |

## Snapshot rates quoted in the thread (historical, not live)

These numbers were used as a **reality check** in the conversation. They expire.

| Claim (as stated then)                                | Venue in thread          |
| ----------------------------------------------------- | ------------------------ |
| ~3.28% weighted stablecoin supply APY                 | DeFiLlama                |
| USDC ~4.20%, USDT ~2.99%                              | DeFiLlama                |
| Aave V3 ~2.76% avg across tracked markets             | DeFiLlama                |
| Morpho Blue ~3.72% avg supply                         | DeFiLlama                |
| Example Aave V3 USDT markets ~3.00% / Optimism ~3.10% | DeFiLlama                |
| Curve pool example 55,866% APY on ~$63k TVL           | DeFiLlama (anti-pattern) |
| Jupiter Lend USDC ~4.46% (May 2026 research cited)    | DeFiLlama                |
| Solana on-chain loans ~$2.1B (May 2026)               | Phemex (cited)           |
| Galaxy: DeFi lending stress / exploits Q1 2026        | Galaxy (cited)           |

## What this pack added (not in ChatGPT)

- Cursor **skills, rules, commands, pipelines** so the adventure can be continued in this repo.
- A **changelog / log / state / decisions** paper trail.
- Explicit **docs-only** rule (no keys, no txs from the agent).
