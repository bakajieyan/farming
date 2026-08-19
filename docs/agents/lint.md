# Lint & format

Primary JS/TS lint is **Oxlint**. Primary format is **Prettier** (requested; Oxfmt is the v4 default elsewhere).

| Concern | Choice                                           |
| ------- | ------------------------------------------------ |
| Lint    | `oxlint` — `.oxlintrc.json`                      |
| Format  | `prettier` — `prettier.config.mjs`               |
| Hooks   | `lefthook` + `lint-staged`                       |
| Commits | `commitlint` + `@commitlint/config-conventional` |

## Commands

| Intent          | Command                                          |
| --------------- | ------------------------------------------------ |
| CI / local gate | `bun run check`                                  |
| Lint            | `bun run lint`                                   |
| Format write    | `bun run format`                                 |
| Format check    | `bun run format:check`                           |
| Staged          | `bunx lint-staged`                               |
| Scoped          | `oxlint --fix path` then `prettier --write path` |

## Policy

- Correctness **error**; suspicious / pedantic / style / perf **warn**.
- Size ceilings (warn): nesting **1**, cyclomatic **10**, fn lines **50**, file **300**.
- Pre-commit / CI: `oxlint --deny-warnings` then Prettier. Warnings fail the gate.
- Never whole-repo format as a drive-by. Order: lint fix → format → verify.
