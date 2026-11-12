# Connect your Cloudflare domain to GitHub Pages

Your portfolio already publishes to GitHub Pages automatically from the `main` branch. It already works on a root domain too: once a custom domain is set, it builds without the repository name in its links. So the code barely needs to change.

## What I will change
1. Add a short "Custom domain with Cloudflare" section to the README with the steps below.
2. Add a test that checks a custom domain (no repository subpath) gives correct page links like `/certificates/...`.

## What you will do (step by step)

### A. Make sure GitHub Pages works first
1. In GitHub, open your repository, then **Settings → Pages**.
2. Under **Source**, choose **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Wait for the green tick.

### B. Add DNS records in Cloudflare
Open your domain in Cloudflare, then **DNS → Records**, and add:
- For the main domain (`yourdomain.com`), four **A** records named `@`:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- For `www`: a **CNAME** record named `www` pointing to `yourgithubname.github.io`
- Set the cloud to **DNS only (grey)** for now. This lets GitHub issue the https certificate.
- Delete any old A, AAAA or CNAME records for `@` or `www` that point somewhere else.

### C. Tell GitHub about the domain
1. In **Settings → Pages → Custom domain**, type `yourdomain.com` and click **Save**.
2. Wait until the DNS check passes (minutes to a few hours), then tick **Enforce HTTPS**.
3. Run the workflow again (**Actions → Run workflow**) so links are rebuilt for the new address.

### D. Optional: turn on the Cloudflare orange cloud
After HTTPS works, you may switch the records to **Proxied (orange)**. Then in Cloudflare set **SSL/TLS → Overview** to **Full** (not Flexible), or the site will loop.

## Notes
- Certificate files are copied from your Lovable site during each GitHub build, so keep that site available.
- Want me to fill in your real domain and GitHub username? Just tell me them.
