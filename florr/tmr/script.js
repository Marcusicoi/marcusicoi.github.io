function ID(x) { return document.getElementById(x) };
let colors = [
  "#ff0000", "#ff0077",
  "#ff00ff", "#7700ff",
  "#0000ff", "#00aaff",
  "#00ffff", "#00ffaa",
  "#00ff00", "#aaff00",
  "#ffff00", "#ff7700",
];
let as = document.getElementsByClassName("ver");
let index = -1;
for (let i = 0; i < as.length; i++) {
  index++;
  if (index >= colors.length) index = 0;
  as[i].style.background = colors[index];
};

//Date
let date = "a";
let legacy = false;
window.onload = function() {
  function loadBuild(link) {
    let b = document.createElement("script");
    b.defer = true;
    b.src = `/florr/tmr/builds/${link}/background.js`;
    b.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(b);
    
    let c = document.createElement("script");
    c.defer = true;
    c.src = `/florr/tmr/builds/${link}/color.js`;
    c.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(c);
    
    let s = document.createElement("script");
    s.defer = true;
    s.src = `/florr/tmr/builds/${link}/set.js`;
    s.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(s);
    
    setTimeout(()=>{console.log(b,c,s)},5000);
  };
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let build = params.build;
  if (build === null) {
    window.location = window.location.href + "?build=11-23-24"
  };
  switch (build) {
    case "5-14-25": date = "May 14th, 2025"; break;
    case "11-23-24": date = "November 23rd, 2024"; break;
    case "6-18-24": date = "June 18th, 2024"; break;
    case "2-8-24": date = "February 8th, 2024"; break;
    case "9-29-23": date = "September 29th, 2023"; break;
    case "9-24-23": date = "September 24th, 2023"; break;
    case "9-21-23": date = "September 21st, 2023"; break;
  };
  if (build !== "11-23-24" && build !== "5-14-25") legacy = true;
  loadBuild(build);
};

function Load() {
  let canvas = ID("canvas");
  let ctx = canvas.getContext("2d");
  
  //Functions
  canvas.getContext("2d").rotateCreateText = function(str, x, y, angle) {
    var angleInRadians = angle * Math.PI / 180; 
    this.save();
    this.textAlign = "center";
    this.textBaseline = "middle";
    this.translate(x, y);
    this.rotate(angleInRadians);
    this.strokeText(str, 0, 0);
    this.shadowBlur = 0;
    this.fillText(str, 0, 0);
    this.textAlign = "left";
    this.textBaseline = "alphabetic";
    this.restore();
  };
  canvas.getContext("2d").createFittedText = function(text, x, y, w, f, maxfs, wstroke = true) {
    let s = 0.1;
    const updateFont = () => {
      ctx.font = "bold " + s + "px " + f;
      ctx.lineWidth = s / 7.5;
    };
    updateFont();
    let width = getBBOxWidth(text);
    
    while(width < w && s < maxfs) {
      s += 1;
      updateFont();
      width = getBBOxWidth(text);
    };
    updateFont();
  
    if (wstroke) ctx.strokeText(text, x, y);
    ctx.shadowBlur = 0;
    ctx.fillText(text, x, y);
    function getBBOxWidth(text) {
      return ctx.measureText(text).width;
    };
  };
  canvas.getContext("2d").changeFittedFont = function(text, w, f, maxfs) {
    let s = 0.1;
    const updateFont = () => {
      ctx.font = "bold " + s + "px " + f;
      ctx.lineWidth = s / 7.5;
    };
    updateFont();
    let width = getBBOxWidth(text);
    while(width < w && s < maxfs) {
      s += 1;
      updateFont();
      width = getBBOxWidth(text);
    };
    updateFont();
    function getBBOxWidth(text) {
      return ctx.measureText(text).width;
    };
  };
  canvas.getContext("2d").createText = function(text, x, y) {
    this.strokeText(text, x, y);
    this.shadowBlur = 0;
    this.fillText(text, x, y);
  };
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  //Variables
  let startX = 30;
  let title = {
    d: 7.5,
    y: 100,
  };
  let rarityText = {
    y: 212.5,
    d: 5
  };
  let dateDist = 6;
  let authY = 312.5;
  let web = {
    y: 400,
    d: 3.75
  };
  let legY = 537.5;
  let clY = 275;
  let cl2Y = 275;
  let startY = 500;
  let text = Object.keys(Object.keys(c).length > Object.keys(b).length ? c : b);
  let rarities = Math.max(Object.keys(c).length, Object.keys(b).length);
  console.log(JSON.stringify(Object.keys(c)))
  function sortByRarity(array) {
    return array.sort((a, b) => {
      if (text.indexOf(a) < text.indexOf(b)) return -1;
      else if (text.indexOf(a) > b.indexOf(b)) return 1;
      return 0;
    });
  };
  
  //Rarity object
  let r = {
    rows: 0,
    size: 175,
    dist: 20,
    y: 0,
    dec: 0,
    px: 0,
    finalShadow: ["#7a3400", "#aaaaaa", "#ffee42", "#ff6666", "#b817ff", "#27f3ff"],
    new: news,
    changes: changes,
    removed: removed,
    cred: creds,
  };
  r.dist = r.size + r.dist;
  r.rows = Math.floor((canvas.width - startX) / r.dist);
  r.dec = r.size / 6.25;
  r.px = r.size / 5;
  
  //Credits string
  let credk = Object.keys(r.cred);
  let credStr = [];
  
  //Find highest amount of suggested rarities from username
  let csorted = credk.sort((a, b) => {
    if (r.cred[a].length < r.cred[b].length) return -1;
    else if (r.cred[a].length > r.cred[b].length) return 1;
    return 0;
  }).reverse();
  
  ctx.font = "bold 50px Ubuntu";
  let credY = startY + r.dist * (Math.floor(rarities / r.rows) + 1) + 62.5;
  let credY2 = 0;
  for (let i of csorted) {
    //Find highest suggested rarity from username
    let sorted = sortByRarity(r.cred[i]).reverse();
    let fill = c[sorted[0]] instanceof Object ? "#" + c[sorted[0]].m[0] : "#" + c[sorted[0]];
    let stroke = Array.isArray(b[sorted[0]]) ? pSBC(Math.random() < 0.5 ? -0.5 : 0.5, "#" + c[sorted[0]].m[0]) : "#" + b[sorted[0]];
    
    let str = `${i} (${r.cred[i].length}): `;
    for (let j = 0; j < r.cred[i].length; j++) {
      str += `${r.cred[i][j]}${j !== r.cred[i].length - 1 ? ", " : ""}`;
      if (ctx.measureText(str).width > canvas.width - startX * 2) {
        str = "";
        credY2 += 75;
        str += `${r.cred[i][j]}${j !== r.cred[i].length - 1 ? ", " : ""}`;
      };
      credStr.push({str: str, fill: fill, stroke: stroke, y: credY2});
    };
    credY2 += 75;
  };
  
  canvas.height = (!legacy ? startY : 550) + (rarities / r.rows) * r.dist + 37.5 * (r.new.length < 4 ? legacy ? 1 : 0 : (legacy ? 1 : (r.new.length / 4) - 4)) + 100 + credY2;
  
  //Drawing
  ctx.font = "bold 115px Alex Brush";
  ctx.fillStyle = "cyan";
  ctx.textAlign = "center";
  ctx.fillText("FLORR.IO TOOMUCHRARITIES", (canvas.width / 2) + title.d, title.y);
  ctx.fillStyle = "red";
  ctx.fillText("FLORR.IO TOOMUCHRARITIES", (canvas.width / 2) - title.d, title.y);
  
  ctx.font = "bold 100px Alex Brush";
  ctx.textAlign = "left";
  ctx.fillStyle = "#aaaaaa";
  ctx.fillText(rarities + " TOTAL RARITIES", startX - rarityText.d, rarityText.y);
  ctx.fillStyle = "#666666";
  ctx.fillText(rarities + " TOTAL RARITIES", startX + rarityText.d, rarityText.y);
  
  ctx.globalAlpha = 0.875;
  ctx.font = "bold 80px Ubuntu";
  ctx.textAlign = "right";
  ctx.fillStyle = "#2571ff";
  ctx.fillText(date, canvas.width - startX - dateDist, rarityText.y);
  ctx.fillStyle = "#9c2dff";
  ctx.fillText(date, canvas.width - startX + dateDist, rarityText.y);
  
  ctx.fillStyle = "#ffce16";
  ctx.fillText("@Marcusicoi_8172", canvas.width - startX + rarityText.d, authY);
  ctx.fillStyle = "#ffa43e";
  ctx.fillText("@Marcusicoi_8172", canvas.width - startX - rarityText.d, authY);
  
  ctx.font = "bold 62.5px Ubuntu";
  ctx.fillStyle = "#7fff12";
  ctx.fillText("VISIT THE WEBSITE:", canvas.width - startX + web.d, web.y);
  ctx.fillStyle = "#d1ff36";
  ctx.fillText("VISIT THE WEBSITE:", canvas.width - startX - web.d, web.y);
  
  ctx.font = "bold 50px Ubuntu";
  ctx.fillStyle = "#7fff12";
  ctx.fillText("https://marcusicoi.glitch.me/florr/tmr", canvas.width - startX - web.d, web.y + 50);
  ctx.fillStyle = "#d1ff36";
  ctx.fillText("https://marcusicoi.glitch.me/florr/tmr", canvas.width - startX + web.d, web.y + 50);
  
  if (legacy) {
    ctx.font = "bold 80px Ubuntu";
    ctx.fillStyle = "#b90702";
    ctx.fillText("LEGACY VERSION", canvas.width - startX - rarityText.d, legY);
    ctx.fillStyle = "#ff5852";
    ctx.fillText("LEGACY VERSION", canvas.width - startX + rarityText.d, legY);
    startY = 550
  };
  ctx.globalAlpha = 1;
  let addedStr = "Added ";
  if (r.new.length > 0) {
    let sorted = sortByRarity(r.new);
    ctx.globalAlpha = 0.875;
    ctx.font = "bold 37.5px Ubuntu";
    ctx.textAlign = "left";
    for (let i = 0; i < r.new.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        clY += 37.5;
        addedStr = "";
        if (clY >= 500) startY += clY - 500;
      };
      addedStr += `${sorted[i]}${i !== r.new.length - 1 ? ", " : ""}`;
      ctx.fillStyle = "#6bff76";
      ctx.fillText(addedStr, startX, clY);
      ctx.fillStyle = "#48ad50";
      ctx.fillText(addedStr, startX + 5, clY);
    };
    ctx.globalAlpha = 1;
  };
  let changedStr = "Changed ";
  if (r.changes.length > 0) {
    let sorted = sortByRarity(r.changes[1]);
    cl2Y += 37.5 * r.changes[0];
    ctx.globalAlpha = 0.875;
    ctx.font = "bold 37.5px Ubuntu";
    ctx.textAlign = "left";
    for (let i = 0; i < r.changes[1].length; i++) {
      if (i % 4 === 0 && i !== 0) {
        cl2Y += 37.5;
        changedStr = "";
        if (cl2Y >= 500) startY += cl2Y - 500;
      };
      changedStr += `${sorted[i]}${i !== r.changes[1].length - 1 ? ", " : ""}`;
      ctx.fillStyle = "#ffe41b";
      ctx.fillText(changedStr, startX, cl2Y);
      ctx.fillStyle = "#ffc822";
      ctx.fillText(changedStr, startX + 5, cl2Y);
    };
    ctx.globalAlpha = 1;
  };
  
  let totalCredited = 0;
  credY = startY + r.dist * (Math.floor(rarities / r.rows) + 1) + 62.5;
  for (let i of credk) {
    for (let j of r.cred[i]) totalCredited++;
  };
  ctx.font = "bold 75px Ubuntu";
  ctx.fillStyle = "#03fff0";
  ctx.lineWidth = 80 / 7.5;
  ctx.createText(`TOTAL SUGGESTED RARITIES: ${totalCredited} (${Math.round(totalCredited / rarities * 1e3) / 10}%) // ${rarities - totalCredited} (${Math.round((rarities - totalCredited) / rarities * 1e3) / 10}%)`, startX, credY);
  ctx.font = "bold 50px Ubuntu";
  
  credY += 75;
  for (let i of credStr) {
    ctx.fillStyle = i.fill;
    ctx.strokeStyle = i.stroke;
    ctx.createText(i.str, startX, credY + i.y);
  };
  
  //Rarities...
  for (let i = 0; i < rarities; i++) {
    r.y = Math.floor(i / r.rows);
    let x = startX + (r.dist * (i - r.y * r.rows));
    let y = startY + (r.dist * r.y);
    
    let bg = null;
    let g = null;
    let tg = null;
    let tsg = null;
    let bgrad = b[text[i]] instanceof Object;
    let grad = c[text[i]] instanceof Object;
    let tgrad = false;
    let tsgrad = false;
    
    ctx.changeFittedFont(text[i], r.size - r.dec - 25, "Ubuntu", r.px);
    if (grad) {
      if (c[text[i]].hasOwnProperty("t")) {
        tgrad = Array.isArray(c[text[i]].t[0]);
        tsgrad = Array.isArray(c[text[i]].t[1]);
      };
      g = ctx.createLinearGradient((x + (r.dec / 2)) + (r.size - r.dec) * c[text[i]].c[0][0], (y + (r.dec / 2)) + (r.size - r.dec) * c[text[i]].c[0][1], (x + (r.dec / 2)) + (r.size - r.dec) * c[text[i]].c[1][0], (y + (r.dec / 2)) + (r.size - r.dec) * c[text[i]].c[1][1]);
      g.addColorStop(0, "#" + c[text[i]].m[0]);
      let colors = c[text[i]].m.length;
      for (let j = 1; j < colors - 1; j++) {
        g.addColorStop(c[text[i]].hasOwnProperty("g") ? c[text[i]].g[j] : 1 / (colors - 1) * j, "#" + c[text[i]].m[j]);
      };
      g.addColorStop(1, "#" + c[text[i]].m[colors - 1]);
      
      if (tgrad) {
        let tm = ctx.measureText(text[i]);
        let tmh = tm.fontBoundingBoxAscent + tm.fontBoundingBoxDescent;
        tg = ctx.createLinearGradient((x + (r.size / 2) - (tm.width / 2)) + (tm.width * c[text[i]].t[0][1][0][0]), (y + (r.size * 0.8)) + (tmh * c[text[i]].t[0][1][0][1]), (x + (r.size / 2) - (tm.width / 2)) + (tm.width * c[text[i]].t[0][1][1][0]), (y + (r.size * 0.8)) + (tmh * c[text[i]].t[0][1][1][1]));
        tg.addColorStop(0, "#" + c[text[i]].t[0][0][0]);
        let colors = c[text[i]].t[0][0].length;
        for (let j = 1; j < colors - 1; j++) {
          tg.addColorStop(1 / (colors - 1) * j, "#" + c[text[i]].t[0][0][j]);
        };
        tg.addColorStop(1, "#" + c[text[i]].t[0][0][colors - 1]);
      };
      if (tsgrad) {
        let tm = ctx.measureText(text[i]);
        let tmh = tm.fontBoundingBoxAscent + tm.fontBoundingBoxDescent;
        tsg = ctx.createLinearGradient((x + (r.size / 2) - (tm.width / 2)) + (tm.width * c[text[i]].t[0][1][0][0]), (y + (r.size * 0.8)) + (tmh * c[text[i]].t[0][1][0][1]), (x + (r.size / 2) - (tm.width / 2)) + (tm.width * c[text[i]].t[0][1][1][0]), (y + (r.size * 0.8)) + (tmh * c[text[i]].t[0][1][1][1]));
        tsg.addColorStop(0, "#" + c[text[i]].t[1][0]);
        let colors = c[text[i]].t[0][0].length;
        for (let j = 1; j < colors - 1; j++) {
          tsg.addColorStop(1 / (colors - 1) * j, "#" + c[text[i]].t[1][j]);
        };
        tsg.addColorStop(1, "#" + c[text[i]].t[1][colors - 1]);
      };
    };
    if (bgrad) {
      bg = ctx.createLinearGradient(x + (r.size - r.dec) * c[text[i]].c[0][0], y + (r.size - r.dec) * c[text[i]].c[0][1], x + (r.size - r.dec) * c[text[i]].c[1][0], y + (r.size - r.dec) * c[text[i]].c[1][1]);
      bg.addColorStop(0, "#" + b[text[i]][0]);
      let colors = c[text[i]].m.length;
      for (let j = 1; j < colors - 1; j++) {
        bg.addColorStop(1 / (colors - 1) * j, "#" + b[text[i]][j]);
      };
      bg.addColorStop(1, "#" + b[text[i]][colors - 1]);
    };
    
    let finalBlur = rarities - r.finalShadow.length - 1;
    if (i > finalBlur) {
      ctx.shadowBlur = r.size / 5;
      ctx.shadowColor = r.finalShadow[i - finalBlur - 1];
    };
    ctx.beginPath();
    ctx.fillStyle = bgrad ? bg : "#" + b[text[i]];
    ctx.roundRect(x, y, r.size, r.size, [r.size / 10 - 2.5]);
    ctx.fill();
    ctx.shadowBlur = 0;
    
    ctx.beginPath();
    ctx.fillStyle = grad ? g :  "#" + c[text[i]];
    ctx.fillRect(x + (r.dec / 2), y + (r.dec / 2), r.size - r.dec, r.size - r.dec);
    ctx.fill();
    
    ctx.fillStyle = grad && c[text[i]].hasOwnProperty("t") ? tgrad ? tg : "#" + c[text[i]].t[0] : "white";
    ctx.strokeStyle = grad && c[text[i]].hasOwnProperty("t") ? tsgrad ? tsg : "#" + c[text[i]].t[1] : "black";
    ctx.textAlign = "center";
    ctx.lineWidth = r.px / 7.5;
    ctx.lineJoin = "round";
 
    if (c[text[i]] instanceof Object && !(!c[text[i]].t) && !(!c[text[i]].t[2])) {
      ctx.shadowColor = "#" + c[text[i]].t[2][0];
      ctx.shadowBlur = c[text[i]].t[2][1] / ctx.lineWidth;
    };
    ctx.createText(text[i], x + r.size / 2, y + (r.size * 0.8));
  
    ctx.font = `bold ${r.px}px Ubuntu`;
    ctx.lineWidth = r.px / 7.5;
    if (c[text[i]] instanceof Object && !(!c[text[i]].t) && !(!c[text[i]].t[2])) {
      ctx.shadowColor = "#" + c[text[i]].t[2][0];
      ctx.shadowBlur = c[text[i]].t[2][1] / ctx.lineWidth;
    };
    ctx.rotateCreateText("#" + (i + 1), x + (r.size - r.dec) * 1.05, y + (r.size * 0.1), 22.5);
    
    if (r.new.includes(text[i])) {
      ctx.font = `bold ${r.size / 8}px Ubuntu`;
      ctx.fillStyle = "lime";
      ctx.strokeStyle = "green";
      ctx.rotateCreateText("NEW!", x + (r.size - r.dec) * 0.2, y + (r.size * 0.1), -22.5);
    };
   
    let col = hexToRgb(grad ? "#" + c[text[i]].s : c[text[i]]);
    ctx.fillStyle = (col.r * 0.299 + col.g * 0.587 + col.b * 0.114) > 186 ? "black" : "white";
    ctx.strokeStyle = (col.r * 0.299 + col.g * 0.587 + col.b * 0.114) > 186 ? "white" : "black";
    for (let j = 0; j < credk.length; j++) {
      if (r.cred[credk[j]].includes(text[i])) {
        ctx.globalAlpha = 0.25;
        ctx.createFittedText("@" + credk[j], x + (r.size / 2), y + (r.size * 0.9), r.size - r.dec - 50, "Ubuntu", r.size / 7.5, false);
        break;
      };
    };
    
    function k(n) {
      if (n < 1e3) return Math.round(n * 10) / 10;
      else if (n >= 1e3 && n < 1e5) return Math.round((n / 1e3) * 10) / 10 + "k";
      else if (n >= 1e5 && n < 1e6) return Math.round(n / 1e3) + "k";
      else if (n >= 1e6 && n < 1e8) return Math.round((n / 1e6) * 10) / 10 + "m";
      else if (n >= 1e8 && n < 1e9) return Math.round(n / 1e6) + "m";
      else if (n >= 1e9 && n < 1e11) return Math.round((n / 1e9) * 10) / 10 + "b";
      else if (n >= 1e11 && n < 1e12) return Math.round(n / 1e9) + "b";
      else if (n >= 1e12 && n < 1e14) return Math.round((n / 1e12) * 10) / 10 + "t";
      else if (n >= 1e14 && n < 1e15) return Math.round(n / 1e12) + "t";
    };
    ctx.globalAlpha = 1;
    ctx.font = `bold ${r.size / 7.5}px Ubuntu`;
    ctx.textAlign = "left";
    ctx.lineWidth = r.size / 7.5 / 7.5
    ctx.createText("x" + k(Math.pow(1.225, i)), x + r.dec - 10, y + r.dec + 15);
  };
};

ID("load").onclick = function() { 
  ID("canvas").getContext("2d").clearRect(0, 0, ID("canvas").width, ID("canvas").height);
  Load(); 
};
ID("load2").onclick = function() {
  html2canvas(canvas).then(function () {
    return Canvas2Image.saveAsPNG(canvas);
  });
};