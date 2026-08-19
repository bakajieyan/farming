# Pipelines (human view)

Same graphs as [`AGENTS.md`](./AGENTS.md). Commands are the entry points.

```
                    farming/
                        │
                        ▼
                   /status  ← where am I?
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
     /update        /monthly       /research
     (anything)     (8 steps)      (math+APY)
         │              │              │
         └──────────────┼──────────────┘
                        ▼
                 adventure log
            CHANGELOG · LOG · STATE
```

## P1 Update

```
event → /update → update-log
              ├─ CHANGELOG (always)
              ├─ LOG (if story)
              ├─ STATE (if $ / phase / %)
              └─ DECISIONS (if choice)
```

## P2 Monthly

```
/monthly → 8 boxes → /risk if new venue → /update (ritual) → snapshot STATE
```

1. Collect yield (don't spend)
2. APY (source, base vs rewards)
3. TVL
4. Protocol health
5. Stable peg
6. Incentives
7. Compound plan
8. Rebalance vs phase targets

## P3 Status / log

```
/status → read STATE + recent CHANGELOG
/log    → read or continue LOG
```

## P4 Research

```
/research → yield-math → solana-stack → risk-screen → /update if storing numbers
```

## P5 Risk

```
/risk → PASS | WATCH | FAIL → /update
```

## P6 Deploy (paper)

```
/deploy → chain → stables → Kamino → LP → APY → gas → risk → $ split
        → LOG + CHANGELOG
        ⊥ transactions
```

## P7 Milestone

```
/milestone → ladder L1–L5 → $/day vs $100 → AskQuestion to bump phase
```

## P8 Contribute

```
/contribute → split per phase recipe → STATE + CHANGELOG
```

## P9 Rebalance

```
/rebalance → ≥5pp drift? → AskQuestion → STATE
```

## Phase pipeline (capital, not a slash command)

```
$1k learn → $5k optimize → $25k diversify → $100k treasury → $300k @ ~12% ≈ $100/day
```
