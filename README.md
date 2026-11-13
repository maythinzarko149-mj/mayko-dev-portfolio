# Thai English Credential Canvas

Can you build for me University Admission Portfolio Website for my Certificates and you can also Add Language (English and Thailand)

Be clear and minimalist

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://thai-english-credential-canvas.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f77f37f-6123-4f6e-ba12-c9cfb97e448a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

## Deploy to GitHub Pages from main

The portfolio includes an automatic GitHub Pages workflow. It exports the home page,
certificate collection, every certificate detail page, and all certificate images/PDFs.
English and Thai remain available. No server or API key is required on GitHub Pages.

1. Ensure this code is in your GitHub repository's **main** branch.
2. In that repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions** (not “Deploy from a branch”).
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, select **main**, and run it.
5. When it finishes, your Pages URL appears in **Settings → Pages** and the deployment result.

Every subsequent push to main deploys automatically. The workflow reads the Pages
address automatically, supporting both `username.github.io/repository/` and root-domain sites.
If Actions are disabled, enable them in **Settings → Actions → General** first.

Certificate files are copied from the existing published portfolio during deployment;
that site must remain accessible when the workflow runs. Once deployed, GitHub Pages
serves its own copies. Downloads are public, including personal details in the GED transcript.
Lovable preview and publishing continue to work normally.

For a local static export: `VITE_BASE_PATH=/repository/ bun run build:pages`, followed
by `bun run verify:pages`. Publish **dist/client**, never the source folder or server output.

### Custom domain (mayko.dev on Cloudflare)

1. In Cloudflare **DNS → Records**, keep four **A** records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
2. Set **www** as a **CNAME** to `maythinzarko149-mj.github.io`.
3. Set those records to **DNS only** (grey cloud) until GitHub issues HTTPS. Leave email (MX/TXT) records alone.
4. In GitHub **Settings → Pages → Custom domain**, enter `mayko.dev`, Save, click **Check again**, then tick **Enforce HTTPS**.
5. Re-run the workflow so pages build for the root address.
6. Optional: re-enable the orange cloud and set Cloudflare **SSL/TLS** to **Full**.

### Local development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
