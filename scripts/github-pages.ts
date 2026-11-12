import { readFileSync } from "node:fs";

export function normalizeBasePath(value = "/") {
  const path = value.replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}

export function certificateIds() {
  const source = readFileSync("src/data/certificates.ts", "utf8");
  return [...source.matchAll(/^    id: "([^"]+)",/gm)].flatMap((match) => match[1] ? [match[1]] : []);
}

export function staticPages() {
  return ["/", "/certificates/", ...certificateIds().map((id) => `/certificates/${id}`)]
    .map((path) => ({ path }));
}

export function referencedAssetPointers() {
  const source = readFileSync("src/data/certificates.ts", "utf8");
  return [...source.matchAll(/from "@\/assets\/certs\/([^"]+\.asset\.json)"/g)]
    .flatMap((match) => match[1] ? [match[1]] : []);
}