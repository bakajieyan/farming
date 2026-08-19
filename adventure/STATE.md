# STATE — current snapshot

> Overwrite this file when capital, phase, or allocations change. Archive a copy under `snapshots/` on `/monthly` or `/milestone`.
> **Canonical structured copy:** `farming/db/adventure.sqlite` (Bun).

**As of:** 2026-08-19
**Phase:** 1 — Learn ($1k → $5k)
**Deployment:** **not started** (do not blindly deploy the $1,000)
**Primary chain (planned):** Solana
**Secondary chain (planned):** Base (unused until Solana is live)
**Open questions:** none

---

## Capital

| Bucket                                | Planned $               | Actual $   | Notes                                  |
| ------------------------------------- | ----------------------- | ---------- | -------------------------------------- |
| DeFi treasury (this adventure)        | 1,000                   | 0 deployed | Paper plan only                        |
| Monthly contribution                  | 200                     | —          | Stay at $200; revisit at $5k or year-1 |
| Memecoin / Pump.fun (separate engine) | optional, not committed | —          | **Do not mix into DeFi totals**        |

**DeFi treasury total (planned):** $1,000
**DeFi treasury total (on-chain):** $0
**Required capital for $100/day at 12% net:** ~$304,167 (round target **~$300k**)

---

## Planned $1,000 split (Solana — current recipe)

| Sleeve     | %   | $   | Role                                                                                                              |
| ---------- | --- | --- | ----------------------------------------------------------------------------------------------------------------- |
| Core       | 60% | 600 | Kamino **native** USDC/USDT lending ($400 USDC / $200 USDT). Not max-APY curated vaults. Market IDs at `/deploy`. |
| LP / yield | 25% | 250 | **Orca** first, established USDC/USDT (or USDC-major). Pool ID at `/deploy`.                                      |
| Alpha      | 15% | 150 | Experiments; assume this sleeve can lose a lot                                                                    |

### Planned monthly $200

| Sleeve     | $   |
| ---------- | --- |
| Core       | 120 |
| LP / yield | 50  |
| Alpha      | 30  |

---

## Targets

| Item                       | Value                                        |
| -------------------------- | -------------------------------------------- |
| Daily income goal          | $100 USDT                                    |
| Horizon                    | 3–5 years                                    |
| Portfolio net APY (mature) | 10–15% (design around this, not 30–50%)      |
| Phase 1 portfolio APY aim  | 5–10%                                        |
| Leverage                   | **off** until after Phase 1 at minimum       |
| Withdraw yield             | **No** — compound                            |
| Record-keeping             | **Bun SQLite canonical**; markdown chronicle |

---

## Positions

_None. Next: `/deploy` with live Kamino markets + Orca pool (TVL/volume/base vs rewards)._

| Protocol | Market | Sleeve | $   | Opened | Notes |
| -------- | ------ | ------ | --- | ------ | ----- |

---

## Watch

| Item                                | Status                                     |
| ----------------------------------- | ------------------------------------------ |
| Kamino native USDC + USDT markets   | pick at `/deploy` (Q1 closed as policy)    |
| Orca USDC/USDT (or USDC-major) pool | pick at `/deploy` (Q2 closed as policy)    |
| Base                                | backup only; no funds until Solana is live |
| Pendle                              | later — capital too small / maturity ops   |
| Contribution rate                   | locked at $200/mo until $5k or year-1      |

---

## Last 3 log pointers

1. 2026-08-19 — Closed Q1–Q6 (Kamino native, Orca, Base, meme optional, $200/mo, Bun SQLite)
2. 2026-08-19 — Pack created from ChatGPT share
3. 2026-08-19 — Strategy adopted: Solana-first, two engines, no leverage
