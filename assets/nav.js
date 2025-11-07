// assets/nav.js
// Shared navigation (top + bottom) for all pages

function createNavBar(active) {
  const pages = [
    { id: "home", key: "nav.home", icon: "🏠", href: "home.html" },
    { id: "dreams", key: "nav.dreams", icon: "🎯", href: "dreams.html" },
    { id: "team", key: "nav.team", icon: "👥", href: "team.html" },
    { id: "profile", key: "nav.profile", icon: "👤", href: "profile.html" },
  ];

  const t = (k) => (window.DaylifeI18n ? DaylifeI18n.t(k) : k);

  // === HEADER (desktop / tablet) ===
  const header = document.getElementById("appHeader");
  if (header) {
    const langOptions = DAYLIFE_LANGS.map(
      (lng) => `
        <option value="${lng}">${
        translations[lng]?.langName || lng.toUpperCase()
      }</option>
      `
    ).join("");

    header.innerHTML = `
      <div class="app-header">
        <div class="app-header-inner">
          <div class="brand">
            <div class="brand-orbit">🌕</div>
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
                <span class="top-nav-icon">${p.icon}</span>
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
              <span class="bottom-nav-icon">${p.icon}</span>
              <span data-i18n="${p.key}">${t(p.key)}</span>
            </a>
          `
            )
            .join("")}
        </div>
      </nav>
    `;
  }

  // Initialise language select
  const langSelect = document.getElementById("langSelect");
  if (langSelect && window.DaylifeI18n) {
    langSelect.value = DaylifeI18n.getLang() || DaylifeI18n.detectLang();
    langSelect.addEventListener("change", (e) => {
      DaylifeI18n.setLang(e.target.value);
    });
  }

  if (window.DaylifeI18n) {
    DaylifeI18n.applyTranslations();
  }
}
