/* =========================================================================
   MEETING 12 — CSS ტიპოგრაფია
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[11] = {
  id: 11,
  title: "CSS ტიპოგრაფია",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: რატომ არის ტექსტის გარეგნობა ისეთივე მნიშვნელოვანი, როგორც შინაარსი" },
    { time: "15–35", label: "კოდის დემო: `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`" },
    { time: "35–50", label: "პრაქტიკა: ვიზიტ-ბარათის ტექსტის სტილიზაცია სენდბოქსში" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>ტიპოგრაფია — ტექსტის გარეგნობის მართვა — ერთ-ერთი ყველაზე გავლენიანი ინსტრუმენტია დიზაინში. ერთი და იგივე ტექსტი, სწორად შერჩეული შრიფტით, ზომით და დაშორებით, შეიძლება ბევრად უფრო სასიამოვნო და წასაკითხი გახდეს.</p>
      <p><code>font-family</code> განსაზღვრავს შრიფტს — კარგი პრაქტიკაა რამდენიმე ვარიანტის ჩამონათვალი, მძიმეებით გამოყოფილი (მაგ. <code>"Arial", sans-serif</code>): თუ პირველი შრიფტი მომხმარებლის მოწყობილობაზე არ არსებობს, ბრაუზერი მომდევნოზე გადადის. <code>font-size</code> — ტექსტის ზომა, <code>font-weight</code> — სისქე (<code>normal</code>, <code>bold</code>, ან რიცხვი 100-დან 900-მდე).</p>
      <p><code>line-height</code> განსაზღვრავს მანძილს ხაზებს შორის — ძალიან მჭიდრო ხაზები ერთმანეთს ერევა, ძალიან შორეულები კი კარგავს კავშირს. <code>text-align</code> აწესრიგებს ტექსტს ჰორიზონტალურად (<code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code>), ხოლო <code>letter-spacing</code> — მანძილს ასოებს შორის, ხშირად გამოსადეგი პატარა, დიდი ასოებით დაწერილი სათაურებისთვის.</p>
    `,
    analogy: `თუ HTML-ს რვეულის ტექსტს ვადარებდით, ტიპოგრაფია არის ის, თუ <strong>როგორი ხელით</strong> წერ ამ ტექსტს. <code>font-family</code> — რომელი კალმით წერ (მკვეთრი მარკერი თუ წვრილი ფანქარი). <code>font-size</code> — რამდენად დიდი ასოებით. <code>line-height</code> — რამდენ მანძილს ტოვებ სტრიქონებს შორის (თუ ძალიან ახლოა, ერთმანეთს გადაეფარება; თუ ძალიან შორია, თითქოს ცალკეული, დაუკავშირებელი წინადადებებია). <code>text-align</code> კი — წერ თუ არა გვერდის შუაში, მარცხნივ მიწყობილად, თუ თანაბრად ორივე კიდეზე გასწორებული.`,
  },

  demo: {
    intro: `დავიწყოთ შრიფტისა და ზომის არჩევით, შემდეგ დავამატოთ სისქე და დახრილობა, და ბოლოს — ხაზებს შორის მანძილი და სწორება.`,
    codeBlocks: [
      {
        label: "1. font-family და font-size",
        code: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 32px;
}`,
        note: `<code>sans-serif</code> (მოკლედ „ჯოხების გარეშე“) შრიფტები უფრო თანამედროვედ და სუფთად გამოიყურება, <code>serif</code> (პატარა „ჯოხებიანი“) შრიფტები კი — უფრო ტრადიციულად, წიგნის მსგავსად.`,
      },
      {
        label: "2. font-weight, font-style, text-decoration",
        code: `.important {
  font-weight: bold;   /* ან: 700 */
  font-style: italic;
}

.no-underline {
  text-decoration: none; /* ხშირად გამოიყენება ბმულებზე */
}`,
        note: `ბმულებს (<code>&lt;a&gt;</code>) ბრაუზერი ავტომატურად უსვამს ხაზგასმას (<code>underline</code>) — <code>text-decoration: none;</code>-ით შეგვიძლია ეს მოვხსნათ, თუ ჩვენს დიზაინში სჯობია.`,
      },
      {
        label: "3. line-height, letter-spacing, text-align",
        code: `p {
  line-height: 1.6;
  text-align: justify;
}

h2 {
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
}`,
        note: `<code>line-height: 1.6</code> ნიშნავს, რომ ხაზებს შორის მანძილი შრიფტის ზომის 1.6-ჯერაა — ეს ჩვეულებრივ საკითხავად კომფორტული თანაფარდობაა. <code>text-transform: uppercase</code> ავტომატურად აქცევს ტექსტს დიდ ასოებად, თავად ტექსტის შეცვლის გარეშე.`,
      },
    ],
  },

  sandbox: {
    description: `სცადე შეცვალო შრიფტი, ზომა, სისქე და მანძილები — ნახავ, რამდენად იცვლება ტექსტის „განწყობა“.`,
    html: `<h1>ჩემი ვიზიტ-ბარათი</h1>
<h2>ვინ ვარ მე</h2>
<p>მე ვარ მე-6 კლასის მოსწავლე და ვსწავლობ ვებ-პროგრამირებას. მიყვარს ახალი რაღაცების შექმნა კოდის დახმარებით და ვოცნებობ, ერთ დღეს ჩემი საკუთარი აპლიკაცია გავაკეთო.</p>`,
    css: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
h1 {
  font-family: Georgia, serif;
  font-size: 34px;
  text-align: center;
}
h2 {
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #4B5C6B;
}
p {
  font-size: 16px;
  line-height: 1.7;
  color: #16232E;
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "შეცვალე შრიფტი და ზომა",
      body: `სენდბოქსში შეცვალე <code>h1</code>-ის <code>font-family</code> (სცადე <code>"Courier New", monospace</code>) და <code>font-size</code> (სცადე <code>40px</code>) — ნახე, რამდენად იცვლება „ხასიათი“.`,
      hint: `<code>monospace</code> შრიფტები (ყველა ასო ერთნაირი სიგანის) ხშირად გამოიყენება კოდისთვის, არა ჩვეულებრივი ტექსტისთვის — ეს კარგი მაგალითია, თუ როგორ შეესაბამება შრიფტი კონტექსტს.`,
    },
    {
      level: "medium",
      title: "დაარეგულირე line-height და text-align",
      body: `დაამატე <code>p</code>-ს <code>line-height: 2;</code> და <code>text-align: center;</code> — შეადარე, როგორ განსხვავდება წაკითხვადობა თავდაპირველ მარცხნივ-სწორებულ ვერსიასთან.`,
      hint: `გრძელი აბზაცისთვის <code>text-align: center;</code> ჩვეულებრივ ნაკლებად წასაკითხია, ვიდრე <code>left</code> — სცადე თავად შეამჩნიო განსხვავება.`,
    },
    {
      level: "hard",
      title: "ააგე „ბეჯის“ სტილის სათაური",
      body: `დაამატე ახალი <code>&lt;p&gt;</code> ტექსტით „მოსწავლე – 2026“ და დაუწერე საკუთარი CSS კლასი, რომელიც იყენებს <code>text-transform: uppercase</code>, <code>letter-spacing: 3px</code>, <code>font-weight: bold</code> და მცირე <code>font-size</code>-ს (მაგ. <code>12px</code>) — ისეთი, როგორიც ხშირად ჩანს პროდუქტების ეტიკეტებზე.`,
      hint: `მცირე ზომა + დიდი ასოები + დაშორებული ასოები არის კლასიკური კომბინაცია პატარა, „ეტიკეტისებრი“ ტექსტისთვის.`,
    },
  ],

  quiz: [
    {
      prompt: "რატომ ჯობია `font-family`-ში რამდენიმე შრიფტის ჩამონათვალი, ერთის ნაცვლად?",
      options: [
        "გვერდი უფრო სწრაფად იტვირთება",
        "თუ პირველი შრიფტი მომხმარებელს არ აქვს, ბრაუზერი მომდევნოზე გადადის",
        "ეს სავალდებულოა, სხვაგვარად CSS არ იმუშავებს",
        "მხოლოდ სილამაზისთვის, ფუნქციური მნიშვნელობა არ აქვს",
      ],
      correctIndex: 1,
      explain: "ეს ჩამონათვალი (,,fallback stack“) უზრუნველყოფს, რომ თუ სასურველი შრიფტი მოწყობილობაზე დაინსტალირებული არ არის, ტექსტი მაინც წაკითხვადი დარჩეს მომდევნო ვარიანტით.",
    },
    {
      prompt: "რომელი თვისება აკონტროლებს მანძილს ტექსტის ხაზებს შორის?",
      options: ["`letter-spacing`", "`text-align`", "`line-height`", "`font-weight`"],
      correctIndex: 2,
      explain: "`line-height` განსაზღვრავს ვერტიკალურ მანძილს ხაზებს შორის — ეს პირდაპირ გავლენას ახდენს წაკითხვადობაზე.",
    },
    {
      prompt: "რას აკეთებს `text-transform: uppercase;`?",
      options: [
        "შლის ტექსტს",
        "აქცევს ტექსტს დიდ ასოებად ვიზუალურად, თავად ტექსტის შეცვლის გარეშე",
        "ზრდის ტექსტის ზომას",
        "უსვამს ტექსტს ხაზგასმას",
      ],
      correctIndex: 1,
      explain: "`text-transform: uppercase` მხოლოდ ვიზუალურად აჩვენებს ტექსტს დიდი ასოებით — HTML-ში ან მონაცემებში ტექსტი უცვლელი რჩება.",
    },
    {
      prompt: "რომელი მნიშვნელობა `text-align`-ისთვის ანაწილებს ტექსტს თანაბრად ორივე კიდემდე (გაზეთის მსგავსად)?",
      options: ["`center`", "`left`", "`justify`", "`right`"],
      correctIndex: 2,
      explain: "`justify` ტექსტს ისე „ჭიმავს“, რომ ყოველი სრული ხაზი ორივე მხრიდან ერთნაირად იყოს გასწორებული — ეს ხშირად გამოიყენება გაზეთებში/წიგნებში.",
    },
    {
      prompt: "რომელი თვისებით მოვხსნით ბმულს ავტომატურ ხაზგასმას?",
      options: [
        "`font-style: none;`",
        "`text-decoration: none;`",
        "`text-align: none;`",
        "`text-transform: none;`",
      ],
      correctIndex: 1,
      explain: "`text-decoration: none;` შლის ხაზგასმას (ან ხაზგადასმას/ზემოხაზს), რომელიც ბრაუზერს ავტომატურად აქვს ბმულებზე (`<a>`) დაწესებული.",
    },
  ],

  homework: `გახსენი წინა შეხვედრის <code>card.html</code> და დახვეწე მისი ტიპოგრაფია: აირჩიე ერთი შრიფტი სათაურებისთვის (<code>font-family</code>, fallback-ებით) და ერთი — ჩვეულებრივი ტექსტისთვის, დააყენე შესაბამისი <code>font-size</code> და <code>line-height</code> ყველა აბზაცზე, და გამოიყენე <code>text-align</code>/<code>letter-spacing</code> მინიმუმ ერთ სათაურზე, „ეტიკეტისებრი“ ეფექტისთვის.`,
};
