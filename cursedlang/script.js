let $ = (x) => { return document.getElementById(x) };
function unicodeRange(str, min, max) {
  return [...str].filter(char => {
    let code = char.codePointAt(0);
    return code < min || code > max;
  }).join('');
};
function checkSort(lang) {
  let k = Object.keys(lang);
  for (let i of k) {
    let lastRank = 0;
    let successful = true;
    for (let j = 0; j < lang[i].split("").length; j++) {
      if (lang[i].codePointAt(j) > lastRank) lastRank = lang[i].codePointAt(j);
      else {
        successful = false;
        break;
      };
    };
    console.log(`${i} -> ${successful}`);
  };
};
function checkUnicodeSort(char) {
  fetch("/cursedlang/unicode.json").then(data => data.json()).then(lang => {
    let arr = [];
    for (let i = 0; i < lang[char].split("").length; i++) {
      arr.push(lang[char].codePointAt(i));
    };
    console.log(arr);
  });
};

let options = {
  0x0000: true,
  0x0080: true,
  0x0100: true,
  0x0180: true,
  0x0250: true,
  0x02B0: true,
  0x0370: true,
  0x0400: true,
  0x0500: true,
  0x0530: true,
  0x0590: true,
  0x0600: true,
};
let last = 0x06FF;
let historyPreferences = [
  "U+0000 - U+007F (Basic Latin)", // April 25th, 2025
  "U+0080 - U+00FF (Latin-1 Supplement)", // April 25th, 2025
  "U+0100 - U+017F (Latin Extended-A)", // April 26th, 2025
  "U+0180 - U+024F (Latin Extended-B)", // April 26th, 2025
  "U+0250 - U+02AF (IPA Extensions)", // April 27th, 2025
  "U+02B0 - U+02FF (Spacing Modifier Letters)", // April 28th, 2025
  "U+0370 - U+03FF (Greek and Coptic)", // April 28th, 2025
  "U+0400 - U+04FF (Cyrillic)", // April 30th, 2025
  "U+0500 - U+052F (Cyrillic Supplement)", // May 8th, 2025
  "U+0530 - U+058F (Armenian)", // May 12th, 2025
  "U+0590 - U+05FF (Hebrew)", // May 12th, 2025
  "U+0600 - U+06FF (Arabic)", // May 25th, 2025
];
let opt = Object.keys(options);
for (let i = 0; i < opt.length; i++) {
  let a = document.createElement("a");
  a.innerHTML = historyPreferences[i];
  a.id = opt[i];
  a.style.background = "blue";
  a.onclick = function() {
    if (options[opt[i]]) {
      a.style.background = "red";
      options[opt[i]] = false;
    } else {
      a.style.background = "blue";
      options[opt[i]] = true;
    };
  };
  document.body.appendChild(a);
};
$("encode").onclick = function() {
  $("res").innerText = "";
  $("trans").innerText = "";
  fetch("/cursedlang/unicode.json").then(data => data.json()).then(lang => {
    checkSort(lang);
    //Check
    for (let i of opt) {
      if (!options[i]) {
        for (let j of Object.keys(lang)) {
          lang[j] = unicodeRange(lang[j], i, (opt[opt.indexOf(i) + 1] - 1) ?? last);
          if (lang[j].length < 1) delete lang[j];
        };
      };
    };
    
    //Convert
    for (let i = 0; i < $("text").value.length;) {
      let replaced = false;
      for (let key of Object.keys(lang).sort((a, b) => b.length - a.length)) {
        if ($("text").value.startsWith(key, i)) {
          let c = lang[key].split("")[Math.floor(Math.random() * lang[key].split("").length)];
          $("res").innerHTML += c;
          $("trans").innerHTML += `/${key}/`;
          i += key.length;
          replaced = true;
          break;
        };
      };
      if (!replaced) {
        $("res").innerHTML += $("text").value[i];
        $("trans").innerHTML += `/${$("text").value[i]}/`;
        i++;
      };
    };
  });
};
$("decode").onclick = function() {
  $("res").innerText = "";
  $("trans").innerText = "";
  fetch("/cursedlang/unicode.json").then(data => data.json()).then(lang => {
    checkSort(lang);
    //Convert
    for (let i of $("text").value.split("")) {
      let replaced = false;
      for (let j of Object.keys(lang)) {
        if (lang[j].includes(i)) {
          $("res").innerHTML += j;
          replaced = true;
          break; 
        };
      };
      if (!replaced) {
        $("res").innerHTML += i;
        //$("trans").innerHTML += `/${i}/`;
        i++;
      };
    };
  });
};