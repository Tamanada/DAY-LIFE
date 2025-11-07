// assets/dreams.js
// Gestion des rêves + milestones + étoiles (localStorage only)

(function () {
  const STORAGE_KEY = "daylife_dreams_v1";
  const STARS_KEY = "daylife_stars_v1";

  /** @type {HTMLElement} */
  const dreamListEl = document.getElementById("dreamList");
  const dreamsEmptyEl = document.getElementById("dreamsEmpty");
  const totalStarsEl = document.getElementById("totalStars");
  const toastEl = document.getElementById("toastStars");
  const toastTextEl = document.getElementById("toastStarsText");

  const btnAddDream = document.getElementById("btnAddDream");

  // Modale rêve
  const dreamModal = document.getElementById("dreamModal");
  const dreamTitleInput = document.getElementById("dreamTitleInput");
  const dreamDescriptionInput = document.getElementById(
    "dreamDescriptionInput"
  );
  const dreamDateInput = document.getElementById("dreamDateInput");
  const dreamColorInput = document.getElementById("dreamColorInput");
  const dreamStatusInput = document.getElementById("dreamStatusInput");
  const dreamModalTitle = document.getElementById("dreamModalTitle");
  const dreamModalSave = document.getElementById("dreamModalSave");

  // Modale milestone
  const milestoneModal = document.getElementById("milestoneModal");
  const milestoneModalTitle = document.getElementById("milestoneModalTitle");
  const milestoneTitleInput = document.getElementById("milestoneTitleInput");
  const milestoneDescriptionInput = document.getElementById(
    "milestoneDescriptionInput"
  );
  const milestoneDateInput = document.getElementById("milestoneDateInput");
  const milestoneDoneInput = document.getElementById("milestoneDoneInput");
  const milestoneModalSave = document.getElementById("milestoneModalSave");

  let dreams = loadDreams();
  let totalStars = loadStars();

  let editingDreamId = null;
  let editingMilestone = null; // { dreamId, milestoneId } ou null

  // ---------- LocalStorage ----------

  function loadDreams() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed;
    } catch (err) {
      console.error("Failed to load dreams:", err);
      return [];
    }
  }

  function saveDreams() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dreams));
    } catch (err) {
      console.error("Failed to save dreams:", err);
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

  // ---------- Stars helper ----------

  function addStars(amount, reason) {
    if (!amount) return;
    totalStars += amount;
    if (totalStars < 0) totalStars = 0;
    updateStarsUI();
    saveStars();
    showStarsToast(amount, reason);
  }

  function updateStarsUI() {
    if (totalStarsEl) {
      totalStarsEl.textContent = String(totalStars);
    }
  }

  function showStarsToast(amount, reason) {
    if (!toastEl || !toastTextEl) return;
    toastTextEl.textContent =
      (amount > 0 ? "+" : "") + amount + " stars" + (reason ? ` – ${reason}` : "");
    toastEl.classList.remove("show");
    // Force reflow pour relancer l'animation
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    setTimeout(() => toastEl.classList.remove("show"), 1500);
  }

  // ---------- Rendering ----------

  function renderDreams() {
    dreamListEl.innerHTML = "";

    if (!dreams.length) {
      dreamsEmptyEl.style.display = "block";
      return;
    }
    dreamsEmptyEl.style.display = "none";

    dreams.forEach((dream) => {
      const card = document.createElement("article");
      card.className = "dream-card";
      card.style.setProperty("--card-color", dream.color || "#eef2ff");
      card.dataset.dreamId = dream.id;

      const daysInfo = computeDaysInfo(dream.targetDate);

      const status = dream.status || "in_progress";
      let statusLabel = "In progress";
      if (status === "completed") statusLabel = "Completed";
      if (status === "canceled") statusLabel = "Canceled";

      const completedMilestones = dream.milestones.filter((m) => m.done).length;

      const progressPercent =
        daysInfo.totalDays > 0
          ? Math.min(
              100,
              Math.max(
                0,
                ((daysInfo.totalDays - daysInfo.daysLeft) /
                  daysInfo.totalDays) *
                  100
              )
            )
          : 0;

      card.innerHTML = `
        <div class="dream-card-header">
          <div>
            <div class="dream-title">${escapeHtml(dream.title || "Untitled dream")}</div>
            ${
              dream.description
                ? `<div class="dream-description">${escapeHtml(
                    dream.description
                  )}</div>`
                : ""
            }
          </div>
          <div>
            <span class="dream-status-pill ${status}">
              ${
                status === "completed"
                  ? "✅"
                  : status === "canceled"
                  ? "🚫"
                  : "⏳"
              }
              ${statusLabel}
            </span>
          </div>
        </div>

        <div class="dream-meta">
          ${
            dream.targetDate
              ? `<span class="meta-chip">🎯 <span>${
                  daysInfo.daysLeft < 0
                    ? `Ended on ${formatDate(dream.targetDate)}`
                    : `Until ${formatDate(dream.targetDate)}`
                }</span></span>`
              : ""
          }
          <span class="meta-chip">📌 <span>${
            dream.milestones.length
          } milestones (${completedMilestones} done)</span></span>
          <span class="meta-chip">📅 Created ${formatDate(dream.createdAt)}</span>
        </div>

        <div class="progress-track">
          <div class="progress-fill" style="width:${progressPercent}%;"></div>
        </div>

        <div class="milestones-block">
          <div class="milestones-title-row">
            <span>Milestones</span>
            <button class="btn-secondary btn-add-milestone" type="button">
              ➕ Add milestone
            </button>
          </div>
          <ul class="milestone-list">
            ${renderMilestonesList(dream)}
          </ul>
        </div>

        <div class="dream-card-footer">
          <div class="dream-card-footer-left">
            <button class="btn-secondary btn-toggle-status" type="button">
              ${
                status === "completed"
                  ? "Mark as in progress"
                  : "Mark as completed"
              }
            </button>
          </div>
          <div class="dream-card-footer-right">
            <button class="btn-secondary btn-edit-dream" type="button">✏️ Edit</button>
            <button class="btn-secondary btn-color-dream" type="button">🎨 Color</button>
            <button class="btn-secondary btn-delete-dream" type="button">🗑 Delete</button>
          </div>
        </div>
      `;

      attachCardHandlers(card, dream);
      dreamListEl.appendChild(card);
    });
  }

  function renderMilestonesList(dream) {
    if (!dream.milestones.length) {
      return `<li class="milestone-item" style="opacity:0.7;">No milestones yet.</li>`;
    }
    return dream.milestones
      .map((m) => {
        const doneClass = m.done ? "done" : "";
        return `
          <li class="milestone-item" data-milestone-id="${m.id}">
            <input type="checkbox" class="milestone-checkbox" ${
              m.done ? "checked" : ""
            } />
            <span class="milestone-title ${doneClass}">${escapeHtml(
          m.title || "Milestone"
        )}</span>
            <div class="milestone-actions">
              <button class="icon-btn btn-edit-milestone" type="button">✏️</button>
              <button class="icon-btn btn-delete-milestone" type="button">🗑</button>
            </div>
          </li>
        `;
      })
      .join("");
  }

  function attachCardHandlers(card, dream) {
    // Ajouter milestone
    card
      .querySelector(".btn-add-milestone")
      .addEventListener("click", () => openMilestoneModal(dream.id));

    // Toggle statut complet / en cours
    card
      .querySelector(".btn-toggle-status")
      .addEventListener("click", () => toggleDreamStatus(dream.id));

    // Éditer rêve
    card
      .querySelector(".btn-edit-dream")
      .addEventListener("click", () => openDreamModal(dream.id));

    // Changer couleur
    card
      .querySelector(".btn-color-dream")
      .addEventListener("click", () => pickNewColorForDream(dream.id));

    // Supprimer rêve
    card
      .querySelector(".btn-delete-dream")
      .addEventListener("click", () => deleteDream(dream.id));

    // Milestones : events délégués
    const ul = card.querySelector(".milestone-list");
    ul.addEventListener("click", (ev) => {
      const target = ev.target;

      const li = target.closest(".milestone-item");
      if (!li) return;
      const milestoneId = li.dataset.milestoneId;

      if (target.classList.contains("milestone-checkbox")) {
        toggleMilestoneDone(dream.id, milestoneId, target.checked);
      } else if (target.classList.contains("btn-edit-milestone")) {
        openMilestoneModal(dream.id, milestoneId);
      } else if (target.classList.contains("btn-delete-milestone")) {
        deleteMilestone(dream.id, milestoneId);
      }
    });
  }

  // ---------- Helpers ----------

  function computeDaysInfo(targetDate) {
    if (!targetDate) return { daysLeft: 0, totalDays: 0 };
    const today = new Date();
    const target = new Date(targetDate);
    const created = today; // on n'a pas la date de départ -> approximatif

    const msLeft = target.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
    const daysLeft = Math.round(msLeft / (1000 * 60 * 60 * 24));

    const msTotal = target.getTime() - created.getTime();
    const totalDays = Math.max(1, Math.round(msTotal / (1000 * 60 * 60 * 24)));

    return { daysLeft, totalDays };
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

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function createId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // ---------- Rêves : CRUD ----------

  function openDreamModal(dreamId) {
    editingDreamId = dreamId || null;
    if (editingDreamId) {
      const dream = dreams.find((d) => d.id === editingDreamId);
      if (!dream) return;
      dreamModalTitle.textContent = "Edit dream";
      dreamTitleInput.value = dream.title || "";
      dreamDescriptionInput.value = dream.description || "";
      dreamDateInput.value = dream.targetDate || "";
      dreamColorInput.value = dream.color || "#e0e7ff";
      dreamStatusInput.value = dream.status || "in_progress";
    } else {
      dreamModalTitle.textContent = "New dream";
      dreamTitleInput.value = "";
      dreamDescriptionInput.value = "";
      dreamDateInput.value = "";
      dreamColorInput.value = "#e0e7ff";
      dreamStatusInput.value = "in_progress";
    }
    openModal(dreamModal);
    dreamTitleInput.focus();
  }

  function closeDreamModal() {
    editingDreamId = null;
    closeModal(dreamModal);
  }

  function saveDreamFromModal() {
    const title = dreamTitleInput.value.trim();
    if (!title) {
      alert("Please enter a dream title.");
      return;
    }
    const description = dreamDescriptionInput.value.trim();
    const targetDate = dreamDateInput.value || null;
    const color = dreamColorInput.value || "#e0e7ff";
    const status = dreamStatusInput.value || "in_progress";

    if (editingDreamId) {
      const dream = dreams.find((d) => d.id === editingDreamId);
      if (!dream) return;
      dream.title = title;
      dream.description = description;
      dream.targetDate = targetDate;
      dream.color = color;
      dream.status = status;
    } else {
      const newDream = {
        id: createId(),
        title,
        description,
        targetDate,
        color,
        status,
        createdAt: new Date().toISOString().slice(0, 10),
        milestones: [],
      };
      dreams.push(newDream);
      addStars(2, "New dream");
    }

    saveDreams();
    renderDreams();
    closeDreamModal();
  }

  function toggleDreamStatus(dreamId) {
    const dream = dreams.find((d) => d.id === dreamId);
    if (!dream) return;
    if (dream.status === "completed") {
      dream.status = "in_progress";
    } else {
      dream.status = "completed";
      addStars(3, "Dream completed");
    }
    saveDreams();
    renderDreams();
  }

  function pickNewColorForDream(dreamId) {
    const dream = dreams.find((d) => d.id === dreamId);
    if (!dream) return;
    const picked = window.prompt(
      "Enter a hex color for this dream (e.g. #a5b4fc):",
      dream.color || "#e0e7ff"
    );
    if (!picked) return;
    dream.color = picked;
    saveDreams();
    renderDreams();
  }

  function deleteDream(dreamId) {
    const dream = dreams.find((d) => d.id === dreamId);
    if (!dream) return;
    if (!window.confirm("Delete this dream and all its milestones?")) return;
    dreams = dreams.filter((d) => d.id !== dreamId);
    saveDreams();
    renderDreams();
  }

  // ---------- Milestones ----------

  function openMilestoneModal(dreamId, milestoneId) {
    editingMilestone = { dreamId, milestoneId: milestoneId || null };

    const isEdit = !!milestoneId;
    milestoneModalTitle.textContent = isEdit ? "Edit milestone" : "Add milestone";

    if (isEdit) {
      const dream = dreams.find((d) => d.id === dreamId);
      if (!dream) return;
      const ms = dream.milestones.find((m) => m.id === milestoneId);
      if (!ms) return;
      milestoneTitleInput.value = ms.title || "";
      milestoneDescriptionInput.value = ms.description || "";
      milestoneDateInput.value = ms.targetDate || "";
      milestoneDoneInput.checked = !!ms.done;
    } else {
      milestoneTitleInput.value = "";
      milestoneDescriptionInput.value = "";
      milestoneDateInput.value = "";
      milestoneDoneInput.checked = false;
    }

    openModal(milestoneModal);
    milestoneTitleInput.focus();
  }

  function closeMilestoneModal() {
    editingMilestone = null;
    closeModal(milestoneModal);
  }

  function saveMilestoneFromModal() {
    if (!editingMilestone) return;
    const { dreamId, milestoneId } = editingMilestone;
    const dream = dreams.find((d) => d.id === dreamId);
    if (!dream) return;

    const title = milestoneTitleInput.value.trim();
    if (!title) {
      alert("Please enter a milestone title.");
      return;
    }
    const description = milestoneDescriptionInput.value.trim();
    const targetDate = milestoneDateInput.value || null;
    const done = milestoneDoneInput.checked;

    if (milestoneId) {
      const ms = dream.milestones.find((m) => m.id === milestoneId);
      if (!ms) return;
      const wasDone = !!ms.done;
      ms.title = title;
      ms.description = description;
      ms.targetDate = targetDate;
      ms.done = done;

      // si on la coche maintenant -> récompense
      if (!wasDone && done) {
        addStars(5, "Milestone completed");
      }
      // si on la décoche -> on retire les points
      if (wasDone && !done) {
        addStars(-5, "Milestone unchecked");
      }
    } else {
      const ms = {
        id: createId(),
        title,
        description,
        targetDate,
        done,
      };
      dream.milestones.push(ms);
      addStars(1, "Milestone added");
      if (done) {
        addStars(5, "Milestone completed");
      }
    }

    saveDreams();
    renderDreams();
    closeMilestoneModal();
  }

  function toggleMilestoneDone(dreamId, milestoneId, checked) {
    const dream = dreams.find((d) => d.id === dreamId);
    if (!dream) return;
    const ms = dream.milestones.find((m) => m.id === milestoneId);
    if (!ms) return;
    const wasDone = !!ms.done;
    ms.done = !!checked;

    if (!wasDone && checked) {
      addStars(5, "Milestone completed");
    }
    if (wasDone && !checked) {
      addStars(-5, "Milestone unchecked");
    }

    saveDreams();
    renderDreams();
  }

  function deleteMilestone(dreamId, milestoneId) {
    const dream = dreams.find((d) => d.id === dreamId);
    if (!dream) return;
    const ms = dream.milestones.find((m) => m.id === milestoneId);
    if (!ms) return;
    if (!window.confirm("Delete this milestone?")) return;

    // léger malus si on supprime une milestone déjà complétée
    if (ms.done) {
      addStars(-1, "Completed milestone removed");
    }
    dream.milestones = dream.milestones.filter((m) => m.id !== milestoneId);
    saveDreams();
    renderDreams();
  }

  // ---------- Modales génériques ----------

  function openModal(el) {
    el.classList.add("open");
  }

  function closeModal(el) {
    el.classList.remove("open");
  }

  // ---------- Événements globaux ----------

  if (btnAddDream) {
    btnAddDream.addEventListener("click", () => openDreamModal(null));
  }

  // Boutons fermeture modale Dream
  document
    .querySelectorAll("[data-close-dream]")
    .forEach((btn) => btn.addEventListener("click", closeDreamModal));

  dreamModal.addEventListener("click", (ev) => {
    if (ev.target === dreamModal) closeDreamModal();
  });

  dreamModalSave.addEventListener("click", saveDreamFromModal);

  // Boutons fermeture modale Milestone
  document
    .querySelectorAll("[data-close-milestone]")
    .forEach((btn) => btn.addEventListener("click", closeMilestoneModal));

  milestoneModal.addEventListener("click", (ev) => {
    if (ev.target === milestoneModal) closeMilestoneModal();
  });

  milestoneModalSave.addEventListener("click", saveMilestoneFromModal);

  // ---------- Init ----------

  updateStarsUI();
  renderDreams();
})();
