// assets/lang.js
// Gestion multilingue DAYLIFE (12 langues)

// Langues supportées
const DAYLIFE_LANGS = ["en", "fr", "es", "pt", "de", "it", "ar", "hi", "zh", "ja", "th", "my"];

// Dictionnaire des traductions
const translations = {
  en: {
    langName: "English",

    // Navigation
    "nav.home": "Home",
    "nav.dreams": "Dreams",
    "nav.team": "Team",
    "nav.profile": "Profile",

    // Home
    "home.heroTitle": "Welcome back to DAYLIFE",
    "home.heroSubtitle": "Every day counts. Let’s make yours shine.",
    "home.heroBody":
      "You have a limited number of days. Use them to build a life you are proud of – and enjoy every step of the way.",
    "home.stat.stars": "Stars earned",
    "home.stat.dreams": "Dreams in progress",
    "home.stat.reflections": "Reflections written",
    "home.life.label": "You are living day",
    "home.quote.label": "TODAY'S INSPIRATION",
    "home.quote.text": "You are your own miracle.",
    "home.quote.sub": "Turn your days into dreams, and your dreams into days.",
    "home.blankline": "Today is a blank page — write something that matters.",
    "home.howto.title": "How to Earn Stars",
    "home.howto.subtitle": "Every action counts towards your journey.",

    // Dreams
    "dreams.title": "Your Dreams",
    "dreams.subtitle": "Turn your days into dreams, and your dreams into days.",

    // Team
    "team.title": "Your Circle",
    "team.subtitle": "Friends who walk the journey with you.",

    // Profile
    "profile.title": "Profile",
    "profile.subtitle": "Your journey at a glance.",
    "profile.stats.stars": "Stars",
    "profile.stats.activeDreams": "Active dreams",
    "profile.stats.reflections": "Reflections",
    "profile.referral.title": "Share & Earn Stars",
    "profile.referral.subtitle": "Invite friends and earn +5 ⭐ for each one who joins.",
    "profile.settings.title": "Settings",
    "profile.settings.displayName": "Display name",
    "profile.settings.email": "Email",
    "profile.settings.birthdate": "Date of birth",
    "profile.settings.sex": "Sex",
    "profile.settings.country": "Country of birth",
    "profile.settings.lifeMethod": "Life calculation method",
    "profile.settings.lifeFixed": "30,000 days (default)",
    "profile.settings.lifeReal": "Real (based on my profile)",
    "profile.settings.theme": "Theme",
    "profile.settings.logout": "Log out",

    // Info page
    "info.title": "DAYLIFE Updates",
    "info.subtitle": "New features, challenges and news.",
    "info.section.todayUpdate": "Today’s update",
    "info.section.challenge": "Challenge of the month",
    "info.section.topDreamers": "Top dreamers",
    "info.section.news": "News & links",
  },

  fr: {
    langName: "Français",

    // Navigation
    "nav.home": "Accueil",
    "nav.dreams": "Rêves",
    "nav.team": "Équipe",
    "nav.profile": "Profil",

    // Home
    "home.heroTitle": "Bienvenue sur DAYLIFE",
    "home.heroSubtitle": "Chaque jour compte. Fais briller le tien.",
    "home.heroBody":
      "Tu as un nombre de jours limité. Utilise-les pour construire une vie dont tu es fier, et savoure chaque étape.",
    "home.stat.stars": "Étoiles gagnées",
    "home.stat.dreams": "Rêves en cours",
    "home.stat.reflections": "Réflexions écrites",
    "home.life.label": "Tu vis le jour",
    "home.quote.label": "INSPIRATION DU JOUR",
    "home.quote.text": "Tu es ton propre miracle.",
    "home.quote.sub": "Transforme tes jours en rêves, et tes rêves en jours.",
    "home.blankline": "Aujourd’hui est une page blanche — écris quelque chose qui compte.",
    "home.howto.title": "Comment gagner des étoiles",
    "home.howto.subtitle": "Chaque action compte dans ton voyage.",

    // Dreams
    "dreams.title": "Tes rêves",
    "dreams.subtitle": "Transforme tes jours en rêves, et tes rêves en jours.",

    // Team
    "team.title": "Ton cercle",
    "team.subtitle": "Les amis qui cheminent avec toi.",

    // Profile
    "profile.title": "Profil",
    "profile.subtitle": "Ton parcours en un coup d’œil.",
    "profile.stats.stars": "Étoiles",
    "profile.stats.activeDreams": "Rêves actifs",
    "profile.stats.reflections": "Réflexions",
    "profile.referral.title": "Partage & gagne des étoiles",
    "profile.referral.subtitle":
      "Invite des amis et gagne +5 ⭐ pour chaque ami qui rejoint.",
    "profile.settings.title": "Paramètres",
    "profile.settings.displayName": "Nom affiché",
    "profile.settings.email": "Email",
    "profile.settings.birthdate": "Date de naissance",
    "profile.settings.sex": "Sexe",
    "profile.settings.country": "Pays de naissance",
    "profile.settings.lifeMethod": "Méthode de calcul de vie",
    "profile.settings.lifeFixed": "30 000 jours (par défaut)",
    "profile.settings.lifeReal": "Réel (selon mon profil)",
    "profile.settings.theme": "Thème",
    "profile.settings.logout": "Se déconnecter",

    // Info page
    "info.title": "Actualités DAYLIFE",
    "info.subtitle": "Nouvelles fonctions, défis et annonces.",
    "info.section.todayUpdate": "Mise à jour du jour",
    "info.section.challenge": "Défi du mois",
    "info.section.topDreamers": "Top des rêveurs",
    "info.section.news": "Infos & liens",
  },

  // Les autres langues : pour l’instant on traduit surtout la navigation.
  // Le reste pourra rester en anglais (fallback), c’est OK pour une V1.

  es: {
    langName: "Español",
    "nav.home": "Inicio",
    "nav.dreams": "Sueños",
    "nav.team": "Equipo",
    "nav.profile": "Perfil",
  },
  pt: {
    langName: "Português",
    "nav.home": "Início",
    "nav.dreams": "Sonhos",
    "nav.team": "Equipe",
    "nav.profile": "Perfil",
  },
  de: {
    langName: "Deutsch",
    "nav.home": "Start",
    "nav.dreams": "Träume",
    "nav.team": "Team",
    "nav.profile": "Profil",
  },
  it: {
    langName: "Italiano",
    "nav.home": "Home",
    "nav.dreams": "Sogni",
    "nav.team": "Team",
    "nav.profile": "Profilo",
  },
  ar: {
    langName: "العربية",
    "nav.home": "الرئيسية",
    "nav.dreams": "الأحلام",
    "nav.team": "الفريق",
    "nav.profile": "الملف الشخصي",
  },
  hi: {
    langName: "हिन्दी",
    "nav.home": "होम",
    "nav.dreams": "सपने",
    "nav.team": "टीम",
    "nav.profile": "प्रोफ़ाइल",
  },
  zh: {
    langName: "中文",
    "nav.home": "首页",
    "nav.dreams": "梦想",
    "nav.team": "团队",
    "nav.profile": "个人资料",
  },
  ja: {
    langName: "日本語",
    "nav.home": "ホーム",
    "nav.dreams": "夢",
    "nav.team": "チーム",
    "nav.profile": "プロフィール",
  },
  th: {
    langName: "ไทย",
    "nav.home": "หน้าแรก",
    "nav.dreams": "ความฝัน",
    "nav.team": "ทีม",
    "nav.profile": "โปรไฟล์",
  },
  my: {
    langName: "မြန်မာ",
    "nav.home": "ပင်မ",
    "nav.dreams": "အိပ်မက်များ",
    "nav.team": "အဖွဲ့",
    "nav.profile": "ကိုယ်ရေးရာဇဝင်",
  },
};

// Petit helper sécurisé
function getNested(obj, key) {
  return key.split(".").reduce((o, part) => (o && o[part] != null ? o[part] : null), obj);
}

// Objet global I18n
const DaylifeI18n = {
  current: null,

  detectLang() {
    try {
      const navLang =
        (navigator.language || navigator.userLanguage || "en").toLowerCase();
      const base = navLang.split("-")[0];
      return DAYLIFE_LANGS.includes(base) ? base : "en";
    } catch (e) {
      return "en";
    }
  },

  getLang() {
    if (this.current) return this.current;
    const stored = localStorage.getItem("daylife_lang");
    if (stored && DAYLIFE_LANGS.includes(stored)) {
      this.current = stored;
      return stored;
    }
    const detected = this.detectLang();
    this.current = detected;
    return detected;
  },

  setLang(lang) {
    if (!DAYLIFE_LANGS.includes(lang)) lang = "en";
    this.current = lang;
    localStorage.setItem("daylife_lang", lang);
    this.applyTranslations();
  },

  t(key) {
    const lang = this.getLang();
    const dict = translations[lang] || translations["en"] || {};
    const value = getNested(dict, key) || dict[key];
    if (value) return value;
    // fallback anglais
    const fallback = (translations["en"] && translations["en"][key]) || key;
    return fallback;
  },

  applyTranslations() {
    const lang = this.getLang();
    const dict = translations[lang] || {};
    const fallbackDict = translations["en"] || {};

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = dict[key] || fallbackDict[key];
      if (val) {
        el.textContent = val;
      }
    });
  },
};

// Exposer globalement
window.DAYLIFE_LANGS = DAYLIFE_LANGS;
window.translations = translations;
window.DaylifeI18n = DaylifeI18n;

// Appliquer au chargement initial
document.addEventListener("DOMContentLoaded", () => {
  DaylifeI18n.applyTranslations();
});
