import { Link } from "@tanstack/react-router";

import { categories, type Certificate } from "@/data/certificates";
import { formatDate, useI18n } from "@/lib/i18n";

export function CertificateCard({ cert }: { cert: Certificate }) {
  const { l, lang } = useI18n();
  const category = categories.find((c) => c.id === cert.category);

  return (
    <Link
      to="/certificates/$id"
      params={{ id: cert.id }}
      className="group block"
    >
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-border bg-secondary p-4 transition-colors group-hover:border-ink">
        <img
          src={cert.image}
          alt={l(cert.title)}
          loading="lazy"
          className="max-h-full max-w-full object-contain shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <span className="eyebrow">{category ? l(category.label) : ""}</span>
        <span className="eyebrow">{formatDate(cert.date, lang, { month: "short", day: undefined })}</span>
      </div>
      <h3 className="mt-2 text-base font-medium leading-snug text-foreground group-hover:text-ink">
        {l(cert.title)}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{l(cert.issuer)}</p>
    </Link>
  );
}
