/* =========================================================================
   MEETING 13 — CSS Flexbox I — ღერძები და განლაგება
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[13] = {
  id: 13,
  title: "CSS Flexbox I — ღერძები და განლაგება",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: რა პრობლემას წყვეტს Flexbox და რა არის „ღერძები“" },
    { time: "15–35", label: "კოდის დემო: `display: flex`, `flex-direction`, `justify-content`, `align-items`" },
    { time: "35–50", label: "პრაქტიკა: ნავიგაციის ზოლის აწყობა Flexbox-ით" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>აქამდე ელემენტების გვერდიგვერდ ან თანაბრად დაშორებით მოწყობა საკმაოდ რთული იყო — <code>display: inline-block</code> და ხელით გამოთვლილი <code>margin</code>-ები გვჭირდებოდა. <strong>Flexbox</strong> ამ პრობლემას წყვეტს: საკმარისია მშობელს (კონტეინერს) დავუწეროთ <code>display: flex;</code>, და მისი შვილი ელემენტები ავტომატურად ეწყობიან ერთ ხაზზე, მოქნილად.</p>
      <p>Flexbox ორ „ღერძზე“ მუშაობს: <strong>მთავარი ღერძი</strong> (main axis) — ის მიმართულება, რომლითაც ლაგდება ელემენტები (ნაგულისხმევად — ჰორიზონტალურად, მარცხნიდან მარჯვნივ), და <strong>განივი ღერძი</strong> (cross axis) — მთავარის პერპენდიკულარული (ნაგულისხმევად — ვერტიკალურად). <code>flex-direction: column;</code>-ით შეგვიძლია მთავარი ღერძი ვერტიკალურზე შევცვალოთ.</p>
      <p>ორი მთავარი თვისება მართავს განლაგებას: <code>justify-content</code> — ანაწილებს ელემენტებს <strong>მთავარი</strong> ღერძის გასწვრივ (მაგ. <code>center</code>, <code>space-between</code>), და <code>align-items</code> — ალაგებს მათ <strong>განივი</strong> ღერძის გასწვრივ (მაგ. <code>center</code>, <code>stretch</code>).</p>
    `,
    analogy: `წარმოიდგინე, რომ ფიზკულტურის მასწავლებელი კლასს რიგში აწყობს. „მშობელი“ — მასწავლებელი — წყვეტს ორ რამეს: <strong>რომელი მიმართულებით</strong> დადგნენ მოსწავლეები (რიგში ჰორიზონტალურად — <code>flex-direction: row</code>, თუ სვეტად ვერტიკალურად — <code>column</code>), და <strong>როგორ განაწილდნენ</strong> ამ რიგში (მჭიდროდ ერთმანეთთან თუ თანაბარი დაშორებით — <code>justify-content</code>), და <strong>როგორ დაწყონ</strong> განივად — ყველა ერთ ხაზზე, თუ ცენტრში, თუ სიმაღლის მიხედვით („stretch“) — <code>align-items</code>.`,
  },

  demo: {
    intro: `დავიწყოთ უმარტივესი Flexbox კონტეინერით, შემდეგ ვნახოთ, როგორ ვმართავთ განლაგებას ორივე ღერძზე.`,
    codeBlocks: [
      {
        label: "1. display: flex და flex-direction",
        code: `.container {
  display: flex;
  flex-direction: row; /* ნაგულისხმევია — შეიძლება არც დაწეროთ */
}

.container-column {
  display: flex;
  flex-direction: column;
}`,
        note: `მხოლოდ <code>display: flex;</code>-ის დამატებით, შვილი ელემენტები, რომლებიც აქამდე თითოეული ახალ ხაზზე იწყებოდა (block ელემენტები), ახლა ავტომატურად ერთ ხაზზე გამწკრივდებიან.`,
      },
      {
        label: "2. justify-content — მთავარი ღერძის გასწვრივ",
        code: `.row {
  display: flex;
  justify-content: space-between;
  /* სხვა ვარიანტები: flex-start, center, flex-end, space-around */
}`,
        note: `<code>space-between</code> პირველ ელემენტს კიდურა-მარცხნივ სვამს, ბოლოს — კიდურა-მარჯვნივ, დანარჩენებს კი შორის თანაბრად ანაწილებს — კლასიკური არჩევანია ნავიგაციის ზოლებისთვის.`,
      },
      {
        label: "3. align-items — განივი ღერძის გასწვრივ",
        code: `.row {
  display: flex;
  height: 100px;
  align-items: center;
  /* სხვა ვარიანტები: flex-start, flex-end, stretch */
}`,
        note: `<code>align-items: center;</code> ვერტიკალურად აცენტრირებს ელემენტებს კონტეინერის სიმაღლეში — ეს ერთ-ერთი ყველაზე ხშირად საჭირო ტრიუკია, რომლის გაკეთებაც Flexbox-მდე რთული იყო.`,
      },
    ],
  },

  sandbox: {
    description: `სცადე <code>flex-direction</code>, <code>justify-content</code> და <code>align-items</code> სხვადასხვა მნიშვნელობები — ნახავ, როგორ იცვლება ელემენტების განლაგება.`,
    html: `<nav class="navbar">
  <div class="logo">ჩემი გვერდი</div>
  <div class="links">
    <a href="#">მთავარი</a>
    <a href="#">ჩემ შესახებ</a>
    <a href="#">კონტაქტი</a>
  </div>
</nav>`,
    css: `body { font-family: sans-serif; margin: 0; }
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #163C63;
  padding: 16px 24px;
}
.logo {
  color: white;
  font-weight: bold;
}
.links {
  display: flex;
  gap: 20px;
}
.links a {
  color: white;
  text-decoration: none;
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "შეცვალე მიმართულება",
      body: `სენდბოქსში შეცვალე <code>.navbar</code>-ის <code>flex-direction</code> მნიშვნელობა <code>row</code>-დან <code>column</code>-ზე — დააკვირდი, ლოგო და ბმულები ახლა ვერტიკალურად როგორ დაილაგება.`,
      hint: `<code>column</code>-ის შემდეგ <code>justify-content</code> და <code>align-items</code>-ის „როლები“ ერთმანეთს უცვლიან — <code>justify-content</code> ახლა ვერტიკალურ განლაგებას მართავს.`,
    },
    {
      level: "medium",
      title: "სცადე სხვადასხვა justify-content",
      body: `დააბრუნე <code>flex-direction: row;</code> და შემდეგ სცადე <code>justify-content</code>-ის ოთხივე დანარჩენი მნიშვნელობა — <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-around</code> — და დააკვირდი განსხვავებებს.`,
      hint: `<code>space-between</code> და <code>space-around</code> ერთმანეთს ჰგავს, მაგრამ <code>space-around</code> კიდურა ელემენტების გარშემოც ტოვებს სივრცეს.`,
    },
    {
      level: "hard",
      title: "ააგე ბარათების რიგი",
      body: `HTML-ში ჩაანაცვლე ნავიგაცია ახალი <code>&lt;div class="cards"&gt;</code>-ით, რომელშიც სამი <code>&lt;div class="card"&gt;</code> ბარათია (თითოეულს ჰქონდეს ტექსტი). CSS-ში დაუწერე <code>.cards</code>-ს <code>display: flex; gap: 16px;</code> და თითოეულ <code>.card</code>-ს — ჩარჩო, padding და ფონი.`,
      hint: `<code>gap</code> თვისება ავტომატურად ამატებს თანაბარ მანძილს flex ელემენტებს შორის — margin-ის ხელით გამოთვლა აღარ გჭირდება.`,
    },
  ],

  quiz: [
    {
      prompt: "რომელი თვისებით ვაქცევთ ელემენტს Flexbox კონტეინერად?",
      options: ["`display: block;`", "`display: flex;`", "`position: flex;`", "`flex: container;`"],
      correctIndex: 1,
      explain: "`display: flex;` არის ის, რაც ელემენტს (და მის პირდაპირ შვილებს) Flexbox-ის წესებით მართვად ხდის.",
    },
    {
      prompt: "რას მართავს `justify-content`?",
      options: [
        "ელემენტების ფერს",
        "ელემენტების განლაგებას მთავარი ღერძის გასწვრივ",
        "ელემენტების ზომას",
        "ელემენტების ჩარჩოს სისქეს",
      ],
      correctIndex: 1,
      explain: "`justify-content` განსაზღვრავს, როგორ ნაწილდება თავისუფალი სივრცე მთავარი ღერძის (ნაგულისხმევად — ჰორიზონტალურის) გასწვრივ.",
    },
    {
      prompt: "რას აკეთებს `flex-direction: column;`?",
      options: [
        "შლის ყველა ელემენტს",
        "ცვლის მთავარ ღერძს ვერტიკალურზე — ელემენტები სვეტად ლაგდებიან",
        "ზრდის ელემენტების ზომას",
        "მალავს ბოლო ელემენტს",
      ],
      correctIndex: 1,
      explain: "`flex-direction: column;` აქცევს მთავარ ღერძს ვერტიკალურად — ელემენტები ერთმანეთის ქვეშ, სვეტად ლაგდებიან, რიგში დგომის ნაცვლად.",
    },
    {
      prompt: "რომელი თვისება ალაგებს ელემენტებს განივი ღერძის გასწვრივ (ჩვეულებრივ — ვერტიკალურად)?",
      options: ["`justify-content`", "`flex-direction`", "`align-items`", "`display`"],
      correctIndex: 2,
      explain: "`align-items` მართავს განლაგებას განივ ღერძზე — `justify-content`-ისგან განსხვავებით, რომელიც მთავარ ღერძს ეხება.",
    },
    {
      prompt: "რას აკეთებს `gap` თვისება flex კონტეინერზე?",
      options: [
        "შლის ელემენტებს შორის მანძილს",
        "ამატებს თანაბარ სივრცეს ელემენტებს შორის, margin-ის ხელით გამოთვლის გარეშე",
        "ცვლის ელემენტების ფერს",
        "მუშაობს მხოლოდ `flex-direction: column;`-თან ერთად",
      ],
      correctIndex: 1,
      explain: "`gap` ავტომატურად ამატებს მითითებულ სივრცეს ყველა მეზობელ flex ელემენტს შორის — ცალკეული margin-ების დაწერა აღარ სჭირდება.",
    },
  ],

  homework: `გახსენი წინა შეხვედრის <code>card.html</code> და გადააქციე ერთ-ერთი სექცია (მაგ. ინტერესების სია ან ფოტოების გალერეა) Flexbox კონტეინერად: დაუმატე მშობელს <code>display: flex;</code>, აირჩიე შესაბამისი <code>justify-content</code> და <code>align-items</code>, და გამოიყენე <code>gap</code> ელემენტებს შორის მანძილისთვის.`,
};
