# Contributing

Copyright **Julrey Rosales** ([@bakajieyan](https://github.com/bakajieyan)). See [`LICENSE`](./LICENSE) (MIT) and [`AUTHORS.md`](./AUTHORS.md).

This is a **documentation adventure**, not a trading bot. Do not commit secrets, keys, or seed phrases.

## Setup

```bash
bun install
bun run db:init
bun run check
```

Requires [Bun](https://bun.sh) **1.3.13** (`packageManager` in `package.json`).

## Scripts

| Command                | What                                   |
| ---------------------- | -------------------------------------- |
| `bun run lint`         | Oxlint                                 |
| `bun run format`       | Prettier write                         |
| `bun run format:check` | Prettier check (CI)                    |
| `bun run typecheck`    | `tsc --noEmit`                         |
| `bun run test`         | Bun tests                              |
| `bun run check`        | lint + format:check + typecheck + test |
| `bun run db:init`      | Seed `db/adventure.sqlite`             |

## Commits

[Conventional Commits](https://www.conventionalcommits.org/). `commitlint` runs on `commit-msg`.

Examples: `feat:`, `fix:`, `docs:`, `chore:`. Release Please on `main` turns these into tags/releases. Version starts at **0.0.0**; `bump-minor-pre-major` is on.

## Lint / format

- **Lint:** Oxlint (`.oxlintrc.json`) — same family as the v4 pack / typedbyhand repo.
- **Format:** Prettier (`prettier.config.mjs`).
- Pre-commit: Lefthook → lint-staged (staged files only). Never whole-repo format a huge unrelated tree.

Order: **lint --fix → prettier → verify**.

Recorded in [`docs/agents/lint.md`](./docs/agents/lint.md).

## Cursor pack

Commands live in [`.cursor/commands/`](./.cursor/commands/). Pack entry: [`AGENTS.md`](./AGENTS.md). Adventure log: [`adventure/`](./adventure/). Canonical structured store: `db/adventure.sqlite`.
