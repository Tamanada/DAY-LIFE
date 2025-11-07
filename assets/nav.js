// assets/nav.js
// Navigation partagée (top + bottom) avec icônes Lucide + sélecteur de langue

function createNavBar(active) {
  const pages = [
    { id: "home", key: "nav.home", icon: "home", href: "home.html" },
    { id: "dreams", key: "nav.dreams", icon: "target", href: "dreams.html" },
    { id: "team", key: "nav.team", icon: "users", href: "team.html" },
    { id: "profile", key: "nav.profile", icon: "user", href: "profile.html" },
  ];

  const t = (k) => (window.DaylifeI18n ? DaylifeI18n.t(k) : k);

  // === HEADER (desktop / tablet) ===
  const header = document.getElementById("appHeader");
  if (header) {
    const langOptions = (window.DAYLIFE_LANGS || [])
      .map(
        (lng) => `
        <option value="${lng}">
          ${(window.translations && translations[lng]?.langName) ||
            lng.toUpperCase()}
        </option>
      `
      )
      .join("");

    header.innerHTML = `
      <div class="app-header">
        <div class="app-header-inner">
          <div class="brand">
            <div class="brand-orbit">
              <i data-lucide="moon"></i>
            </div>
            <div>
              <div class="brand-text-main">DAYLIFE</div>
              <div class="brand-text-sub">30 000 Days</div>
            </div>
          </div>
          <nav class="top-nav">
            ${pages
              .map(
                (p) => `
              <button
                class="top-nav-item ${p.id === active ? "active" : ""}"
                onclick="location.href='${p.href}'"
              >
                <span class="top-nav-icon"><i data-lucide="${p.icon}"></i></span>
                <span class="top-nav-label" data-i18n="${p.key}">
                  ${t(p.key)}
                </span>
              </button>
            `
              )
              .join("")}
            <select id="langSelect" class="lang-select">
              ${langOptions}
            </select>
          </nav>
        </div>
      </div>
    `;
  }

  // === BOTTOM NAV (mobile) ===
  const bottom = document.getElementById("bottomNav");
  if (bottom) {
    bottom.innerHTML = `
      <nav class="bottom-nav">
        <div class="bottom-nav-inner">
          ${pages
            .map(
              (p) => `
            <a
              href="${p.href}"
              class="bottom-nav-item ${p.id === active ? "active" : ""}"
            >
              <span class="bottom-nav-icon">
                <i data-lucide="${p.icon}"></i>
              </span>
              <span data-i18n="${p.key}">${t(p.key)}</span>
            </a>
          `
            )
            .join("")}
        </div>
      </nav>
    `;
  }

  // Initialiser le sélecteur de langue
  const langSelect = document.getElementById("langSelect");
  if (langSelect && window.DaylifeI18n) {
    langSelect.value = DaylifeI18n.getLang() || DaylifeI18n.detectLang();
    langSelect.addEventListener("change", (e) => {
      DaylifeI18n.setLang(e.target.value);
    });
  }

  // Appliquer les traductions au menu
  if (window.DaylifeI18n) {
    DaylifeI18n.applyTranslations();
  }

  // Initialiser les icônes Lucide (noir sur fond clair / blanc sur fond sombre auto)
  if (window.lucide) {
    lucide.createIcons();
  }
}
