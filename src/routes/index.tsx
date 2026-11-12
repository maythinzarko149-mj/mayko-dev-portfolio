import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CertificateCard } from "@/components/certificate-card";
import { ScoreTable } from "@/components/score-table";
import { aiModules, certificates, GED_PASS_DATE, GED_TOTAL } from "@/data/certificates";
import { formatDate, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "May Thinzar Ko — University Admission Portfolio" },
      {
        name: "description",
        content:
          "GED® graduate with certificates in Java, IT Foundation and AI, plus volunteer teaching and leadership experience.",
      },
      { property: "og:title", content: "May Thinzar Ko — University Admission Portfolio" },
      {
        property: "og:description",
        content:
          "GED® graduate with certificates in Java, IT Foundation and AI, plus volunteer teaching and leadership experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, l, lang } = useI18n();
  const featured = certificates.filter((c) => c.category !== "education").slice(0, 3);
  const volunteerCount = certificates.filter((c) => c.category === "service").length;
  const letters = certificates.filter(
    (c) => c.category === "recommendation" && c.fileType !== "docx",
  );

  const stats = [
    { value: String(GED_TOTAL), label: t("statGed") },
    { value: String(certificates.length), label: t("statCerts") },
    { value: String(aiModules.length), label: t("statModules") },
    { value: String(volunteerCount), label: t("statVolunteer") },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Intro */}
      <section className="fade-up py-20 sm:py-28">
        <p className="eyebrow">
          {t("role")} · {t("location")}
        </p>
        <h1 className="font-display mt-6 text-6xl leading-[0.95] text-foreground sm:text-8xl">
          May Thinzar Ko
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
          {t("heroIntro")}
        </p>
        <Link
          to="/certificates"
          className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm text-foreground transition-colors hover:border-ink hover:text-ink"
        >
          {t("viewAll")} <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Stats */}
      <section className="rule py-10">
        <p className="eyebrow">{t("atAGlance")}</p>
        <dl className="mt-6 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl text-foreground">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Education */}
      <section className="rule grid gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">{t("education")}</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-foreground">
            {t("gedTitle")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("gedBody")}</p>
          <p className="mt-4 text-sm text-foreground">
            {t("passedOn")} {formatDate(GED_PASS_DATE, lang)}
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            <Link
              to="/certificates/$id"
              params={{ id: "ged-diploma" }}
              className="text-ink underline-offset-4 hover:underline"
            >
              {l({ en: "Diploma", th: "ประกาศนียบัตร" })} →
            </Link>
            <Link
              to="/certificates/$id"
              params={{ id: "ged-transcript" }}
              className="text-ink underline-offset-4 hover:underline"
            >
              {l({ en: "Transcript", th: "ใบแสดงผลการสอบ" })} →
            </Link>
          </div>
        </div>
        <ScoreTable />
      </section>

      {/* Recommendations */}
      <section className="rule py-16">
        <p className="eyebrow">{t("recommendations")}</p>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {letters.map((c) => (
            <figure key={c.id} className="flex flex-col">
              <blockquote className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                “{c.quote ? l(c.quote) : ""}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                {c.author ? l(c.author) : ""}
                <br />
                {l(c.issuer)}
              </figcaption>
              <Link
                to="/certificates/$id"
                params={{ id: c.id }}
                className="mt-4 text-sm text-ink underline-offset-4 hover:underline"
              >
                {t("readLetter")} →
              </Link>
            </figure>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="rule py-16">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow">{t("selected")}</p>
          <Link
            to="/certificates"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CertificateCard key={c.id} cert={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
