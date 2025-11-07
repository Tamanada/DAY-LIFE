// assets/reflections.js
// Gestion des réflexions + étoiles (localStorage)

(function () {
  const STORAGE_KEY = "daylife_reflections_v1";
  const STARS_KEY = "daylife_stars_v1"; // même clé que dreams.js

  const reflectionsListEl = document.getElementById("reflectionsList");
  const reflectionsEmptyEl = document.getElementById("reflectionsEmpty");
  const totalStarsEl = document.getElementById("totalStars");
  const toastEl = document.getElementById("toastStars");
  const toastTextEl = document.getElementById("toastStarsText");

  const btnAddReflection = document.getElementById("btnAddReflection");

  const reflectionModal = document.getElementById("reflectionModal");
  const reflectionModalTitle = document.getElementById("reflectionModalTitle");
  const reflectionDateInput = document.getElementById("reflectionDateInput");
  const reflectionLearnedInput = document.getElementById("reflectionLearnedInput");
  const reflectionGratefulInput = document.getElementById("reflectionGratefulInput");
  const reflectionImproveInput = document.getElementById("reflectionImproveInput");
  const reflectionModalSave = document.getElementById("reflectionModalSave");

  let reflections = loadReflections();
  let totalStars = loadStars();
  let editingReflectionId = null;

  // ---------- LocalStorage ----------

  function loadReflections() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveReflections() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reflections));
    } catch (err) {
      console.error("Failed to save reflections:", err);
    }
  }

  function loadStars() {
    try {
      const raw = localStorage.getItem(STARS_KEY);
      return raw ? Number(raw) || 0 : 0;
    } catch {
      return 0;
    }
  }

  function saveStars() {
    try {
      localStorage.setItem(STARS_KEY, String(totalStars));
    } catch (err) {
      console.error("Failed to save stars:", err);
    }
  }

  // ---------- Stars ----------

  function addStars(amount, reason) {
    if (!amount) return;
    totalStars += amount;
    if (totalStars < 0) totalStars = 0;
    updateStarsUI();
    saveStars();
    showStarsToast(amount, reason);
  }

  function updateStarsUI() {
    if (totalStarsEl) totalStarsEl.textContent = String(totalStars);
  }

  function showStarsToast(amount, reason) {
    if (!toastEl || !toastTextEl) return;
    toastTextEl.textContent =
      (amount > 0 ? "+" : "") + amount + " stars" + (reason ? ` – ${reason}` : "");
    toastEl.classList.remove("show");
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    setTimeout(() => toastEl.classList.remove("show"), 1500);
  }

  // ---------- Helpers ----------

  function createId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function formatDate(dateStr) {
    if (!dateStr) return "Unknown";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return "Unknown";
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  // ---------- Rendu ----------

  function renderReflections() {
    reflectionsListEl.innerHTML = "";

    if (!reflections.length) {
      reflectionsEmptyEl.style.display = "block";
      return;
    }
    reflectionsEmptyEl.style.display = "none";

    // Tri par date descendante
    const sorted = [...reflections].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    sorted.forEach((r) => {
      const card = document.createElement("article");
      card.className = "reflection-card";
      card.dataset.reflectionId = r.id;

      card.innerHTML = `
        <div class="reflection-header">
          <div class="reflection-date">
            <span>✨</span>
            <span>${formatDate(r.date)}</span>
          </div>
          <div>
            <button class="icon-btn btn-edit-reflection" type="button">✏️ Edit</button>
            <button class="icon-btn btn-delete-reflection" type="button">🗑</button>
          </div>
        </div>
        <div class="reflection-body">
          ${
            r.learned
              ? `<div><span class="reflection-label">What I learned</span>${escapeHtml(
                  r.learned
                )}</div>`
              : ""
          }
          ${
            r.grateful
              ? `<div><span class="reflection-label">Grateful for</span>${escapeHtml(
                  r.grateful
                )}</div>`
              : ""
          }
          ${
            r.improve
              ? `<div><span class="reflection-label">Want to improve</span>${escapeHtml(
                  r.improve
                )}</div>`
              : ""
          }
        </div>
        <div class="reflection-footer">
          <span>🕒 Saved on ${formatDate(r.createdAt)}</span>
        </div>
      `;

      const btnEdit = card.querySelector(".btn-edit-reflection");
      const btnDelete = card.querySelector(".btn-delete-reflection");

      btnEdit.addEventListener("click", () => openReflectionModal(r.id));
      btnDelete.addEventListener("click", () => deleteReflection(r.id));

      reflectionsListEl.appendChild(card);
    });
  }

  // ---------- Modale ----------

  function openReflectionModal(reflectionId) {
    editingReflectionId = reflectionId || null;
    if (editingReflectionId) {
      const r = reflections.find((x) => x.id === editingReflectionId);
      if (!r) return;
      reflectionModalTitle.textContent = "Edit reflection";
      reflectionDateInput.value = r.date || todayISO();
      reflectionLearnedInput.value = r.learned || "";
      reflectionGratefulInput.value = r.grateful || "";
      reflectionImproveInput.value = r.improve || "";
    } else {
      reflectionModalTitle.textContent = "New reflection";
      reflectionDateInput.value = todayISO();
      reflectionLearnedInput.value = "";
      reflectionGratefulInput.value = "";
      reflectionImproveInput.value = "";
    }
    openModal(reflectionModal);
    reflectionLearnedInput.focus();
  }

  function closeReflectionModal() {
    editingReflectionId = null;
    closeModal(reflectionModal);
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function saveReflectionFromModal() {
    const date = reflectionDateInput.value || todayISO();
    const learned = reflectionLearnedInput.value.trim();
    const grateful = reflectionGratefulInput.value.trim();
    const improve = reflectionImproveInput.value.trim();

    if (!learned && !grateful && !improve) {
      alert("Write at least one thing (learned, grateful or to improve).");
      return;
    }

    if (editingReflectionId) {
      const r = reflections.find((x) => x.id === editingReflectionId);
      if (!r) return;
      r.date = date;
      r.learned = learned;
      r.grateful = grateful;
      r.improve = improve;
    } else {
      const newReflection = {
        id: createId(),
        date,
        learned,
        grateful,
        improve,
        createdAt: todayISO(),
      };
      reflections.push(newReflection);
      addStars(1, "Reflection added");
    }

    saveReflections();
    renderReflections();
    closeReflectionModal();
  }

  function deleteReflection(id) {
    const r = reflections.find((x) => x.id === id);
    if (!r) return;
    if (!window.confirm("Delete this reflection?")) return;
    reflections = reflections.filter((x) => x.id !== id);
    saveReflections();
    renderReflections();
  }

  // ---------- Modale helper ----------

  function openModal(el) {
    el.classList.add("open");
  }

  function closeModal(el) {
    el.classList.remove("open");
  }

  // ---------- Événements ----------

  if (btnAddReflection) {
    btnAddReflection.addEventListener("click", () => openReflectionModal(null));
  }

  document
    .querySelectorAll("[data-close-reflection]")
    .forEach((btn) => btn.addEventListener("click", closeReflectionModal));

  reflectionModal.addEventListener("click", (ev) => {
    if (ev.target === reflectionModal) closeReflectionModal();
  });

  reflectionModalSave.addEventListener("click", saveReflectionFromModal);

  // ---------- Init ----------

  updateStarsUI();
  renderReflections();
})();
