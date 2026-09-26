/* =========================================================================
   MEETING 15 — CSS გრიდი
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[15] = {
  id: 15,
  title: "CSS გრიდი",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: რატომ სჭირდება ცალკე ინსტრუმენტი ორგანზომილებიან განლაგებას" },
    { time: "15–35", label: "კოდის დემო: `display: grid`, `grid-template-columns`, `fr`, `repeat()`, `gap`" },
    { time: "35–50", label: "პრაქტიკა: სურათების გალერეის აწყობა CSS Grid-ით" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>Flexbox შესანიშნავია, როცა ელემენტები ერთ ხაზზე (ან ერთ სვეტში) ლაგდება — ეს არის <strong>ერთგანზომილებიანი</strong> ინსტრუმენტი. მაგრამ როცა გვჭირდება ნამდვილი <strong>ბადე</strong> — ერთდროულად რამდენიმე მწკრივი <strong>და</strong> რამდენიმე სვეტი, ერთმანეთთან სწორად გასწორებული — გამოსადეგია <strong>CSS Grid</strong>, ორგანზომილებიანი განლაგების ინსტრუმენტი.</p>
      <p>კონტეინერს ვაქცევთ ბადედ <code>display: grid;</code>-ით, შემდეგ <code>grid-template-columns</code>-ით ვწერთ, რამდენი სვეტი გვინდა და რა სიგანის: მაგალითად <code>grid-template-columns: 200px 200px 200px;</code> ქმნის სამ თანაბარ 200px სვეტს. მოხერხებულია სპეციალური ერთეული <code>fr</code> (fraction — „წილი“): <code>grid-template-columns: 1fr 1fr 1fr;</code> ქმნის სამ თანაბარ სვეტს, რომლებიც ავტომატურად იზომებიან კონტეინერის მთელი სიგანის მიხედვით.</p>
      <p>განმეორებადი სვეტების დასაწერად გამოსადეგია <code>repeat()</code> ფუნქცია: <code>repeat(3, 1fr)</code> იგივეა, რაც <code>1fr 1fr 1fr</code>, უბრალოდ მოკლედ. <code>gap</code> თვისება (Flexbox-ის მსგავსად) ამატებს თანაბარ მანძილს უჯრედებს შორის, ორივე მიმართულებით.</p>
    `,
    analogy: `თუ Flexbox არის მოსწავლეების ერთ რიგში ჩამწკრივება, CSS Grid არის მთელი საკლასო ოთახის მერხების ბადედ დაწყობა — 4 რიგი და 5 სვეტი, წინასწარ დაგეგმილი. ყოველ მოსწავლეს ზუსტად იცის, რომელ რიგშია და რომელ სვეტში — ეს არის ის, რასაც <code>grid-template-columns</code> და <code>grid-template-rows</code> აკეთებენ: ისინი წინასწარ ხატავენ მთელ „ბადეს“, სანამ საერთოდ რომელიმე მოსწავლეს (ელემენტს) მასში ჩავსვამთ.`,
  },

  demo: {
    intro: `დავიწყოთ მარტივი სამსვეტიანი ბადით, შემდეგ გავიმარტივოთ repeat()-ით, და ბოლოს — ერთი უჯრედის რამდენიმე სვეტზე გაშლა.`,
    codeBlocks: [
      {
        label: "1. display: grid და grid-template-columns",
        code: `.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}`,
        note: `<code>1fr 1fr 1fr</code> ქმნის სამ თანაბარ სვეტს — თუ კონტეინერის სიგანე იცვლება, სვეტებიც ავტომატურად, პროპორციულად იცვლება.`,
      },
      {
        label: "2. repeat() ფუნქცია",
        code: `.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}`,
        note: `<code>repeat(4, 1fr)</code> ზუსტად იგივეა, რაც <code>1fr 1fr 1fr 1fr</code> — მაგრამ ბევრად მოკლე და მარტივი შესაცვლელია (მაგ. 4-დან 6-მდე გადასვლა).`,
      },
      {
        label: "3. ერთი უჯრედის გაშლა — grid-column: span",
        code: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.featured {
  grid-column: span 2; /* ეს უჯრედი ორ სვეტს იკავებს */
}`,
        note: `<code>grid-column: span 2;</code> ეუბნება ბრაუზერს: „ეს კონკრეტული ელემენტი ჩვეულებრივი ერთი სვეტის ნაცვლად ორ სვეტს დაიკავოს“ — გამოსადეგია გამორჩეული/მთავარი ელემენტისთვის.`,
      },
    ],
  },

  sandbox: {
    description: `შეცვალე სვეტების რაოდენობა <code>repeat()</code>-ში, ან დაამატე <code>grid-column: span 2;</code> ერთ-ერთ ბარათს.`,
    html: `<div class="gallery">
  <div class="card featured">გამორჩეული პროექტი</div>
  <div class="card">პროექტი 2</div>
  <div class="card">პროექტი 3</div>
  <div class="card">პროექტი 4</div>
  <div class="card">პროექტი 5</div>
</div>`,
    css: `body { font-family: sans-serif; }
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.card {
  padding: 20px;
  background: #E9F1F7;
  color: #163C63;
  border-radius: 8px;
  text-align: center;
}
.featured {
  grid-column: span 2;
  background: #163C63;
  color: white;
  font-weight: bold;
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "შეცვალე სვეტების რაოდენობა",
      body: `სენდბოქსში შეცვალე <code>repeat(3, 1fr)</code> — სცადე <code>repeat(2, 1fr)</code> და შემდეგ <code>repeat(5, 1fr)</code> — დააკვირდი, როგორ იცვლება ბარათების ზომა და თითო მწკრივზე რაოდენობა.`,
      hint: `რაც მეტია სვეტი, მით უფრო ვიწრო იქნება თითოეული — რადგან <code>1fr</code> ყოველთვის თანაბრად ინაწილებს მთელ სიგანეს.`,
    },
    {
      level: "medium",
      title: "დაამატე მეექვსე ბარათი",
      body: `დაამატე ახალი <code>&lt;div class="card"&gt;</code> „პროექტი 6“-ით — ნახავ, რომ ის ავტომატურად გადადის მეორე მწკრივზე, ბადის სტრუქტურის დარღვევის გარეშე.`,
      hint: `CSS Grid ავტომატურად ქმნის ახალ მწკრივებს, როცა უჯრედები აღარ ეტევა — ამაზე ცალკე ფიქრი არ გჭირდება.`,
    },
    {
      level: "hard",
      title: "შეცვალე რომელი ბარათი არის „გამორჩეული“",
      body: `წაშალე <code>.featured</code> კლასი პირველი ბარათიდან და დაამატე ის სამზე ან ოთხზე — ასევე სცადე <code>grid-column: span 3;</code> (მთელი მწკრივის დაკავება), <code>span 2;</code>-ის ნაცვლად.`,
      hint: `თუ <code>span</code> რიცხვი აღემატება დარჩენილ სვეტების რაოდენობას მწკრივში, ეს ელემენტი ავტომატურად გადავა შემდეგ მწკრივზე.`,
    },
  ],

  quiz: [
    {
      prompt: "რომელი თვისებით ვაქცევთ კონტეინერს CSS Grid-ად?",
      options: ["`display: flex;`", "`display: grid;`", "`display: table;`", "`grid: true;`"],
      correctIndex: 1,
      explain: "`display: grid;` აქცევს ელემენტს Grid კონტეინერად — მისი პირდაპირი შვილები ხდებიან ბადის უჯრედები.",
    },
    {
      prompt: "რას ნიშნავს ერთეული `fr` `grid-template-columns`-ში?",
      options: [
        "პიქსელს",
        "პროცენტს",
        "თანაფარდობით წილს კონტეინერის თავისუფალი სივრციდან",
        "წამს (ანიმაციის ხანგრძლივობას)",
      ],
      correctIndex: 2,
      explain: "`fr` (fraction) წარმოადგენს პროპორციულ წილს — `1fr 1fr` ქმნის ორ თანაბარ სვეტს, ხოლო `2fr 1fr` — ისეთს, სადაც პირველი ორჯერ უფრო ფართოა.",
    },
    {
      prompt: "რას აკეთებს `repeat(4, 1fr)`?",
      options: [
        "ქმნის ერთ, ოთხჯერ დიდ სვეტს",
        "იმეორებს ანიმაციას 4-ჯერ",
        "იგივეა, რაც `1fr 1fr 1fr 1fr` ჩაწერა — 4 თანაბარი სვეტი",
        "შლის ბოლო 4 უჯრედს",
      ],
      correctIndex: 2,
      explain: "`repeat(4, 1fr)` არის მოკლე, მოსახერხებელი გზა იმის დასაწერად, რომ გვინდა 4 თანაბარი სვეტი — გრძელი ჩამონათვალის ხელით წერის ნაცვლად.",
    },
    {
      prompt: "მთავარი განსხვავება Flexbox-სა და Grid-ს შორის რა არის?",
      options: [
        "არანაირი, ისინი იდენტურია",
        "Flexbox მუშაობს მხოლოდ ტექსტზე, Grid — მხოლოდ სურათებზე",
        "Flexbox ერთგანზომილებიანია (ერთი ხაზი/სვეტი), Grid — ორგანზომილებიანი (მწკრივები და სვეტები ერთად)",
        "Grid მუშაობს მხოლოდ ძველ ბრაუზერებში",
      ],
      correctIndex: 2,
      explain: "Flexbox განკუთვნილია ერთი მიმართულებით (ხაზად ან სვეტად) განლაგებისთვის, Grid კი — ორივე მიმართულებით ერთდროულად, ნამდვილი ბადის შესაქმნელად.",
    },
    {
      prompt: "რას აკეთებს `grid-column: span 2;` კონკრეტულ ელემენტზე?",
      options: [
        "ელემენტს შლის",
        "ელემენტი იკავებს ორ სვეტს ერთის ნაცვლად",
        "ელემენტი ორჯერ მცირდება",
        "ელემენტი ორ ცალკე ელემენტად იყოფა",
      ],
      correctIndex: 1,
      explain: "`grid-column: span 2;` ეუბნება ბადეს, რომ ეს ერთი ელემენტი გაფართოვდეს და ორი ჩვეულებრივი სვეტის ადგილი დაიკავოს.",
    },
  ],

  homework: `გახსენი წინა შეხვედრის <code>card.html</code> და გადააქციე ერთ-ერთი Flexbox სექცია (მაგ. ინტერესების ბარათები) CSS Grid-ად: <code>display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;</code>. აირჩიე ერთი ბარათი და მიეცი <code>grid-column: span 2;</code>, რომ „გამორჩეული“ ჩანდეს.`,
};
