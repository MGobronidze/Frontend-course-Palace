/* =========================================================================
   APP.JS — SPA ნავიგაცია და რენდერი
   ეყრდნობა: meetings-data.js (COURSE_MEETINGS) და js/meetings/meeting-XX.js
   ფაილებს, რომლებიც თითოეული აწესებენ window.MEETING_CONTENT[id]-ს.
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

const APP = {
  loadedScripts: new Set(),
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* Quiz text (prompts/options/explanations) is rendered through this instead
   of raw innerHTML: everything is escaped first, so a literal tag mentioned
   as an answer (e.g. "<body>") always shows as text instead of being parsed
   as real markup. Wrap such mentions in the source data with backticks —
   `<body>` — to render them in a <code> style. */
function mdInline(str) {
  return escapeHtml(str).replace(/`([^`]+)`/g, "<code>$1</code>");
}

/* ---------------------------------------------------------------------- */
/* სარჩევის აგება                                                          */
/* ---------------------------------------------------------------------- */

function buildSidebar() {
  const list = document.getElementById("meetingList");
  list.innerHTML = "";

  let currentBlock = null;

  COURSE_MEETINGS.forEach((m) => {
    if (m.block !== currentBlock) {
      currentBlock = m.block;
      const label = document.createElement("li");
      label.className = "sidebar__block-label";
      label.setAttribute("role", "presentation");
      label.textContent = currentBlock === "html-css" ? "ბლოკი I · HTML & CSS" : "ბლოკი II · JAVASCRIPT";
      list.appendChild(label);
    }

    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "meeting-item" + (m.available ? "" : " is-locked");
    btn.dataset.id = m.id;
    btn.innerHTML = `
      <span class="meeting-item__num">${String(m.id).padStart(2, "0")}</span>
      <span class="meeting-item__text">
        <span class="meeting-item__title">${m.title}</span>
        <span class="meeting-item__type">${MEETING_TYPE_LABELS[m.type]}${m.available ? "" : " · მალე"}</span>
      </span>
    `;
    btn.addEventListener("click", () => selectMeeting(m.id));
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function setActiveNav(id) {
  document.querySelectorAll(".meeting-item").forEach((el) => {
    el.setAttribute("aria-current", String(Number(el.dataset.id) === id));
  });
}

/* ---------------------------------------------------------------------- */
/* შეხვედრის არჩევა და ჩატვირთვა                                          */
/* ---------------------------------------------------------------------- */

function selectMeeting(id) {
  const meta = COURSE_MEETINGS.find((m) => m.id === id);
  if (!meta) return;
  setActiveNav(id);
  window.location.hash = "m" + id;

  if (!meta.available) {
    renderComingSoon(meta);
    return;
  }

  if (window.MEETING_CONTENT[id]) {
    renderMeeting(window.MEETING_CONTENT[id]);
    return;
  }

  if (!APP.loadedScripts.has(meta.file)) {
    const script = document.createElement("script");
    script.src = meta.file;
    script.onload = () => {
      APP.loadedScripts.add(meta.file);
      if (window.MEETING_CONTENT[id]) renderMeeting(window.MEETING_CONTENT[id]);
    };
    document.body.appendChild(script);
  }
}

function renderComingSoon(meta) {
  const main = document.getElementById("mainContent");
  main.innerHTML = `
    <div class="sheet">
      <div class="coming-soon">
        <p class="coming-soon__num">შეხვედრა #${String(meta.id).padStart(2, "0")} · ${MEETING_TYPE_LABELS[meta.type]}</p>
        <h2 class="coming-soon__title">${meta.title}</h2>
        <p class="coming-soon__note">ამ შეხვედრის სრული მასალა — თეორია, კოდის დემო, სავარჯიშოები და ქვიზი — მალე დაემატება ამავე აპლიკაციაში, ზუსტად ისეთივე ფორმატით, როგორც შეხვედრა #1.</p>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* შეხვედრის სრული რენდერი                                                 */
/* ---------------------------------------------------------------------- */

function renderMeeting(c) {
  const main = document.getElementById("mainContent");

  const agendaHtml = c.agenda.map((a) => `
    <div class="agenda__cell">
      <span class="agenda__time">${mdInline(a.time)}</span>
      <span class="agenda__label">${mdInline(a.label)}</span>
    </div>
  `).join("");

  const codeBlocksHtml = (c.demo.codeBlocks || []).map((b) => `
    <p class="prose"><strong>${mdInline(b.label)}</strong></p>
    <div class="code-block">${escapeHtml(b.code)}</div>
    ${b.note ? `<p class="prose" style="color:var(--ink-soft); font-size:14px;">${b.note}</p>` : ""}
  `).join("");

  const exercisesHtml = (c.exercises || []).map((ex, i) => `
    <details class="exercise" ${i === 0 ? "open" : ""}>
      <summary>
        <span class="exercise__level exercise__level--${ex.level}">${levelLabel(ex.level)}</span>
        ${ex.title}
      </summary>
      <div class="exercise__body">
        <p>${ex.body}</p>
        ${ex.hint ? `<p class="exercise__hint"><strong>მინიშნება:</strong> ${ex.hint}</p>` : ""}
      </div>
    </details>
  `).join("");

  main.innerHTML = `
    <div class="sheet">
      <header class="meeting-header">
        <p class="meeting-header__eyebrow">შეხვედრა #${String(c.id).padStart(2, "0")} / 40</p>
        <h1 class="meeting-header__title">${c.title}</h1>
        <div class="meeting-header__meta">
          <span>⏱ 60 წუთი</span>
          <span>${MEETING_TYPE_LABELS[c.type]}</span>
          <span>${c.blockLabel}</span>
        </div>
      </header>

      <section class="section">
        <h2 class="section__title">გეგმა <small>00:00 — 60:00</small></h2>
        <div class="agenda">${agendaHtml}</div>
      </section>

      <section class="section">
        <h2 class="section__title">თეორია</h2>
        <div class="prose">${c.theory.body}</div>
        ${c.theory.analogy ? `
          <div class="callout">
            <span class="callout__label">ანალოგია</span>
            ${c.theory.analogy}
          </div>` : ""}
      </section>

      <section class="section">
        <h2 class="section__title">კოდი &amp; დემო</h2>
        <div class="prose">${c.demo.intro}</div>
        ${codeBlocksHtml}
      </section>

      <section class="section">
        <h2 class="section__title">სცადე თავად</h2>
        <p class="prose">${c.sandbox.description}</p>
        <div class="sandbox" id="sandbox-${c.id}"></div>
      </section>

      <section class="section">
        <h2 class="section__title">პრაქტიკული სავარჯიშოები</h2>
        ${exercisesHtml}
      </section>

      <section class="section">
        <h2 class="section__title">თვითშემოწმების ქვიზი</h2>
        <div id="quiz-${c.id}"></div>
      </section>

      <div class="homework">
        <p class="homework__label">🏠 საშინაო გამოწვევა</p>
        <p>${c.homework}</p>
      </div>
    </div>
  `;

  createSandbox(document.getElementById(`sandbox-${c.id}`), c.sandbox);
  createQuiz(document.getElementById(`quiz-${c.id}`), c.quiz);
  main.scrollTop = 0;
}

function levelLabel(level) {
  return { easy: "მარტივი", medium: "საშუალო", hard: "გამოწვევა" }[level] || level;
}

/* ---------------------------------------------------------------------- */
/* Live კოდის სენდბოქსი                                                    */
/* ---------------------------------------------------------------------- */

function createSandbox(container, initial) {
  const state = {
    html: initial.html || "",
    css: initial.css || "",
    js: initial.js || "",
  };
  let activeTab = "html";

  container.innerHTML = `
    <div class="sandbox__tabs" role="tablist">
      <button class="sandbox__tab" role="tab" data-tab="html" aria-selected="true">HTML</button>
      <button class="sandbox__tab" role="tab" data-tab="css" aria-selected="false">CSS</button>
      <button class="sandbox__tab" role="tab" data-tab="js" aria-selected="false">JavaScript</button>
    </div>
    <div class="sandbox__panes">
      <div class="sandbox__editor-col">
        <textarea class="sandbox__editor" spellcheck="false" aria-label="კოდის რედაქტორი"></textarea>
      </div>
      <div class="sandbox__preview-col">
        <div class="sandbox__preview-bar">
          <span>შედეგი</span>
          <button class="btn" type="button">▶ გაშვება</button>
        </div>
        <iframe class="sandbox__frame" title="ცოცხალი გადახედვა" sandbox="allow-scripts allow-forms"></iframe>
      </div>
    </div>
  `;

  const tabs = container.querySelectorAll(".sandbox__tab");
  const textarea = container.querySelector(".sandbox__editor");
  const runBtn = container.querySelector(".btn");
  const frame = container.querySelector(".sandbox__frame");

  function loadTab(tab) {
    activeTab = tab;
    textarea.value = state[tab];
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.tab === tab)));
  }

  function run() {
    const doc = `<!doctype html><html><head><meta charset="utf-8"><style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: sans-serif; color: #16232E; padding: 14px; }
      h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote, figure, table { margin: 0 0 12px; }
      li { margin-left: 20px; }
      ${state.css}
    </style></head><body>${state.html}<script>
      // ეს დაწერილი არ არის მოსწავლის კოდში — ეხმარება Try-it-yourself
      // დემოს, ფორმების გაგზავნისას გვერდი ცარიელი არ დარჩეს.
      document.querySelectorAll("form").forEach(function (f) {
        f.addEventListener("submit", function (e) {
          e.preventDefault();
          var note = document.createElement("div");
          note.textContent = "✅ ფორმა \\"გაიგზავნა\\" — ეს მხოლოდ დემოა, რეალურად სერვერზე არაფერი იგზავნება.";
          note.style.cssText = "margin-top:12px;padding:10px 14px;background:#EAF6ED;border:1px solid #3F8F5F;border-radius:6px;font-size:13.5px;";
          f.insertAdjacentElement("afterend", note);
        });
      });
    <\/script><script>${state.js}<\/script></body></html>`;
    frame.srcdoc = doc;
  }

  tabs.forEach((t) => t.addEventListener("click", () => loadTab(t.dataset.tab)));
  textarea.addEventListener("input", () => { state[activeTab] = textarea.value; });
  runBtn.addEventListener("click", run);

  loadTab("html");
  run();
}

/* ---------------------------------------------------------------------- */
/* ინტერაქტიული ქვიზი                                                       */
/* ---------------------------------------------------------------------- */

function createQuiz(container, questions) {
  container.innerHTML = questions.map((q, qi) => `
    <div class="quiz-q" data-qi="${qi}">
      <p class="quiz-q__prompt">${qi + 1}. ${mdInline(q.prompt)}</p>
      <div class="quiz-q__options">
        ${q.options.map((opt, oi) => `
          <label class="quiz-q__option" data-oi="${oi}">
            <input type="radio" name="quiz-${container.id}-${qi}" value="${oi}">
            <span>${mdInline(opt)}</span>
          </label>
        `).join("")}
      </div>
      <p class="quiz-q__explain">${mdInline(q.explain)}</p>
    </div>
  `).join("") + `
    <div class="quiz__footer">
      <button class="btn" type="button" id="${container.id}-check">შემოწმება</button>
      <button class="btn btn--ghost" type="button" id="${container.id}-reset">თავიდან</button>
      <span class="quiz__score" id="${container.id}-score"></span>
    </div>
  `;

  const checkBtn = document.getElementById(`${container.id}-check`);
  const resetBtn = document.getElementById(`${container.id}-reset`);
  const scoreEl = document.getElementById(`${container.id}-score`);

  checkBtn.addEventListener("click", () => {
    let correct = 0;
    questions.forEach((q, qi) => {
      const block = container.querySelector(`.quiz-q[data-qi="${qi}"]`);
      const picked = block.querySelector("input:checked");
      const pickedIdx = picked ? Number(picked.value) : -1;
      const isCorrect = pickedIdx === q.correctIndex;
      if (isCorrect) correct++;

      block.classList.add("answered");
      block.classList.toggle("is-correct", isCorrect);
      block.classList.toggle("is-incorrect", !isCorrect);

      block.querySelectorAll(".quiz-q__option").forEach((optEl) => {
        const oi = Number(optEl.dataset.oi);
        optEl.classList.toggle("quiz-q__option--right", oi === q.correctIndex);
        optEl.classList.toggle("quiz-q__option--picked-wrong", oi === pickedIdx && !isCorrect);
        optEl.querySelector("input").disabled = true;
      });
    });
    scoreEl.textContent = `შედეგი: ${correct} / ${questions.length}`;
  });

  resetBtn.addEventListener("click", () => createQuiz(container, questions));
}

/* ---------------------------------------------------------------------- */
/* გაშვება                                                                 */
/* ---------------------------------------------------------------------- */

function init() {
  buildSidebar();
  const hashId = Number((window.location.hash || "").replace("#m", ""));
  const startId = COURSE_MEETINGS.find((m) => m.id === hashId) ? hashId : 1;
  selectMeeting(startId);
}

document.addEventListener("DOMContentLoaded", init);
