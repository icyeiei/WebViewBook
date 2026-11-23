// CPE102 viewbook — page behaviour.
// Content lives in data.js; this file only turns it into HTML.

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Small helpers ------------------------------------------------------------

function pad(n) {
  return String(n).padStart(2, "0");
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Runs a DOM update inside a view transition when the browser supports it.
function withTransition(update) {
  if (document.startViewTransition && !prefersReducedMotion.matches) {
    return document.startViewTransition(update);
  }
  update();
  return null;
}

// Theme toggle -------------------------------------------------------------

function setupThemeToggle() {
  const button = $(".theme-toggle");

  function label() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${next} theme`);
  }

  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    withTransition(() => {
      document.documentElement.dataset.theme = next;
    });
    try {
      localStorage.setItem("cpe102-theme", next);
    } catch (e) {
      // Storage can be blocked; the theme still switches for this visit.
    }
    label();
  });

  label();
}

// Week ticker --------------------------------------------------------------
// A band of every week title, scrolling slowly between the cover and the
// archive. Each title opens its week. The list is written twice so the
// loop has no seam; the copy is hidden from screen readers.

function renderTicker() {
  const items = (hidden) => CPE102.weeks
    .map((w) => `<li class="h-${w.house}"><a href="#week-${w.week}"${hidden ? ' tabindex="-1"' : ""}><b>W${pad(w.week)}</b>${w.title}</a></li>`)
    .join("");
  $("#ticker").innerHTML = `
    <ul class="ticker-track">${items(false)}</ul>
    <ul class="ticker-track" aria-hidden="true">${items(true)}</ul>`;
}

// Week archive -------------------------------------------------------------

// Each filter has its own house colour; choosing one repaints the board.
const filters = [
  ["all", "All Weeks (16)", "gray"],
  ["interactive", "With Interactive Media", "blue"],
  ["midterm", "Midterm Phase (W1–W9)", "green"],
  ["final", "Final Phase (W10–W16)", "orange"],
];

let activeFilter = "all";

function matchesFilter(week) {
  if (activeFilter === "interactive") return Boolean(week.interactive);
  if (activeFilter === "midterm") return week.week <= 9;
  if (activeFilter === "final") return week.week >= 10;
  return true;
}

function renderFilters() {
  $("#filter-tabs").innerHTML = filters
    .map(([key, label, house]) => `
      <button type="button" class="h-${house}" data-filter="${key}" aria-pressed="${key === activeFilter}">${label}</button>`)
    .join("");

  const house = filters.find(([key]) => key === activeFilter)[2];
  $("#archive").className = `section wrap board-${house}`;

  $$("#filter-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      applyFilter();
      replayAnimation($("#week-list"), "is-refreshing");
    });
  });
}

function applyFilter() {
  $$("#week-list > li").forEach((item) => {
    const week = CPE102.weeks.find((w) => w.week === Number(item.dataset.week));
    item.hidden = !matchesFilter(week);
  });
}

function renderWeekList() {
  $("#week-list").innerHTML = CPE102.weeks
    .map((w) => `
      <li class="h-${w.house}" data-week="${w.week}">
        <button type="button" class="week-row" data-week="${w.week}" aria-haspopup="dialog">
          <span class="week-no">${pad(w.week)}<small>WEEK</small></span>
          <span class="week-main">
            <span class="week-title">${w.title}</span>
            <span class="week-date">${w.date.toUpperCase()} 2026${w.interactive ? '<span class="media-mark">INTERACTIVE MEDIA</span>' : ""}</span>
            <span class="week-preview">${w.preview}</span>
            <span class="week-tags">${w.tags.map((t) => `<span>${t}</span>`).join("")}</span>
          </span>
          <span class="week-open">READ &amp; INSPECT ${icon("arrow-up-right")}</span>
        </button>
      </li>`)
    .join("");

  $$("#week-list .week-row").forEach((row) => {
    row.addEventListener("click", () => openWeek(Number(row.dataset.week), row));
  });
}

// Week sheet ---------------------------------------------------------------

const sheet = $("#week-sheet");
let currentWeek = null;

function renderEmbed(embed) {
  const title = escapeHtml(embed.title);
  switch (embed.type) {
    case "youtube":
    case "canva":
      return `
        <figure class="embed">
          <iframe data-src="${embed.src}" title="${title}" allow="fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe>
          <figcaption>${embed.title}</figcaption>
        </figure>`;
    case "pdf":
      return `
        <a class="doc-link" href="${embed.src}" target="_blank" rel="noopener">
          ${icon("file")}<span>${embed.title}</span>${icon("arrow-up-right")}
        </a>`;
    case "game":
      return `
        <a class="game-card" href="${embed.src}" target="_blank" rel="noopener">
          <img src="${embed.cover}" alt="" loading="lazy" decoding="async">
          <strong>${embed.title}</strong>
          <span>Launch game ${icon("external")}</span>
        </a>`;
    case "link":
      return `
        <a class="doc-link" href="${embed.src}" target="_blank" rel="noopener">
          ${icon("external")}<span>${embed.title}</span>${icon("arrow-up-right")}
        </a>`;
    default:
      return "";
  }
}

function renderSheet(w) {
  const index = CPE102.weeks.indexOf(w);
  const prev = CPE102.weeks[index - 1];
  const next = CPE102.weeks[index + 1];
  const embeds = w.embeds || [];
  const frames = embeds.filter((e) => e.type === "youtube" || e.type === "canva");
  const links = embeds.filter((e) => !(e.type === "youtube" || e.type === "canva"));

  const resources = [];
  if (w.slides) {
    const kind = w.slides.endsWith(".pptx") ? "PPTX" : "PDF";
    resources.push(`
      <a class="doc-link" href="${w.slides}" target="_blank" rel="noopener">
        ${icon("file")}<span>Lecture slides (${kind})</span>${icon("arrow-up-right")}
      </a>`);
  }
  (w.docs || []).forEach((doc) => {
    resources.push(`
      <a class="doc-link" href="${doc.src}" target="_blank" rel="noopener">
        ${icon("file")}<span>${doc.title}</span>${icon("arrow-up-right")}
      </a>`);
  });
  links.forEach((e) => resources.push(renderEmbed(e)));

  const byline = w.instructor ? `${w.subtitle} • ${w.instructor}` : w.subtitle;

  $("#sheet-content").innerHTML = `
    <header class="sheet-head h-${w.house}">
      <div class="sheet-bar">
        <div class="sheet-nav">
          <button type="button" data-go="${prev ? prev.week : ""}" ${prev ? "" : "disabled"} aria-label="Previous week">${icon("chevron-left")}</button>
          <button type="button" data-go="${next ? next.week : ""}" ${next ? "" : "disabled"} aria-label="Next week">${icon("chevron-right")}</button>
          <button type="button" class="sheet-close" aria-label="Close">${icon("x")}</button>
        </div>
      </div>
      <span class="sheet-no" aria-hidden="true">${pad(w.week)}</span>
      <h2 id="sheet-title">${w.title}</h2>
      <p class="sheet-byline">${byline}</p>
      <p class="sheet-when">WEEK ${pad(w.week)} // ${w.date.toUpperCase()} 2026</p>
    </header>

    <div class="sheet-body">
      ${frames.length ? `<div class="embed-grid">${frames.map(renderEmbed).join("")}</div>` : ""}

      ${w.about ? `
        <div class="about-week">
          <p>${w.about}</p>
        </div>` : ""}

      ${w.learned ? `
        <div class="reflection">
          <section>
            <h3>Engineering Insights</h3>
            <ul>${w.learned.map((x) => `<li>${x}</li>`).join("")}</ul>
          </section>
          <section>
            <h3>Key Understanding</h3>
            <ul>${w.takeaways.map((x) => `<li>${x}</li>`).join("")}</ul>
          </section>
        </div>` : ""}

      ${w.terminal ? renderTerminals(w.terminal) : ""}

      ${resources.length ? `<div class="resources">${resources.join("")}</div>` : ""}

      ${(w.photos || []).length ? `
        <div class="gallery">
          ${w.photos.map((src) => `
            <a href="${src}" target="_blank" rel="noopener">
              <img src="${src}" alt="Week ${w.week} photo" loading="lazy" decoding="async">
            </a>`).join("")}
        </div>` : ""}
    </div>`;

  $$(".term-copy", sheet).forEach((button) => {
    button.addEventListener("click", () => copyCommands(button));
  });

  $$("[data-go]", sheet).forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.go) showWeek(Number(button.dataset.go));
    });
  });
  $(".sheet-close", sheet).addEventListener("click", closeWeek);
}

// Restarts a CSS animation class on an element.
function replayAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth; // force a reflow so the animation can start again
  element.classList.add(className);
}

// Calls done() when the element's own animation ends (or straight away
// when motion is reduced). A timer backs it up in case the event never fires.
function afterAnimation(element, done) {
  if (prefersReducedMotion.matches) {
    done();
    return;
  }
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    element.removeEventListener("animationend", onEnd);
    done();
  };
  const onEnd = (event) => {
    if (event.target === element) finish();
  };
  element.addEventListener("animationend", onEnd);
  setTimeout(finish, 700);
}

// Iframes (YouTube, Canva) are heavy, so they only start loading
// after the sheet has finished animating in.
function loadFrames() {
  $$("iframe[data-src]", sheet).forEach((frame) => {
    frame.src = frame.dataset.src;
    frame.removeAttribute("data-src");
  });
}

function showWeek(weekNumber) {
  const w = CPE102.weeks.find((x) => x.week === weekNumber);
  if (!w) return;
  currentWeek = weekNumber;
  renderSheet(w);
  sheet.scrollTop = 0;
  history.replaceState(null, "", `#week-${weekNumber}`);
  if (!sheet.classList.contains("is-opening")) loadFrames();
}

// Opening a week: the sheet rises out of the row that was clicked.
function openWeek(weekNumber, sourceRow) {
  sheet.classList.remove("is-closing");
  sheet.classList.add("is-opening");
  showWeek(weekNumber);

  // Start the sheet level with the clicked row (kept within ±240px).
  let fromY = 0;
  if (sourceRow) {
    const rect = sourceRow.getBoundingClientRect();
    fromY = rect.top + rect.height / 2 - window.innerHeight / 2;
    fromY = Math.max(-240, Math.min(240, fromY));
  }
  sheet.style.setProperty("--from-y", `${Math.round(fromY)}px`);

  if (!sheet.open) sheet.showModal();
  document.body.classList.add("sheet-open");

  afterAnimation(sheet, () => {
    sheet.classList.remove("is-opening");
    loadFrames();
  });
}

function closeWeek() {
  if (!sheet.open || sheet.classList.contains("is-closing")) return;
  const row = $(`#week-list .week-row[data-week="${currentWeek}"]`);

  sheet.classList.remove("is-opening");
  sheet.classList.add("is-closing");
  afterAnimation(sheet, () => {
    sheet.classList.remove("is-closing");
    sheet.close();
    if (row) row.focus({ preventScroll: true });
  });
}

// Escape closes through closeWeek so it animates too.
sheet.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeWeek();
});

sheet.addEventListener("close", () => {
  document.body.classList.remove("sheet-open");
  currentWeek = null;
  if (location.hash.startsWith("#week-")) {
    history.replaceState(null, "", "#archive");
  }
});

// Clicking the dark area outside the sheet closes it.
sheet.addEventListener("click", (event) => {
  if (event.target === sheet) closeWeek();
});

document.addEventListener("keydown", (event) => {
  if (!sheet.open) return;
  if (event.key === "ArrowLeft" && currentWeek > 1) showWeek(currentWeek - 1);
  if (event.key === "ArrowRight" && currentWeek < CPE102.weeks.length) showWeek(currentWeek + 1);
});

// Terminal snippets ----------------------------------------------------------

// Each session: { title, host, lines: [{ prompt, cmd } | { out } | { err }] }
function renderTerminals(sessions) {
  return `
    <div class="terminals">
      ${sessions.map((s) => `
        <figure class="term">
          <figcaption class="term-bar">
            <span class="term-dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="term-title">${escapeHtml(s.host)}</span>
            <button type="button" class="term-copy" aria-label="Copy commands from ${escapeHtml(s.title)}">Copy</button>
          </figcaption>
          <p class="term-label">${escapeHtml(s.title)}</p>
          <pre><code>${s.lines.map(renderTerminalLine).join("\n")}</code></pre>
        </figure>`).join("")}
    </div>`;
}

function renderTerminalLine(line) {
  if (line.cmd !== undefined) {
    return `<span class="t-prompt">${escapeHtml(line.prompt)}</span> <span class="t-cmd">${escapeHtml(line.cmd)}</span>`;
  }
  if (line.err !== undefined) return `<span class="t-err">${escapeHtml(line.err)}</span>`;
  return `<span class="t-out">${escapeHtml(line.out)}</span>`;
}

// Copies only the commands (not prompts or output) of one session.
function copyCommands(button) {
  const commands = $$(".t-cmd", button.closest(".term")).map((el) => el.textContent).join("\n");
  const done = (label) => {
    button.textContent = label;
    setTimeout(() => (button.textContent = "Copy"), 1600);
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(commands).then(() => done("Copied"), () => done("Copy failed"));
  } else {
    done("Copy failed");
  }
}

// Projects and team --------------------------------------------------------

function renderProjects() {
  const manual = [["Camera feed", "01"], ["MediaPipe Hands", "02"], ["ML posture classifier", "03"], ["ESP32 command map", "04"], ["Fail-safe stop", "05"]];
  const auto = [["Overhead camera", "01"], ["HSV segmentation", "02"], ["AprilTag localization", "03"], ["Target lock", "04"], ["Sorting path planner", "05"]];

  function setMode(mode) {
    const nodes = mode === "manual" ? manual : auto;
    $("#mode-panel").innerHTML = nodes
      .map(([label, num]) => `<li><small>${num}</small>${label}</li>`)
      .join("");
    $$("#mode-tabs button").forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.mode === mode));
    });
  }

  $$("#mode-tabs button").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });
  setMode("manual");

  const { videos, gallery, report } = CPE102.midterm;

  $("#robot-videos").innerHTML = videos
    .map((v, i) => `
      <video controls preload="none" playsinline poster="${v.poster}" aria-label="Era-One competition run ${i + 1}">
        <source src="${v.src}" type="video/mp4">
      </video>`)
    .join("");

  $("#robot-gallery").innerHTML = gallery
    .map((src, i) => `
      <a href="${src}" target="_blank" rel="noopener">
        <img src="${src}" alt="Era-One robot view ${i + 1}" loading="lazy" decoding="async">
      </a>`)
    .join("");

  $("#robot-report").href = report;
}

function renderTeam() {
  $("#team-grid").innerHTML = CPE102.team
    .map((m) => `
      <article class="member h-${m.house}">
        <img src="${m.image}" alt="${m.name}" loading="lazy" decoding="async">
        <div class="member-info">
          <h3>${m.name}</h3>
          <p>${m.role}</p>
          <small>${m.id}</small>
        </div>
      </article>`)
    .join("");
}

// Start --------------------------------------------------------------------

setupThemeToggle();
renderTicker();
renderFilters();
renderWeekList();
renderProjects();
renderTeam();

// Deep link: index.html#week-8 opens that week directly.
function openFromHash() {
  const linked = location.hash.match(/^#week-(\d+)$/);
  if (linked && Number(linked[1]) !== currentWeek) openWeek(Number(linked[1]));
}

window.addEventListener("hashchange", openFromHash);
openFromHash();
