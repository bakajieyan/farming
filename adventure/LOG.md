# LOG — farming adventure chronicle

Narrative history. Newest sessions at the top. `/log` continues this file. `/update` may add a short scene here **and** a structured CHANGELOG row.

---

## 2026-08-19 — Six questions closed

The hanging list in DECISIONS is empty. Policy, not pool IDs:

- **Core:** Kamino native USDC+USDT lending, $400 / $200. Curated max-APY vaults are not the Phase-1 home. Market IDs wait for `/deploy`.
- **LP:** Orca first, established USDC/USDT (or USDC-major). Pool ID at `/deploy`.
- **EVM backup:** Base. No funds there until Solana is live.
- **Meme engine:** optional, not committed, never mixed into DeFi totals.
- **Inflow:** $200/month stays. Do not budget a raise. Look again at $5k or year-1.
- **Books:** Bun SQLite (`farming/db/adventure.sqlite`) is canonical. The markdown files stay as the story you can read.

Still undeployed. Next operational doc is still `/deploy` with live venues.

---

## 2026-08-19 — The plan leaves chat and becomes a pack

The ChatGPT share was pulled into this repo as `farming/`. Nothing is on-chain yet. The job of this folder is to remember the strategy, the constraints, and every later change so the adventure has a paper trail.

**Still true at pack creation:**

- Goal is $100 USDT/day, not a lottery APY.
- Starting DeFi pot ~$1,000 with ~$200/month in.
- Solana first, USDC+USDT, no leverage in Phase 1.
- Memecoin / Pump.fun money is a **different engine**.
- Next operational doc (when the human is ready): `/deploy` with live pools and gas, not a blind send.

---

## 2026-08-19 — Session 0c. Solana, cheap gas, three to five years

**Human:** Prefer Solana or cheap-gas chains. Prefer USDT and USDC. Hit $100 USDT/day in 3–5 years.

**What changed vs the EVM-heavy draft:**

Solana became the **primary** ecosystem so small reallocations are not eaten by gas. The named stack:

- **Core:** Kamino (USDC/USDT lending, curated vaults).
- **Secondary lending:** Jupiter (example rate in the thread was a May 2026 DeFiLlama print — stale until `/research`).
- **LP:** Orca / Raydium, only when fees + incentives beat the extra risk.
- **Structured yield:** Pendle **later**, when size justifies maturities.
- **Secondary venue:** one cheap EVM (Base or Arbitrum), not five bridges for 2% extra.

**$1,000 Solana recipe (current):** 60% core / 25% LP / 15% alpha. Monthly $200: $120 / $50 / $30.

**The uncomfortable table:** at $200/month, even a fantasy 20% for five years lands around ~$28k of capital — not $300k. DeFi yield is the compounding sleeve. **Capital inflow** is the real engine. Raising contributions (e.g. toward $500/month) moves the needle more than squeezing 2% more APY. A separate memecoin/alpha sleeve can _maybe_ accelerate the base; it must never be assumed, and never commingled.

**Milestone that actually pays $100/day:** about **$300k × 12% ≈ $99/day**. Levels before that are learning, optimization, diversification, then treasury behavior.

**Leverage:** still off. At $1k, survival beats a 12x loop.

---

## 2026-08-19 — Session 0b. "Yes" — build the capital-growth system

**Human:** yes (to the concrete $1k → $10k → $100k plan).

**Reframe:** this is a **capital-growth system**, not an income product. Stablecoin lending in the thread's snapshot era was compressed (low-single-digit supply APYs on the big EVM names). Extra return has to come from LPs, incentives, structured yield, and work — each with extra risk.

**Preferred destination capital:** ~$250k–$365k at 10–15% net, not a forever 30–50% farm.

**Phases (EVM-flavored draft, later specialized to Solana):**

1. **$1k → $5k** — tiny, simple, learn mechanics. No leverage, no 500% farms.
2. **$5k → $25k** — start optimizing. Aim ~6–12% portfolio, not 50%.
3. **$25k → $100k** — yield stack + monthly rebalance. Goal is risk-adjusted APY × preservation × liquidity.
4. **$100k+** — small treasury. Protocol cap ~30–40%. Stables are not risk-free (depeg, contract, oracle, bridge, governance, liquidity).

**Pendle:** PT (lock in yield to maturity) over YT (speculate on future yield). A 12% PT is not automatically better than 5% Aave if the underlying is junk.

**Curve:** liquidity-farming sleeve. Always split **base APY** vs **reward APY**.

**Aave:** boring money. It will not carry $1k → $100/day by itself. That is a feature.

**Morpho:** maybe better yield than Aave in the snapshot, but pick vaults by TVL, collateral, LLTV, oracle, curator, utilization — not max APY.

**Three sleeves (mature recipe):** Core 60% (3–7%) / Yield 30% (7–15%) / Opportunity 10% (15%+, lossy).

**$1,000 version in this turn:** 70/20/10 and $140/$40/$20 monthly — **superseded** in 0c by 60/25/15 and $120/$50/$30 for Solana.

**Monthly ritual (kept):** collect yield → APY → TVL → protocol health → peg → incentives → compound → rebalance.

**Do not withdraw yield** at this size. Do **not** deploy the $1,000 blindly; write a live plan first.

---

## 2026-08-19 — Session 0a. How much for $100 a day?

**Human:** farm on DEX/lending (Aave, Curve, …). How much to make 100 USDT a day?

**Math that still runs the pack:**

$100/day = $3,000/month = **$36,500/year**.

| Net APY | Capital for $100/day |
| ------- | -------------------- |
| 3%      | ~$1,216,667          |
| 5%      | ~$730,000            |
| 8%      | ~$456,250            |
| 10%     | ~$365,000            |
| 15%     | ~$243,333            |
| 20%     | ~$182,500            |
| 50%     | ~$73,000             |
| 100%    | ~$36,500             |

Anyone selling "$10k → $100/day safely" is selling a fairy tale.

**Aave:** deposit stables, earn utilization-driven interest. Snapshot ~3% → ~$8/day on $100k → you need ~$1.22M for $100/day. Boring on purpose.

**Curve:** fees + CRV + boosts. Screenshot APYs in the tens of thousands on tiny TVL are **not** a business plan.

**Looping:** leverage the lend. Profit is spread minus fees minus liquidation minus rate risk — **not** APY × leverage. Forbidden for first capital.

**Risk buckets (example $500k at 8% ≈ $110/day):** 50% quality lending / 20% stable LP / 15% LST / 10% higher-yield / 5% experimental.

**Given ~$1,000 and ~$200/month:** first job is **build capital + learn + compound**, not extract income. At 5%, $1,000 is ~$0.14/day.

**Roadmap sketched:** $1k learn → $5k → $10k → $25k ($3–$8/day) → $50k → $100k ($15–$30/day) → $250k+ ($30–$100+/day).

**Two engines (kept):** DeFi = preservation + 3–10% (later 8–15%). Meme = asymmetric, optional, separate. Reinvest winners into the treasury. Never assume the meme works.

**Hard nos (kept):** 1,000%+ APY, tiny Curve pools, unknown protocols, leverage loops, volatile collateral borrows, unaudited contracts, brand-new farms, counting reward tokens as USDT, chasing APY every few hours.
