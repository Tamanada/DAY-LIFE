const users = [
  { name: "David Deveaux", email: "lovephangan@gmail.com", country: "France", sex: "Homme", role: "Admin", days: 18676, stars: 25 },
  { name: "Nanda", email: "nanda@daylife.app", country: "Myanmar", sex: "Femme", role: "User", days: 12045, stars: 18 },
  { name: "Marie", email: "marie@daylife.app", country: "France", sex: "Femme", role: "User", days: 4500, stars: 12 },
  { name: "Alex Moon", email: "alex@daylife.app", country: "USA", sex: "Homme", role: "Admin", days: 9950, stars: 30 },
  { name: "Tao", email: "tao@daylife.app", country: "Thaïlande", sex: "Homme", role: "User", days: 4745, stars: 9 },
];

const searchInput = document.getElementById("searchUser");
const table = document.getElementById("userTable");
const exportBtn = document.getElementById("exportCSV");
const logoutBtn = document.getElementById("logoutBtn");

// Modal elements
const modalOverlay = document.getElementById("modalOverlay");
const editForm = document.getElementById("editUserForm");
const cancelBtn = editForm.querySelector(".btn-cancel");

let currentUser = null;

/* === RENDER USERS === */
function renderUsers(filter = "") {
  table.innerHTML = "";
  users
    .filter(u =>
      u.name.toLowerCase().includes(filter) ||
      u.email.toLowerCase().includes(filter)
    )
    .forEach((u, index) => {
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

      // Événements boutons
      row.querySelector(".btn-edit").addEventListener("click", () => openEditModal(index));
      row.querySelector(".btn-delete").addEventListener("click", () => deleteUser(index));

      table.appendChild(row);
    });
}

/* === OPEN MODAL === */
function openEditModal(index) {
  currentUser = index;
  const user = users[index];

  document.getElementById("editName").value = user.name;
  document.getElementById("editEmail").value = user.email;
  document.getElementById("editCountry").value = user.country;
  document.getElementById("editRole").value = user.role;
  document.getElementById("editStars").value = user.stars;

  modalOverlay.style.display = "flex";
}

/* === CLOSE MODAL === */
function closeModal() {
  modalOverlay.style.display = "none";
  currentUser = null;
}

/* === SAVE CHANGES === */
editForm.addEventListener("submit", e => {
  e.preventDefault();
  if (currentUser === null) return;

  const u = users[currentUser];
  u.name = document.getElementById("editName").value;
  u.email = document.getElementById("editEmail").value;
  u.country = document.getElementById("editCountry").value;
  u.role = document.getElementById("editRole").value;
  u.stars = parseInt(document.getElementById("editStars").value) || 0;

  renderUsers(searchInput.value.toLowerCase());
  closeModal();
});

/* === CANCEL BUTTON === */
cancelBtn.addEventListener("click", closeModal);

/* === DELETE USER === */
function deleteUser(index) {
  const u = users[index];
  if (confirm(`Voulez-vous supprimer ${u.name} ?`)) {
    users.splice(index, 1);
    renderUsers(searchInput.value.toLowerCase());
  }
}

/* === SEARCH === */
searchInput.addEventListener("input", e => {
  renderUsers(e.target.value.toLowerCase());
});

/* === EXPORT CSV === */
exportBtn.addEventListener("click", () => {
  let csv = "Nom,Email,Pays,Sexe,Rôle,Jours vécus,Étoiles\n";
  users.forEach(u => {
    csv += `${u.name},${u.email},${u.country},${u.sex},${u.role},${u.days},${u.stars}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "daylife_users.csv";
  link.click();
});

/* === LOGOUT === */
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("adminLoggedIn");
  alert("Vous avez été déconnecté ✅");
  window.location.href = "index.html";
});

/* === INIT === */
renderUsers();
