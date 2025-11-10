// assets/lang.js
// 🌍 Centralized multilingual system for DAYLIFE
// ✅ Includes Telegram & browser auto-language detection

const DAYLIFE_LANGS = [
  "en", "fr", "es", "de", "it", "pt", "th", "my", "zh", "ru", "hi", "ar"
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
    },
    dreams: {
      title: "Your Dreams",
      subtitle: "Turn your days into dreams, and your dreams into days.",
      newDream: "New Dream",
    },
    profile: {
      anon: "Anonymity Mode",
      anonDesc: "Hide your name when sharing your dreams publicly.",
      inviteFriends: "Invite Friends",
      referralText: "Your personal referral link:",
      share: "Share Your Progress",
      scan: "Scan to join your journey",
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
    },
    dreams: {
      title: "Vos Rêves",
      subtitle: "Transformez vos jours en rêves, et vos rêves en jours.",
      newDream: "Nouveau Rêve",
    },
    profile: {
      anon: "Mode Anonyme",
      anonDesc: "Masquez votre nom lorsque vous partagez vos rêves publiquement.",
      inviteFriends: "Inviter des amis",
      referralText: "Votre lien de parrainage personnel :",
      share: "Partagez vos progrès",
      scan: "Scannez pour rejoindre votre voyage",
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
    },
    dreams: {
      title: "Tus Sueños",
      subtitle: "Convierte tus días en sueños, y tus sueños en días.",
      newDream: "Nuevo Sueño",
    },
    profile: {
      anon: "Modo Anónimo",
      anonDesc: "Oculta tu nombre al compartir tus sueños públicamente.",
      inviteFriends: "Invitar Amigos",
      referralText: "Tu enlace personal de invitación:",
      share: "Comparte tu progreso",
      scan: "Escanea para unirte a tu viaje",
    },
  },

  de: { langName: "Deutsch", nav: { home: "Startseite", dreams: "Träume", team: "Team", profile: "Profil" },
    home: { title: "Wie viele Tage bist du schon auf der Erde?", lived: "Gelebte Tage", remaining: "Verbleibende Tage", stars: "Gesamtsterne", newInspiration: "Neue Inspiration" } },

  it: { langName: "Italiano", nav: { home: "Home", dreams: "Sogni", team: "Squadra", profile: "Profilo" },
    home: { title: "Quanti giorni sei sulla Terra?", lived: "Giorni vissuti", remaining: "Giorni rimanenti", stars: "Totale Stelle", newInspiration: "Nuova Ispirazione" } },

  pt: { langName: "Português", nav: { home: "Início", dreams: "Sonhos", team: "Equipe", profile: "Perfil" },
    home: { title: "Quantos dias você está na Terra?", lived: "Dias vividos", remaining: "Dias restantes", stars: "Total de Estrelas", newInspiration: "Nova Inspiração" } },

  th: { langName: "ไทย", nav: { home: "หน้าแรก", dreams: "ความฝัน", team: "ทีม", profile: "โปรไฟล์" },
    home: { title: "คุณมาบนโลกนี้มากี่วันแล้ว?", lived: "วันที่มีชีวิตอยู่", remaining: "วันที่เหลืออยู่", stars: "จำนวนดาวทั้งหมด", newInspiration: "แรงบันดาลใจใหม่" } },

  my: { langName: "မြန်မာ", nav: { home: "ပင်မ", dreams: "အိပ်မက်များ", team: "အသင်း", profile: "ပရိုဖိုင်" },
    home: { title: "သင်ကမ္ဘာပေါ်သို့ရောက်လာပြီး ဘယ်နှစ်နေ့ဖြစ်ပြီလဲ?", lived: "နေခဲ့သောနေ့များ", remaining: "ကျန်နေသောနေ့များ", stars: "စုစုပေါင်းကြယ်များ", newInspiration: "အထူးသက်သေတမ်းအသစ်" } },

  zh: { langName: "中文", nav: { home: "首页", dreams: "梦想", team: "团队", profile: "资料" },
    home: { title: "你来到地球多少天了？", lived: "已度过的天数", remaining: "剩余天数", stars: "总星星数", newInspiration: "新的启发" } },

  ru: { langName: "Русский", nav: { home: "Главная", dreams: "Мечты", team: "Команда", profile: "Профиль" },
    home: { title: "Сколько дней ты уже на Земле?", lived: "Прожитые дни", remaining: "Оставшиеся дни", stars: "Всего звёзд", newInspiration: "Новое вдохновение" } },

  hi: { langName: "हिन्दी", nav: { home: "मुख्य पृष्ठ", dreams: "सपने", team: "टीम", profile: "प्रोफ़ाइल" },
    home: { title: "आप पृथ्वी पर कितने दिन पहले आए थे?", lived: "जीए गए दिन", remaining: "शेष दिन", stars: "कुल सितारे", newInspiration: "नई प्रेरणा" } },

  ar: { langName: "العربية", nav: { home: "الصفحة الرئيسية", dreams: "الأحلام", team: "الفريق", profile: "الملف الشخصي" },
    home: { title: "كم يوماً قضيت على الأرض؟", lived: "الأيام التي عشتها", remaining: "الأيام المتبقية", stars: "إجمالي النجوم", newInspiration: "إلهام جديد" } },
};

// 🧩 Core i18n engine
window.DaylifeI18n = {
  getLang() {
    return localStorage.getItem("daylifeLang");
  },

  detectLang() {
    // 🧠 1. Telegram integration
    try {
      if (window.Telegram && Telegram.WebApp && Telegram.WebApp.initDataUnsafe?.user?.language_code) {
        const tgLang = Telegram.WebApp.initDataUnsafe.user.language_code.slice(0, 2);
        if (DAYLIFE_LANGS.includes(tgLang)) return tgLang;
      }
    } catch (e) {
      console.warn("Telegram detection failed", e);
    }

    // 🌐 2. Browser detection
    const browserLang = navigator.language.slice(0, 2);
    if (DAYLIFE_LANGS.includes(browserLang)) return browserLang;

    // 🏳️ 3. Default fallback
    return "en";
  },

  setLang(lang) {
    if (!DAYLIFE_LANGS.includes(lang)) lang = "en";
    localStorage.setItem("daylifeLang", lang);
    this.applyTranslations();
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

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.innerHTML = DAYLIFE_LANGS.map(
        (lng) =>
          `<option value="${lng}" ${
            lng === lang ? "selected" : ""
          }>${translations[lng]?.langName || lng}</option>`
      ).join("");
      langSelect.addEventListener("change", (e) => this.setLang(e.target.value));
    }
  },
};

// 🪄 Initialize automatically on page load
document.addEventListener("DOMContentLoaded", () => {
  DaylifeI18n.applyTranslations();
});
