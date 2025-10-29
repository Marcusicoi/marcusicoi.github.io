window.onload = function() {
 if (Math.random() < (100 / 7) / 100) { 
    let garden = [
        /*0.svg*/"https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/0.svg?v=1696155668634"
    ]
    /*let str = "";
    for (let y = 0; y < 21; y++) {
      for (let x = 0; x < 11; x++) {
        if (x == 10 && y == 20) {
          str += `url(${garden[Math.floor(Math.random() * 4)]}) no-repeat ${256 * x}px ${256 * y}px;`
        } else {
          str += `url(${garden[Math.floor(Math.random() * 4)]}) no-repeat ${256 * x}px ${256 * y}px,`
        }
      }
    }
    document.body.style.background = str
    */
    document.body.style.background = `url(${garden[0]})`
  }
  else if (Math.random() < (100 / 6) / 100) { document.body.style.backgroundImage = "url(https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/desert_c_0.svg?v=1694349648492)" }
  else if (Math.random() < (100 / 5) / 100) { document.body.style.backgroundImage = "url(https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/Junglegrass01.svg?v=1694489383294)" }
  else if (Math.random() < (100 / 4) / 100) { document.body.style.backgroundImage = "url(https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/ocean_c_0.svg?v=1696152748020)" }
  else if (Math.random() < (100 / 3) / 100) { document.body.style.backgroundImage = "url(https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/20230912_180733.jpg?v=1694644304949)", document.body.style.backgroundSize = "25px 25px" }
  else if (Math.random() < (100 / 2) / 100) { document.body.style.backgroundImage = "url(https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/20230914_065306.jpg?v=1694645612676)", document.body.style.backgroundSize = "25px 25px" }
  else if (Math.random() < (100 / 1) / 100) { document.body.style.backgroundImage = "url(https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/20230914_084055.jpg?v=1694652081653)", document.body.style.backgroundSize = "25px 25px" }
};
function ID(id) { return document.getElementById(id) };
var ts = 175;
var canvas = ID("canvas");
canvas.getContext("2d").createText = function(str, x, y) {
  this.strokeText(str, x, y);
  this.fillText(str, x, y);
};
function screenshot(difficulty, text, build, id, size = 27.5) {
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  function textf() {
    ctx.font = `bold 27.5px Ubuntu`;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3.75;
    ctx.createText("Screenshot to select your punishment.", canvas.width / 2, 72.5);
  
    ctx.fillStyle = "yellow";
    ctx.createText("FLORR.IO RELATED", canvas.width / 2, 37.5);
    
    ctx.font = "bold 15px Ubuntu";
    ctx.fillStyle = "red";
    ctx.lineWidth = 2.5
    ctx.createText("SEND WITH A WARNING IF YOU'RE REPOSTING", canvas.width / 2, 92.5)
  };
  function textf2() {
    ctx.font = `bold ${size}px Ubuntu`;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3.75;
    
    if (text.length === 1) {
      ctx.createText(text[0], canvas.width / 2, 215);
    };
    if (text.length === 2) {
      ctx.createText(text[0], canvas.width / 2, 215 - (size / 1.5));
      ctx.createText(text[1], canvas.width / 2, 215 + (size / 1.5));
    };
    
    let dtx = "";
    switch (difficulty) {
      case 1: dtx = "Win"; break;
      case 2: dtx = "Easy"; break;
      case 3: dtx = "Medium"; break;
      case 4: dtx = "Hard"; break;
      case 5: dtx = "Impossible"; break;
    };
    ctx.font = `bold 10px Ubuntu`;
    ctx.textAlign = "left";
    ctx.lineWidth = 2.5;
    ctx.createText("Difficulty: " + dtx, 5, canvas.height - 5);
   
    ctx.textAlign = "right";
    ctx.createText("ID: " + id, canvas.width - 5, canvas.height - 5);
  
    ctx.textAlign = "center";
    ctx.createText("Select here (https://marcusicoi.glitch.me/screenshot)", canvas.width / 2, canvas.height - 5);
    
  };
  let grass = new Image();
  grass.crossOrigin = "anonymous";
  grass.src = "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/grass_c_0.svg?v=1721474735473";
  let grassY = -50;  
  grass.onload = function() {
    ctx.drawImage(grass, 0, grassY, ts, ts);
    ctx.drawImage(grass, ts, grassY, ts, ts);
    ctx.drawImage(grass, ts * 2, grassY, ts, ts);
    ctx.drawImage(grass, ts * 3, grassY, ts, ts);
    textf();
  };
 
  let image = new Image();
  image.crossOrigin = "anonymous";
  switch (difficulty) {
    case 1: image.src = "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/desert-re.svg?v=1721474527903"; break;
    case 2: image.src = "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/desert%20fixed.svg?v=1721473471798"; break;
    case 3: image.src = "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/desert-med.svg?v=1721474135985"; break;
    case 4: image.src = "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/desert-ha.svg?v=1721474144767"; break;
    case 5: image.src = "https://cdn.glitch.global/7c11ce93-3b90-40a3-8810-34832400f1b0/desert-rh.svg?v=1721474154660"; break;
  };
  let imageY = 100;
  image.onload = function() {
    ctx.drawImage(image, 0, imageY, ts, ts);
    ctx.drawImage(image, ts, imageY, ts, ts);
    ctx.drawImage(image, ts * 2, imageY, ts, ts);
    ctx.drawImage(image, ts * 3, imageY, ts, ts);
    ctx.drawImage(image, 0, imageY + ts, ts, ts);
    ctx.drawImage(image, ts, imageY + ts, ts, ts);
    ctx.drawImage(image, ts * 2, imageY + ts, ts, ts);
    ctx.drawImage(image, ts * 3, imageY + ts, ts, ts);
    textf2();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 100, canvas.width, 25);
  
    ctx.font = `bold 15px Ubuntu`;
    ctx.fillStyle = "white";  
    ctx.createText(build + " - @8172", canvas.width / 2, 117.5);
  };
};

ID("dif1").onclick = function() {
  screenshot(1, ID("dare").value.split(","), `CUSTOM`, 0, ID("size").value)
};
ID("dif2").onclick = function() {
  screenshot(2, ID("dare").value.split(","), `CUSTOM`, 0, ID("size").value)
};
ID("dif3").onclick = function() {
  screenshot(3, ID("dare").value.split(","), `CUSTOM`, 0, ID("size").value)
};
ID("dif4").onclick = function() {
  screenshot(4, ID("dare").value.split(","), `CUSTOM`, 0, ID("size").value)
};
ID("dif5").onclick = function() {
  screenshot(5, ID("dare").value.split(","), `CUSTOM`, 0, ID("size").value)
};

ID("ss").onclick = function() {
  html2canvas(canvas).then(function() {
    return Canvas2Image.saveAsPNG(canvas);
  });
};
  
let a = 69;
let b = 80;
let d = "12/15/24 -22:41";
ID("cp").onclick = function() {
  let idn = Math.floor(Math.random() * Object.keys(id).length) + 1;
  /*
    BUILD FORMAT
    a>b - c (d)
    a = total of id before
    b = total of id after
    c = ids added
    d = date 
  */
  screenshot(id[idn].difficulty, id[idn].text, `${a}>${b} - ${b - a} (${d})`, idn, id[idn].size !== "" ? id[idn].size : 27.5);
};
ID("lt").onclick = function() {
  let idn = Object.keys(id).length;
  screenshot(id[idn].difficulty, id[idn].text, `${a}>${b} - ${b - a} (${d})`, idn, id[idn].size !== "" ? id[idn].size : 27.5);
};

ID("dg").onclick = function() {
  let warning = prompt(`
  Before downloading...
  IF YOU ARE PLANNING TO REPOST IT IN FLORRCORD
  I RECOMMEND TURNING IT ON SPOILER OR WARNING PEOPLE BY EPILEPSY ELSE YOU GET WARNED BY THE MODERATORS
  
  Type "yes" to proceed your download gif`);
  if (warning === "yes") {
    canvas.style.visibility = "visible";
    ID("p").style.display = "block";
    ID("p").style.color = "white";
    ID("p").innerHTML = "Processing...";
  
    var encoder = new GIF({
      workers: 2,
      quality: 10,
      width: canvas.width,
      height: canvas.height,
      workerScript: '/gif.js',
    });
  
    let array = [];
    for (let i = 1; i <= Object.keys(id).length; i++) {
      array[i] = i;
    };
    array = array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);      
    let i = 1;
    let interval = null;
  
    function drawFrame() {
      if (i === Object.keys(id).length) {
        clearTimeout(interval);
        gif.render();
        gif.on("finished", function() {
          canvas.style.visibility = "visible";
          ID("p").style.color = "red";
          ID("p").innerHTML = "SEND WITH A WARNING IF YOU'RE REPOSTING";
        });
      } else {
        screenshot(id[array[i]].difficulty, id[array[i]].text, `${a}>${b} - ${b - a} (${d})`, array[i], id[array[i]].size !== "" ? id[array[i]].size : 27.5, false);
        i++;
        setTimeout(function() {
          gif.addFrame(canvas.getContext("2d"));
          interval = setTimeout(drawFrame, 16.66);
          ID("p").innerHTML = "Processing... " + Math.round((i / Object.keys(id).length) * 100) + "%";
        }, 100);
      };
    };
    interval = setTimeout(drawFrame, 16.66);
  };
};