import { describe, expect, it } from "vitest";
import { normalizeBasePath, referencedAssetPointers, staticPages } from "../../scripts/github-pages";
import { certificates } from "@/data/certificates";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

describe("GitHub Pages deployment", () => {
  it("matches certificate links under a repository subpath", () => {
    const router = createRouter({
      routeTree,
      basepath: "/portfolio/",
      context: { queryClient: new QueryClient() },
    });
    expect(router.buildLocation({ to: "/" }).href).toBe("/portfolio/");
    expect(router.buildLocation({ to: "/certificates" }).href).toBe("/portfolio/certificates");
    expect(router.buildLocation({ to: "/certificates/$id", params: { id: "java-basic-programming" } }).href)
      .toBe("/portfolio/certificates/java-basic-programming");
    // matchRoutes receives internal paths after the router strips the basepath.
    const detail = router.matchRoutes("/certificates/java-basic-programming").at(-1);
    expect(detail?.routeId).toBe("/certificates/$id");
    expect(detail?.params).toEqual({ id: "java-basic-programming" });
  });

  it("normalizes the repository subpath and the root-domain path", () => {
    expect(normalizeBasePath("/portfolio/")).toBe("/portfolio/");
    expect(normalizeBasePath("portfolio")).toBe("/portfolio/");
    expect(normalizeBasePath("/")).toBe("/");
    expect(normalizeBasePath("")).toBe("/");
  });

  it("exports the home, collection, and all 13 certificate pages", () => {
    const paths = staticPages().map((page) => page.path);
    expect(paths).toHaveLength(15);
    expect(paths).toContain("/");
    expect(paths).toContain("/certificates/");
    for (const certificate of certificates) {
      expect(paths).toContain(`/certificates/${certificate.id}`);
    }
  });

  it("ships both the image and PDF for all 13 documents", () => {
    const assets = referencedAssetPointers();
    expect(assets).toHaveLength(26);
    expect(assets.filter((name) => name.endsWith(".pdf.asset.json"))).toHaveLength(13);
    expect(assets.filter((name) => name.endsWith(".jpg.asset.json"))).toHaveLength(13);
  });
});