/* =========================================================================
   MEETING 18 — რეალური პროექტი: პორტფოლიოს გვერდი (HTML + CSS)
   ბლოკი I-ის (შეხვედრები 1-17) ფინალური პროექტი.
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[18] = {
  id: 18,
  title: "რეალური პროექტი: პორტფოლიოს გვერდი (HTML + CSS)",
  type: "project",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "გამეორება: მთელი HTML & CSS ბლოკის (1-17 შეხვედრა) რუკა" },
    { time: "15–35", label: "პროექტის გაცნობა: სრული პორტფოლიო-გვერდის მაგალითი" },
    { time: "35–50", label: "დამოუკიდებელი მუშაობა: საკუთარი პორტფოლიოს აწყობა სენდბოქსში" },
    { time: "50–60", label: "კუმულატიური ქვიზი (მთელი ბლოკი) და საშინაო დავალების გაცნობა" },
  ],

  theory: {
    body: `
      <p>17 შეხვედრის განმავლობაში ავაშენეთ სრული ხელსაწყოთა ყუთი. მოდი, ერთად გავიხედოთ უკან:</p>
      <p><strong>სტრუქტურა (HTML):</strong> სათაურები, აბზაცები, ბმულები, სიები, სურათები, ცხრილები, ფორმები.<br>
      <strong>სელექტორები:</strong> ელემენტი, <code>.კლასი</code>, <code>#id</code>.<br>
      <strong>ვიზუალი:</strong> ფერები (<code>color</code>, <code>background-color</code>), ტიპოგრაფია (<code>font-family</code>, <code>line-height</code>).<br>
      <strong>სივრცე:</strong> ბოქს მოდელი (<code>padding</code>, <code>border</code>, <code>margin</code>, <code>box-sizing</code>).<br>
      <strong>განლაგება:</strong> <code>position</code>, Flexbox (<code>display: flex</code>), Grid (<code>display: grid</code>).<br>
      <strong>ადაპტაცია:</strong> <code>@media</code> queries სხვადასხვა ეკრანისთვის.<br>
      <strong>სიცოცხლე:</strong> <code>transition</code>, <code>:hover</code>, <code>@keyframes</code>.</p>
      <p>დღეს ეს ყველაფერი ერთად გამოვიყენოთ — ავაშენოთ ნამდვილი <strong>პორტფოლიო-გვერდი</strong>: გვერდი, რომელზეც შენი პროექტები, უნარები და საკონტაქტო ინფორმაცია ლამაზად და მოწესრიგებულად იქნება წარმოდგენილი, ისეთი, რომლის GitHub Pages-ზე გამოქვეყნებაც სირცხვილი არ იქნება.</p>
    `,
    analogy: `აქამდე ცალ-ცალკე ვსწავლობდით არქიტექტურის სხვადასხვა ნაწილს — კედლები (HTML), საღებავი (ფერები), ავეჯის განლაგება (Flexbox/Grid), სახლის მორგება ოჯახის ზომაზე (responsive). დღეს ნამდვილი არქიტექტორივით ყველაფერს ერთად იყენებ და მთლიან, დასრულებულ სახლს აშენებ — ისეთს, სადაც ყველა ოთახი (სექცია) თავის ადგილზეა, ყველაფერი ლამაზად შეღებილია, და კარი ნებისმიერი ზომის სტუმარს (ეკრანს) შეეგუება.`,
  },

  demo: {
    intro: `აი, სრული (მაგრამ არა შენი პირადი!) პორტფოლიოს მაგალითი — გამოიყენე ის სახელმძღვანელოდ, სტრუქტურის გასაგებად.`,
    codeBlocks: [
      {
        label: "მაგალითი — პორტფოლიოს სრული სტრუქტურა",
        code: `<header class="navbar">
  <div class="logo">ნინო.dev</div>
  <nav class="nav-links">
    <a href="#about">ჩემ შესახებ</a>
    <a href="#projects">პროექტები</a>
    <a href="#contact">კონტაქტი</a>
  </nav>
</header>

<section class="hero">
  <h1>გამარჯობა, მე ვარ ნინო</h1>
  <p>დამწყები ვებ-დეველოპერი, მიყვარს HTML/CSS-ით ლამაზი გვერდების აწყობა.</p>
</section>

<section id="about" class="about">
  <h2>ჩემ შესახებ</h2>
  <p>მე-6 კლასის მოსწავლე ვარ, ვსწავლობ ვებ-პროგრამირებას და ვოცნებობ...</p>
</section>

<section id="projects" class="projects">
  <h2>ჩემი პროექტები</h2>
  <div class="project-grid">
    <div class="project-card">ვიზიტ-ბარათი</div>
    <div class="project-card">ჩაის რეცეპტების გვერდი</div>
    <div class="project-card">კვირის განრიგი</div>
  </div>
</section>

<section id="contact" class="contact">
  <h2>დამიკავშირდი</h2>
  <form>
    <input type="email" placeholder="შენი ელფოსტა">
    <button type="submit">გაგზავნა</button>
  </form>
</section>

<style>
* { box-sizing: border-box; margin: 0; }
body { font-family: "Helvetica Neue", Arial, sans-serif; color: #16232E; }

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #163C63;
  color: white;
}
.nav-links { display: flex; gap: 20px; }
.nav-links a { color: white; text-decoration: none; transition: opacity 0.2s; }
.nav-links a:hover { opacity: 0.7; }

.hero {
  padding: 60px 32px;
  text-align: center;
  background: #E9F1F7;
}

.about, .projects, .contact {
  padding: 40px 32px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.project-card {
  padding: 24px;
  background: #F4F7FA;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
}
.project-card:hover { transform: scale(1.03); }

@media (max-width: 600px) {
  .navbar { flex-direction: column; gap: 12px; }
  .project-grid { grid-template-columns: 1fr; }
}
</style>`,
        note: `ყურადღება მიაქციე: აქ ერთად მოქმედებს Flexbox (ნავიგაცია), Grid (პროექტების ბადე), box model (<code>padding</code>), ტიპოგრაფია, ფერები, <code>transition</code>/<code>:hover</code> და <code>@media</code> — ყველა ის, რაც ცალ-ცალკე ვისწავლეთ.`,
      },
    ],
  },

  sandbox: {
    description: `ეს არის შენი პორტფოლიოს „ჩონჩხი“ — შეავსე კომენტარებით მონიშნული ადგილები საკუთარი მონაცემებით და დაამატე საკუთარი სექციები.`,
    html: `<!-- 1. ნავიგაცია (Flexbox) -->
<header class="navbar">
  <div class="logo">[შენი სახელი].dev</div>
  <nav class="nav-links">
    <a href="#about">ჩემ შესახებ</a>
    <a href="#projects">პროექტები</a>
  </nav>
</header>

<!-- 2. hero სექცია -->
<section class="hero">
  <h1>გამარჯობა, მე ვარ [შენი სახელი]</h1>
  <p>[ერთი წინადადება შენს შესახებ]</p>
</section>

<!-- 3. ჩემ შესახებ -->
<section id="about" class="about">
  <h2>ჩემ შესახებ</h2>
  <p>[აბზაცი]</p>
</section>

<!-- 4. პროექტები (Grid) — დაამატე მინიმუმ 3 ბარათი -->
<section id="projects" class="projects">
  <h2>ჩემი პროექტები</h2>
  <div class="project-grid">
    <div class="project-card">[პროექტი 1]</div>
  </div>
</section>`,
    css: `* { box-sizing: border-box; margin: 0; }
body { font-family: sans-serif; color: #16232E; }

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #163C63;
  color: white;
}
.nav-links { display: flex; gap: 16px; }
.nav-links a { color: white; text-decoration: none; }

.hero { padding: 40px 24px; text-align: center; background: #E9F1F7; }
.about, .projects { padding: 32px 24px; }

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.project-card {
  padding: 20px;
  background: #F4F7FA;
  border-radius: 8px;
  text-align: center;
}

@media (max-width: 600px) {
  .navbar { flex-direction: column; gap: 10px; }
  .project-grid { grid-template-columns: 1fr; }
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "შეავსე პირადი ინფორმაცია",
      body: `ჩაანაცვლე ყველა კვადრატულ ფრჩხილებში მოცემული ტექსტი შენი საკუთარი მონაცემებით — სახელი, აღწერა, ჩემ-შესახებ აბზაცი.`,
      hint: `არ დაგავიწყდეს <code>&lt;title&gt;</code>-ის შეცვლაც (თუ სრულ HTML დოკუმენტში მუშაობ), რომ ბრაუზერის ჩანართიც შენს სახელს აჩვენებდეს.`,
    },
    {
      level: "medium",
      title: "დაამატე კიდევ ორი პროექტის ბარათი",
      body: `<code>.project-grid</code>-ში დაამატე კიდევ ორი <code>&lt;div class="project-card"&gt;</code>, სულ სამი გახდეს — შეავსე რეალური (ან წარმოსახვითი) პროექტების სახელებით, რომლებზეც აქამდე ივარჯიშე (ვიზიტ-ბარათი, ცხრილები და ა.შ.).`,
      hint: `<code>display: grid; grid-template-columns: repeat(3, 1fr);</code>-ის წყალობით, სამივე ბარათი ავტომატურად თანაბრად დაილაგება.`,
    },
    {
      level: "hard",
      title: "დაამატე hover ეფექტი და საკონტაქტო სექცია",
      body: `დაამატე <code>.project-card:hover { transform: scale(1.03); transition: transform 0.2s; }</code>, და ბოლოში ახალი <code>&lt;section id="contact"&gt;</code> მარტივი ფორმით (ელფოსტის ველი + გაგზავნის ღილაკი).`,
      hint: `<code>transition</code> უნდა დაწერო <code>.project-card</code>-ზე (არა <code>:hover</code>-ზე), <code>transform</code>-ის ცვლილება კი — <code>:hover</code>-ში.`,
    },
  ],

  quiz: [
    {
      prompt: "რომელი CSS თვისებით ვაქცევთ კონტეინერს ისეთად, რომ მისი შვილები ერთ ხაზზე გვერდიგვერდ დალაგდნენ?",
      options: ["`position: relative;`", "`display: flex;`", "`text-align: center;`", "`float: none;`"],
      correctIndex: 1,
      explain: "`display: flex;` აქცევს კონტეინერს Flexbox კონტეინერად — ეს არის ის, რასაც ნავიგაციაში და ბევრ სხვა ადგილას ვიყენებთ ელემენტების გვერდიგვერდ დასალაგებლად.",
    },
    {
      prompt: "რომელი CSS თვისებით ვქმნით ორგანზომილებიან ბადეს (მწკრივები + სვეტები ერთად)?",
      options: ["`display: flex;`", "`display: grid;`", "`display: block;`", "`position: fixed;`"],
      correctIndex: 1,
      explain: "`display: grid;` შესაძლებელს ხდის ერთდროულად მწკრივებისა და სვეტების განსაზღვრას — ეს გამოვიყენეთ პროექტების ბადისთვის.",
    },
    {
      prompt: "რატომ გვჭირდება `@media (max-width: 600px)` პორტფოლიოს გვერდზე?",
      options: [
        "რომ გვერდი უფრო სწრაფად ჩაიტვირთოს",
        "რომ განლაგება ავტომატურად მოერგოს პატარა (მობილურის) ეკრანებს",
        "რომ ტექსტის ფერი შეიცვალოს",
        "ეს მხოლოდ დეკორატიულია, ფუნქციური მნიშვნელობა არ აქვს",
      ],
      correctIndex: 1,
      explain: "Media query საშუალებას გვაძლევს, პატარა ეკრანზე შევცვალოთ განლაგება (მაგ. ნავიგაცია სვეტად გადავიყვანოთ, ბადე — ერთსვეტიანად), რომ გვერდი მოხერხებული დარჩეს ნებისმიერ მოწყობილობაზე.",
    },
    {
      prompt: "რა უნდა დაწეროთ `.project-card`-ზე, რომ hover-ზე ზომის ცვლილება გლუვი იყოს, მყისიერის ნაცვლად?",
      options: ["`display: grid;`", "`position: absolute;`", "`transition: transform 0.2s;`", "`color: blue;`"],
      correctIndex: 2,
      explain: "`transition` თვისების გარეშე `transform`-ის ცვლილება `:hover`-ზე მყისიერად მოხდებოდა — `transition` ხდის მას გლუვად, დროში გაწელილად.",
    },
    {
      prompt: "რატომ ჯობია `* { box-sizing: border-box; }` მთელ გვერდზე ერთხელ დაწერა, ვიდრე თითოეულ ელემენტზე ცალკე?",
      options: [
        "ეს არ არის აუცილებელი, არავითარი განსხვავება არ არის",
        "ერთი გლობალური წესით ყველა ელემენტს ერთნაირი, პროგნოზირებადი ზომის გამოთვლის წესი ექნება — padding/border აღარ „გატეხავს“ width-ს",
        "ეს აჩქარებს გვერდის ჩატვირთვას",
        "ეს მუშაობს მხოლოდ Grid-თან ერთად",
      ],
      correctIndex: 1,
      explain: "`* { box-sizing: border-box; }` არის გავრცელებული, კარგი პრაქტიკა — ერთხელ დაწერით, ყველა ელემენტს (მათ შორის მომავალში დამატებულებსაც) აქვს პროგნოზირებადი ზომის ქცევა.",
    },
  ],

  homework: `დაასრულე შენი <code>portfolio.html</code> და დარწმუნდი, რომ მასში გაქვს: Flexbox ნავიგაცია, hero სექცია, „ჩემ შესახებ“, Grid-ით აწყობილი პროექტების სექცია (მინიმუმ 3 ბარათი), საკონტაქტო ფორმა, მინიმუმ ერთი <code>@media</code> წესი, და მინიმუმ ერთი <code>transition</code>/<code>:hover</code> ეფექტი. ეს არის HTML/CSS ბლოკის ფინალური ნამუშევარი — მომდევნო შეხვედრიდან ვიწყებთ JavaScript-ს, რომელიც ამ იგივე გვერდს ცოცხალს გახდის!`,
};
