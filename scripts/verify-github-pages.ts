import { readFile, stat } from "node:fs/promises";
import { referencedAssetPointers, staticPages } from "./github-pages";

for (const { path } of staticPages()) {
  const filename = `dist/client/${path.replace(/^\/+|\/+$/g, "")}${path === "/" ? "" : "/"}index.html`;
  const html = await readFile(filename, "utf8");
  if (!html.includes("<title>") || !html.includes("May Thinzar Ko")) {
    throw new Error(`Missing portfolio HTML: ${filename}`);
  }
}
for (const filename of referencedAssetPointers()) {
  const pointer = JSON.parse(await readFile(`src/assets/certs/${filename}`, "utf8")) as { url: string };
  const file = await stat(`dist/client${pointer.url}`);
  if (file.size === 0) throw new Error(`Empty certificate file: ${filename}`);
}
await stat("dist/client/.nojekyll");
console.log("Verified every portfolio page, certificate image, and PDF in the static export.");