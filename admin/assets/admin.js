// --- Configuration ---
// Identifiant et mot de passe admin (à modifier)
const ADMIN_USER = "admin";
const ADMIN_PASS = "moonlife123";

// --- Login Page ---
if (window.location.pathname.includes("index.html")) {
  document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("daylife_admin_logged", "true");
      window.location.href = "dashboard.html";
    } else {
      errorMsg.textContent = "Identifiant ou mot de passe incorrect.";
    }
  });
}

// --- Dashboard Page ---
if (window.location.pathname.includes("dashboard.html")) {
  const logged = localStorage.getItem("daylife_admin_logged");
  if (logged !== "true") {
    window.location.href = "index.html";
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("daylife_admin_logged");
    window.location.href = "index.html";
  });

  // Simuler des données (en attendant la base réelle)
  document.getElementById("userCount").textContent = 125;
  document.getElementById("dreamCount").textContent = 342;
  document.getElementById("reflectionCount").textContent = 589;
}
