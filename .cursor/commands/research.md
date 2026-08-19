---
description: Refresh yield math and sourced rate snapshots for the farming adventure (not a trade).
---

# /research — rates and capital math

**Pack:** `AGENTS.md` (pipeline **P4**)
**Skills:** `yield-math`, `solana-stack`, `risk-screen`, then `update-log` if storing a snapshot

## Job

1. Restate required capital for $100/day at 8/10/12/15%.
2. Restate implied $/day at **current STATE capital**.
3. If looking up live APY/TVL: cite **source + date**. Haircut reward APY. Tiny-TVL moon yields → FAIL via risk-screen.
4. Compare any candidate to Kamino-core / LP / alpha sleeves.
5. Save a research CHANGELOG entry when you actually pulled numbers or the user asked to remember them.

Thread snapshot rates in SOURCE.md are **stale** until replaced.
