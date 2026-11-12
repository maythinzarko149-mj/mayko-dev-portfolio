import { describe, expect, it } from "vitest";

import { certificates, GED_TOTAL, gedScores } from "@/data/certificates";
import { formatDate } from "@/lib/i18n";

describe("certificate data", () => {
  it("GED subject scores add up to the transcript total of 607", () => {
    expect(gedScores.reduce((sum, s) => sum + s.score, 0)).toBe(GED_TOTAL);
    expect(GED_TOTAL).toBe(607);
  });

  it("every certificate has English and Thai titles", () => {
    expect(certificates).toHaveLength(13);
    for (const c of certificates) {
      expect(c.title.en.length).toBeGreaterThan(0);
      expect(c.title.th.length).toBeGreaterThan(0);
    }
  });

  it("recommendation letters each have a quote and author in both languages", () => {
    const letters = certificates.filter((c) => c.category === "recommendation");
    expect(letters).toHaveLength(2);
    for (const c of letters) {
      expect(c.quote?.en && c.quote.th).toBeTruthy();
      expect(c.author?.en && c.author.th).toBeTruthy();
    }
  });

  it("Thai dates use the Buddhist calendar year", () => {
    expect(formatDate("2025-06-26", "th")).toContain("2568");
    expect(formatDate("2025-06-26", "en")).toBe("June 26, 2025");
  });
});
