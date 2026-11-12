import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink, ShieldCheck } from "lucide-react";

import { ScoreTable } from "@/components/score-table";
import { aiModules, categories, getCertificate } from "@/data/certificates";
import { formatDate, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/certificates/$id")({
  loader: ({ params }) => {
    const cert = getCertificate(params.id);
    if (!cert) throw notFound();
    return { id: cert.id, title: cert.title.en, summary: cert.summary.en };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — May Thinzar Ko` : "Certificate not found";
    const description = loaderData?.summary ?? "This certificate could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: CertNotFound,
  component: CertificateDetail,
});

function CertNotFound() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-display text-4xl text-foreground">{t("notFoundTitle")}</h1>
      <Link to="/certificates" className="mt-6 inline-block text-sm text-ink hover:underline">
        ← {t("back")}
      </Link>
    </div>
  );
}

function CertificateDetail() {
  const { id } = Route.useLoaderData();
  const cert = getCertificate(id)!;
  const { t, l, lang } = useI18n();
  const category = categories.find((c) => c.id === cert.category);

  const monthYear = (iso: string) => formatDate(iso, lang, { day: undefined });
  const periodText = cert.period
    ? cert.period.to
      ? `${formatDate(cert.period.from, lang)} – ${formatDate(cert.period.to, lang)}`
      : lang === "th"
        ? `ตั้งแต่ ${monthYear(cert.period.from)}`
        : `Since ${monthYear(cert.period.from)}`
    : null;

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="py-8">
        <Link
          to="/certificates"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> {t("back")}
        </Link>
      </div>

      <div className="fade-up grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex items-center justify-center rounded-md border border-border bg-secondary p-6 sm:p-10">
          <img
            src={cert.image}
            alt={l(cert.title)}
            className={
              cert.landscape
                ? "w-full shadow-md"
                : "max-h-[70vh] w-auto shadow-md"
            }
          />
        </div>

        <div>
          <p className="eyebrow">{category ? l(category.label) : ""}</p>
          <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
            {l(cert.title)}
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">{l(cert.summary)}</p>
          {cert.quote && (
            <blockquote className="font-display mt-6 border-l-2 border-ink pl-5 text-2xl leading-snug text-foreground">
              “{l(cert.quote)}”
            </blockquote>
          )}

          <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
            {cert.author && <Row label={t("author")} value={l(cert.author)} />}
            <Row label={t("issuedBy")} value={l(cert.issuer)} />
            <Row label={t("date")} value={formatDate(cert.date, lang)} />
            {periodText && <Row label={t("period")} value={periodText} />}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            {cert.fileType === "docx" ? (
              <a
                href={cert.pdf}
                download={cert.pdfName}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="size-4" /> {t("downloadWord")}
              </a>
            ) : (
              <>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="size-4" /> {t("openPdf")}
                </a>
                <a
                  href={cert.pdf}
                  download={cert.pdfName}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:border-foreground"
                >
                  <Download className="size-4" /> {t("download")}
                </a>
              </>
            )}
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-ink hover:underline"
              >
                <ShieldCheck className="size-4" /> {t("verify")}
              </a>
            )}
          </div>
        </div>
      </div>

      {cert.id === "ged-transcript" && (
        <section className="rule mt-16 pt-10">
          <p className="eyebrow mb-6">{t("testResults")}</p>
          <div className="max-w-2xl">
            <ScoreTable />
          </div>
        </section>
      )}

      {cert.id === "ai-ready-asean" && (
        <section className="rule mt-16 pt-10">
          <p className="eyebrow mb-6">
            {t("modules")} · {aiModules.length}
          </p>
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {aiModules.map((m, i) => (
              <li key={m.en} className="flex gap-4 border-b border-border py-3 text-sm">
                <span className="w-6 shrink-0 font-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground">{l(m)}</span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 py-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
