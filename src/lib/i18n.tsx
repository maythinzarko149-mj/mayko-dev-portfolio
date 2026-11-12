import type React from "react";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "th";
export type Localized = { en: string; th: string };

const STORAGE_KEY = "portfolio-lang";

const dict = {
  navHome: { en: "Home", th: "หน้าแรก" },
  navCertificates: { en: "Certificates", th: "ใบรับรอง" },
  role: { en: "Prospective Computer Science student", th: "ผู้สมัครเรียนสาขาวิทยาการคอมพิวเตอร์" },
  location: { en: "Magway, Myanmar", th: "มะเกว ประเทศเมียนมา" },
  heroIntro: {
    en: "A collection of my academic credentials, technology certificates and volunteer work — prepared for university admission.",
    th: "รวบรวมวุฒิการศึกษา ใบประกาศนียบัตรด้านเทคโนโลยี และงานอาสาสมัครของฉัน เพื่อประกอบการสมัครเข้าศึกษาต่อระดับมหาวิทยาลัย",
  },
  viewAll: { en: "View all certificates", th: "ดูใบประกาศนียบัตรทั้งหมด" },
  atAGlance: { en: "At a glance", th: "ภาพรวม" },
  statGed: { en: "GED total score", th: "คะแนนรวม GED" },
  statCerts: { en: "Credentials", th: "เอกสารรับรอง" },
  statModules: { en: "AI modules completed", th: "บทเรียน AI ที่เรียนจบ" },
  statVolunteer: { en: "Leadership & volunteer awards", th: "รางวัลด้านภาวะผู้นำและจิตอาสา" },
  recommendations: { en: "Recommendations", th: "จดหมายแนะนำ" },
  readLetter: { en: "Read the letter", th: "อ่านจดหมาย" },
  author: { en: "Written by", th: "ผู้เขียน" },
  education: { en: "Education", th: "การศึกษา" },
  gedTitle: { en: "GED® High School Equivalency", th: "วุฒิเทียบเท่ามัธยมศึกษาตอนปลาย GED®" },
  gedBody: {
    en: "Awarded by the Office of the State Superintendent of Education, Washington, D.C. Recognised as equivalent to a U.S. high school diploma for university entrance.",
    th: "ได้รับจากสำนักงานผู้อำนวยการการศึกษาแห่งรัฐ กรุงวอชิงตัน ดี.ซี. ได้รับการยอมรับเทียบเท่าวุฒิมัธยมศึกษาตอนปลายของสหรัฐอเมริกาสำหรับการเข้าศึกษาต่อในมหาวิทยาลัย",
  },
  subject: { en: "Subject", th: "วิชา" },
  score: { en: "Score", th: "คะแนน" },
  status: { en: "Status", th: "สถานะ" },
  total: { en: "Total", th: "รวม" },
  pass: { en: "Pass", th: "ผ่าน" },
  passedOn: { en: "Passed", th: "สอบผ่านเมื่อ" },
  selected: { en: "Certificates", th: "ใบประกาศนียบัตร" },
  allCertsTitle: { en: "Certificates & credentials", th: "ใบประกาศนียบัตรและเอกสารรับรอง" },
  allCertsIntro: {
    en: "Every document is the original file. Open any item to see the details or download the PDF.",
    th: "เอกสารทุกฉบับเป็นไฟล์ต้นฉบับ เลือกรายการเพื่อดูรายละเอียดหรือดาวน์โหลดไฟล์ PDF",
  },
  all: { en: "All", th: "ทั้งหมด" },
  issuedBy: { en: "Issued by", th: "ออกโดย" },
  date: { en: "Date", th: "วันที่" },
  period: { en: "Period", th: "ระยะเวลา" },
  category: { en: "Category", th: "หมวดหมู่" },
  openPdf: { en: "Open PDF", th: "เปิดไฟล์ PDF" },
  download: { en: "Download", th: "ดาวน์โหลด" },
  downloadWord: { en: "Download Word file", th: "ดาวน์โหลดไฟล์ Word" },
  verify: { en: "Verify online", th: "ตรวจสอบออนไลน์" },
  back: { en: "All certificates", th: "ใบประกาศนียบัตรทั้งหมด" },
  modules: { en: "Completed modules", th: "บทเรียนที่เรียนจบ" },
  testResults: { en: "Test results", th: "ผลการสอบ" },
  notFoundTitle: { en: "Certificate not found", th: "ไม่พบใบประกาศนียบัตร" },
  footer: {
    en: "Original documents available on request.",
    th: "สามารถขอเอกสารฉบับจริงได้",
  },
} satisfies Record<string, Localized>;

export type DictKey = keyof typeof dict;

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: DictKey) => string;
  l: (value: Localized) => string;
};

// Keep one context object even when this module is reloaded during live editing;
// a fresh createContext() would orphan the already-mounted provider and blank the page.
const CONTEXT_KEY = "__portfolioI18nContext";
const globalScope = globalThis as typeof globalThis & {
  [CONTEXT_KEY]?: React.Context<I18nValue | null>;
};
const I18nContext: React.Context<I18nValue | null> =
  globalScope[CONTEXT_KEY] ?? (globalScope[CONTEXT_KEY] = createContext<I18nValue | null>(null));

const fallbackValue: I18nValue = {
  lang: "en",
  setLang: () => {},
  t: (key) => dict[key]?.en ?? String(key),
  l: (v) => v.en,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "th") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value: I18nValue = {
    lang,
    setLang,
    t: (key) => dict[key]?.[lang] ?? String(key),
    l: (v) => v[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  // Fall back to English rather than crashing the page if no provider is found.
  return useContext(I18nContext) ?? fallbackValue;
}

/** Formats an ISO date (YYYY-MM-DD) for the given language. Thai uses the Buddhist calendar. */
export function formatDate(iso: string, lang: Lang, opts: Intl.DateTimeFormatOptions = {}) {
  const locale = lang === "th" ? "th-TH" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    ...opts,
  }).format(new Date(`${iso}T00:00:00Z`));
}
