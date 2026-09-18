/* =========================================================================
   MEETING 06 — ფორმები HTML-ში
   ========================================================================= */

window.MEETING_CONTENT = window.MEETING_CONTENT || {};

window.MEETING_CONTENT[6] = {
  id: 6,
  title: "ფორმები HTML-ში",
  type: "theory",
  blockLabel: "ბლოკი I · HTML & CSS",

  agenda: [
    { time: "00–15", label: "თეორია: როგორ აგროვებს გვერდი ინფორმაციას მომხმარებლისგან" },
    { time: "15–35", label: "კოდის დემო: `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`" },
    { time: "35–50", label: "პრაქტიკა: საკონტაქტო ფორმის აწყობა სენდბოქსში" },
    { time: "50–60", label: "თვითშემოწმების ქვიზი და საშინაო გამოწვევის გაცნობა" },
  ],

  theory: {
    body: `
      <p>აქამდე ვსწავლობდით, როგორ <strong>ვაჩვენოთ</strong> ინფორმაცია გვერდზე. ახლა კი ვისწავლით, როგორ <strong>ავიღოთ</strong> ინფორმაცია მომხმარებლისგან — მისი სახელი, ელფოსტა, არჩევანი და ა.შ. ამისთვის გამოიყენება <code>&lt;form&gt;</code> ტეგი — ის აერთიანებს ყველა „შესატანი ველს“ ერთ ლოგიკურ ჯგუფად.</p>
      <p>ფორმის შიგნით ყველაზე ხშირად გამოყენებული ელემენტია <code>&lt;input&gt;</code>, რომლის <code>type</code> ატრიბუტი განსაზღვრავს, რა ტიპის მონაცემი უნდა შევიდეს — ტექსტი (<code>text</code>), ელფოსტა (<code>email</code>), რიცხვი (<code>number</code>), გადამრთველი (<code>checkbox</code>) თუ ერთი არჩევანი რამდენიმედან (<code>radio</code>). ყოველ ველს თან უნდა ახლდეს <code>&lt;label&gt;</code> — წარწერა, რომელიც უხსნის მომხმარებელს, რა უნდა ჩაწეროს.</p>
      <p><code>&lt;label&gt;</code>-ს <code>for</code> ატრიბუტი უნდა ემთხვეოდეს <code>&lt;input&gt;</code>-ის <code>id</code>-ს — ასეთი დაკავშირება საშუალებას აძლევს მომხმარებელს, დააწკაპუნოს თავად წარწერაზეც და ველი მაინც გააქტიურდეს (განსაკუთრებით სასარგებლოა checkbox-ებზე და მობილურზე).</p>
    `,
    analogy: `ფორმა ჰგავს ქაღალდის ანკეტას, რომელსაც ექიმთან ან სკოლაში ავსებ — თითოეულ ველს გვერდით აწერია, რა უნდა ჩაწერო (,,სახელი: ______“, ,,ასაკი: ______“). <code>&lt;label&gt;</code> სწორედ ეს წარწერაა — ის ეუბნება, რა ჩაწერო, <code>&lt;input&gt;</code> კი — თავად ის ცარიელი ხაზია, სადაც პასუხს წერ. <code>type</code> ატრიბუტი კი განსაზღვრავს, რა ტიპის „ხაზია“ — ჩვეულებრივი ტექსტისთვის, თუ ისეთი, სადაც მხოლოდ ერთი კვადრატის მონიშვნაა შესაძლებელი (checkbox), როგორც ტესტში „მონიშნე სწორი პასუხი“.`,
  },

  demo: {
    intro: `ავაშენოთ ფორმა ეტაპობრივად — ჯერ ტექსტური ველები, მერე არჩევანის ველები, და ბოლოს — გრძელი ტექსტისა და სიის ველები.`,
    codeBlocks: [
      {
        label: "1. ტექსტური ველები — label, input, button",
        code: `<form>
  <label for="name">სახელი:</label>
  <input type="text" id="name" name="name">

  <label for="email">ელფოსტა:</label>
  <input type="email" id="email" name="email">

  <button type="submit">გაგზავნა</button>
</form>`,
        note: `<code>type="email"</code> ავტომატურად ამოწმებს, რომ ტექსტი „@“-ის მაგვარ ფორმატს ემთხვევა. <code>&lt;button type="submit"&gt;</code> აგზავნის ფორმას.`,
      },
      {
        label: "2. არჩევანის ველები — checkbox და radio",
        code: `<p>რომელ საგნებს სწავლობ? (შეგიძლია რამდენიმეს მონიშვნა)</p>
<label><input type="checkbox" name="subjects" value="html"> HTML/CSS</label>
<label><input type="checkbox" name="subjects" value="js"> JavaScript</label>

<p>რომელ კლასში ხარ? (მხოლოდ ერთი)</p>
<label><input type="radio" name="grade" value="6"> VI კლასი</label>
<label><input type="radio" name="grade" value="7"> VII კლასი</label>`,
        note: `<code>checkbox</code>-ებით შეგიძლია <strong>რამდენიმე</strong> ვარიანტის მონიშვნა. <code>radio</code>-ებში კი, თუ ყველას ერთნაირი <code>name</code> აქვს, მხოლოდ <strong>ერთის</strong> მონიშვნა შეიძლება ერთდროულად — დანარჩენები ავტომატურად იხსნება.`,
      },
      {
        label: "3. გრძელი ტექსტი და ჩამოსაშლელი სია — textarea, select",
        code: `<label for="msg">შეტყობინება:</label>
<textarea id="msg" name="msg" rows="4"></textarea>

<label for="city">ქალაქი:</label>
<select id="city" name="city">
  <option value="tbilisi">თბილისი</option>
  <option value="batumi">ბათუმი</option>
  <option value="kutaisi">ქუთაისი</option>
</select>`,
        note: `<code>&lt;textarea&gt;</code> გამოიყენება, როცა მოსალოდნელია <strong>რამდენიმე</strong> ხაზის ტექსტი. <code>&lt;select&gt;</code> + <code>&lt;option&gt;</code>-ები ქმნიან ჩამოსაშლელ სიას, საიდანაც მხოლოდ ერთის არჩევაა შესაძლებელი.`,
      },
    ],
  },

  sandbox: {
    description: `შეავსე ფორმა და დააჭირე „გაგზავნა“-ს — ნახავ, რომ დემო-შეტყობინება ჩნდება (რეალურად არაფერი იგზავნება ინტერნეტში). სცადე დაამატო ახალი ველი.`,
    html: `<h1>დაგვიკავშირდი</h1>
<form>
  <label for="name">სახელი:</label><br>
  <input type="text" id="name" name="name"><br>

  <label for="email">ელფოსტა:</label><br>
  <input type="email" id="email" name="email"><br>

  <label for="msg">შეტყობინება:</label><br>
  <textarea id="msg" name="msg" rows="3"></textarea><br>

  <button type="submit">გაგზავნა</button>
</form>`,
    css: `body { font-family: sans-serif; color: #16232E; max-width: 360px; }
label { font-weight: 600; font-size: 14px; }
input, textarea, select {
  width: 100%;
  padding: 6px 8px;
  margin: 4px 0 12px;
  border: 1px solid #C7D4DD;
  border-radius: 4px;
  font-family: inherit;
}
button {
  padding: 8px 16px;
  background: #163C63;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`,
    js: `// JavaScript ჯერ არ გვჭირდება — ფორმის ვალიდაციას მოგვიანებით ვისწავლით.`,
  },

  exercises: [
    {
      level: "easy",
      title: "დაამატე ტელეფონის ველი",
      body: `სენდბოქსში დაამატე ახალი <code>&lt;label&gt;</code> + <code>&lt;input type="tel"&gt;</code> წყვილი „ტელეფონი“-სთვის, ფორმის „შეტყობინება“ ველის წინ.`,
      hint: `არ დაგავიწყდეს <code>id</code> და <code>for</code>-ის დამთხვევა — მაგ. <code>id="phone"</code> და <code>for="phone"</code>.`,
    },
    {
      level: "medium",
      title: "დაამატე რადიო ღილაკების ჯგუფი",
      body: `დაამატე კითხვა „როგორ გირჩევნია პასუხის მიღება?“ და ორი <code>radio</code> ღილაკი (,,ელფოსტით“ / ,,ტელეფონით“), ორივეს ერთნაირი <code>name</code> ატრიბუტით, რომ მხოლოდ ერთის არჩევა შეიძლებოდეს.`,
      hint: `თუ ორ <code>radio</code>-ს სხვადასხვა <code>name</code> მისცემ, ორივეს ერთდროულად მონიშვნა შეძლებ — ეს არასწორია, სახელი ორივესთვის ერთი და იგივე უნდა იყოს.`,
    },
    {
      level: "hard",
      title: "ააგე გამოკითხვის მინი-ფორმა",
      body: `შექმენი ახალი <code>&lt;h2&gt;</code> „სწრაფი გამოკითხვა“ და მის ქვემოთ ცალკე ფორმა: <code>&lt;select&gt;</code> სამი ვარიანტით („ძალიან მომეწონა“, „საშუალოდ“, „არ მომეწონა“), ერთი <code>checkbox</code> „გირჩევ მეგობარს ამ კურსს?“ და გამოგზავნის ღილაკი.`,
      hint: `დაიმახსოვრე თანმიმდევრობა: <code>&lt;form&gt;</code> → <code>&lt;select&gt;</code>(<code>&lt;option&gt;</code>-ებით) → <code>&lt;label&gt;</code>+<code>checkbox</code> → <code>&lt;button&gt;</code> → <code>&lt;/form&gt;</code>.`,
    },
  ],

  quiz: [
    {
      prompt: "რომელი ატრიბუტი აკავშირებს `<label>`-ს კონკრეტულ `<input>`-თან?",
      options: [
        "`<label>`-ის `name` და `<input>`-ის `id`",
        "`<label>`-ის `for` და `<input>`-ის `id`",
        "`<label>`-ის `id` და `<input>`-ის `for`",
        "არანაირი დაკავშირება არ სჭირდება",
      ],
      correctIndex: 1,
      explain: "`<label for=\"...\">`-ის მნიშვნელობა უნდა ემთხვეოდეს `<input id=\"...\">`-ის მნიშვნელობას — ასე დაწკაპუნება წარწერაზეცააქტიურებს ველს.",
    },
    {
      prompt: "რა განსხვავებაა `checkbox`-სა და `radio`-ს შორის?",
      options: [
        "არანაირი, ისინი იდენტურია",
        "`checkbox`-ით შეიძლება რამდენიმეს მონიშვნა, `radio`-ჯგუფიდან — მხოლოდ ერთის",
        "`radio` მხოლოდ რიცხვებისთვისაა",
        "`checkbox` მხოლოდ ერთხელ გამოიყენება გვერდზე",
      ],
      correctIndex: 1,
      explain: "`checkbox`-ები დამოუკიდებელნი არიან ერთმანეთისგან (რამდენიმეს მონიშვნა შეიძლება), `radio` ღილაკები კი ერთ ჯგუფად მუშაობენ საერთო `name`-ის მეშვეობით — მხოლოდ ერთის არჩევაა შესაძლებელი.",
    },
    {
      prompt: "როდის გამოვიყენებთ `<textarea>`-ს `<input type=\"text\">`-ის ნაცვლად?",
      options: [
        "როცა მომხმარებელმა უნდა აირჩიოს სურათი",
        "როცა მოსალოდნელია მოკლე, ერთსიტყვიანი პასუხი",
        "როცა მოსალოდნელია გრძელი, მრავალხაზიანი ტექსტი",
        "ორივე ერთნაირად მუშაობს, განსხვავება არ არსებობს",
      ],
      correctIndex: 2,
      explain: "`<textarea>` სპეციალურად შექმნილია გრძელი, რამდენიმე ხაზის ტექსტისთვის (მაგ. შეტყობინება ან კომენტარი) — `<input type=\"text\">` კი მხოლოდ ერთ ხაზს იტევს.",
    },
    {
      prompt: "რას ამატებს `type=\"email\"` ჩვეულებრივ ტექსტურ ველს, `type=\"text\"`-თან შედარებით?",
      options: [
        "ავტომატურად აგზავნის ელფოსტას",
        "ავტომატურად ამოწმებს, რომ ტექსტი ელფოსტის ფორმატს ჰგავს",
        "მალავს ჩაწერილ ტექსტს",
        "ზღუდავს ტექსტის სიგრძეს 10 სიმბოლომდე",
      ],
      correctIndex: 1,
      explain: "`type=\"email\"` ბრაუზერს აძლევს საშუალებას, თავადვე შეამოწმოს, ტექსტი ჰგავს თუ არა ელფოსტის მისამართს (შეიცავს თუ არა `@`-ს და ა.შ.), სანამ ფორმა საერთოდ გაიგზავნება.",
    },
    {
      prompt: "რომელი წყვილი ტეგი ქმნის ჩამოსაშლელ სიას, საიდანაც ერთი ვარიანტის არჩევაა შესაძლებელი?",
      options: [
        "`<checkbox>` და `<option>`",
        "`<select>` და `<option>`",
        "`<list>` და `<item>`",
        "`<dropdown>` და `<choice>`",
      ],
      correctIndex: 1,
      explain: "`<select>` არის თავად ჩამოსაშლელი სია, ხოლო თითოეული შესაძლო არჩევანი იწერება `<option>` ტეგით მის შიგნით.",
    },
  ],

  homework: `გახსენი წინა შეხვედრების <code>index.html</code> და დაამატე ახალი სექცია „დამიკავშირდი“: ფორმა <code>&lt;label&gt;</code>+<code>&lt;input&gt;</code> წყვილებით სახელისთვის და ელფოსტისთვის (სწორად დაკავშირებული <code>for</code>/<code>id</code>-ით), ერთი <code>&lt;select&gt;</code> (მაგ. „რითი მოხვდი ამ გვერდზე?“ — 3 ვარიანტით), ერთი <code>&lt;textarea&gt;</code> შეტყობინებისთვის და გამოგზავნის ღილაკი.`,
};
