---
name: frontend-audit
description: "Trigger: auditar frontend, audit frontend, revisión técnica del sitio, chequeo jhamf-web. Corre checks de bundle/rutas-i18n/prerender/a11y/anti-patrones/npm audit específicos de este stack y genera reporte P0-P3."
license: Apache-2.0
metadata:
  author: "jlarcila"
  version: "1.0"
---

## Activation Contract

Load when the user asks to audit, review, or run a technical quality pass on the jhamf-group-landing frontend (Vite + React 19 + TypeScript + Tailwind + react-router + i18next, deployed to Azure Static Web Apps with static prerender).

## Hard Rules

- Diagnose and report only — never apply fixes unless the user explicitly asks after reviewing the report.
- Run `npm run build` and `npm audit` fresh every time; never reuse stale results from earlier in the conversation.
- Cite every finding with `file:line`.
- Any hardcoded API key/token/secret literal in `src/` is at minimum P1.
- Treat a route present in `src/App.tsx` but absent from `scripts/prerender.js` or `public/sitemap.xml` (or vice versa) as a real finding, not noise.

## Decision Gates

| Finding | Default severity |
|---|---|
| Hardcoded secret in `src/` | P0/P1 |
| Route in `App.tsx` missing from `prerender.js`/`sitemap.xml`, or a prerendered/sitemap route that no longer exists in `App.tsx` | P2 |
| Missing i18n key between `locales/es/*.json` and `locales/en/*.json` | P2 |
| Page chunk >150KB not behind `React.lazy` | P1 |
| `npm audit` critical/high | P0/P1 |
| `npm audit` moderate/low | P2/P3 |
| Form input/select without matching `<label htmlFor>`, image without `alt` | P1 |
| Leftover `console.log` in `src/` | P3 |

## Execution Steps

1. `npm run build` — capture Vite chunk-size warnings and per-route chunk sizes in `dist/assets`.
2. Read `src/App.tsx` — list every `<Route path>` and whether its element is a `lazy()` import.
3. Diff that route list against `scripts/prerender.js`'s `routes` array and every `<loc>` in `public/sitemap.xml`; flag orphans in both directions.
4. For each file in `src/i18n/locales/es/`, diff its keys against the matching file in `src/i18n/locales/en/`; flag keys missing on either side.
5. Grep `src/` for hardcoded secrets (`_KEY`, `_TOKEN`, `_ID` literals passed to SDK calls), `console.log`, and form inputs/selects/images missing `label`/`alt`.
6. Check `tailwind.config.js` custom colors (`obsidian`, `neon-cyan`, `azure`, `electric-glow`, etc.) for text/background pairs under ~4.5:1 contrast.
7. `npm audit` — summarize vulnerability counts by severity.
8. Score 0-4 each: Bundle/Perf, i18n & Routing Sync, Accessibility, Code Anti-Patterns, Dependencies.

## Output Contract

Return: a Health Score table (5 dimensions, `??/20` total) → findings grouped P0→P3, each with `file:line`, impact, and fix recommendation → a prioritized action list. Mirror the tone/format of `.claude/skills/audit/SKILL.md` but only report these project-specific checks, not its generic design/AI-slop dimensions.

## References

- `.claude/skills/audit/SKILL.md` — report format/tone this skill mirrors.
- `src/App.tsx`, `scripts/prerender.js`, `public/sitemap.xml` — routing sync source of truth.
- `src/i18n/locales/es/`, `src/i18n/locales/en/` — translation parity source of truth.
