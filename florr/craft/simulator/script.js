function ID(id) { return document.getElementById(id) };

var 
  canvas = ID("canvas"),
  prob = 8172,
  scprob = 8172,
  PRNGdisplayprob = 8172, 
  isPRNG = false,
  att = 8172,
  hatt = 8172,
  latt = 8172,
  combo = 8172,
  hcombo = 8172,
  rarity = 8172,
  mode = "",
  ptllost = 8172,
  char = "0123456789ABCDEF".split(""),
  charran = () => Math.floor(Math.random() * char.length),
  colrar = [
    "#72d964", "#ffe65d", "#4d52e3",
    "#861fde", "#de1f1f", "#1fdbdd",
    "#ff2b75", "#2bffa3", "#ffc10f",
    "#010eb1", "#f4bdf2", "#303030",
    "#ffc700", "#" + char[charran()] + char[charran()] + char[charran()] + char[charran()] + char[charran()] + char[charran()],
  ],
  uPRNG = [], rPRNG = [], ePRNG = [],
  lPRNG = [], mPRNG = [], ulPRNG = [],
  sPRNG = [], cePRNG = [], chPRNG = [],
  efPRNG = [],
  precisePRNGChance = false,
  autoCraft = false,
  acInterval,
  setSecretChance = false,
  succol = "#52f84d",
  failcol = "#f46658",
  customCanvasWidth = false,
  flowrcolrar = [
    "#72d964", "#ffe65d", "#4d52e3",
    "#861fde", "#de1f1f", "#1fdbdd",
    "#ff2b75", "#2bffa3", "#494949",
    "#ff5500", "#67549c", "#b25dd9",
    "#888888", "#" + char[charran()] + char[charran()] + char[charran()] + char[charran()] + char[charran()] + char[charran()],
  ],
  uPRNG2 = [], rPRNG2 = [], ePRNG2 = [],
  lPRNG2 = [], mPRNG2 = [], ulPRNG2 = [],
  sPRNG2 = [], oPRNG2 = [], fPRNG2 = [],
  dPRNG2 = [], smPRNG2 = [], omPRNG2 = [],
  elapsedStart = 8172, elapsedEnd = 8172,
  prngY = function (y) {
    return isPRNG ? y - 20 : y;
  }
;

for (let i = 0; i < 3; i++) uPRNG.push(Math.min(42.2649730810374 + 42.2649730810374 * i, 100));
for (let i = 0; i < 5; i++) rPRNG.push(Math.min(20.1547413607754 + 20.1547413607754 * i, 100));
for (let i = 0; i < 18; i++) ePRNG.push(Math.min(5.57040429497818 + 5.57040429497818 * i, 100));
for (let i = 0; i < 68; i++) lPRNG.push(Math.min(1.47458447810726 + 1.47458447810726 * i, 100));
for (let i = 0; i < 722; i++) mPRNG.push(Math.min(0.138617772039073 + 0.138617772039073 * i, 100));
for (let i = 0; i < 2165; i++) ulPRNG.push(Math.min(0.046205924013 + 0.046205924013 * i, 100));
for (let i = 0; i < 6492; i++) sPRNG.push(Math.min(0.015401974671 + 0.015401974671 * i, 100));
for (let i = 0; i < 17854; i++) cePRNG.push(Math.min(0.0056007180621 + 0.0056007180621 * i, 100));
for (let i = 0; i < 44637; i++) chPRNG.push(Math.min(0.00224028722484 + 0.00224028722484 * i, 100));
for (let i = 0; i < 100433; i++) efPRNG.push(Math.min(99568321104e-14 + 99568321104e-14 * i, 100));

for (let i = 0; i < 9; i++) {
  var x = 30 + i * 9;
  if (i > 6) {
    x += (i - 6) ** 2 / 2;
    if (x > 100) {
      x = 100;
    };
  };
  uPRNG2.push(x);
};
for (let i = 0; i < 24; i++) {
  var x = 15 + i * 1.5;
  if (i > 12) {
    x += (i - 12) ** 2 / 2;
    if (x > 100) {
      x = 100;
    };
  };
  rPRNG2.push(x);
};
for (let i = 0; i < 38; i++) {
  var x = 8 + i / 1.4;
  if (i > 18) {
    x += (i - 18) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  ePRNG2.push(x);
};
for (let i = 0; i < 57; i++) {
  var x = 5 + i / 5.6;
  if (i > 35) {
    x += (i - 35) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  lPRNG2.push(x);
};
for (let i = 0; i < 83; i++) {
  var x = 3 + i / 22.5;
  if (i > 60) {
    x += (i - 60) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  mPRNG2.push(x);
};
for (let i = 0; i < 93; i++) {
  var x = 2 + i / 33;
  if (i > 70) {
    x += (i - 70) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  ulPRNG2.push(x);
};
for (let i = 0; i < 118; i++) {
  var x = 1 + i / 43;
  if (i > 95) {
    x += (i - 95) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  sPRNG2.push(x);
};
for (let i = 0; i < 118; i++) {
  var x = 0.9 + i / 45;
  if (i > 95) {
    x += (i - 95) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  oPRNG2.push(x);
};
for (let i = 0; i < 118; i++) {
  var x = 0.8 + i / 48;
  if (i > 95) {
    x += (i - 95) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  fPRNG2.push(x);
};
for (let i = 0; i < 124; i++) {
  var x = 0.7 + i / 51;
  if (i > 100) {
    x += (i - 100) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  dPRNG2.push(x);
};
for (let i = 0; i < 129; i++) {
  var x = 0.6 + i / 53;
  if (i > 105) {
    x += (i - 105) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  smPRNG2.push(x);
};
for (let i = 0; i < 134; i++) {
  var x = 0.5 + i / 55;
  if (i > 110) {
    x += (i - 110) ** 2 / 5;
    if (x > 100) {
      x = 100;
    };
  };
  omPRNG2.push(x);
};

function setID(e, t) {
  switch (t) {
    case "og": return e + "Original";
    case "od": return e + "Old";
    case "odr": return e + "Older";
    case "ods": return e + "Oldest";
    case "ol": return e + "OldLSkill";
    case "orl": return e + "OlderLSkill";
    case "om": return e + "OldMSkill";
    case "orm": return e + "OlderMSkll";
    case "p": return e + "PRNG";
    case "l": return e + "LSkill";
    case "m": return e + "MSkill";
    case "c": return e + "Current";
    case "cp": return e + "FlowrPRNG";
  };
};
function probability(e) {
  return Math.random() < e / 100;
};
function oProbability(e) {
  return Math.random() > e / 100;
};
function intc(int) {
  return int.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
Math.round2 = function(int) {
  if (precisePRNGChance === false) {
    return Math.round(int);
  } else {
    return int;
  };
};

function setChance(id, chance, rar, mod, prn = false) {
  ID(id).onclick = function () {
    prob = chance;
    scprob = setSecretChance ? ID("sctxt").value : chance;
    PRNGdisplayprob = chance;
    isPRNG = prn;
    rarity = rar;
    mode = mod;
    att = 1;
    hatt = 1;
    latt = Infinity;
    combo = 0;
    hcombo = 0;
    ptllost = 0;
    ID("chancetxt").innerHTML = `${Math.round(1e3 * chance) / 1e3}% Success Chance`;
    ID("chancetxt").style.color = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity];
    ID("button").style.background = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity];
    ID("fakebutton").style.display = "none";
  };
};

setChance(setID("u", "og"), 75, 1, "og");
setChance(setID("u", "odr"), 50, 1, "odr");
setChance(setID("u", "od"), 40, 1, "od");
setChance(setID("u", "p"), 42.2649730810374, 1, "p", true);
setChance(setID("u", "ol"), 60, 1, "ol");
setChance(setID("u", "orl"), 90, 1, "orl");
setChance(setID("u", "om"), 80, 1, "om");
setChance(setID("u", "l"), 44, 1, "l");
setChance(setID("u", "m"), 48, 1, "m");
setChance(setID("u", "c"), 64, 1, "c");
setChance(setID("r", "og"), 50, 2, "og");
setChance(setID("r", "odr"), 40, 2, "odr");
setChance(setID("r", "od"), 30, 2, "od");
setChance(setID("r", "p"), 20.1547413607754, 2, "p", true);
setChance(setID("r", "ol"), 45, 2, "ol");
setChance(setID("r", "om"), 60, 2, "om");
setChance(setID("r", "l"), 33, 2, "l");
setChance(setID("r", "m"), 36, 2, "m");
setChance(setID("r", "c"), 32, 2, "c");
setChance(setID("e", "og"), 25, 3, "og");
setChance(setID("e", "ods"), 15, 3, "ods");
setChance(setID("e", "od"), 20, 3, "od");
setChance(setID("e", "p"), 5.57040429497818, 3, "p", true);
setChance(setID("e", "orl"), 60, 3, "ol");
setChance(setID("e", "om"), 30, 3, "om");
setChance(setID("e", "l"), 22, 3, "l");
setChance(setID("e", "m"), 24, 3, "m");
setChance(setID("e", "c"), 16, 3, "c");
setChance(setID("l", "og"), 5, 4, "og");
setChance(setID("l", "od"), 10, 4, "od");
setChance(setID("l", "p"), 1.47458447810726, 4, "p", true);
setChance(setID("l", "om"), 15, 4, "om");
setChance(setID("l", "l"), 11, 4, "l");
setChance(setID("l", "m"), 12, 4, "m");
setChance(setID("l", "c"), 8, 4, "c");
setChance(setID("m", "og"), 1, 5, "og");
setChance(setID("m", "odr"), 2, 5, "odr");
setChance(setID("m", "od"), 3, 5, "od");
setChance(setID("m", "p"), 0.138617772039073, 5, "p", true);
setChance(setID("m", "l"), 3.3, 5, "l");
setChance(setID("m", "m"), 3.6, 5, "m");
setChance(setID("m", "c"), 4, 5, "c");
setChance(setID("ul", "og"), 100, 0, "og");
setChance(setID("ul", "odr"), 100, 11, "odr");
setChance(setID("ul", "od"), 100, 12, "od");
setChance(setID("ul", "p"), 0.04620592401, 6, "p", true);
setChance(setID("ul", "l"), 2.2, 6, "l");
setChance(setID("ul", "m"), 2.4, 6, "m");
setChance(setID("ul", "c"), 2, 6, "c");
setChance(setID("s", "l"), 1.1, 7, "l");
setChance(setID("s", "m"), 1.2, 7, "m");
setChance(setID("s", "c"), 1, 7, "c");
setChance(setID("s", "p"), 0.015401974671, 7, "p", true);
setChance(setID("ce", "l"), 0.8, 8, "l");
setChance(setID("ce", "m"), 0.9, 8, "m");
setChance(setID("ce", "c"), 0.7, 8, "c");
setChance(setID("ce", "p"), 0.0056007180621, 8, "p", true);
setChance(setID("ch", "l"), 0.5, 9, "l");
setChance(setID("ch", "m"), 0.6, 9, "m");
setChance(setID("ch", "c"), 0.4, 9, "c");
setChance(setID("ch", "p"), 0.00224028722484, 9, "p", true);
setChance(setID("ef", "l"), 0.2, 10, "l");
setChance(setID("ef", "m"), 0.3, 10, "m");
setChance(setID("ef", "c"), 0.1, 10, "c");
setChance(setID("ef", "p"), 99568321104e-14, 10, "p", true);

setChance(setID("u", "cp"), 30, 1, "cp", true);
setChance(setID("r", "cp"), 15, 2, "cp", true);
setChance(setID("e", "cp"), 8, 3, "cp", true);
setChance(setID("l", "cp"), 5, 4, "cp", true);
setChance(setID("m", "cp"), 3, 5, "cp", true);
setChance(setID("ul", "cp"), 2, 6, "cp", true);
setChance(setID("s", "cp"), 1, 7, "cp", true);
setChance(setID("o", "cp"), 0.9, 8, "cp", true);
setChance(setID("f", "cp"), 0.8, 9, "cp", true);
setChance(setID("d", "cp"), 0.7, 10, "cp", true);
setChance(setID("sm", "cp"), 0.6, 11, "cp", true);
setChance(setID("om", "cp"), 0.5, 12, "cp", true);

ID("cstprob").onchange = function() {
  prob = ID("cstprob").value;
  isPRNG = false;
  rarity = 13;
  mode = "cst";
  att = 1;
  hatt = 1;
  latt = Infinity;
  combo = 0;
  hcombo = 0;
  ptllost = 0;
  ID("fakebutton").style.display = "none";
  ID("chancetxt").innerHTML = `${Math.round(100 * prob) / 100}% Success Chance`;
  ID("chancetxt").style.color = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity - 1];
  ID("button").style.background = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity - 1];
};
ID("cstprob").onkeyup = function() {
  prob = ID("cstprob").value;
  isPRNG = false;
  rarity = 13;
  mode = "cst";
  att = 1;
  hatt = 1;
  latt = Infinity;
  combo = 0;
  hcombo = 0;
  ptllost = 0;
  ID("fakebutton").style.display = "none";
  ID("chancetxt").innerHTML = `${Math.round(100 * prob) / 100}% Success Chance`;
  ID("chancetxt").style.color = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity - 1];
  ID("button").style.background = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity - 1];
};

ID("acbutton").onclick = function() {
  if (autoCraft === false) {
    ID("acbutton").innerHTML = "DISABLE AUTOCRAFT";
    autoCraft = true;
  } else if (autoCraft === true) {
    clearInterval(acInterval);
    ID("acbutton").innerHTML = "ENABLE AUTOCRAFT";
    autoCraft = false;
  };
};

//Quest String
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});
let flowr = params.flowr;
if (flowr === "activated") {
  ID("florrchances").style.display = "none";
  ID("flowrchances").style.display = "inline-block";
  ID("fwbutton").innerHTML = "FLORR CRAFTING";
  ID("fwbutton").href = "https://marcusicoi.glitch.me/florr/petal/crafting";
} else {
  ID("fwbutton").href = "https://marcusicoi.glitch.me/florr/petal/crafting?flowr=activated";
};
function craft() {
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  if (customCanvasWidth) canvas.width = ID("wdtxt").value;
  scprob = setSecretChance ? ID("sctxt").value : prob;
  var chance = prob === scprob ? probability(prob) : probability(scprob);
  let txtval = ID("txt").value;
  if (txtval.indexOf("+") > -1) {
    let numbers = txtval.split("+");
    txtval = 0;
    for (let i = 0; i < numbers.length; i++) {
      txtval += +numbers[i];
    };
  };
  let petals = txtval;
  if (petals > 5) {
    canvas.height = isPRNG ? 275 : 295;
    if (!customCanvasWidth) canvas.width = 450;
    ID("craftingdiv").style.marginTop = "115px";
  } else {
    if (!customCanvasWidth) {
      if (precisePRNGChance) {
        if (mode === "p") canvas.width = 450;
        if (mode === "cp") canvas.width = 450;
      } else {
        canvas.width = 350;
      };
    };
    ID("craftingdiv").style.marginTop = "90px";
    if (chance) {
      if (ptllost !== 0) {
        canvas.height = prngY(235);
      } else {
        canvas.height = prngY(215);
      };
    } else {
      canvas.height = prngY(255);
    };
  };
  let success = isPRNG === true ? `${Math.round2(1e3 * prob) / 1e3}% > ${precisePRNGChance ? Math.random() * prob : Math.floor(Math.random() * prob * 1e3) / 1e3}%` : `${prob}% > ${Math.floor(Math.random() * prob * 10) / 10}%`;
  let fail = isPRNG === true ? `${Math.round2(1e3 * prob) / 1e3}% > ${precisePRNGChance ? (Math.random() * (100 - prob) + prob) : Math.floor((Math.random() * (100 - prob) + prob + 1) * 1e3) / 1e3}%` : `${prob}% > ${Math.floor((Math.random() * (100 - prob) + prob) * 10) / 10}%`;
  let ctx = canvas.getContext("2d");
  ctx.font = "bold 22.5px Ubuntu";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineJoin = "round";
  ctx.lineWidth = 2.5;  
  ctx.strokeText(`${flowr !== "activated" ? "Florr.io" : "Flowr.fun"} Crafting Simulator`, 6.5, 25);
  ctx.fillText(`${flowr !== "activated" ? "Florr.io" : "Flowr.fun"} Crafting Simulator`, 6.5, 25);
  
  ctx.font = "bold 17.5px Ubuntu";
  ctx.fillStyle = flowr !== "activated" ? colrar[rarity] : flowrcolrar[rarity];
  let modetxt = `${Math.round2(1e3 * (isPRNG ? PRNGdisplayprob : prob)) / 1e3}% Success Chance`;
  switch (mode) {
    case "og": modetxt += " (Original)"; break;
    case "od": modetxt += " (Old)"; break;
    case "odr": modetxt += " (Older)"; break;
    case "ods": modetxt += " (Oldest)"; break;
    case "ol": modetxt += " (Old LSkill)"; break;
    case "orl": modetxt += " (Older LSkill)"; break;
    case "om": modetxt += " (Old MSkill)"; break;
    case "orm": modetxt += " (Older MSkill)"; break;
    case "p": modetxt += precisePRNGChance ? " (Precise PRNG)" : " (PRNG)"; break;
    case "l": modetxt += " (LSkill)"; break;
    case "m": modetxt += " (MSkill)"; break;
    case "c": modetxt += " (Current)"; break;
    case "cp": modetxt += precisePRNGChance ? " (Current Precise PRNG)" : " (Current PRNG)"; break;
    case "cst": modetxt += " (Custom)"; break;
  };
  ctx.strokeText(modetxt, 6.5, 45);
  ctx.fillText(modetxt, 6.5, 45); 
  
  ctx.fillStyle = "white";
  var avg = Math.round(((2.5 * (prob / 100) + 2.5) / (prob / 100)) * 100) / 100;
  let avgtxt = `Average: ${intc(avg)}`;
  if (!isPRNG && petals <= 5) ctx.strokeText(avgtxt, 6.5, 65);
  if (!isPRNG && petals <= 5) ctx.fillText(avgtxt, 6.5, 65);
  
  let avgcft = Math.round(avg / 5);
  let avgcfttxt = `(Crafts: ${intc(avgcft)})`;    
  if (!isPRNG && petals <= 5) ctx.strokeText(avgcfttxt, ctx.measureText(avgtxt).width + 12, 65);
  if (!isPRNG && petals <= 5) ctx.fillText(avgcfttxt, ctx.measureText(avgtxt).width + 12, 65);
  
  let avgatt = Math.floor(avgcft / 5);
  if (avgatt === 0) avgatt = 1;
  if (!isPRNG && petals <= 5) ctx.strokeText(`(Attempts: ${intc(avgatt)})`, ctx.measureText(avgtxt).width + (12 * 1.5) + ctx.measureText(avgcfttxt).width, 65);
  if (!isPRNG && petals <= 5) ctx.fillText(`(Attempts: ${intc(avgatt)})`, ctx.measureText(avgtxt).width + (12 * 1.5) + ctx.measureText(avgcfttxt).width, 65);
  
  ctx.font = "bold 17.5px Ubuntu";
  ctx.strokeText(`Petals: ${intc(petals)}`, 6.5, petals <= 5 ? prngY(85) : 65);
  ctx.fillText(`Petals: ${intc(petals)}`, 6.5, petals <= 5 ? prngY(85) : 65);  
  
  if (petals <= 5) {
    if (chance) {
      if (autoCraft === true) {
        clearInterval(acInterval);
      };
      ctx.fillStyle = succol;
      ctx.strokeText("Success!", 6.5, prngY(125));
      ctx.fillText("Success!", 6.5, prngY(125));
      ctx.strokeText(success, 6.5, prngY(145));
      ctx.fillText(success, 6.5, prngY(145));
      if (hcombo < (combo += 1)) hcombo = combo;
      if (combo > 1) {
        if (att > 0) {
          ctx.strokeText(`Succeeded at Attempt ${att}, Combo x${combo}!`, 6.5, prngY(165));
          ctx.fillText(`Succeeded at Attempt ${att}, Combo x${combo}!`, 6.5, prngY(165));
        } else {
          ctx.strokeText(`Attempt ${att}, Combo x${combo}!`, 6.5, prngY(165));
          ctx.fillText(`Attempt ${att}, Combo x${combo}!`, 6.5, prngY(165));
        };
      } else if (att > 0 && combo <= 1) {
        ctx.strokeText(`Succeeded at Attempt ${att}`, 6.5, prngY(165));
        ctx.fillText(`Succeeded at Attempt ${att}`, 6.5, prngY(165));
      } else {
        ctx.strokeText(`Attempt ${att}`, 6.5, prngY(165));
        ctx.fillText(`Attempt ${att}`, 6.5, prngY(165));
      };
      ctx.strokeText(`Highest Combo: x${hcombo}`, 6.5, prngY(185));
      ctx.fillText(`Highest Combo: x${hcombo}`, 6.5, prngY(185));
      if (latt > att) latt = att;
      att = 1;
      ctx.strokeText(`Lowest Attempt: ${latt}`, 6.5, prngY(205));
      ctx.fillText(`Lowest Attempt: ${latt}`, 6.5, prngY(205));
      ctx.fillStyle = failcol;
      if (0 !== ptllost) {
        ctx.strokeText(`Petals Lost (before succeed): -${ptllost} `, 6.5, prngY(225));
        ctx.fillText(`Petals Lost (before succeed): -${ptllost}`, 6.5, prngY(225));
        ptllost = 0;
      };
      if (flowr !== "activated") {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG[att - 1]; break;
            case 2: prob = rPRNG[att - 1]; break;
            case 3: prob = ePRNG[att - 1]; break;
            case 4: prob = lPRNG[att - 1]; break;
            case 5: prob = mPRNG[att - 1]; break;
            case 6: prob = ulPRNG[att - 1]; break;
            case 7: prob = sPRNG[att - 1]; break;
            case 8: prob = cePRNG[att - 1]; break;
            case 9: prob = chPRNG[att - 1]; break;
            case 10: prob = efPRNG[att - 1]; break;
          };
        };
      } else {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG2[att - 1]; break;
            case 2: prob = rPRNG2[att - 1]; break;
            case 3: prob = ePRNG2[att - 1]; break;
            case 4: prob = lPRNG2[att - 1]; break;
            case 5: prob = mPRNG2[att - 1]; break;
            case 6: prob = ulPRNG2[att - 1]; break;
            case 7: prob = sPRNG2[att - 1]; break;
            case 8: prob = oPRNG2[att - 1]; break;
            case 9: prob = fPRNG2[att - 1]; break;
            case 10: prob = dPRNG2[att - 1]; break;
            case 11: prob = smPRNG2[att - 1]; break;
            case 12: prob = omPRNG2[att - 1]; break;
          };
        };
      };
    } else {
      let lost = Math.floor(4 * Math.random()) + 1;
      switch (lost) {
        case 1: ptllost += 1; break;
        case 2: ptllost += 2; break;
        case 3: ptllost += 3; break;
        case 4: ptllost += 4; break;
      };
      ctx.fillStyle = failcol;
      ctx.strokeText(`Remaining Petals: ${petals} (-${lost})`, 6.5, prngY(105));
      ctx.fillText(`Remaining Petals: ${petals} (-${lost})`, 6.5, prngY(105));
      ctx.strokeText("Failed.", 6.5, prngY(145));
      ctx.fillText("Failed.", 6.5, prngY(145));
      ctx.strokeText(fail, 6.5, prngY(165));
      ctx.fillText(fail, 6.5, prngY(165));
      if (hatt < (att += 1)) hatt = att;
      combo = 0;
      ctx.strokeText(`Attempt ${att - 1}`, 6.5, prngY(185));
      ctx.fillText(`Attempt ${att - 1}`, 6.5, prngY(185));   
      if (flowr !== "activated") {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG[att - 1]; break;
            case 2: prob = rPRNG[att - 1]; break;
            case 3: prob = ePRNG[att - 1]; break;
            case 4: prob = lPRNG[att - 1]; break;
            case 5: prob = mPRNG[att - 1]; break;
            case 6: prob = ulPRNG[att - 1]; break;
            case 7: prob = sPRNG[att - 1]; break;
            case 8: prob = cePRNG[att - 1]; break;
            case 9: prob = chPRNG[att - 1]; break;
            case 10: prob = efPRNG[att - 1]; break;
          };
        };
      } else {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG2[att - 1]; break;
            case 2: prob = rPRNG2[att - 1]; break;
            case 3: prob = ePRNG2[att - 1]; break;
            case 4: prob = lPRNG2[att - 1]; break;
            case 5: prob = mPRNG2[att - 1]; break;
            case 6: prob = ulPRNG2[att - 1]; break;
            case 7: prob = sPRNG2[att - 1]; break;
            case 8: prob = oPRNG2[att - 1]; break;
            case 9: prob = fPRNG2[att - 1]; break;
            case 10: prob = dPRNG2[att - 1]; break;
            case 11: prob = smPRNG2[att - 1]; break;
            case 12: prob = omPRNG2[att - 1]; break;
          };
        };
      };
      petals -= lost;
      ctx.fillStyle = succol;
      ctx.strokeText(`Lowest Attempt: ${latt}`, 6.5, prngY(205));
      ctx.fillText(`Lowest Attempt: ${latt}`, 6.5, prngY(205));
      ctx.fillStyle = failcol;
      ctx.strokeText(`Highest Attempt: ${hatt}`, 6.5, prngY(225));
      ctx.fillText(`Highest Attempt: ${hatt}`, 6.5, prngY(225));
      ctx.strokeText(`Petals Lost (before succeed): -${ptllost}`, 6.5, prngY(245));
      ctx.fillText(`Petals Lost (before succeed): -${ptllost}`, 6.5, prngY(245));
      };
  } else {
    let successes = 0,
      fails = 0,
      combo = 0,
      att = 1,
      hcombo = 0,
      hatt = 1,
      latt = Infinity,
      lost1 = 0,
      lost2 = 0,
      lost3 = 0,
      lost4 = 0;
    console.log(chance)
    do if (prob === scprob ? probability(prob) : probability(scprob)) {
      if (flowr !== "activated") {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG[att - 1]; break;
            case 2: prob = rPRNG[att - 1]; break;
            case 3: prob = ePRNG[att - 1]; break;
            case 4: prob = lPRNG[att - 1]; break;
            case 5: prob = mPRNG[att - 1]; break;
            case 6: prob = ulPRNG[att - 1]; break;
            case 7: prob = sPRNG[att - 1]; break;
            case 8: prob = cePRNG[att - 1]; break;
            case 9: prob = chPRNG[att - 1]; break;
            case 10: prob = efPRNG[att - 1]; break;
          };
        };
      } else {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG2[att - 1]; break;
            case 2: prob = rPRNG2[att - 1]; break;
            case 3: prob = ePRNG2[att - 1]; break;
            case 4: prob = lPRNG2[att - 1]; break;
            case 5: prob = mPRNG2[att - 1]; break;
            case 6: prob = ulPRNG2[att - 1]; break;
            case 7: prob = sPRNG2[att - 1]; break;
            case 8: prob = oPRNG2[att - 1]; break;
            case 9: prob = fPRNG2[att - 1]; break;
            case 10: prob = dPRNG2[att - 1]; break;
            case 11: prob = smPRNG2[att - 1]; break;
            case 12: prob = omPRNG2[att - 1]; break;
          };
        };
      };
      petals -= 5;
      successes += 1;
      combo += 1;
      if (latt > att) latt = att;
      att = 1;
      if (hcombo < combo) hcombo = combo;
    } else {
      let lost = Math.floor(4 * Math.random()) + 1;
      switch (lost) {
        case 1: lost1 += 1; break;
        case 2: lost2 += 1; break;
        case 3: lost3 += 1; break;
        case 4: lost4 += 1; break;
      };
      if (flowr !== "activated") {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG[att - 1]; break;
            case 2: prob = rPRNG[att - 1]; break;
            case 3: prob = ePRNG[att - 1]; break;
            case 4: prob = lPRNG[att - 1]; break;
            case 5: prob = mPRNG[att - 1]; break;
            case 6: prob = ulPRNG[att - 1]; break;
            case 7: prob = sPRNG[att - 1]; break;
            case 8: prob = cePRNG[att - 1]; break;
            case 9: prob = chPRNG[att - 1]; break;
            case 10: prob = efPRNG[att - 1]; break;
          };
        };
      } else {
        if (isPRNG) {
          switch (rarity) {
            case 1: prob = uPRNG2[att - 1]; break;
            case 2: prob = rPRNG2[att - 1]; break;
            case 3: prob = ePRNG2[att - 1]; break;
            case 4: prob = lPRNG2[att - 1]; break;
            case 5: prob = mPRNG2[att - 1]; break;
            case 6: prob = ulPRNG2[att - 1]; break;
            case 7: prob = sPRNG2[att - 1]; break;
            case 8: prob = oPRNG2[att - 1]; break;
            case 9: prob = fPRNG2[att - 1]; break;
            case 10: prob = dPRNG2[att - 1]; break;
            case 11: prob = smPRNG2[att - 1]; break;
            case 12: prob = omPRNG2[att - 1]; break;
          };
        };
      };
      petals -= lost;
      fails += 1; 
      combo = 0;
      if (hatt < (att += 1)) hatt = att;
    } while (petals > 4);      
    ctx.fillStyle = "white";
    ctx.strokeText(`Remaining Petals: ${petals}`, 6.5, 85);
    ctx.fillText(`Remaining Petals: ${petals}`, 6.5, 85);          
    successes === 0 ? ctx.fillStyle = "white" : ctx.fillStyle = succol;
    ctx.strokeText(`Success Count: ${intc(successes)}`, 6.5, 125);
    ctx.fillText(`Success Count: ${intc(successes)}`, 6.5, 125);        
    fails === 0 ? ctx.fillStyle = "white" : ctx.fillStyle = failcol; 
    ctx.strokeText(`Fail Count: ${intc(fails)} ([-1]=${intc(lost1)} [-2]=${intc(lost2)} [-3]=${intc(lost3)} [-4]=${intc(lost4)})`, 6.5, 145);
    ctx.fillText(`Fail Count: ${intc(fails)} ([-1]=${intc(lost1)} [-2]=${intc(lost2)} [-3]=${intc(lost3)} [-4]=${intc(lost4)})`, 6.5, 145);     
    ctx.fillStyle = "white";
    let avgtxt = `Average: ${intc(avg)}`;
    if (!isPRNG) ctx.strokeText(avgtxt, 6.5, 185);
    if (!isPRNG) ctx.fillText(avgtxt, 6.5, 185);
    avgcft = Math.floor(txtval / avg);
    let avgcfttxt = `(Crafts: ${intc(avgcft)})`;
    if (avgcft < successes) ctx.fillStyle = succol;
    if (avgcft > successes) ctx.fillStyle = failcol;
    if (!isPRNG) ctx.strokeText(avgcfttxt, ctx.measureText(avgtxt).width + 12, 185);
    if (!isPRNG) ctx.fillText(avgcfttxt, ctx.measureText(avgtxt).width + 12, 185);
    avgatt = Math.floor(txtval / 4.375);
    if (avgatt === 0) avgatt = 1;
    ctx.fillStyle = "white";
    if (!isPRNG) ctx.strokeText(`(Attempts: ${intc(avgatt)})`, ctx.measureText(avgtxt).width + (12 * 1.5) + ctx.measureText(avgcfttxt).width, 185);
    if (!isPRNG) ctx.fillText(`(Attempts: ${intc(avgatt)})`, ctx.measureText(avgtxt).width + (12 * 1.5) + ctx.measureText(avgcfttxt).width, 185);      
    ctx.fillStyle = succol;
    ctx.strokeText(`Highest Combo: x${hcombo}`, 6.5, prngY(205));
    ctx.fillText(`Highest Combo: x${hcombo}`, 6.5, prngY(205));     
    ctx.strokeText(`Lowest Attempt: ${latt}`, 6.5, prngY(225));
    ctx.fillText(`Lowest Attempt: ${latt}`, 6.5, prngY(225));      
    ctx.fillStyle = failcol;
    ctx.strokeText(`Highest Attempt: ${intc(hatt)}`, 6.5, prngY(245));
    ctx.fillText(`Highest Attempt: ${intc(hatt)}`, 6.5, prngY(245));      
    ctx.fillStyle = "white";
    ctx.strokeText(`Total Attempts: ${intc(successes + fails)}`, 6.5, prngY(265));
    ctx.fillText(`Total Attempts: ${intc(successes + fails)}`, 6.5, prngY(265));    
    elapsedEnd = new Date();
    ctx.strokeText(`Elapsed Time: ${elapsedEnd - elapsedStart}ms`, 6.5, prngY(285));
    ctx.fillText(`Elapsed Time: ${elapsedEnd - elapsedStart}ms`, 6.5, prngY(285));
  };
};

ID("button").onclick = function () {
  elapsedStart = new Date();
  if (autoCraft === true) {
    acInterval = setInterval(function() {
      craft();
    }, 1);
  } else {
    craft();
  }
};
ID("ssbutton").onclick = function() {
  html2canvas(canvas).then(function () {
    return Canvas2Image.saveAsPNG(canvas);
  });
};
ID("prbutton").onclick = function() {
  if (precisePRNGChance === false) {
    ID("prbutton").innerHTML = "ROUND PRNG";
    precisePRNGChance = true;
  } else if (precisePRNGChance === true) {
    ID("prbutton").innerHTML = "PRECISE PRNG";
    precisePRNGChance = false;
  };
};
ID("scbutton").onclick = function() {
  if (setSecretChance === false) {
    ID("scbutton").innerHTML = "SETBACK SECRET CHANCE";
    ID("sctxt").style.visibility = "visible";
    setSecretChance = true;
  } else if (setSecretChance === true) {
    ID("scbutton").innerHTML = "SET SECRET CHANCE";
    ID("sctxt").style.visibility = "hidden";
    setSecretChance = false;
  };
};
ID("wdbutton").onclick = function() {
  if (customCanvasWidth === false) {
    ID("wdbutton").innerHTML = "DEFAULT CANVAS WIDTH";
    ID("wdtxt").style.display = "inline-block";
    customCanvasWidth = true;
  } else if (customCanvasWidth === true) {
    ID("wdbutton").innerHTML = "CUSTOM CANVAS WIDTH";
    ID("wdtxt").style.display = "none";
    customCanvasWidth = false;
  };
};