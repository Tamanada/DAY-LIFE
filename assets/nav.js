function createNavBar(activePage) {
  const nav = document.getElementById("mobileNav");
  if (!nav) return;

  nav.innerHTML = `
    <nav class="mobile-nav">
      <a href="home.html" class="${activePage === "home" ? "active" : ""}">
        <div class="icon">${homeIcon()}</div>
        <span>Home</span>
      </a>
      <a href="dreams.html" class="${activePage === "dreams" ? "active" : ""}">
        <div class="icon">${targetIcon()}</div>
        <span>Dreams</span>
      </a>
      <a href="reflections.html" class="${activePage === "reflections" ? "active" : ""}">
        <div class="icon">${bookHeartIcon()}</div>
        <span>Reflections</span>
      </a>
      <a href="profile.html" class="${activePage === "profile" ? "active" : ""}">
        <div class="icon">${userIcon()}</div>
        <span>Profile</span>
      </a>
    </nav>
  `;
}

/* ==== SVG ICONS ==== */
function homeIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>`;
}

function targetIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>`;
}

function bookHeartIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18l-8-4-8 4z"/>
    <path d="M12 8l1.5 1.5L15 8a2 2 0 1 0-3 2 2 2 0 0 0-3-2z"/>
  </svg>`;
}

function userIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="7" r="4"/>
    <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
  </svg>`;
}
