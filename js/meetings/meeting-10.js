/* =========================================================================
   MEETING 10 — CSS ბოქს მოდელი
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[10] = {
  id: 10,
  title: "CSS ბოქს მოდელი",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: ყოველი ელემენტი არის ყუთი — content, padding, border, margin" },
    { time: "15–35", label: "კოდის დემო: `padding`, `border`, `margin` და `box-sizing`" },
    { time: "35–50", label: "პრაქტიკა: ვიზიტ-ბარათის ბარათებზე სივრცის მართვა" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>ერთ-ერთი ყველაზე მნიშვნელოვანი იდეა CSS-ში ისაა, რომ <strong>ყოველი</strong> HTML ელემენტი ბრაუზერისთვის არის მართკუთხა „ყუთი“ — მაშინაც კი, თუ ის ტექსტია ან სურათი. ეს ყუთი შედგება ოთხი ფენისგან, გარედან შიგნისკენ: <strong>margin</strong> (მანძილი ამ ყუთსა და მეზობელ ყუთებს შორის), <strong>border</strong> (ჩარჩო, ყუთის საზღვარი), <strong>padding</strong> (მანძილი ჩარჩოსა და შიგთავსს შორის) და <strong>content</strong> (თავად შიგთავსი — ტექსტი ან სურათი).</p>
      <p>თითოეული ეს ფენა ცალკე CSS თვისებით იმართება: <code>margin</code>, <code>border</code>, <code>padding</code>. მაგალითად, <code>padding: 16px;</code> ამატებს 16 პიქსელ სივრცეს შიგთავსსა და ჩარჩოს შორის ყველა მხარეს.</p>
      <p>მნიშვნელოვანი დეტალია: ნაგულისხმევად, ელემენტის <code>width</code> ეხება მხოლოდ <strong>content</strong>-ს — padding და border ემატება ზემოდან, რის გამოც ელემენტი ხშირად „მოულოდნელად“ დიდდება. ამის გამოსასწორებლად გამოიყენება <code>box-sizing: border-box;</code>, რომელიც padding-სა და border-საც <strong>ერთიან</strong> <code>width</code>-ში ითვლის.</p>
    `,
    analogy: `წარმოიდგინე სურათი ჩარჩოში. თავად <strong>სურათი</strong> არის content. სურათსა და ჩარჩოს შორის არსებული თეთრი არშია (მატი) — ეს არის <strong>padding</strong>. ოქროსფერი ხის ჩარჩო თვითონ — ეს არის <strong>border</strong>. ხოლო მანძილი, რასაც კედელზე ამ ჩარჩოსა და მის გვერდით ჩამოკიდებულ სხვა სურათს შორის ტოვებ — ეს არის <strong>margin</strong>. ოთხივე ერთად ქმნის იმ „საერთო ადგილს“, რასაც ეს სურათი კედელზე იკავებს.`,
  },

  demo: {
    intro: `ვნახოთ ოთხივე ფენა ცალ-ცალკე მოქმედებაში, და შემდეგ — რატომ გვჭირდება box-sizing: border-box.`,
    codeBlocks: [
      {
        label: "1. padding, border და margin ერთად",
        code: `.box {
  padding: 16px;
  border: 2px solid #163C63;
  margin: 20px;
  background-color: #E9F1F7;
}`,
        note: `<code>padding</code> ზრდის სივრცეს შიგნიდან (ფონის ფერი ჩანს padding-ის ქვეშაც), <code>margin</code> კი — მხოლოდ გარედან, გამჭვირვალეა და მეზობელ ელემენტებთან მანძილს ქმნის.`,
      },
      {
        label: "2. ცალ-ცალკე მხარეები — top/right/bottom/left",
        code: `.box {
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
}

/* იგივეს მოკლედ ჩაწერა: ზემოთ/მარჯვ./ქვემოთ/მარცხ. */
.box-short {
  padding: 8px 16px 8px 16px;
}`,
        note: `მოკლე ჩაწერისას თანმიმდევრობა ყოველთვის საათის ისრის მიმართულებით არის: ზემოთ, მარჯვნივ, ქვემოთ, მარცხნივ. ორი მნიშვნელობით (<code>padding: 8px 16px;</code>) — პირველი ზემოთ/ქვემოთ, მეორე — მარჯვნივ/მარცხნივ.`,
      },
      {
        label: "3. box-sizing: border-box — ზომების პრობლემის გადაჭრა",
        code: `.card-default {
  width: 200px;
  padding: 20px;
  border: 4px solid black;
  /* რეალური სიგანე: 200 + 20+20 + 4+4 = 248px! */
}

.card-fixed {
  width: 200px;
  padding: 20px;
  border: 4px solid black;
  box-sizing: border-box;
  /* რეალური სიგანე: ზუსტად 200px */
}`,
        note: `<code>box-sizing: border-box</code> იმდენად სასარგებლოა, რომ ბევრი დეველოპერი მას თითქმის ყოველთვის უწერს <code>*</code> სელექტორით მთელ გვერდზე: <code>* { box-sizing: border-box; }</code>.`,
      },
    ],
  },

  sandbox: {
    description: `შეცვალე <code>padding</code>, <code>border</code> და <code>margin</code> მნიშვნელობები — ნახავ, როგორ იცვლება ყუთის ზომა და მეზობელ ელემენტებთან მანძილი.`,
    html: `<div class="box">პირველი ყუთი</div>
<div class="box">მეორე ყუთი</div>`,
    css: `* { box-sizing: border-box; }
body { font-family: sans-serif; }
.box {
  width: 220px;
  padding: 16px;
  border: 3px solid #163C63;
  margin: 12px;
  background-color: #E9F1F7;
  color: #16232E;
}`,
    js: `// JavaScript ჯერ არ გვჭირდება.`,
  },

  exercises: [
    {
      level: "easy",
      title: "გაზარდე padding",
      body: `სენდბოქსში შეცვალე <code>.box</code>-ის <code>padding</code> მნიშვნელობა 16px-იდან 32px-მდე — დააკვირდი, როგორ „სუნთქავს“ ტექსტი ჩარჩოსგან უფრო შორს.`,
      hint: `დიდი padding კარგია, მაგრამ ზედმეტად დიდი შეიძლება ზედმეტად ცარიელი ჩანდეს — სცადე რამდენიმე მნიშვნელობა და აირჩიე რომელიც მოგეწონა.`,
    },
    {
      level: "medium",
      title: "შეცვალე border სტილი",
      body: `შეცვალე <code>.box</code>-ის <code>border</code> — სცადე სხვადასხვა სისქე (მაგ. <code>1px</code>, <code>5px</code>), სხვადასხვა სტილი (<code>solid</code>, <code>dashed</code>, <code>dotted</code>) და სხვადასხვა ფერი.`,
      hint: `<code>border</code>-ის მოკლე სინტაქსია: <code>border: სისქე სტილი ფერი;</code> — მაგ. <code>border: 2px dashed red;</code>.`,
    },
    {
      level: "hard",
      title: "დააცენტრირე ერთი ყუთი გვერდზე",
      body: `დაამატე ახალი კლასი <code>.centered</code> ერთ-ერთ ყუთზე, მისცე კონკრეტული <code>width</code> (მაგ. <code>300px</code>) და გამოიყენე <code>margin: 0 auto;</code>, რომ ეს ყუთი ჰორიზონტალურად გვერდის ცენტრში მოექცეს.`,
      hint: `<code>margin: 0 auto;</code> მუშაობს მხოლოდ მაშინ, როცა ელემენტს აქვს ზუსტი <code>width</code> და არის ბლოკ-დონის ელემენტი (როგორც <code>&lt;div&gt;</code>).`,
    },
  ],

  quiz: [
    {
      prompt: "რა თანმიმდევრობით არის განლაგებული ბოქს მოდელის ფენები, content-იდან გარეთ?",
      options: [
        "margin → border → padding → content",
        "content → padding → border → margin",
        "content → border → padding → margin",
        "padding → content → border → margin",
      ],
      correctIndex: 1,
      explain: "content ცენტრშია, მას ეხვევა padding, შემდეგ border, ყველაზე გარეთ კი — margin.",
    },
    {
      prompt: "რა განსხვავებაა `padding`-სა და `margin`-ს შორის?",
      options: [
        "არანაირი, ისინი იდენტურია",
        "`padding` სივრცეა შიგთავსსა და ჩარჩოს შორის, `margin` — ჩარჩოსა და მეზობელ ელემენტებს შორის",
        "`margin` მხოლოდ ტექსტისთვისაა",
        "`padding` მხოლოდ სურათებისთვისაა",
      ],
      correctIndex: 1,
      explain: "`padding` „შიდა“ სივრცეა (ფონის ფერი მასზეც ვრცელდება), `margin` კი „გარე“, გამჭვირვალე სივრცეა მეზობელ ელემენტებთან.",
    },
    {
      prompt: "რას აკეთებს `box-sizing: border-box`?",
      options: [
        "შლის ელემენტის ჩარჩოს",
        "`width`-ში ითვლის padding-სა და border-საც, რომ საბოლოო ზომა არ გაიზარდოს",
        "ხდის ელემენტს წრიულს",
        "ზრდის margin-ს ავტომატურად",
      ],
      correctIndex: 1,
      explain: "`border-box`-ის გარეშე `width` ეხება მხოლოდ content-ს და padding/border ემატება ზემოდან — `border-box` კი ამ ორივეს `width`-ის შიგნით აქცევს.",
    },
    {
      prompt: "როგორ ჩაიწერება `padding: 8px 16px;` — ორი მნიშვნელობით?",
      options: [
        "ორივე მხარეს 8px",
        "ზემოთ/ქვემოთ 8px, მარჯვნივ/მარცხნივ 16px",
        "ზემოთ 8px, დანარჩენი 16px",
        "ეს არასწორი სინტაქსია",
      ],
      correctIndex: 1,
      explain: "ორი მნიშვნელობის დროს პირველი ეხება ზემოთ/ქვემოთ მხარეებს, მეორე — მარჯვენა/მარცხენა მხარეებს.",
    },
    {
      prompt: "როგორ დააცენტრირებთ ჰორიზონტალურად ბლოკ-ელემენტს, რომელსაც ზუსტი `width` აქვს?",
      options: [
        "`margin: 0 auto;`",
        "`padding: center;`",
        "`border: center;`",
        "`color: center;`",
      ],
      correctIndex: 0,
      explain: "`margin: 0 auto;` ავტომატურად ანაწილებს დარჩენილ თავისუფალ სივრცეს თანაბრად მარცხნივ და მარჯვნივ — ეს კლასიკური ხერხია ელემენტის ცენტრირებისთვის.",
    },
  ],

  homework: `გახსენი წინა შეხვედრის <code>card.html</code> და დაამატე ყველა ძირითად ბლოკს (სათაური, სურათი, ცხრილი, ფორმა) <code>padding</code> და <code>margin</code> — ისე, რომ არაფერი ერთმანეთს „არ ეხებოდეს“ ზედაპირულად. ფაილის თავში დაამატე <code>* { box-sizing: border-box; }</code> და გადაამოწმე, ხომ არ შეიცვალა რომელიმე ბლოკის ზომა.`,
};
