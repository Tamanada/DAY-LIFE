// assets/lang.js
// Simple i18n system with 12 languages

const DAYLIFE_LANGS = [
  "en", "fr", "es", "pt", "de", "it",
  "nl", "sv", "pl", "ru", "hi", "th",
];

const translations = {
  en: {
    langName: "English",
    nav: {
      home: "Home",
      dreams: "Dreams",
      team: "Team",
      profile: "Profile",
      language: "Language",
    },
    home: {
      heroTitle: "Welcome back to DAYLIFE",
      heroSubtitle: "Every day counts. Let’s make yours shine.",
      heroBody:
        "You have a limited number of days. Use them to build a life you are proud of – and enjoy every step of the way.",
      statsStars: "Stars earned",
      statsDreams: "Dreams in progress",
      statsMilestones: "Milestones completed",
      lifeLabel: "You are living day",
      quoteLabel: "TODAY'S INSPIRATION",
      quoteText: "You are your own miracle.",
      quoteSub: "Turn your days into dreams, and your dreams into days.",
      blankLine: "Today is a blank page — write something that matters.",
      howToTitle: "How to Earn Stars",
      howToSub: "Every action counts towards your journey.",
      howItems: {
        login: "Daily login",
        addDream: "Add a dream or goal",
        completeDream: "Complete a dream",
        addMilestone: "Complete a milestone",
        addReflection: "Add a reflection",
        streak: "7-day streak bonus",
        referral: "Invite a friend (referral)",
      },
    },
    dreams: {
      title: "Your Dreams",
      subtitle: "Turn your days into dreams, and your dreams into days.",
      addDream: "Add Dream",
      editDream: "Edit Dream",
      dreamTitleLabel: "Dream title",
      dreamTitlePlaceholder: "e.g. Travel to Koh Phangan",
      dreamDescLabel: "Description",
      dreamDateLabel: "Target date",
      dreamColorLabel: "Card color",
      statusInProgress: "In progress",
      statusPlanned: "Planned",
      statusCompleted: "Completed",
      save: "Save",
      cancel: "Cancel",
      deleteDream: "Delete dream",
      daysLeft: "days left",
      milestonesTitle: "Milestones",
      addMilestone: "Add milestone",
      milestoneTitleLabel: "Milestone title",
      milestoneTitlePlaceholder: "e.g. Buy plane ticket",
      markCompleted: "Mark as completed",
      celebrationTitle: "Dream completed! 🎉",
      celebrationAskVerify: "Do you want your friends to verify this dream?",
      yes: "Yes",
      no: "No",
    },
    team: {
      title: "Your Team",
      subtitle:
        "Friends who support your dreams and can verify your achievements.",
      addFriend: "Add friend",
      friendNameLabel: "Friend name",
      friendHandleLabel: "Telegram @username (optional)",
      save: "Save",
      cancel: "Cancel",
      empty: "No friends yet. Invite some dreamers!",
    },
    profile: {
      title: "Profile",
      subtitle: "Your journey at a glance.",
      statsStars: "Stars",
      statsActiveDreams: "Active dreams",
      statsMilestones: "Milestones",
      shareTitle: "Share & Earn Stars",
      shareText: "Invite friends and earn +5 ⭐ for each friend who joins!",
      friendsJoined: "Friends joined",
      starsEarned: "Stars earned",
      referralLink: "Your referral link",
      copy: "Copy",
      copied: "Copied!",
      shareButton: "Share with friends",
      anonymousMode: "Anonymous mode",
      anonymousHelper:
        "When enabled, your name and photo are hidden in public leaderboards and shares.",
      settingsTitle: "Settings",
      displayName: "Display name",
      email: "Email",
      dob: "Date of birth",
      dobHelper: "Used to calculate your life journey.",
      sex: "Sex",
      male: "Male",
      female: "Female",
      country: "Country of birth",
      countryHelper:
        "Used to adjust life expectancy based on statistics.",
      lifeCalc: "Life calculation method",
      lifeMode30000: "30 000 days (default)",
      lifeModeReal: "Real (based on my profile)",
      theme: "Theme",
      themeLight: "Light (recommended)",
      themeDark: "Dark",
      themeLunar: "Lunar",
      logout: "Log out",
      profilePhoto: "Profile photo",
      changePhoto: "Change",
      uploadPhoto: "Upload a photo",
      generatePhoto: "Generate with AI",
    },
    info: {
      title: "News & Challenges",
      subtitle: "Discover new features and global challenges.",
    },
  },

  // ---- French ----
  fr: {
    langName: "Français",
    nav: {
      home: "Accueil",
      dreams: "Rêves",
      team: "Équipe",
      profile: "Profil",
      language: "Langue",
    },
    home: {
      heroTitle: "Bon retour sur DAYLIFE",
      heroSubtitle: "Chaque jour compte. Fais briller le tien.",
      heroBody:
        "Tu as un nombre limité de jours. Utilise-les pour créer une vie dont tu es fier, et savoure chaque étape du voyage.",
      statsStars: "Étoiles gagnées",
      statsDreams: "Rêves en cours",
      statsMilestones: "Jalons accomplis",
      lifeLabel: "Tu vis le jour",
      quoteLabel: "INSPIRATION DU JOUR",
      quoteText: "Tu es ton propre miracle.",
      quoteSub:
        "Transforme tes jours en rêves, et tes rêves en jours.",
      blankLine:
        "Aujourd’hui est une page blanche — écris quelque chose qui compte.",
      howToTitle: "Comment gagner des étoiles",
      howToSub: "Chaque action compte dans ton parcours.",
      howItems: {
        login: "Connexion quotidienne",
        addDream: "Ajouter un rêve ou objectif",
        completeDream: "Terminer un rêve",
        addMilestone: "Compléter un jalon",
        addReflection: "Ajouter une réflexion",
        streak: "Bonus de série de 7 jours",
        referral: "Inviter un ami (parrainage)",
      },
    },
    dreams: {
      title: "Tes rêves",
      subtitle:
        "Transforme tes jours en rêves, et tes rêves en jours.",
      addDream: "Ajouter un rêve",
      editDream: "Modifier le rêve",
      dreamTitleLabel: "Titre du rêve",
      dreamTitlePlaceholder: "ex. Voyager à Koh Phangan",
      dreamDescLabel: "Description",
      dreamDateLabel: "Date cible",
      dreamColorLabel: "Couleur de la carte",
      statusInProgress: "En cours",
      statusPlanned: "Planifié",
      statusCompleted: "Terminé",
      save: "Enregistrer",
      cancel: "Annuler",
      deleteDream: "Supprimer le rêve",
      daysLeft: "jours restants",
      milestonesTitle: "Jalons",
      addMilestone: "Ajouter un jalon",
      milestoneTitleLabel: "Titre du jalon",
      milestoneTitlePlaceholder: "ex. Acheter le billet d’avion",
      markCompleted: "Marquer comme complété",
      celebrationTitle: "Rêve réalisé ! 🎉",
      celebrationAskVerify:
        "Veux-tu que tes amis vérifient ce rêve ?",
      yes: "Oui",
      no: "Non",
    },
    team: {
      title: "Ton équipe",
      subtitle:
        "Les amis qui soutiennent tes rêves et peuvent les vérifier.",
      addFriend: "Ajouter un ami",
      friendNameLabel: "Nom de l’ami",
      friendHandleLabel: "Pseudo Telegram @ (optionnel)",
      save: "Enregistrer",
      cancel: "Annuler",
      empty: "Pas encore d’amis. Invite quelques rêveurs !",
    },
    profile: {
      title: "Profil",
      subtitle: "Ton parcours en un coup d’œil.",
      statsStars: "Étoiles",
      statsActiveDreams: "Rêves actifs",
      statsMilestones: "Jalons",
      shareTitle: "Partager & gagner des étoiles",
      shareText:
        "Invite des amis et gagne +5 ⭐ pour chaque ami qui rejoint !",
      friendsJoined: "Amis rejoints",
      starsEarned: "Étoiles gagnées",
      referralLink: "Ton lien de parrainage",
      copy: "Copier",
      copied: "Copié !",
      shareButton: "Partager avec des amis",
      anonymousMode: "Mode anonyme",
      anonymousHelper:
        "Lorsque ce mode est activé, ton nom et ta photo sont masqués dans les classements publics et les partages.",
      settingsTitle: "Paramètres",
      displayName: "Nom affiché",
      email: "Email",
      dob: "Date de naissance",
      dobHelper:
        "Utilisée pour calculer ton parcours de vie.",
      sex: "Sexe",
      male: "Homme",
      female: "Femme",
      country: "Pays de naissance",
      countryHelper:
        "Utilisé pour ajuster l’espérance de vie selon les statistiques.",
      lifeCalc: "Méthode de calcul de vie",
      lifeMode30000: "30 000 jours (par défaut)",
      lifeModeReal: "Réel (selon mon profil)",
      theme: "Thème",
      themeLight: "Clair (recommandé)",
      themeDark: "Sombre",
      themeLunar: "Lunaire",
      logout: "Se déconnecter",
      profilePhoto: "Photo de profil",
      changePhoto: "Changer",
      uploadPhoto: "Téléverser une photo",
      generatePhoto: "Générer avec l’IA",
    },
    info: {
      title: "Nouvelles & Défis",
      subtitle:
        "Découvre les nouvelles fonctionnalités et les défis globaux.",
    },
  },
};

// For other languages, we simply reuse English as fallback
["es", "pt", "de", "it", "nl", "sv", "pl", "ru", "hi", "th"].forEach((lng) => {
  if (!translations[lng]) {
    translations[lng] = { ...translations.en, langName: lng };
  }
});

(function () {
  let currentLang = "en";

  function detectLang() {
    const stored = localStorage.getItem("daylife_lang");
    if (stored && DAYLIFE_LANGS.includes(stored)) return stored;

    const browser =
      (navigator.language || "en").split("-")[0].toLowerCase();
    if (DAYLIFE_LANGS.includes(browser)) return browser;
    return "en";
  }

  function t(key) {
    const parts = key.split(".");
    let obj = translations[currentLang] || translations.en;
    for (const p of parts) {
      obj = obj && obj[p];
    }
    if (!obj) {
      // fallback to en
      obj = translations.en;
      for (const p of parts) {
        obj = obj && obj[p];
      }
    }
    return obj || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.placeholder = value;
        } else {
          el.value = value;
        }
      } else {
        el.textContent = value;
      }
    });
  }

  function setLang(lang) {
    if (!DAYLIFE_LANGS.includes(lang)) lang = "en";
    currentLang = lang;
    localStorage.setItem("daylife_lang", lang);
    applyTranslations();
  }

  function getLang() {
    return currentLang;
  }

  window.DaylifeI18n = { t, setLang, getLang, detectLang, applyTranslations };

  document.addEventListener("DOMContentLoaded", () => {
    currentLang = detectLang();
    applyTranslations();
  });
})();
