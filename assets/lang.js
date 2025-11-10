// assets/lang.js
// 🌍 Centralized multilingual system for DAYLIFE with auto-reload + full translations

const DAYLIFE_LANGS = [
  "en","fr","es","de","it","pt","th","my","zh","ru","hi","ar"
];

const translations = {
  en: {
    langName: "English",
    nav: { home: "Home", dreams: "Dreams", team: "Team", profile: "Profile" },
    home: {
      title: "How many days did you arrive on Earth?",
      lived: "Days lived",
      remaining: "Days remaining",
      stars: "Total Stars",
      newInspiration: "New Inspiration",
      estimatedEnd: "Estimated end of your 30,000 days:",
    },
  },
  fr: {
    langName: "Français",
    nav: { home: "Accueil", dreams: "Rêves", team: "Équipe", profile: "Profil" },
    home: {
      title: "Combien de jours êtes-vous sur Terre ?",
      lived: "Jours vécus",
      remaining: "Jours restants",
      stars: "Total d’étoiles",
      newInspiration: "Nouvelle Inspiration",
      estimatedEnd: "Fin estimée de vos 30 000 jours :",
    },
  },
  es: {
    langName: "Español",
    nav: { home: "Inicio", dreams: "Sueños", team: "Equipo", profile: "Perfil" },
    home: {
      title: "¿Cuántos días llevas en la Tierra?",
      lived: "Días vividos",
      remaining: "Días restantes",
      stars: "Estrellas totales",
      newInspiration: "Nueva Inspiración",
      estimatedEnd: "Fin estimado de tus 30 000 días:",
    },
  },
  de: {
    langName: "Deutsch",
    nav: { home: "Startseite", dreams: "Träume", team: "Team", profile: "Profil" },
    home: {
      title: "Wie viele Tage bist du schon auf der Erde?",
      lived: "Gelebte Tage",
      remaining: "Verbleibende Tage",
      stars: "Gesamtsterne",
      newInspiration: "Neue Inspiration",
      estimatedEnd: "Voraussichtliches Ende deiner 30 000 Tage:",
    },
  },
  it: {
    langName: "Italiano",
    nav: { home: "Home", dreams: "Sogni", team: "Squadra", profile: "Profilo" },
    home: {
      title: "Quanti giorni sei sulla Terra?",
      lived: "Giorni vissuti",
      remaining: "Giorni rimanenti",
      stars: "Totale Stelle",
      newInspiration: "Nuova Ispirazione",
      estimatedEnd: "Fine stimata dei tuoi 30 000 giorni:",
    },
  },
  pt: {
    langName: "Português",
    nav: { home: "Início", dreams: "Sonhos", team: "Equipe", profile: "Perfil" },
    home: {
      title: "Quantos dias você está na Terra?",
      lived: "Dias vividos",
      remaining: "Dias restantes",
      stars: "Total de Estrelas",
      newInspiration: "Nova Inspiração",
      estimatedEnd: "Fim estimado dos seus 30 000 dias:",
    },
  },
  th: {
    langName: "ไทย",
    nav: { home: "หน้าแรก", dreams: "ความฝัน", team: "ทีม", profile: "โปรไฟล์" },
    home: {
      title: "คุณมาบนโลกนี้มากี่วันแล้ว?",
      lived: "วันที่มีชีวิตอยู่",
      remaining: "วันที่เหลืออยู่",
      stars: "จำนวนดาวทั้งหมด",
      newInspiration: "แรงบันดาลใจใหม่",
      estimatedEnd: "สิ้นสุดโดยประมาณของ 30,000 วันของคุณ:",
    },
  },
  my: {
    langName: "မြန်မာ",
    nav: { home: "ပင်မ", dreams: "အိပ်မက်များ", team: "အသင်း", profile: "ပရိုဖိုင်" },
    home: {
      title: "သင်ကမ္ဘာပေါ်သို့ရောက်လာပြီး ဘယ်နှစ်နေ့ဖြစ်ပြီလဲ?",
      lived: "နေခဲ့သောနေ့များ",
      remaining: "ကျန်နေသောနေ့များ",
      stars: "စုစုပေါင်းကြယ်များ",
      newInspiration: "အထူးသက်သေတမ်းအသစ်",
      estimatedEnd: "သင်၏ 30,000 ရက်၏ ခန့်မှန်းအဆုံး:",
    },
  },
  zh: {
    langName: "中文",
    nav: { home: "首页", dreams: "梦想", team: "团队", profile: "资料" },
    home: {
      title: "你来到地球多少天了？",
      lived: "已度过的天数",
      remaining: "剩余天数",
      stars: "总星星数",
      newInspiration: "新的启发",
      estimatedEnd: "您 30,000 天的预计结束时间：",
    },
  },
  ru: {
    langName: "Русский",
    nav: { home: "Главная", dreams: "Мечты", team: "Команда", profile: "Профиль" },
    home: {
      title: "Сколько дней ты уже на Земле?",
      lived: "Прожитые дни",
      remaining: "Оставшиеся дни",
      stars: "Всего звёзд",
      newInspiration: "Новое вдохновение",
      estimatedEnd: "Ожидаемый конец твоих 30 000 дней:",
    },
  },
  hi: {
    langName: "हिन्दी",
    nav: { home: "मुख्य पृष्ठ", dreams: "सपने", team: "टीम", profile: "प्रोफ़ाइल" },
    home: {
      title: "आप पृथ्वी पर कितने दिन पहले आए थे?",
      lived: "जीए गए दिन",
      remaining: "शेष दिन",
      stars: "कुल सितारे",
      newInspiration: "नई प्रेरणा",
      estimatedEnd: "आपके 30,000 दिनों का अनुमानित अंत:",
    },
  },
  ar: {
    langName: "العربية",
    nav: { home: "الرئيسية", dreams: "الأحلام", team: "الفريق", profile: "الملف الشخصي" },
    home: {
      title: "كم يوماً قضيت على الأرض؟",
      lived: "الأيام التي عشتها",
      remaining: "الأيام المتبقية",
      stars: "إجمالي النجوم",
      newInspiration: "إلهام جديد",
      estimatedEnd: "النهاية المتوقعة لـ 30,000 يومك:",
    },
  },
};

// 🌐 Core I18N Engine
window.DaylifeI18n = {
  getLang() { return localStorage.getItem("daylifeLang"); },
  detectLang() {
    try {
      if (window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code) {
        const tgLang = Telegram.WebApp.initDataUnsafe.user.language_code.slice(0, 2);
        if (DAYLIFE_LANGS.includes(tgLang)) return tgLang;
      }
    } catch {}
    const browserLang = navigator.language.slice(0, 2);
    return DAYLIFE_LANGS.includes(browserLang) ? browserLang : "en";
  },
  setLang(lang) {
    if (!DAYLIFE_LANGS.includes(lang)) lang = "en";
    localStorage.setItem("daylifeLang", lang);
    location.reload(); // ✅ full page reload after language change
  },
  t(key) {
    const lang = this.getLang() || this.detectLang();
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) value = value?.[k];
    return value || key;
  },
  applyTranslations() {
    const lang = this.getLang() || this.detectLang();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const text = this.t(key);
      if (text) el.textContent = text;
    });
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.innerHTML = DAYLIFE_LANGS.map(lng =>
        `<option value="${lng}" ${lng === lang ? "selected" : ""}>${translations[lng]?.langName || lng}</option>`
      ).join("");
      langSelect.addEventListener("change", e => this.setLang(e.target.value));
    }
  },
};

document.addEventListener("DOMContentLoaded", () => DaylifeI18n.applyTranslations());
