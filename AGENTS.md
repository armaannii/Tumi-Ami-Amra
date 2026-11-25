<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — Next 16 dev server (Turbopack). Also regenerates the AGENTS.md block above and `next-env.d.ts`, so run it at least once after dependency changes.
- `npm run lint` — runs plain `eslint` (flat config in `eslint.config.mjs`), **not** `next lint`. Single file: `npx eslint <file>`.
- No test or typecheck script exists. Verify with `npx tsc --noEmit` then `npm run lint`; `next build` also typechecks. All three currently pass.

## Stack

- Next.js **16.4.6** App Router, single package. App code lives in `src/`: routes in `src/app/`, shadcn components in `src/components/ui/`. Path alias `@/*` → `./src/*`.
- Next 16 docs are bundled at `node_modules/next/dist/docs/` (`01-app/` covers App Router). Trust them over training data.
- `next.config.ts` enables flags that change runtime behavior: `cacheComponents: true`, `reactCompiler: true`, `partialPrefetching`, `experimental.agentFeedback: true`. CSS is compiled by Turbopack via the `@tailwindcss/turbopack` rule — do not add a separate PostCSS/Tailwind config.
- Tailwind **v4** (CSS-first): all configuration lives in `src/app/globals.css` (`@import "tailwindcss"`, `@plugin "daisyui"`). There is no `tailwind.config`.
- shadcn style is `base-nova` (`components.json`): UI primitives are `@base-ui/react`, **not Radix**. `cn` comes from the `cn` npm package — components import `import { cn } from "cn"` directly (`src/lib/utils.ts` re-exports it, but existing code bypasses the alias). Add components with `npx shadcn add <name>`.
- Layout/page components use Next 16 generated prop types (e.g. `LayoutProps<"/">`) instead of inline `{ children: React.ReactNode }`.

## Gotchas

- Keep the managed blocks between `<!-- BEGIN:nextjs-* -->` / `<!-- END:... -->` markers verbatim; `next dev` re-adds them if removed. Besides the rules block above, `experimental.agentFeedback: true` can add a `nextjs-agent-feedback` block.
- `.env*` is gitignored; no environment variables are required yet. No CI workflows exist.
