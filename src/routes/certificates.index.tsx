import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CertificateCard } from "@/components/certificate-card";
import { categories, certificates, type CategoryId } from "@/data/certificates";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/certificates/")({
  head: () => ({
    meta: [
      { title: "Certificates — May Thinzar Ko" },
      {
        name: "description",
        content:
          "GED® diploma and transcript, Java and IT Foundation certificates, AI Ready ASEAN and volunteer certificates.",
      },
      { property: "og:title", content: "Certificates — May Thinzar Ko" },
      {
        property: "og:description",
        content:
          "GED® diploma and transcript, Java and IT Foundation certificates, AI Ready ASEAN and volunteer certificates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const { t, l } = useI18n();
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const list = filter === "all" ? certificates : certificates.filter((c) => c.category === filter);

  const filters: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: t("all") },
    ...categories.map((c) => ({ id: c.id, label: l(c.label) })),
  ];

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="fade-up py-16 sm:py-20">
        <p className="eyebrow">{certificates.length} · {t("navCertificates")}</p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-6xl">
          {t("allCertsTitle")}
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">{t("allCertsIntro")}</p>
      </section>

      <div className="rule flex flex-wrap gap-2 pt-6">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === f.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CertificateCard key={c.id} cert={c} />
        ))}
      </div>
    </div>
  );
}
