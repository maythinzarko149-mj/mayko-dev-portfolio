import { Link } from "@tanstack/react-router";

import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const langs: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "th", label: "ไทย" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="font-display shrink-0 text-lg text-foreground sm:text-xl">
          May Thinzar Ko
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {t("navHome")}
          </Link>
          <Link
            to="/certificates"
            className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {t("navCertificates")}
          </Link>
          <div
            role="group"
            aria-label="Language"
            className="flex items-center rounded-full border border-border p-0.5"
          >
            {langs.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLang(l.id)}
                aria-pressed={lang === l.id}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs transition-colors",
                  lang === l.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span>© 2026 May Thinzar Ko</span>
        <span>{t("footer")}</span>
      </div>
    </footer>
  );
}
