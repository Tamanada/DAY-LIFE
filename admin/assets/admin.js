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
// --- USERS PAGE ---
if (window.location.pathname.includes("users.html")) {
  const logged = localStorage.getItem("daylife_admin_logged");
  if (logged !== "true") {
    window.location.href = "index.html";
  }

const users = [
  { name: "David Deveaux", email: "lovephangan@gmail.com", country: "France", sex: "Homme", role: "Admin", days: 18676, stars: 25 },
  { name: "Nanda", email: "nanda@daylife.app", country: "Myanmar", sex: "Femme", role: "User", days: 12045, stars: 18 },
  { name: "Marie", email: "marie@daylife.app", country: "France", sex: "Femme", role: "User", days: 4500, stars: 12 },
  { name: "Alex Moon", email: "alex@daylife.app", country: "USA", sex: "Homme", role: "Admin", days: 9950, stars: 30 },
  { name: "Tao", email: "tao@daylife.app", country: "Thaïlande", sex: "Homme", role: "User", days: 4745, stars: 9 },
];


  const table = document.getElementById("userTable");
  const searchInput = document.getElementById("searchUser");

  function renderUsers(filter = "") {
    table.innerHTML = "";
    users
      .filter(u => u.name.toLowerCase().includes(filter) || u.email.toLowerCase().includes(filter))
      .forEach(u => {
        const row = document.createElement("tr");
      row.innerHTML = `
  <td>${u.name}</td>
  <td>${u.email}</td>
  <td>${u.country}</td>
  <td>${u.sex}</td>
  <td>
    <span class="role-badge ${u.role === "Admin" ? "role-admin" : "role-user"}">
      ${u.role}
    </span>
  </td>
  <td>${u.days}</td>
  <td>${u.stars}</td>
  <td>
    <button class="btn-edit">Modifier</button>
    <button class="btn-delete">Supprimer</button>
  </td>
`;

        table.appendChild(row);
      });
  }

  renderUsers();

  searchInput.addEventListener("input", (e) => {
    renderUsers(e.target.value.toLowerCase());
  });

  document.getElementById("exportCSV").addEventListener("click", () => {
    let csv = "Nom,Email,Pays,Sexe,Jours,Étoiles\n";
    users.forEach(u => {
      csv += `${u.name},${u.email},${u.country},${u.sex},${u.days},${u.stars}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "daylife_users.csv";
    a.click();
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("daylife_admin_logged");
    window.location.href = "index.html";
  });
}
