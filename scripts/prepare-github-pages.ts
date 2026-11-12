import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { referencedAssetPointers } from "./github-pages";

// GitHub does not provide Lovable's /__l5e asset gateway; ship the bytes with Pages.
const origin = "https://may-thinzar-ko-portfolio.lovable.app";
const publicDirectory = new URL("../dist/pages-public/", import.meta.url);
await mkdir(publicDirectory, { recursive: true });
await cp(new URL("../public/", import.meta.url), publicDirectory, { recursive: true });
const files = referencedAssetPointers();
await Promise.all(files.map(async (filename) => {
  const pointer = JSON.parse(await readFile(new URL(`../src/assets/certs/${filename}`, import.meta.url), "utf8")) as {
    url: string;
    content_type: string;
  };
  if (!pointer.url.startsWith("/__l5e/assets-v1/") || pointer.url.includes("..")) {
    throw new Error(`Invalid asset path: ${filename}`);
  }
  const response = await fetch(new URL(pointer.url, origin));
  if (!response.ok || !response.headers.get("content-type")?.includes(pointer.content_type)) {
    throw new Error(`Certificate download failed: ${filename} (${response.status})`);
  }
  const destination = new URL(`.${pointer.url}`, publicDirectory);
  await mkdir(new URL(".", destination), { recursive: true });
  await writeFile(destination, new Uint8Array(await response.arrayBuffer()));
}));
await writeFile(new URL(".nojekyll", publicDirectory), "");
console.log(`Prepared ${files.length} certificate images and PDFs for GitHub Pages.`);