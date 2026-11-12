# Put your portfolio live on your Cloudflare domain

Lovable can't host your site on Cloudflare's own hosting. Instead, Lovable hosts the site and your Cloudflare domain points to it. Visitors still see your own domain, and your domain and its settings stay at Cloudflare. No code changes are needed.

## What I will do
1. Run a security check, then publish the portfolio on Lovable (it gets a free lovable.app address first).
2. Make sure the page titles and descriptions are right for sharing links.
3. Check your domain and open the "Connect domain" card in chat for it.

## What you will do (step by step)
1. Tell me your domain name (for example `maythinzarko.com`).
2. In the connect card, choose your Cloudflare domain. If asked, sign in to Cloudflare and allow access. Lovable adds the needed records for you.
3. If you'd rather add them yourself: in Cloudflare open your domain, go to **DNS → Records**, and add the records Lovable shows:
   - **A** record `@` → the IP address Lovable shows
   - **A** record `www` → the same IP address
   - **TXT** record `_lovable` → the `lovable_verify=...` value shown
   - **TXT** record `_lovable.www` → its own `lovable_verify=...` value
   - Set the A records to **DNS only** (grey cloud) to start with. If you want the orange cloud (Cloudflare proxy), tick **Uses Cloudflare or similar proxy** under **Advanced** when connecting.
4. Delete any old A, AAAA or CNAME records for `@` or `www` that point somewhere else.
5. Wait. It's usually minutes but can take up to 72 hours. Lovable sets up https on its own and the domain shows **Active**.

## Notes
- Custom domains need a paid Lovable plan.
- Your GitHub Pages setup keeps working; you don't need it for this.
