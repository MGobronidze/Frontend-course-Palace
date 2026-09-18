/* =========================================================================
   MEETINGS-DATA.JS
   40-შეხვედრიანი კურსის სრული რუკა.
   ერთი ობიექტი = ერთი შეხვედრა. "available: true" ნიშნავს, რომ ამ შეხვედრის
   სრული შიგთავსი უკვე დამატებულია js/meetings/meeting-XX.js ფაილში.
   ახალი შეხვედრის დამატებისას: 1) დაწერე js/meetings/meeting-XX.js,
   2) დააყენე available: true და file: "js/meetings/meeting-XX.js" ქვემოთ.
   ========================================================================= */

const COURSE_MEETINGS = [
  // ---------------- ბლოკი I: HTML & CSS (შეხვედრები 1-18) ----------------
  { id: 1,  block: "html-css", type: "theory",   title: "შესავალი HTML-ში",                         available: true, file: "js/meetings/meeting-01.js" },
  { id: 2,  block: "html-css", type: "theory",   title: "HTML-ის ელემენტები I — ტექსტი და სათაურები", available: true, file: "js/meetings/meeting-02.js" },
  { id: 3,  block: "html-css", type: "theory",   title: "ბმულები და სიები", available: true, file: "js/meetings/meeting-03.js" },
  { id: 4,  block: "html-css", type: "theory",   title: "სურათები და მულტიმედია", available: true, file: "js/meetings/meeting-04.js" },
  { id: 5,  block: "html-css", type: "theory",   title: "ცხრილები", available: true, file: "js/meetings/meeting-05.js" },
  { id: 6,  block: "html-css", type: "theory",   title: "ფორმები HTML-ში", available: true, file: "js/meetings/meeting-06.js" },
  { id: 7,  block: "html-css", type: "revision", title: "გამეორება + მინი-პროექტი: „ჩემი ვიზიტ-ბარათი“ (მხოლოდ HTML)", available: true, file: "js/meetings/meeting-07.js" },
  { id: 8,  block: "html-css", type: "theory",   title: "შესავალი CSS-ში — სელექტორები და სინტაქსი" },
  { id: 9,  block: "html-css", type: "theory",   title: "ფერები და ფონები CSS-ში" },
  { id: 10, block: "html-css", type: "theory",   title: "CSS ტიპოგრაფია" },
  { id: 11, block: "html-css", type: "theory",   title: "CSS ბოქს მოდელი" },
  { id: 12, block: "html-css", type: "theory",   title: "CSS Layout — position და display" },
  { id: 13, block: "html-css", type: "theory",   title: "CSS Flexbox I — ღერძები და განლაგება" },
  { id: 14, block: "html-css", type: "practice", title: "CSS Flexbox II — პრაქტიკული აწყობა" },
  { id: 15, block: "html-css", type: "theory",   title: "CSS გრიდი" },
  { id: 16, block: "html-css", type: "theory",   title: "რესპონსივ დიზაინი — Media Queries" },
  { id: 17, block: "html-css", type: "theory",   title: "Advanced HTML & CSS — გადასვლები და ანიმაციები" },
  { id: 18, block: "html-css", type: "project",  title: "რეალური პროექტი: პორტფოლიოს გვერდი (HTML + CSS)" },

  // ---------------- ბლოკი II: JavaScript (შეხვედრები 19-40) ----------------
  { id: 19, block: "javascript", type: "theory",   title: "შესავალი JavaScript-ში — ცვლადები და ოპერატორები" },
  { id: 20, block: "javascript", type: "practice", title: "მონაცემთა ტიპები — პრაქტიკა" },
  { id: 21, block: "javascript", type: "theory",   title: "Control Structures — if / else / switch" },
  { id: 22, block: "javascript", type: "theory",   title: "ციკლები — for და while" },
  { id: 23, block: "javascript", type: "revision", title: "გამეორება + მინი-პროექტი: მარტივი კალკულატორი" },
  { id: 24, block: "javascript", type: "theory",   title: "ფუნქციები I — აღწერა, პარამეტრები, დაბრუნება" },
  { id: 25, block: "javascript", type: "practice", title: "ფუნქციები II — Arrow ფუნქციები და Scope" },
  { id: 26, block: "javascript", type: "theory",   title: "მასივები I" },
  { id: 27, block: "javascript", type: "practice", title: "მასივები II — Array მეთოდები" },
  { id: 28, block: "javascript", type: "theory",   title: "ობიექტები" },
  { id: 29, block: "javascript", type: "revision", title: "გამეორება + მინი-პროექტი: მონაცემთა მართვის აპლიკაცია" },
  { id: 30, block: "javascript", type: "theory",   title: "DOM მანიპულაციები I — ელემენტების არჩევა და შეცვლა" },
  { id: 31, block: "javascript", type: "practice", title: "DOM მანიპულაციები II — შექმნა და წაშლა" },
  { id: 32, block: "javascript", type: "theory",   title: "ივენთები — Event Listeners" },
  { id: 33, block: "javascript", type: "theory",   title: "ფორმები JavaScript-ში — ვალიდაცია" },
  { id: 34, block: "javascript", type: "project",  title: "რეალური პროექტი: To-Do List აპლიკაცია" },
  { id: 35, block: "javascript", type: "theory",   title: "JSON" },
  { id: 36, block: "javascript", type: "theory",   title: "Error Handling — try / catch" },
  { id: 37, block: "javascript", type: "theory",   title: "AJAX და Fetch API" },
  { id: 38, block: "javascript", type: "theory",   title: "Local Storage და Session Storage" },
  { id: 39, block: "javascript", type: "theory",   title: "JS Frameworks and Libraries — შესავალი (React/Vue)" },
  { id: 40, block: "javascript", type: "project",  title: "ფინალური პროექტი და კურსის შეჯამება" },
];

// მოხერხებულობისთვის: ტიპის ლეიბლები და ფერების key-ები (გამოიყენება app.js-ში)
const MEETING_TYPE_LABELS = {
  theory:   "თეორია",
  practice: "პრაქტიკა",
  revision: "გამეორება",
  project:  "პროექტი",
};
