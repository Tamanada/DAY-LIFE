/* assets/lang.js
   PHASE 1 + PHASE 2 + PHASE 3
   Auto-detect browser language + manual selector
*/

const LANGS = ["en","fr","es","de","it","pt","ru","th","zh","ja","ko","ar"];

const translations = {
  en: {
    appName: "DAYLIFE",
    tagline: "Every day counts.",
    menuHome: "Home",
    menuDreams: "Dreams",
    menuReflections: "Reflections",
    menuProfile: "Profile",
    homeWelcome: "Welcome back to DAYLIFE",
    homeSub: "Every day counts. Let’s make yours shine.",
    howToEarn: "How to Earn Stars",
    reflectionsTitle: "Daily Reflections",
    reflectionsSub: "A space to learn, grow, and be grateful.",
    dreamsTitle: "Your Dreams",
    profileTitle: "Profile",
  },
  fr: {
    appName: "DAYLIFE",
    tagline: "Chaque jour compte.",
    menuHome: "Accueil",
    menuDreams: "Rêves",
    menuReflections: "Réflexions",
    menuProfile: "Profil",
    homeWelcome: "Bienvenue sur DAYLIFE",
    homeSub: "Chaque jour compte. Fais briller le tien.",
    howToEarn: "Comment gagner des étoiles",
    reflectionsTitle: "Réflexions quotidiennes",
    reflectionsSub: "Un espace pour apprendre, grandir et être reconnaissant.",
    dreamsTitle: "Tes rêves",
    profileTitle: "Profil",
  },
  es: {
    appName: "DAYLIFE",
    tagline: "Cada día cuenta.",
    menuHome: "Inicio",
    menuDreams: "Sueños",
    menuReflections: "Reflexiones",
    menuProfile: "Perfil",
    homeWelcome: "Bienvenido a DAYLIFE",
    homeSub: "Cada día cuenta. Haz que el tuyo brille.",
    howToEarn: "Cómo ganar estrellas",
    reflectionsTitle: "Reflexiones diarias",
    reflectionsSub: "Un espacio para aprender, crecer y agradecer.",
    dreamsTitle: "Tus sueños",
    profileTitle: "Perfil",
  },
  de: {
    appName: "DAYLIFE",
    tagline: "Jeder Tag zählt.",
    menuHome: "Start",
    menuDreams: "Träume",
    menuReflections: "Reflexionen",
    menuProfile: "Profil",
    homeWelcome: "Willkommen bei DAYLIFE",
    homeSub: "Jeder Tag zählt. Lass deinen glänzen.",
    howToEarn: "Sterne verdienen",
    reflectionsTitle: "Tägliche Reflexionen",
    reflectionsSub: "Ein Raum zum Lernen, Wachsen und Danken.",
    dreamsTitle: "Deine Träume",
    profileTitle: "Profil",
  },
  it: {
    appName: "DAYLIFE",
    tagline: "Ogni giorno conta.",
    menuHome: "Home",
    menuDreams: "Sogni",
    menuReflections: "Riflessioni",
    menuProfile: "Profilo",
    homeWelcome: "Bentornato su DAYLIFE",
    homeSub: "Ogni giorno conta. Fai brillare il tuo.",
    howToEarn: "Come guadagnare stelle",
    reflectionsTitle: "Riflessioni quotidiane",
    reflectionsSub: "Uno spazio per imparare, crescere e ringraziare.",
    dreamsTitle: "I tuoi sogni",
    profileTitle: "Profilo",
  },
  pt: {
    appName: "DAYLIFE",
    tagline: "Cada dia conta.",
    menuHome: "Início",
    menuDreams: "Sonhos",
    menuReflections: "Reflexões",
    menuProfile: "Perfil",
    homeWelcome: "Bem-vindo ao DAYLIFE",
    homeSub: "Cada dia conta. Faça o seu brilhar.",
    howToEarn: "Como ganhar estrelas",
    reflectionsTitle: "Reflexões diárias",
    reflectionsSub: "Um espaço para aprender, crescer e agradecer.",
    dreamsTitle: "Seus sonhos",
    profileTitle: "Perfil",
  },
  ru: {
    appName: "DAYLIFE",
    tagline: "Каждый день имеет значение.",
    menuHome: "Главная",
    menuDreams: "Мечты",
    menuReflections: "Размышления",
    menuProfile: "Профиль",
    homeWelcome: "Добро пожаловать в DAYLIFE",
    homeSub: "Каждый день важен. Пусть твой сияет.",
    howToEarn: "Как заработать звёзды",
    reflectionsTitle: "Ежедневные размышления",
    reflectionsSub: "Место для роста, благодарности и осознания.",
    dreamsTitle: "Твои мечты",
    profileTitle: "Профиль",
  },
  th: {
    appName: "DAYLIFE",
    tagline: "ทุกวันมีความหมาย",
    menuHome: "หน้าแรก",
    menuDreams: "ความฝัน",
    menuReflections: "การสะท้อนใจ",
    menuProfile: "โปรไฟล์",
    homeWelcome: "ยินดีต้อนรับสู่ DAYLIFE",
    homeSub: "ทุกวันมีค่า ทำให้วันของคุณเปล่งประกาย",
    howToEarn: "วิธีรับดาว",
    reflectionsTitle: "การสะท้อนใจประจำวัน",
    reflectionsSub: "พื้นที่สำหรับเรียนรู้ เติบโต และขอบคุณ",
    dreamsTitle: "ความฝันของคุณ",
    profileTitle: "โปรไฟล์",
  },
  zh: {
    appName: "DAYLIFE",
    tagline: "每一天都很重要。",
    menuHome: "主页",
    menuDreams: "梦想",
    menuReflections: "反思",
    menuProfile: "个人资料",
    homeWelcome: "欢迎来到 DAYLIFE",
    homeSub: "每一天都重要，让你的闪耀。",
    howToEarn: "如何赚取星星",
    reflectionsTitle: "每日反思",
    reflectionsSub: "学习、成长和感恩的空间。",
    dreamsTitle: "你的梦想",
    profileTitle: "个人资料",
  },
  ja: {
    appName: "DAYLIFE",
    tagline: "毎日が大切です。",
    menuHome: "ホーム",
    menuDreams: "夢",
    menuReflections: "振り返り",
    menuProfile: "プロフィール",
    homeWelcome: "DAYLIFEへようこそ",
    homeSub: "毎日が大切。あなたの日を輝かせよう。",
    howToEarn: "スターを獲得する方法",
    reflectionsTitle: "毎日の振り返り",
    reflectionsSub: "学び、成長し、感謝するための空間。",
    dreamsTitle: "あなたの夢",
    profileTitle: "プロフィール",
  },
  ko: {
    appName: "DAYLIFE",
    tagline: "모든 날이 중요합니다.",
    menuHome: "홈",
    menuDreams: "꿈",
    menuReflections: "성찰",
    menuProfile: "프로필",
    homeWelcome: "DAYLIFE에 오신 것을 환영합니다",
    homeSub: "모든 날이 중요합니다. 당신의 하루를 빛나게 하세요.",
    howToEarn: "별을 얻는 방법",
    reflectionsTitle: "하루의 성찰",
    reflectionsSub: "배우고 성장하며 감사하는 공간입니다.",
    dreamsTitle: "당신의 꿈",
    profileTitle: "프로필",
  },
  ar: {
    appName: "DAYLIFE",
    tagline: "كل يوم مهم.",
    menuHome: "الرئيسية",
    menuDreams: "الأحلام",
    menuReflections: "التأملات",
    menuProfile: "الملف الشخصي",
    homeWelcome: "مرحبًا بك في DAYLIFE",
    homeSub: "كل يوم مهم، اجعل يومك يتألق.",
    howToEarn: "كيفية كسب النجوم",
    reflectionsTitle: "تأملات يومية",
    reflectionsSub: "مساحة للتعلم والنمو والامتنان.",
    dreamsTitle: "أحلامك",
    profileTitle: "الملف الشخصي",
  },
};

// --- Detect & Apply language (Phase 1–3) ---
function detectLang() {
  const saved = localStorage.getItem("daylife_lang");
  if (saved && LANGS.includes(saved)) return saved;
  const browser = navigator.language?.slice(0,2).toLowerCase();
  return LANGS.includes(browser) ? browser : "en";
}

let currentLang = detectLang();

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = "en";
  currentLang = lang;
  localStorage.setItem("daylife_lang", lang);
  applyTranslations();
}

function t(key) {
  return translations[currentLang]?.[key] || translations["en"][key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  const selector = document.getElementById("langSelector");
  if (selector) selector.value = currentLang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
});
