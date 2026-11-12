import type { Localized } from "@/lib/i18n";

import gedDiplomaImg from "@/assets/certs/ged-diploma.jpg.asset.json";
import gedDiplomaPdf from "@/assets/certs/ged-diploma.pdf.asset.json";
import gedTranscriptImg from "@/assets/certs/ged-transcript.jpg.asset.json";
import gedTranscriptPdf from "@/assets/certs/ged-transcript.pdf.asset.json";
import aiImg from "@/assets/certs/ai-ready-asean.jpg.asset.json";
import aiPdf from "@/assets/certs/ai-ready-asean.pdf.asset.json";
import itImg from "@/assets/certs/it-foundation.jpg.asset.json";
import itPdf from "@/assets/certs/it-foundation.pdf.asset.json";
import javaImg from "@/assets/certs/java-basic.jpg.asset.json";
import javaPdf from "@/assets/certs/java-basic.pdf.asset.json";
import taImg from "@/assets/certs/teaching-assistant.jpg.asset.json";
import taPdf from "@/assets/certs/teaching-assistant.pdf.asset.json";
import bookImg from "@/assets/certs/book-club-admin.jpg.asset.json";
import bookPdf from "@/assets/certs/book-club-admin.pdf.asset.json";
import bestSvImg from "@/assets/certs/best-senior-volunteer.jpg.asset.json";
import bestSvPdf from "@/assets/certs/best-senior-volunteer.pdf.asset.json";
import svImg from "@/assets/certs/senior-volunteer.jpg.asset.json";
import svPdf from "@/assets/certs/senior-volunteer.pdf.asset.json";
import eduLeaderImg from "@/assets/certs/education-leader.jpg.asset.json";
import eduLeaderPdf from "@/assets/certs/education-leader.pdf.asset.json";
import speakingImg from "@/assets/certs/speaking-club-coordinator.jpg.asset.json";
import speakingPdf from "@/assets/certs/speaking-club-coordinator.pdf.asset.json";
import letterIngImg from "@/assets/certs/letter-invincible-glory.jpg.asset.json";
import letterIngPdf from "@/assets/certs/letter-invincible-glory.pdf.asset.json";
import letterSsImg from "@/assets/certs/letter-saytanar-san.jpg.asset.json";
import letterSsPdf from "@/assets/certs/letter-saytanar-san.pdf.asset.json";

export type CategoryId = "education" | "technology" | "service" | "recommendation";

export const categories: { id: CategoryId; label: Localized }[] = [
  { id: "education", label: { en: "Education", th: "การศึกษา" } },
  { id: "technology", label: { en: "Technology", th: "เทคโนโลยี" } },
  { id: "service", label: { en: "Leadership & Service", th: "ภาวะผู้นำและจิตอาสา" } },
  { id: "recommendation", label: { en: "Recommendation Letters", th: "จดหมายแนะนำ" } },
];

export type Certificate = {
  id: string;
  category: CategoryId;
  title: Localized;
  issuer: Localized;
  /** Issue date, ISO YYYY-MM-DD */
  date: string;
  /** Optional service period */
  period?: { from: string; to?: string };
  summary: Localized;
  image: string;
  /** URL of the original file (PDF unless fileType says otherwise) */
  pdf: string;
  pdfName: string;
  fileType?: "pdf" | "docx";
  verifyUrl?: string;
  /** Short excerpt shown for recommendation letters */
  quote?: Localized;
  /** Letter writer, for recommendation letters */
  author?: Localized;
  landscape: boolean;
};

export const gedScores: { subject: Localized; score: number }[] = [
  { subject: { en: "Mathematical Reasoning", th: "การใช้เหตุผลทางคณิตศาสตร์" }, score: 157 },
  { subject: { en: "Science", th: "วิทยาศาสตร์" }, score: 156 },
  { subject: { en: "Reasoning Through Language Arts", th: "การใช้เหตุผลทางภาษา" }, score: 148 },
  { subject: { en: "Social Studies", th: "สังคมศึกษา" }, score: 146 },
];

export const GED_TOTAL = 607;
export const GED_PASS_DATE = "2025-06-26";

export const aiModules: Localized[] = [
  { en: "Introduction to AI", th: "ความรู้เบื้องต้นเกี่ยวกับ AI" },
  { en: "Variety of AI", th: "ประเภทของ AI" },
  { en: "AI for Everyday Life", th: "AI ในชีวิตประจำวัน" },
  { en: "Career Opportunity in the Era of AI", th: "โอกาสทางอาชีพในยุค AI" },
  { en: "Work Smarter not Harder – Maximize Productivity with AI", th: "ทำงานอย่างชาญฉลาด – เพิ่มประสิทธิภาพด้วย AI" },
  { en: "AI Ethics & Responsible AI Use", th: "จริยธรรม AI และการใช้ AI อย่างรับผิดชอบ" },
  { en: "Ethical AI Usage – Plagiarism & Copyright Issues", th: "การใช้ AI อย่างมีจริยธรรม – การลอกเลียนและลิขสิทธิ์" },
  { en: "Data Privacy & AI Safety", th: "ความเป็นส่วนตัวของข้อมูลและความปลอดภัยของ AI" },
  { en: "The Future of AI Development: AI for Social Good", th: "อนาคตของการพัฒนา AI: AI เพื่อสังคม" },
  { en: "Fundamental of Generative AI", th: "พื้นฐาน Generative AI" },
  { en: "AI for Content Creation", th: "AI สำหรับการสร้างสรรค์เนื้อหา" },
  { en: "AI for Social Media", th: "AI สำหรับโซเชียลมีเดีย" },
  { en: "AI Prompts 101 – How to Talk to AI", th: "AI Prompts 101 – วิธีสื่อสารกับ AI" },
  { en: "AI in Combating Fake News, Hoax & Misinformation", th: "AI กับการต่อต้านข่าวปลอมและข้อมูลเท็จ" },
  { en: "Fundamental to Develop AI – Learn to create a simple AI-Based Tool", th: "พื้นฐานการพัฒนา AI – สร้างเครื่องมือ AI อย่างง่าย" },
];

const pandora: Localized = { en: "Pandora Education Center", th: "Pandora Education Center" };
const ing: Localized = { en: "Invincible Glory Organization (ING)", th: "องค์กร Invincible Glory (ING)" };
const saytanar: Localized = {
  en: "Saytanar San English Language Centre, Minbu",
  th: "ศูนย์ภาษาอังกฤษ Saytanar San เมืองมินบู",
};

const certificateRecords: Certificate[] = [
  {
    id: "ged-diploma",
    category: "education",
    title: { en: "GED® High School Equivalency Diploma", th: "ประกาศนียบัตรเทียบเท่ามัธยมศึกษาตอนปลาย GED®" },
    issuer: {
      en: "Office of the State Superintendent of Education, Washington, D.C.",
      th: "สำนักงานผู้อำนวยการการศึกษาแห่งรัฐ กรุงวอชิงตัน ดี.ซี.",
    },
    date: "2025-06-26",
    summary: {
      en: "High School Equivalency Credential, recognised as equivalent to a U.S. high school (grade 12) diploma.",
      th: "วุฒิเทียบเท่ามัธยมศึกษาตอนปลาย ได้รับการยอมรับเทียบเท่าวุฒิมัธยมศึกษาปีที่ 6 (เกรด 12) ของสหรัฐอเมริกา",
    },
    image: gedDiplomaImg.url,
    pdf: gedDiplomaPdf.url,
    pdfName: "GED-Diploma-May-Thinzar-Ko.pdf",
    landscape: true,
  },
  {
    id: "ged-transcript",
    category: "education",
    title: { en: "Official GED® Transcript", th: "ใบแสดงผลการสอบ GED® ฉบับทางการ" },
    issuer: { en: "GED Testing Service", th: "GED Testing Service" },
    date: "2025-06-26",
    summary: {
      en: "Passed all four GED® subjects with a total score of 607.",
      th: "สอบผ่านทั้ง 4 วิชาของ GED® ด้วยคะแนนรวม 607",
    },
    image: gedTranscriptImg.url,
    pdf: gedTranscriptPdf.url,
    pdfName: "GED-Transcript-May-Thinzar-Ko.pdf",
    landscape: true,
  },
  {
    id: "java-basic-programming",
    category: "technology",
    title: { en: "Java Basic Programming", th: "การเขียนโปรแกรม Java ขั้นพื้นฐาน" },
    issuer: pandora,
    date: "2026-09-04",
    summary: {
      en: "Passed the Java Basic Programming exam with Distinction.",
      th: "สอบผ่านวิชาการเขียนโปรแกรม Java ขั้นพื้นฐานในระดับดีเยี่ยม (Distinction)",
    },
    image: javaImg.url,
    pdf: javaPdf.url,
    pdfName: "Java-Basic-Programming-May-Thinzar-Ko.pdf",
    verifyUrl: "https://test.easy2success.app/certificate/60c7196c-53dc-4102-baf3-2c19c00c04ff",
    landscape: true,
  },
  {
    id: "it-foundation",
    category: "technology",
    title: { en: "IT Foundation", th: "พื้นฐานเทคโนโลยีสารสนเทศ (IT Foundation)" },
    issuer: pandora,
    date: "2026-06-06",
    summary: {
      en: "Passed the IT Foundation exam with Distinction.",
      th: "สอบผ่านวิชาพื้นฐานเทคโนโลยีสารสนเทศในระดับดีเยี่ยม (Distinction)",
    },
    image: itImg.url,
    pdf: itPdf.url,
    pdfName: "IT-Foundation-May-Thinzar-Ko.pdf",
    verifyUrl: "https://test.easy2success.app/certificate/b6866535-78bd-44cc-a909-f1b50b190d3e",
    landscape: true,
  },
  {
    id: "ai-ready-asean",
    category: "technology",
    title: { en: "AI Ready ASEAN — Certificate of Completion", th: "AI Ready ASEAN — ประกาศนียบัตรสำเร็จหลักสูตร" },
    issuer: { en: "ASEAN Foundation, with support from Google.org", th: "มูลนิธิอาเซียน ร่วมกับ Google.org" },
    date: "2026-02-28",
    summary: {
      en: "Completed all 15 modules (12 hours) of the AI learning programme for youth on AIClassASEAN.org.",
      th: "เรียนจบครบทั้ง 15 บทเรียน (12 ชั่วโมง) ของหลักสูตร AI สำหรับเยาวชนบน AIClassASEAN.org",
    },
    image: aiImg.url,
    pdf: aiPdf.url,
    pdfName: "AI-Ready-ASEAN-May-Thinzar-Ko.pdf",
    landscape: true,
  },
  {
    id: "volunteer-teaching-assistant",
    category: "service",
    title: { en: "Volunteer Teaching Assistant", th: "ผู้ช่วยสอนอาสาสมัคร" },
    issuer: saytanar,
    date: "2025-06-06",
    period: { from: "2025-03-06", to: "2025-05-25" },
    summary: {
      en: "Supported three young-learner English classes; recognised as dedicated and enthusiastic.",
      th: "ช่วยสอนชั้นเรียนภาษาอังกฤษสำหรับเด็ก 3 ชั้นเรียน ได้รับการยกย่องว่ามีความทุ่มเทและกระตือรือร้น",
    },
    image: taImg.url,
    pdf: taPdf.url,
    pdfName: "Volunteer-Teaching-Assistant-May-Thinzar-Ko.pdf",
    landscape: false,
  },
  {
    id: "book-club-admin",
    category: "service",
    title: { en: "Book Club Volunteer Admin Team", th: "ทีมผู้ดูแลอาสาสมัครชมรมหนังสือ" },
    issuer: saytanar,
    date: "2026-09-04",
    period: { from: "2024-03-01" },
    summary: {
      en: "Member of the volunteer admin team since March 2024, recognised for communication and leadership.",
      th: "เป็นสมาชิกทีมผู้ดูแลอาสาสมัครตั้งแต่เดือนมีนาคม 2567 ได้รับการยกย่องด้านการสื่อสารและภาวะผู้นำ",
    },
    image: bookImg.url,
    pdf: bookPdf.url,
    pdfName: "Book-Club-Admin-May-Thinzar-Ko.pdf",
    landscape: false,
  },
  {
    id: "best-senior-volunteer",
    category: "service",
    title: { en: "Best Senior Volunteer Award", th: "รางวัลอาสาสมัครอาวุโสดีเด่น" },
    issuer: ing,
    date: "2025-02-25",
    summary: {
      en: "Recognised for outstanding dedication, leadership and contribution as a Senior Volunteer at ING.",
      th: "ได้รับการยกย่องในความทุ่มเท ภาวะผู้นำ และการมีส่วนร่วมอย่างโดดเด่นในฐานะอาสาสมัครอาวุโสของ ING",
    },
    image: bestSvImg.url,
    pdf: bestSvPdf.url,
    pdfName: "Best-Senior-Volunteer-Award-May-Thinzar-Ko.pdf",
    landscape: true,
  },
  {
    id: "education-department-leader",
    category: "service",
    title: { en: "Education Department Leader", th: "หัวหน้าฝ่ายการศึกษา" },
    issuer: ing,
    date: "2025-01-15",
    summary: {
      en: "Promoted to Leader of the Education Department for outstanding leadership and commitment.",
      th: "ได้รับการเลื่อนตำแหน่งเป็นหัวหน้าฝ่ายการศึกษาจากภาวะผู้นำและความมุ่งมั่นที่โดดเด่น",
    },
    image: eduLeaderImg.url,
    pdf: eduLeaderPdf.url,
    pdfName: "Education-Department-Leader-May-Thinzar-Ko.pdf",
    landscape: true,
  },
  {
    id: "senior-volunteer",
    category: "service",
    title: { en: "Senior Volunteer Award", th: "รางวัลอาสาสมัครอาวุโส" },
    issuer: ing,
    date: "2025-01-01",
    summary: {
      en: "Awarded for creative efforts and dedication as a Senior Volunteer in Invincible Glory.",
      th: "ได้รับรางวัลจากผลงานสร้างสรรค์และความทุ่มเทในฐานะอาสาสมัครอาวุโสของ Invincible Glory",
    },
    image: svImg.url,
    pdf: svPdf.url,
    pdfName: "Senior-Volunteer-Award-May-Thinzar-Ko.pdf",
    landscape: true,
  },
  {
    id: "speaking-club-coordinator",
    category: "service",
    title: { en: "Speaking Club Volunteer Coordinator", th: "ผู้ประสานงานอาสาสมัครชมรมการพูด" },
    issuer: saytanar,
    date: "2024-07-18",
    period: { from: "2024-06-18", to: "2024-07-18" },
    summary: {
      en: "Coordinated the Chat Day meetings of the Saytanar San Speaking Club; recognised for communication and leadership.",
      th: "ประสานงานการประชุม Chat Day ของชมรมการพูด Saytanar San ได้รับการยกย่องด้านการสื่อสารและภาวะผู้นำ",
    },
    image: speakingImg.url,
    pdf: speakingPdf.url,
    pdfName: "Speaking-Club-Coordinator-May-Thinzar-Ko.pdf",
    landscape: false,
  },
  {
    id: "recommendation-saytanar-san",
    category: "recommendation",
    title: { en: "Recommendation Letter — Saytanar San", th: "จดหมายแนะนำ — Saytanar San" },
    issuer: saytanar,
    author: { en: "Hay Marn Oo, Founder and Teacher", th: "Hay Marn Oo ผู้ก่อตั้งและครูผู้สอน" },
    date: "2026-02-16",
    summary: {
      en: "Recommendation for the Computer Science programme from my English teacher since 2019.",
      th: "จดหมายแนะนำสำหรับการสมัครเรียนสาขาวิทยาการคอมพิวเตอร์ จากครูสอนภาษาอังกฤษที่สอนฉันมาตั้งแต่ปี 2562",
    },
    quote: {
      en: "I believe her curiosity, creativity, and enthusiasm for technology will be valuable strengths as she pursues her studies in Computer Science.",
      th: "ฉันเชื่อว่าความใฝ่รู้ ความคิดสร้างสรรค์ และความกระตือรือร้นด้านเทคโนโลยีของเธอ จะเป็นจุดแข็งอันมีค่าในการศึกษาสาขาวิทยาการคอมพิวเตอร์",
    },
    image: letterSsImg.url,
    pdf: letterSsPdf.url,
    pdfName: "Recommendation-Letter-Saytanar-San-May-Thinzar-Ko.pdf",
    landscape: false,
  },
  {
    id: "recommendation-invincible-glory",
    category: "recommendation",
    title: { en: "Recommendation Letter — Invincible Glory", th: "จดหมายแนะนำ — Invincible Glory" },
    issuer: ing,
    author: { en: "Zara Moh, Founder of Invincible Glory", th: "Zara Moh ผู้ก่อตั้ง Invincible Glory" },
    date: "2025-06-10",
    summary: {
      en: "Recommendation from the founder of Invincible Glory, covering my volunteer work in the Student Service department.",
      th: "จดหมายแนะนำจากผู้ก่อตั้ง Invincible Glory เกี่ยวกับงานอาสาสมัครของฉันในฝ่ายบริการนักศึกษา",
    },
    quote: {
      en: "She not only excelled in her own responsibilities but also went above and beyond to support others, demonstrating true leadership and empathy.",
      th: "เธอไม่เพียงทำหน้าที่ของตนเองได้อย่างยอดเยี่ยม แต่ยังทุ่มเทช่วยเหลือผู้อื่นเสมอ แสดงให้เห็นถึงภาวะผู้นำและความเห็นอกเห็นใจอย่างแท้จริง",
    },
    image: letterIngImg.url,
    pdf: letterIngPdf.url,
    pdfName: "Recommendation-Letter-Invincible-Glory-May-Thinzar-Ko.pdf",
    landscape: false,
  },
];

// Vite's base includes the repository name on GitHub Pages; Lovable stays at /.
export const certificates: Certificate[] = certificateRecords.map((certificate) => ({
  ...certificate,
  image: `${import.meta.env.BASE_URL}${certificate.image.replace(/^\//, "")}`,
  pdf: `${import.meta.env.BASE_URL}${certificate.pdf.replace(/^\//, "")}`,
}));

export function getCertificate(id: string) {
  return certificates.find((c) => c.id === id);
}
