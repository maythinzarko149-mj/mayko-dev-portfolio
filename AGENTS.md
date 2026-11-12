<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- All visible copy is bilingual (en/th) via `src/lib/i18n.tsx` (`t()` for UI strings, `l()` for `{en, th}` data); never hardcode single-language text in components. Why: the language switch must cover every page.
- Certificate content lives in `src/data/certificates.ts`; images and PDFs are Lovable Assets pointers in `src/assets/certs/`. Why: one source for cards, detail pages and tests.
- GitHub Pages uses the opt-in GITHUB_PAGES static export and the main-branch Actions workflow; keep normal Lovable builds unchanged. Why: Pages serves static files, not the SSR server.
- Enumerate certificate URLs from the data source and copy referenced asset bytes during Pages preparation; use Vite BASE_URL for local assets and router navigation. Why: repository subpaths and downloads must work without Lovable's asset gateway.
