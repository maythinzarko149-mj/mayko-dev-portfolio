import { GED_TOTAL, gedScores } from "@/data/certificates";
import { useI18n } from "@/lib/i18n";

export function ScoreTable() {
  const { t, l } = useI18n();
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border text-left">
          <th className="eyebrow pb-3 font-normal">{t("subject")}</th>
          <th className="eyebrow pb-3 text-right font-normal">{t("score")}</th>
          <th className="eyebrow pb-3 text-right font-normal">{t("status")}</th>
        </tr>
      </thead>
      <tbody>
        {gedScores.map((s) => (
          <tr key={s.subject.en} className="border-b border-border">
            <td className="py-3.5 text-foreground">{l(s.subject)}</td>
            <td className="py-3.5 text-right font-mono text-foreground">{s.score}</td>
            <td className="py-3.5 text-right text-muted-foreground">{t("pass")}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="pt-4 font-medium text-foreground">{t("total")}</td>
          <td className="pt-4 text-right font-mono font-medium text-ink">{GED_TOTAL}</td>
          <td className="pt-4 text-right font-medium text-ink">{t("pass")}</td>
        </tr>
      </tfoot>
    </table>
  );
}
