/* =========================================================================
   MEETING 11 — CSS Layout — position და display
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[12] = {
  id: 12,
  title: "CSS Layout — position და display",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: როგორ ეწყობა ელემენტები გვერდზე — display და position" },
    { time: "15–35", label: "კოდის დემო: `block`/`inline`/`inline-block` და `relative`/`absolute`/`fixed`" },
    { time: "35–50", label: "პრაქტიკა: ბეიჯის მიმაგრება ბარათის კუთხეში" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>ორი CSS თვისება განსაზღვრავს, როგორ „იქცევა“ ელემენტი გვერდზე სივრცის მიხედვით: <code>display</code> — რა ტიპის ყუთია ეს ელემენტი, და <code>position</code> — სად ზუსტად დგას ის.</p>
      <p><code>display</code>-ის სამი ძირითადი მნიშვნელობაა: <strong>block</strong> (იკავებს მთელ სიგანეს და იწყება ახალი ხაზიდან — მაგ. <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>), <strong>inline</strong> (ჯდება ტექსტის ნაკადში, არ იღებს <code>width</code>/<code>height</code>-ს — მაგ. <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>) და <strong>inline-block</strong> (ჰიბრიდი — ტექსტის ნაკადშია, მაგრამ <code>width</code>/<code>height</code>/<code>padding</code>-საც იღებს).</p>
      <p><code>position</code>-ის მთავარი მნიშვნელობებია: <strong>static</strong> (ნაგულისხმევი — ელემენტი დგას ჩვეულებრივ, „ნაკადში“), <strong>relative</strong> (შეგიძლია <code>top</code>/<code>left</code>-ით ოდნავ „გასწიო“ თავისი ნორმალური ადგილიდან, მაგრამ ადგილი მაინც დარჩება დაცული), <strong>absolute</strong> (მთლიანად ამოდის ჩვეულებრივი ნაკადიდან და პოზიციონირდება უახლოესი <code>position</code>-იანი „წინაპრის“ მიმართ) და <strong>fixed</strong> (მიმაგრებულია ეკრანთან/ბრაუზერის ფანჯარასთან — გადახვევისასაც ერთ ადგილას რჩება).</p>
    `,
    analogy: `<code>position</code>-ის ოთხივე მნიშვნელობა ჰგავს ოთახში ავეჯის სხვადასხვა დაფიქსირების წესს: <strong>static</strong> — სკამი დგას რიგში, სხვა სკამებთან ერთად, ჩვეულებრივად. <strong>relative</strong> — იგივე სკამი, უბრალოდ ოდნავ გასწეული გვერდზე, მაგრამ მისი „ძველი ადგილი“ მაინც დაცულია სხვებისთვის ცარიელი. <strong>absolute</strong> — სკამი აღარ არის რიგში საერთოდ, ის კედელზეა მიმაგრებული ზუსტ წერტილში, თითქოს რიგი საერთოდ არ არსებობდეს. <strong>fixed</strong> — ეს არის საათი კედელზე მატარებელში: მატარებელი (გვერდი) მოძრაობს (სქროლავს), საათი კი ყოველთვის იმავე ადგილას რჩება თვალწინ.`,
  },

  demo: {
    intro: `ჯერ შევადაროთ სამი display მნიშვნელობა ვიზუალურად, შემდეგ ვნახოთ, როგორ „ვამაგრებთ“ ელემენტს position-ით ზუსტ ადგილას.`,
    codeBlocks: [
      {
        label: "1. block vs inline vs inline-block",
        code: `<div style="display: block; background: #E9F1F7;">block ელემენტი (მთელი სიგანე)</div>
<span style="display: inline; background: yellow;">inline</span>
<span style="display: inline-block; width: 120px; background: lightgreen;">inline-block (width მუშაობს)</span>`,
        note: `მიაქციე ყურადღება: <code>inline</code> ელემენტს <code>width</code> რომც მისცე, ის უგულებელყოფილი იქნება — ამისთვის სჭირდება <code>inline-block</code> ან <code>block</code>.`,
      },
      {
        label: "2. position: relative — „წინაპარი“ ბეიჯისთვის",
        code: `.card {
  position: relative;
  /* ეს ხდის .card-ს "წინაპრად" შიდა absolute ელემენტისთვის */
}`,
        note: `<code>relative</code> ხშირად გამოიყენება არა თვითონ გასაწევად, არამედ იმისთვის, რომ გახდეს „წამყვანი წერტილი“ შიდა <code>absolute</code> ელემენტისთვის — ზუსტად ისე, როგორც ქვემოთ ვხედავთ.`,
      },
      {
        label: "3. position: absolute — ბეიჯის მიმაგრება კუთხეში",
        code: `.card {
  position: relative;
  width: 220px;
  padding: 16px;
  border: 1px solid #C7D4DD;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #E85D4C;
  color: white;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
}`,
        note: `<code>.badge</code>-ის <code>top</code>/<code>right</code> აითვლება არა მთელი გვერდის, არამედ უახლოესი <code>position: relative</code> (ან absolute/fixed) მქონე წინაპრის — ამ შემთხვევაში <code>.card</code>-ის — მიმართ.`,
      },
    ],
  },

  sandbox: {
    description: `სცადე შეცვალო <code>top</code>/<code>right</code> მნიშვნელობები ბეიჯზე, ან <code>display</code> მნიშვნელობა span ელემენტებზე.`,
    html: `<div class="card">
  <span class="badge">ახალი!</span>
  <h2>ჩემი ვიზიტ-ბარათი</h2>
  <p>მიყვარს ვებ-პროგრამირება.</p>
</div>`,
    css: `body { font-family: sans-serif; }
.card {
  position: relative;
  width: 260px;
  padding: 20px;
  border: 1px solid #C7D4DD;
  border-radius: 8px;
  background: #F4F7FA;
}
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #E85D4C;
  color: white;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "გადაანაცვლე ბეიჯი",
      body: `შეცვალე <code>.badge</code>-ის <code>top</code> და <code>right</code> მნიშვნელობები — გადაანაცვლე ბეიჯი ზედა-მარცხენა კუთხეში (მინიშნება: <code>right</code>-ის ნაცვლად <code>left</code> გჭირდება).`,
      hint: `თუ <code>right: 10px;</code>-ს <code>left: 10px;</code>-ით ჩაანაცვლებ, ბეიჯი მარჯვნიდან მარცხნივ „გადახტება“.`,
    },
    {
      level: "medium",
      title: "დაამატე მეორე ბეიჯი",
      body: `დაამატე მეორე <code>&lt;span class="badge"&gt;</code> ტექსტით „ტოპ“ და მოათავსე ის ქვედა-მარჯვენა კუთხეში (<code>bottom</code> და <code>right</code>-ის გამოყენებით), ისე რომ ორივე ბეიჯი ერთდროულად ჩანდეს განსხვავებულ კუთხეებში.`,
      hint: `დაგჭირდება ახალი კლასი (მაგ. <code>.badge-bottom</code>) განსხვავებული <code>position</code> მნიშვნელობებით, თორემ ორივე ბეიჯი ერთ ადგილას დაემთხვევა.`,
    },
    {
      level: "hard",
      title: "სცადე position: fixed",
      body: `დაამატე ახალი <code>&lt;div&gt;</code> ტექსტით „⬆ თავში დაბრუნება“ და მისცე <code>position: fixed; bottom: 16px; right: 16px;</code> — შემდეგ დაამატე გვერდზე საკმარისი ტექსტი/სივრცე, რომ სქროლვა დაგჭირდეს, და შეამოწმე, რჩება თუ არა ეს ღილაკი ეკრანზე გადახვევისას.`,
      hint: `<code>fixed</code> ელემენტს „ჩარჩოს“ (positioned წინაპარს) კი არა, მთელ ბრაუზერის ფანჯარას (viewport) მიემართება.`,
    },
  ],

  quiz: [
    {
      prompt: "რომელია `position`-ის ნაგულისხმევი (default) მნიშვნელობა?",
      options: ["`relative`", "`absolute`", "`static`", "`fixed`"],
      correctIndex: 2,
      explain: "თუ `position` საერთოდ არ არის მითითებული, ელემენტი `static`-ია — ანუ დგას ჩვეულებრივ, დოკუმენტის ნაკადში, `top`/`left`-ის გავლენის გარეშე.",
    },
    {
      prompt: "რისი მიმართ პოზიციონირდება `position: absolute` ელემენტი?",
      options: [
        "ყოველთვის მთელი გვერდის მიმართ",
        "უახლოესი `position`-იანი (static-ის გარდა) წინაპრის მიმართ",
        "ბრაუზერის ეკრანის მიმართ, გადახვევის გარეშეც",
        "მხოლოდ თავისი უშუალო მშობლის მიმართ, position-ის მიუხედავად",
      ],
      correctIndex: 1,
      explain: "`absolute` ელემენტი ეძებს უახლოეს წინაპარს, რომელსაც `position` აქვს `static`-ის გარდა (მაგ. `relative`) — თუ ასეთი არ არსებობს, მაშინ მთელი გვერდის მიმართ პოზიციონირდება.",
    },
    {
      prompt: "რა განსხვავებაა `display: block`-სა და `display: inline`-ს შორის `width`/`height`-თან მიმართებაში?",
      options: [
        "ორივეს თანაბრად შეუძლია `width`/`height`-ის მიღება",
        "`block` იღებს `width`/`height`-ს, `inline` — არა",
        "`inline` იღებს `width`/`height`-ს, `block` — არა",
        "არცერთს არ შეუძლია `width`/`height`-ის მიღება",
      ],
      correctIndex: 1,
      explain: "`block` ელემენტებს შეუძლიათ `width`/`height`-ის მითითება, `inline` ელემენტებზე კი ეს თვისებები უგულებელყოფილია — ამისთვის `inline-block` არსებობს, როგორც შუალედური ვარიანტი.",
    },
    {
      prompt: "რას აკეთებს `position: relative`, როცა `top`/`left` საერთოდ არ არის მითითებული?",
      options: [
        "ელემენტი ქრება გვერდიდან",
        "ელემენტი გადადის გვერდის თავში",
        "არაფერს ცვლის ვიზუალურად, მაგრამ ხდის ელემენტს „წინაპრად“ absolute შვილებისთვის",
        "ელემენტი ავტომატურად ცენტრირდება",
      ],
      correctIndex: 2,
      explain: "`relative`-ის გარეშე `top`/`left`-ის მითითებას ვიზუალური ეფექტი არ აქვს — მაგრამ ის მაინც სასარგებლოა, რადგან ქმნის „წამყვან წერტილს“ შიდა `absolute` ელემენტებისთვის.",
    },
    {
      prompt: "რატომ რჩება `position: fixed` ელემენტი ეკრანზე გვერდის გადახვევისასაც?",
      options: [
        "რადგან ის მიმაგრებულია ბრაუზერის ფანჯარასთან (viewport), და არა დოკუმენტის ნაკადთან",
        "რადგან მას აქვს `z-index: 999`",
        "რადგან ის ყოველთვის `<body>`-ის პირველი შვილია",
        "ეს მხოლოდ მობილურ მოწყობილობებზე მუშაობს",
      ],
      correctIndex: 0,
      explain: "`fixed` ელემენტი „აცურდება“ დოკუმენტის ჩვეულებრივი ნაკადიდან და პოზიციონირდება პირდაპირ ბრაუზერის ხედვის არეალის (viewport) მიმართ — ამიტომ გადახვევა მასზე გავლენას არ ახდენს.",
    },
  ],

  homework: `გახსენი წინა შეხვედრის <code>card.html</code> და დაამატე მინიმუმ ერთი <code>position: relative</code> კონტეინერი, რომელშიც <code>position: absolute</code>-ით მოთავსებულია პატარა ბეიჯი ან ეტიკეტი (მაგ. „ახალი“, „ჩემი საყვარელი“) რომელიმე კუთხეში — ისევე, როგორც დღევანდელ სენდბოქსში ვსწავლობდით.`,
};
