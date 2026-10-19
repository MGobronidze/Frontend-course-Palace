/* =========================================================================
   MEETING 17 — Advanced HTML & CSS — გადასვლები და ანიმაციები
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[17] = {
  id: 17,
  title: "Advanced HTML & CSS — გადასვლები და ანიმაციები",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: რატომ ცოცხლდება გვერდი გადასვლებითა და ანიმაციებით" },
    { time: "15–35", label: "კოდის დემო: `:hover`, `transition`, `transform` და `@keyframes`" },
    { time: "35–50", label: "პრაქტიკა: ანიმირებული ღილაკისა და ბეიჯის შექმნა" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>აქამდე CSS-ის ცვლილებები მყისიერად ხდებოდა — ფერი ან ზომა ერთბაშად „ხტებოდა“ ახალ მნიშვნელობაზე. <code>transition</code> თვისება საშუალებას გვაძლევს, ეს ცვლილება <strong>გლუვად</strong>, დროში გავწელოთ. მაგალითად: <code>transition: background-color 0.3s ease;</code> ნიშნავს „როცა <code>background-color</code> შეიცვლება, გააკეთე ეს გლუვად, 0.3 წამში“.</p>
      <p><code>transition</code> ჩვეულებრივ გამოიყენება <code>:hover</code> ფსევდო-კლასთან ერთად — <code>:hover</code> ირჩევს ელემენტს მხოლოდ მაშინ, როცა მასზე კურსორი დგას. ხშირად იცვლება არა მხოლოდ ფერი, არამედ <code>transform</code>-იც — <code>scale()</code> (ზომის შეცვლა), <code>translate()</code> (გადაადგილება) ან <code>rotate()</code> (შემობრუნება).</p>
      <p>როცა გვჭირდება უფრო რთული, <strong>განმეორებადი</strong> ან მრავალეტაპიანი ანიმაცია (არა უბრალოდ ერთი მდგომარეობიდან მეორეზე გადასვლა), ვიყენებთ <code>@keyframes</code>-ს — ის განსაზღვრავს ანიმაციის ეტაპებს (მაგ. <code>0%</code>, <code>50%</code>, <code>100%</code>), შემდეგ კი <code>animation</code> თვისებით ვაბამთ მას კონკრეტულ ელემენტზე.</p>
    `,
    analogy: `<code>transition</code> ჰგავს განათების დიმერს (მარეგულირებელ ღილაკს) ჩვეულებრივი ჩართვა/გამორთვის ღილაკის ნაცვლად — სინათლე თანდათან ინთება ან ქრება, მყისიერი „კლაკ“-ის ნაცვლად. <code>@keyframes</code> ანიმაცია კი ჰგავს მულტფილმის კადრებს — თითოეული პროცენტი (<code>0%</code>, <code>50%</code>, <code>100%</code>) არის ერთი კადრი, და ბრაუზერი ავტომატურად „ხატავს“ გლუვ გადასვლას ამ კადრებს შორის, ისევე როგორც სწრაფად გადაფურცვლილი ნახატები მოძრაობის ილუზიას ქმნიან.`,
  },

  demo: {
    intro: `დავიწყოთ მარტივი ფერის გადასვლით hover-ზე, დავამატოთ transform, და ბოლოს ვნახოთ განმეორებადი ანიმაცია keyframes-ით.`,
    codeBlocks: [
      {
        label: "1. transition და :hover — ფერის გლუვი ცვლილება",
        code: `.button {
  background-color: #163C63;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #E85D4C;
}`,
        note: `<code>transition</code> ყოველთვის იწერება იმ ელემენტზე, რომელიც <strong>იცვლება</strong> (<code>.button</code>), და არა <code>:hover</code> ვერსიაზე. სინტაქსია: თვისება, ხანგრძლივობა, სისწრაფის ტიპი.`,
      },
      {
        label: "2. transform: scale — ღილაკის „გაზრდა“ hover-ზე",
        code: `.button {
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.button:hover {
  transform: scale(1.08);
  background-color: #E85D4C;
}`,
        note: `<code>scale(1.08)</code> ზრდის ელემენტს 8%-ით, თავისი ცენტრის გარშემო — ეს ერთ-ერთი ყველაზე ხშირად გამოყენებული, სასიამოვნო „მიკრო-ანიმაციაა“ ღილაკებზე.`,
      },
      {
        label: "3. @keyframes — განმეორებადი ანიმაცია",
        code: `@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.badge {
  animation: pulse 1.5s ease-in-out infinite;
}`,
        note: `<code>animation: pulse 1.5s ease-in-out infinite;</code> ნიშნავს: გამოიყენე <code>pulse</code> სახელით აღწერილი კადრები, გაწელე 1.5 წამზე, გლუვი სისწრაფით, და გაიმეორე <strong>უსასრულოდ</strong> (<code>infinite</code>).`,
      },
    ],
  },

  sandbox: {
    description: `გადაატარე კურსორი ღილაკზე — ნახავ გლუვ გადასვლას. ბეიჯი კი თავისით „პულსირებს“ — სცადე შეცვალო ანიმაციის სისწრაფე ან scale-ის მნიშვნელობა.`,
    html: `<button class="button">გადაატარე კურსორი</button>
<span class="badge">ახალი!</span>`,
    css: `body { font-family: sans-serif; }
.button {
  background-color: #163C63;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
}
.button:hover {
  transform: scale(1.08);
  background-color: #E85D4C;
}

.badge {
  display: inline-block;
  margin-left: 16px;
  padding: 4px 12px;
  background: #F2A73B;
  color: #4A2E00;
  border-radius: 999px;
  font-weight: bold;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "შეცვალე გადასვლის ხანგრძლივობა",
      body: `სენდბოქსში შეცვალე <code>.button</code>-ის <code>transition</code>-ში <code>0.2s</code> და <code>0.3s</code> მნიშვნელობები — სცადე <code>1s</code> (ნელი) და <code>0.05s</code> (თითქმის მყისიერი) — იგრძენი განსხვავება.`,
      hint: `ძალიან ნელი გადასვლა (მაგ. 2s) ღილაკებზე ხშირად მოსაწყენად და „ჩამორჩენილად“ იგრძნობა — 0.15-დან 0.3 წამამდე ჩვეულებრივ საუკეთესოა.`,
    },
    {
      level: "medium",
      title: "დაამატე ბრუნვა hover-ზე",
      body: `დაამატე <code>.badge:hover</code> წესი, რომელშიც <code>transform: rotate(15deg);</code> — და დაამატე <code>.badge</code>-ს ცალკე <code>transition: transform 0.2s;</code>, რომ ეს ბრუნვაც გლუვი იყოს.`,
      hint: `მიაქციე ყურადღება: <code>.badge</code>-ს უკვე აქვს <code>animation</code> (პულსირება) — <code>transition</code> და <code>animation</code> ერთდროულად შეგიძლია გამოიყენო.`,
    },
    {
      level: "hard",
      title: "შექმენი საკუთარი @keyframes ანიმაცია",
      body: `დაწერე ახალი <code>@keyframes shake</code>, რომელიც ელემენტს ოდნავ „აძვრენს“ მარცხნივ-მარჯვნივ (მაგ. <code>0%</code>-ზე <code>translateX(0)</code>, <code>25%</code>-ზე <code>translateX(-5px)</code>, <code>75%</code>-ზე <code>translateX(5px)</code>, <code>100%</code>-ზე <code>translateX(0)</code>), და გამოიყენე ის <code>.button:hover</code>-ზე <code>scale</code>-ის ნაცვლად ან დამატებით.`,
      hint: `<code>translateX()</code> გადააადგილებს ელემენტს ჰორიზონტალურად, პიქსელებში — უარყოფითი მნიშვნელობა მარცხნივ, დადებითი — მარჯვნივ.`,
    },
  ],

  quiz: [
    {
      prompt: "რას აკეთებს `transition` თვისება?",
      options: [
        "მყისიერად ცვლის ელემენტის ფერს",
        "ხდის ცვლილებას (მაგ. ფერის ან ზომის) გლუვს, დროში გაწელილს",
        "შლის ელემენტს ეკრანიდან",
        "ცვლის ელემენტის HTML ტეგს",
      ],
      correctIndex: 1,
      explain: "`transition` არ ცვლის თავად მნიშვნელობას — ის განსაზღვრავს, რომ ცვლილება (რომელიც სხვაგან, მაგ. `:hover`-ში ხდება) მყისიერის ნაცვლად გლუვად მოხდეს.",
    },
    {
      prompt: "როდის აქტიურდება `:hover` ფსევდო-კლასის სტილები?",
      options: [
        "გვერდის ჩატვირთვისას ყოველთვის",
        "როცა კურსორი დგას ელემენტზე",
        "როცა ელემენტზე დააწკაპუნებ",
        "მხოლოდ მობილურ მოწყობილობებზე",
      ],
      correctIndex: 1,
      explain: "`:hover` ირჩევს ელემენტს მხოლოდ იმ დროისთვის, როცა მაუსის კურსორი მასზეა განთავსებული.",
    },
    {
      prompt: "რა განსხვავებაა `transition`-სა და `animation`-ს (`@keyframes`-თან ერთად) შორის?",
      options: [
        "არანაირი, ისინი იდენტურია",
        "`transition` ერთჯერადი გადასვლაა ორ მდგომარეობას შორის, `animation` კი შეიძლება იყოს მრავალეტაპიანი და განმეორებადი",
        "`animation` მუშაობს მხოლოდ ფერებზე",
        "`transition` მუშაობს მხოლოდ ტექსტზე",
      ],
      correctIndex: 1,
      explain: "`transition` აღწერს გადასვლას ორ მდგომარეობას შორის (მაგ. ჩვეულებრივი → hover), `@keyframes`+`animation` კი შეიძლება განსაზღვრავდეს რამდენიმე ეტაპს და გამეორდეს `infinite`-ით.",
    },
    {
      prompt: "რას ნიშნავს `animation: pulse 1.5s ease-in-out infinite;`-ში სიტყვა `infinite`?",
      options: [
        "ანიმაცია ერთხელ გაეშვება და გაჩერდება",
        "ანიმაცია გაიმეორდება უსასრულოდ",
        "ანიმაცია საერთოდ არ გაეშვება",
        "ანიმაციის სიჩქარე უსასრულოდ გაიზრდება",
      ],
      correctIndex: 1,
      explain: "`infinite` ეუბნება ბრაუზერს, გაიმეოროს ეს ანიმაციის ციკლი მუდმივად, გაჩერების გარეშე — სანამ ელემენტი გვერდზეა.",
    },
    {
      prompt: "რომელ თვისებას იყენებენ ჩვეულებრივ ელემენტის ვიზუალური ზომის/პოზიციის (ჩარჩოს ხელახლა გამოთვლის გარეშე) სწრაფად შესაცვლელად, `scale()`/`translate()`-ის მეშვეობით?",
      options: ["`display`", "`position`", "`transform`", "`float`"],
      correctIndex: 2,
      explain: "`transform` (მისი ფუნქციებით — `scale()`, `translate()`, `rotate()`) ცვლის ელემენტის ვიზუალურ გამოსახვას ისე, რომ არ „არღვევს“ გვერდის დანარჩენ განლაგებას — ეს ანიმაციებისთვის ძალიან ეფექტურია.",
    },
  ],

  homework: `გახსენი წინა შეხვედრის <code>card.html</code> და დაამატე: (1) მინიმუმ ერთ ღილაკს ან ბმულს — <code>transition</code> და <code>:hover</code> ეფექტი (ფერის და/ან <code>transform: scale()</code>-ის ცვლილებით), და (2) მინიმუმ ერთ ელემენტს (მაგ. ლოგო ან ბეიჯი) — საკუთარი <code>@keyframes</code> ანიმაცია, რომელიც მსუბუქად და არა-გამაღიზიანებლად მეორდება.`,
};
