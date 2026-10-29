/* ============================================================
   FPS TOP 10 — ข้อมูลเกมและส่วนที่ใช้ร่วมกันทุกหน้า
   แก้ข้อมูลเกมได้ที่อาร์เรย์ GAMES ด้านล่างที่เดียว ทุกหน้าจะอัปเดตเอง
   ============================================================ */

const GAMES = [
  {
    rank: 1, name: "Delta Force", dev: "TiMi Studio Group", year: 2025,
    cat: "Warfare", players: "สูงสุด 32 vs 32 (โหมด Warfare)", price: "เล่นฟรี",
    c1: "#0b7285", c2: "#2f9e44",
    tagline: "สมรภูมิใหญ่ ยานพาหนะครบ และโหมด Extraction ในเกมเดียว",
    desc: "เกมยิงแนวยุทธวิธีที่หยิบเอาจิตวิญญาณของซีรีส์ Delta Force กลับมาในรูปแบบใหม่ มีโหมด Warfare ที่ปะทะกันเป็นกองทัพพร้อมรถถัง เฮลิคอปเตอร์ และอาวุธหลากหลาย กับโหมด Operations ที่ต้องเข้าไปเก็บของแล้วเอาตัวรอดออกมา",
    why: ["เล่นฟรี เริ่มได้ทันที ไม่ต้องลงทุน", "มีทั้งสนามรบขนาดใหญ่และโหมดเอาตัวรอดให้เลือกตามอารมณ์", "ระบบปรับแต่งอาวุธละเอียด เล่นได้นานไม่เบื่อ"]
  },
  {
    rank: 2, name: "WARDOGS", dev: "Bulkhead / Team17", year: 2026,
    cat: "Warfare", players: "สูงสุด 100 คน แบ่ง 3 ทีม", price: "Early Access บน Steam",
    c1: "#1971c2", c2: "#0ca678",
    tagline: "100 คน 3 ทีม แย่งโซนเดียวกัน บนแผนที่ขนาด 256 ตร.กม.",
    desc: "เกมสงครามขนาดใหญ่ที่ได้แรงบันดาลใจจากโหมด King of the Hill ใน Arma 3 ผู้เล่นสูงสุด 100 คนถูกแบ่งเป็นสามทีมเพื่อแย่งชิงโซนควบคุมที่สุ่มตำแหน่ง มีทั้งทหารราบ ยานพาหนะ การทำลายสิ่งก่อสร้าง และระบบเงินในเกม ไม่ใช่ Battle Royale และไม่ใช่ Extraction",
    why: ["การแข่งสามทีมทำให้สถานการณ์ในสนามคาดเดายาก", "ทุกบทบาทมีความหมาย ไม่ใช่แค่ยอดคิลสูงสุด", "เปิดตัวแล้วได้รับความสนใจจากผู้เล่นจำนวนมาก"]
  },
  {
    rank: 3, name: "War Thunder", dev: "Gaijin Entertainment", year: 2013,
    cat: "Vehicle", players: "ผู้เล่นหลายคนทั้งบก อากาศ และทะเล", price: "เล่นฟรี",
    c1: "#e8590c", c2: "#862e9c",
    tagline: "เกมรบยานพาหนะที่ลงรายละเอียดจากประวัติศาสตร์ ทั้งรถถัง เครื่องบิน และเรือ",
    desc: "เกมต่อสู้ด้วยยานพาหนะจริงจากหลายยุคสมัย ตั้งแต่เครื่องบินใบพัดจนถึงรถถังสมัยใหม่ ให้ความรู้สึกหนักแน่นแบบจำลองสถานการณ์ แม้ไม่ใช่ FPS ล้วนแต่มีมุมมองบุคคลที่หนึ่งและการเล็งยิงเป็นหัวใจของเกม จึงถูกจัดอยู่ในลิสต์นี้",
    why: ["โมเดลยานพาหนะและความเสียหายละเอียดมาก", "มีเส้นทางพัฒนายานให้ไล่เก็บได้ยาวนาน", "เล่นฟรี และมีเนื้อหาให้เรียนรู้ลึกเรื่อยๆ"]
  },
  {
    rank: 4, name: "HELLDIVERS™ 2", dev: "Arrowhead Game Studios", year: 2024,
    cat: "Co-op", players: "ร่วมทีมสูงสุด 4 คน", price: "ซื้อขาด",
    c1: "#c92a2a", c2: "#e67700",
    tagline: "ปกป้องประชาธิปไตยของ Super Earth ด้วยทีมสี่คนและกระสุนจำนวนมาก",
    desc: "เกมยิงแนว Co-op มุมมองบุคคลที่สาม ที่ผสมความโหดและความตลกเข้าด้วยกัน ผู้เล่นร่วมทีมกันลงไปปราบเหล่าศัตรูต่างดาว เรียก Stratagem ลงมาช่วย และต้องระวังกระสุนของเพื่อนร่วมทีมเพราะยิงโดนกันได้ จึงมีเสียงหัวเราะและเหตุการณ์ชุลมุนอยู่ตลอด",
    why: ["เล่นกับเพื่อนสนุกที่สุด เต็มไปด้วยเหตุการณ์ตลกร้าย", "ระบบ Stratagem ต้องประสานงานกันจริงๆ", "สไตล์งานออกแบบและบรรยากาศล้อเลียนแนวทหารชัดเจน"]
  },
  {
    rank: 5, name: "Escape from Tarkov", dev: "Battlestate Games", year: 2017,
    cat: "Extraction", players: "เข้าด่านเป็นรอบ ผู้เล่นหลายคน", price: "ซื้อขาด",
    c1: "#495057", c2: "#5c940d",
    tagline: "ทุกกระสุนมีราคา ทุกการตัดสินใจมีผลต่อของที่ติดตัว",
    desc: "เกมยิงแนว Extraction แบบเข้มข้น ผู้เล่นต้องเข้าไปเก็บของในแผนที่ แล้วหนีออกมาให้ได้ พร้อมระบบสุขภาพอวัยวะ กระสุนและเกราะที่ส่งผลต่อการสร้างความเสียหายจริง ตายแล้วของที่พกไปจะหายไป จึงตึงเครียดทุกนาที",
    why: ["ความตึงเครียดสูงมาก ทุกการเจอศัตรูมีความหมาย", "ระบบกระสุน เกราะ และการรักษาละเอียด", "ต้องเรียนรู้แผนที่และอุปกรณ์ ใช้เวลาแต่คุ้ม"]
  },
  {
    rank: 6, name: "Arma Reforger", dev: "Bohemia Interactive", year: 2022,
    cat: "Milsim", players: "เซิร์ฟเวอร์ขนาดใหญ่", price: "ซื้อขาด",
    c1: "#2b8a3e", c2: "#5f3dc4",
    tagline: "ก้าวแรกของยุค Arma ใหม่ บนเอนจินใหม่ที่เปิดให้ม็อดได้เต็มที่",
    desc: "เกมจำลองสนามรบทางทหารที่สร้างบนเอนจิน Enfusion ของ Bohemia Interactive ให้ความรู้สึกของซีรีส์ Arma ในแบบที่เข้าถึงง่ายขึ้น มีโหมด Conflict ที่ทีมต้องช่วยกันยึดพื้นที่และจัดการเสบียง พร้อมชุมชนม็อดที่ขยายเนื้อหาได้ไม่รู้จบ",
    why: ["กราฟิกและระบบฟิสิกส์ยุคใหม่ของซีรีส์ Arma", "เปิดรับม็อดและเซิร์ฟเวอร์ที่ผู้เล่นสร้างเอง", "ได้ความรู้สึกของสนามรบจริงโดยไม่หนักเท่าเกมจำลองสุดโหด"]
  },
  {
    rank: 7, name: "Squad", dev: "Offworld Industries", year: 2020,
    cat: "Milsim", players: "สูงสุด 50 vs 50", price: "ซื้อขาด",
    c1: "#0c8599", c2: "#364fc7",
    tagline: "เกมที่ชนะด้วยการพูดคุยและทำงานเป็นสควอด ไม่ใช่เล็งเก่งอย่างเดียว",
    desc: "เกมยิงที่เน้นการสื่อสารและการเล่นเป็นหน่วย ผู้เล่นแบ่งเป็นสควอด มีหัวหน้า มีบทบาทเฉพาะ ต้องสร้างฐาน ส่งเสบียง และขยับไปพร้อมกันบนแผนที่ใหญ่ เมื่อทีมคุยกันดี จังหวะรุกและตั้งรับจะสวยงามมาก",
    why: ["การสื่อสารด้วยเสียงคือหัวใจของเกม", "บทบาทชัดเจน ตั้งแต่แพทย์ ไปจนถึงหัวหน้าหน่วย", "ความรู้สึกเป็นส่วนหนึ่งของกองทัพสูงมาก"]
  },
  {
    rank: 8, name: "Arma 3", dev: "Bohemia Interactive", year: 2013,
    cat: "Milsim", players: "ตั้งแต่เล่นคนเดียวถึงเซิร์ฟเวอร์ใหญ่", price: "ซื้อขาด",
    c1: "#5c7cfa", c2: "#2b8a3e",
    tagline: "ซานด์บ็อกซ์ทหารที่ม็อดทำให้กลายเป็นเกมได้ทุกแบบ",
    desc: "เกมจำลองสนามรบที่อยู่มานานกว่าทศวรรษ ด้วยความลึกของระบบกระสุน ยานพาหนะ และโปรแกรมสร้างภารกิจ ทำให้ชุมชนสร้างโหมดและม็อดจำนวนมาก ซึ่งหนึ่งในนั้นคือโหมดแนว King of the Hill ที่ต่อมากลายเป็นแรงบันดาลใจให้ WARDOGS",
    why: ["เนื้อหาจากชุมชนมีให้เล่นไม่หมด", "ระบบจำลองสนามรบลึกและยืดหยุ่น", "เป็นต้นกำเนิดไอเดียของเกมใหม่ๆ หลายเกม"]
  },
  {
    rank: 9, name: "Isonzo", dev: "M2H / Blackmill Games", year: 2022,
    cat: "Historical", players: "ผู้เล่นหลายคนในสนามรบสงครามโลกครั้งที่ 1", price: "ซื้อขาด",
    c1: "#a67c52", c2: "#495057",
    tagline: "ย้อนกลับไปแนวรบอิตาลีในสงครามโลกครั้งที่ 1 ด้วยจังหวะที่หนักและช้า",
    desc: "เกมยิงเชิงประวัติศาสตร์ที่ตั้งอยู่ในแนวรบ Isonzo ระหว่างอิตาลีกับออสเตรีย-ฮังการี อาวุธส่วนใหญ่เป็นปืนลูกเลื่อน การรุกต้องอาศัยจังหวะและการประสานงาน บรรยากาศแตกต่างจากเกมสมัยใหม่โดยสิ้นเชิง ทำให้ได้ประสบการณ์ที่หาไม่ได้จากเกมอื่นในลิสต์นี้",
    why: ["บรรยากาศสงครามโลกครั้งที่ 1 หาเล่นยาก", "จังหวะเกมช้าและหนัก ต้องคิดก่อนขยับ", "ทีมที่ประสานงานกันดีได้เปรียบมาก"]
  },
  {
    rank: 10, name: "Battlefield 6", dev: "Battlefield Studios / EA", year: 2025,
    cat: "Warfare", players: "ผู้เล่นหลายคน สนามรบขนาดใหญ่", price: "ซื้อขาด",
    c1: "#e03131", c2: "#1c7ed6",
    tagline: "สงครามสมัยใหม่ที่ทุกอย่างพังได้ และทุกคลาสมีหน้าที่",
    desc: "ภาคใหม่ของซีรีส์ Battlefield ที่กลับมาเน้นสนามรบขนาดใหญ่ ยานพาหนะ และการทำลายสิ่งแวดล้อม ผู้เล่นแบ่งเป็นคลาสที่มีหน้าที่ต่างกัน ฉากรบเปลี่ยนไปตลอดเมื่ออาคารถูกทำลาย จึงให้ความรู้สึกของสงครามที่มีชีวิต",
    why: ["การทำลายฉากทำให้ทุกแมตช์ไม่เหมือนกัน", "ระบบคลาสและยานพาหนะสมดุลกับการเล่นเป็นทีม", "เป็นประตูเข้าสู่เกมสงครามขนาดใหญ่ที่เล่นง่ายที่สุดในลิสต์"]
  }
];

const CATS = ["Warfare", "Milsim", "Extraction", "Co-op", "Vehicle", "Historical"];

const PAGES = [
  ["index.html", "Home"],
  ["story.html", "Story"],
  ["collection.html", "Collection"],
  ["about.html", "About"]
];

/* ---------- ชิ้นส่วนที่ใช้ซ้ำ ---------- */
const CROSS = `<svg class="cross" viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="50" cy="50" r="2" fill="currentColor"/>
  <path d="M50 8v22M50 70v22M8 50h22M70 50h22" stroke="currentColor" stroke-width="1.2" fill="none"/>
</svg>`;

const pad = n => String(n).padStart(2, "0");

function kv(g) {
  return `<div class="kv" style="--c1:${g.c1};--c2:${g.c2}">
    <span class="num">${pad(g.rank)}</span>${CROSS}
    <span class="kvname">${g.name}</span>
  </div>`;
}

/* ---------- Header / Footer ---------- */
(function shell() {
  const cur = document.body.dataset.page;
  const links = PAGES.map(([href, label]) =>
    `<a href="${href}"${href.startsWith(cur) ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  document.getElementById("site-header").innerHTML = `
    <a class="brand" href="index.html"><b>FPS</b> TOP 10</a>
    <nav aria-label="เมนูหลัก">${links}</nav>`;
  document.getElementById("site-footer").innerHTML = `
    <div><b class="grad">FPS TOP 10</b><p>รวมเกม FPS 10 อันดับที่อยากแนะนำ</p></div>
    <nav aria-label="เมนูท้ายหน้า">${links}</nav>
    <p class="small">© 2026 Personal Collection · Coding for Graphic Design</p>`;
})();

/* ---------- แสดงผลทีละส่วนเมื่อเลื่อนมาถึง ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ---------- ตามหน้า ---------- */
const page = document.body.dataset.page;

if (page === "index.html") {
  const g1 = GAMES[0];
  document.getElementById("spotlight").innerHTML = `
    <a class="spot-kv" href="collection.html#game-1">${kv(g1)}</a>
    <div class="spot-body">
      <p class="eyebrow">อันดับ 1 ของฉัน</p>
      <h2>${g1.name}</h2>
      <p class="lead">${g1.tagline}</p>
      <p>${g1.desc}</p>
      <a class="btn" href="collection.html#game-1">ดูรายละเอียด</a>
    </div>`;

  document.getElementById("podium").innerHTML = GAMES.slice(1, 3).map(g => `
    <a class="mini reveal" href="collection.html#game-${g.rank}">
      ${kv(g)}
      <h3>${g.name}</h3><p>${g.tagline}</p>
    </a>`).join("");

  document.getElementById("marquee-track").innerHTML =
    [...GAMES, ...GAMES].map(g => `<span><i>${pad(g.rank)}</i> ${g.name}</span>`).join("");
}

if (page === "story.html") {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const sort = document.getElementById("sort");
  let active = "ทั้งหมด";

  filters.innerHTML = ["ทั้งหมด", ...CATS].map(c =>
    `<button type="button" data-c="${c}" aria-pressed="${c === active}">${c}</button>`).join("");

  function draw() {
    let list = GAMES.filter(g => active === "ทั้งหมด" || g.cat === active);
    if (sort.value === "year") list = [...list].sort((a, b) => a.year - b.year || a.rank - b.rank);
    else list = [...list].sort((a, b) => a.rank - b.rank);
    grid.innerHTML = list.map(g => `
      <a class="card reveal" href="collection.html#game-${g.rank}">
        ${kv(g)}
        <div class="card-body">
          <span class="chip">${g.cat}</span>
          <h3>${g.name}</h3>
          <p>${g.tagline}</p>
          <small>${g.dev} · ${g.year}</small>
        </div>
      </a>`).join("");
    document.getElementById("count").textContent = `แสดง ${list.length} จาก ${GAMES.length} เกม`;
    initReveal();
  }
  filters.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    active = b.dataset.c;
    filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    draw();
  });
  sort.addEventListener("change", draw);
  draw();
}

if (page === "collection.html") {
  document.getElementById("index").innerHTML = GAMES.map(g =>
    `<a href="#game-${g.rank}"><i>${pad(g.rank)}</i>${g.name}</a>`).join("");

  document.getElementById("list").innerHTML = GAMES.map((g, i) => {
    const prev = GAMES[i - 1], next = GAMES[i + 1];
    return `
    <article class="game reveal" id="game-${g.rank}">
      <div class="game-kv">${kv(g)}</div>
      <div class="game-body">
        <p class="eyebrow">อันดับ ${g.rank} · ${g.cat}</p>
        <h2>${g.name}</h2>
        <p class="lead">${g.tagline}</p>
        <p>${g.desc}</p>
        <dl class="specs">
          <div><dt>ผู้พัฒนา</dt><dd>${g.dev}</dd></div>
          <div><dt>ปี</dt><dd>${g.year}</dd></div>
          <div><dt>ผู้เล่น</dt><dd>${g.players}</dd></div>
          <div><dt>รูปแบบ</dt><dd>${g.price}</dd></div>
        </dl>
        <h3 class="why-h">ทำไมถึงน่าเล่น</h3>
        <ul class="why">${g.why.map(w => `<li>${w}</li>`).join("")}</ul>
        <div class="pn">
          ${prev ? `<a href="#game-${prev.rank}">← ${prev.name}</a>` : "<span></span>"}
          ${next ? `<a href="#game-${next.rank}">${next.name} →</a>` : "<span></span>"}
        </div>
      </div>
    </article>`;
  }).join("");
}

initReveal();