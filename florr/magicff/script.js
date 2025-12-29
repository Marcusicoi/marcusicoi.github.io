let sw = window.innerWidth;
let sh = window.innerHeight;
window.onload = function() {
  let bg = $("bg").style;
  let dur = 0.5;
  let turn = 0.001;
  let x = 0; let y = 0;
  let a = 0;
  let b = 0;
  let c = false;
  let d = Math.random() < 0.5 ? false : true;
  setInterval(() => {
    a++; x -= dur;
    if (a >= 500 && b < 1 && !c) {
      b += turn;
      b = Math.min(b, 1);
      d ? (y += dur * b) : (y -= dur * b);
    } else if (b >= 1 || c) {
      c = true;
      b -= turn;
      b = Math.max(b, 0);
      d ? (y += dur * b) : (y -= dur * b);
    };
    if (b === 0 && c) {
      c = false;
      a = 250;
      if (!d) d = true;
      else d = false;
    };
    bg["background-position"] = `${x}px ${y}px`;
  }, 1);
};

let date = new Date(2025, 0, 19, 0, 0, 0);
let $ = (i) => { return document.getElementById(i) };
let now = new Date();

function parseLocaleDateTime(localeString) {
  let datePart, timePart;
  if (localeString.includes(" at ")) {
    [datePart, timePart] = localeString.split(" at ");
  } else if (localeString.includes(", ")) {
    const lastComma = localeString.lastIndexOf(", ");
    datePart = localeString.substring(0, lastComma);
    timePart = localeString.substring(lastComma + 2);
  } else {
    throw new Error("Unexpected locale format. Unable to parse.");
  };
 
  if (!datePart || !timePart) {
    throw new Error("Unexpected locale format. Adjust splitting logic as needed.");
  };

  const date = new Date(datePart);
  const [time, period] = timePart.split(" ");
  let [hours, minutes, seconds] = time.split(":").map(Number);

  if (period === "PM" && hours < 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return date;
};

let localeDate = date.toLocaleString("en-US", { 
  dateStyle: "full", 
  timeStyle: "long" 
});

let nextDate = parseLocaleDateTime(localeDate).getTime()
/*let dates = [];
for (let i = 0; i < 100; i++) {
  let copy = date.getTime() + (4732000 * i);
  dates.push(copy)
};

let lastDate, nextDate, next2Date, next3Date, next4Date;
for (let i of dates) {
  if (now.getTime() > i) continue;
  else {
    //$("nd").innerHTML = dates.indexOf(i)
    lastDate = i - 1;
    nextDate = dates[dates.indexOf(i)];
    next2Date = dates[dates.indexOf(i) + 1];
    next3Date = dates[dates.indexOf(i) + 2];
    next4Date = dates[dates.indexOf(i) + 3];
    break;
  };
};*/

function followedBy() {
 /*$("txt").value = `<t:${nextDate / 1000}:T> (<t:${nextDate / 1000}:R>)`;
 let N2 = new Date(next2Date);
 let N3 = new Date(next3Date);
 let N4 = new Date(next4Date);
 $("n2").innerHTML = N2.toLocaleTimeString();
 $("n3").innerHTML = N3.toLocaleTimeString();
 $("n4").innerHTML = N4.toLocaleTimeString();*/
};
followedBy();

setInterval(function() {
  now = new Date();
  const h = Math.floor((nextDate - now) / (1000 * 60 * 60));
  const m = Math.floor(((nextDate - now) % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor(((nextDate - now) % (1000 * 60)) / 1000);
 
  if (h <= 0 && m <= 0 && s <= 0) {
    /*lastDate = nextDate;
    nextDate = dates[dates.indexOf(lastDate) + 1];
    next2Date = dates[dates.indexOf(lastDate) + 2];
    next3Date = dates[dates.indexOf(lastDate) + 3];
    next4Date = dates[dates.indexOf(lastDate) + 4];
    followedBy();*/
    h = 0; m = 0; s = 0;
  };
  
  let s1 = s.toString()[0];
  let s2 = s.toString()[1];
  let m1 = m.toString()[0];
  let m2 = m.toString()[1];
  let h1 = h.toString()[0];
  let h2 = h.toString()[1];
  $("h1").innerHTML = h >= 10 ? h1 : 0;
  $("h2").innerHTML = h < 10 ? h : h2;
  $("m1").innerHTML = m >= 10 ? m1 : 0;
  $("m2").innerHTML = m < 10 ? m : m2;
  $("s1").innerHTML = s >= 10 ? s1 : 0;
  $("s2").innerHTML = s < 10 ? s : s2;
  try {
    let strd = new Date(nextDate);
    $("nd").innerHTML = now.toLocaleString();
  } catch (err) {
    //$("nd").innerHTML = "Next: (" + err + ")";
  };
}, 1000);

/*$("copy").onclick = function() {
  var copyText = $("txt");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied!");
};*/

let petals = Math.floor((window.innerWidth + window.innerHeight) / 100);
let logs = [];
let src = [
  "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/20241208_215340.png?v=1733666044975"
];
let divider = [
  30
];
let blur = {max: 30, min: 5};
for (let i = 0; i < petals; i++) {
  let index = Math.floor(Math.random() * src.length);
  let x = Math.floor(Math.random() * sw);
  let y = Math.floor(Math.random() * sh);
  let r = Math.floor(Math.random() * 360);
  let b = Math.floor(Math.random() * (blur.max - blur.min)) + blur.min;
  let img = document.createElement("img");
  img.src = src[index];
  img.onload = function() {
    img.width /= divider[index];
    img.height /= divider[index];
    img.style.position = "absolute";
    img.style.left = "0px";
    img.style.top = y + "px";
    img.style.rotate = r + "deg";
    img.style["z-index"] = 0;
    img.style.filter = `drop-shadow(0 0 ${b}px #42e3f5)`;
    $("images").appendChild(img);
    logs.push({img: img, x: x, y: y, r: r, s: Math.random() + 0.5, b: b, b2: Math.random() < 0.5 ? false : true});
  };
};
setInterval(() => {
  for (let i = 0; i < petals; i++) {
    logs[i].x += logs[i].s;
    logs[i].r++;
    if (logs[i].b2) logs[i].b += 0.05;
    else logs[i].b -= 0.05;
    
    if (logs[i].b > blur.max) logs[i].b = blur.max, logs[i].b2 = false;
    if (logs[i].b < blur.min) logs[i].b = blur.min, logs[i].b2 = true;
    
    if (logs[i].x >= sw) {
      logs[i].x = -(Math.floor(Math.random() * 500) + 100);
      logs[i].y = Math.floor(Math.random() * sh);
      logs[i].r = Math.floor(Math.random() * 360);
      logs[i].s = Math.random() + 0.5;
      logs[i].b = Math.floor(Math.random() * (blur.max - blur.min)) + blur.min;
    };
    if (logs[i].r > 360) logs[i].r = 1;
    
    logs[i].img.style.left = logs[i].x + "px";
    logs[i].img.style.top = logs[i].y + "px";
    logs[i].img.style.rotate = logs[i].r + "deg";
    logs[i].img.style.filter = `drop-shadow(0 0 ${logs[i].b}px #42e3f5)`;
  };
}, 1);
