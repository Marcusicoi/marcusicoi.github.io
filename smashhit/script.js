// im lazy ;-;
function ID(id) {
  return document.getElementById(id)
}

//Body Background
function hex() {
  let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  function x() {
    return char[Math.floor(Math.random() * char.length)]
  }
  return "#" + x() + x() + x() + x() + x() + x()
}
function BG() {
  let txt = (x) => {
    return `linear-gradient(${x})`
  }
  function hexF() {
    let i = Math.floor(Math.random() * 5) + 1
    let deg = () => {
      return Math.floor(Math.random() * 360) + "deg"
    }, to = () => {
      let dir = ["bottom", "left", "right", "top left", "top right", "bottom left", "bottom right"]
      return "to " + dir[Math.floor(Math.random() * dir.length)]
    }
    switch (i) {
      case 1: return deg(); break
      case 2: return to(); break
      default: return "to top"; break;
    }
  }
  function hexN() {
    let ia = Math.floor(Math.random() * (4 - 2 + 1) + 2),
        ip = Math.floor(Math.random() * 100) + 1    
    function ranp(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min) + "%"
    }    
    let p1 = () => { return ranp(0, 25) },
        p2 = () => { return ranp(25, 50) },
        p3 = () => { return ranp(50, 75) },
        p4 = () => { return ranp(75, 100) }    
    if (ip < (100 / 3)) {
      switch (ia) {
        case 2: return `${hex()} ${p1()}, ${hex()} ${p2()}`; break
        case 3: return `${hex()} ${p1()}, ${hex()} ${p2()}, ${hex()} ${p3()}`; break
        case 4: return `${hex()} ${p1()}, ${hex()} ${p2()}, ${hex()} ${p3()}, ${hex()} ${p4()}`; break
      }
    } else {
      switch (ia) {
        case 2: return `${hex()}, ${hex()}`; break
        case 3: return `${hex()}, ${hex()}, ${hex()}`; break
        case 4: return `${hex()}, ${hex()}, ${hex()}, ${hex()}`; break
      }
    }    
  }
  
  let color = txt(`${hexF()}, ${hexN()}`)
  ID("bgtxt").innerHTML = color
  return color
}

//Change background color
ID("bgbg").onclick = function() {
  document.body.style.background = BG()
}

//View background color
let isView = false
ID("bgv").onclick = function() {
  if (isView == false) {
    ID("overview").style.visibility = "visible"
    ID("bgv").innerHTML = "View Color"
    ID("bgd").style.marginTop = "0px"
    isView = true
  } else if (isView == true) {
    ID("overview").style.visibility = "hidden"
    ID("bgv").innerHTML = "Back"
    ID("bgd").style.marginTop = "-337.5px"
    isView = false
  }
}
//Randomize Songs
function probability(n) {
  return Math.random() < (n / 100)
}
let mashup = (x, y) => {
  return `M—CP-${x}—CP-${y}`
}
let songs = [
     "CP-0_1", "CP-0_2", "CP-0_3",
     "CP-1_1—CP-5_2", "CP-1_2—END-4", "CP-1_3—CP-4_3",
     "CP-2_1", "CP-2_2", "CP-2_3", "CP-2_3—LOW", "CP-2_4",
     "CP-3_1", "CP-3_2", "CP-3_3", "CP-3_4", "CP-3_4—LOW",
     "CP-4_1", "CP-4_2—CP-8_1", "CP-4_2—CP-8_1—LOW",
     "CP-5_1", "CP-5_3", "CP-5_4",
     "CP-6_1—END-1", "CP-6_2", "CP-6_3", "CP-6_4",
     "CP-7_1—END-3", "CP-7_2", "CP-7_3—CP-8_2",
     "CP-8_3",
     "CP-9_1", "CP-9_1—OLD", "CP-9_2", "CP-9_2—OLD", "CP-9_3.1", "CP-9_3.2",
     "CP-10_1—CP-10_4", "CP-10_2", "CP-10_3", "CP-10_3—LOW",
     "CP-11_1", "CP-11_2", "CP-11_3", "CP-11_4.1", "CP-11_4.2", "CP-11_4.2—REV",
     "CRED", "BOWL", "END-2", "END-2—OLD",
     "VS_1", "VS_2.1", "VS_2.2", "VS_3", "VS_4",
     "ZEN_1", "ZEN_2",
     "CST-1", "CST-2", "CST-3", "CST-4.1", "CST-4.2", "CST-5.1", "CST-5.2",
     mashup("0_2", "0_3"), mashup("0_2", "4_1"), mashup("0_3", "2_1"), 
     mashup("2_1", "1_1"), mashup("3_1", "2_3"), mashup("3_1", "6_3"),
     mashup("5_1", "1_1"), mashup("9_1", "7_1"), mashup("10_2", "3_4") + "—LOW",
     mashup("11_1", "7_2"), mashup("11_4.2", "1_3"), "M—VS_1—CP-11_3",
     //"CP-3_4—LOW", "CP-4_2—CP-8_1—LOW","CP-3_4—LOW", "CP-4_2—CP-8_1—LOW","CP-3_4—LOW", "CP-4_2—CP-8_1—LOW","CP-3_4—LOW", "CP-4_2—CP-8_1—LOW",
]
/*function preload(url) {
    let audio = new Audio()
    audio.addEventListener('canplaythrough', loadedA, false)
    audio.src = `smashhit/songs/${url}.mp3`
}
const loaded = 0
function loadedA() {
    loaded++
    ID("loading").innerHTML = `
    LOADING... 
    <h2 style="font-size:20px">${loaded}/${songs.length} FILES LOADED</h2>`
    if (loaded == songs.length) {
      ID("loading").style.visibility = "hidden"
      ID("everything").style.visibility = "visible"
      ID("everything").style.marginTop = "-200px"
      document.body.style.background = BG()
      document.body.style.height = "100vh"
    }
}
for (var i in songs) {
    preload(songs[i]);
}*/
function play(index) {
    var i = new Audio()
    i.src = `smashhit/songs/${songs[index]}.mp3`
    i.play()
}
//PLAY!!
ID("button").onclick = function () {
ID("button").style.visibility = "hidden"
play(Math.floor(Math.random() * songs.length))
//Next song loop
let i = 1
setInterval(
  function() {
    play(Math.floor(Math.random() * songs.length))
    i += 1
  }, 
  ((35000 * i) - 3000))
}
window.onload = function () {
  ID("loading").style.visibility = "hidden"
      ID("everything").style.visibility = "visible"
      ID("everything").style.marginTop = "-200px"
      document.body.style.background = BG()
      document.body.style.height = "100vh"
}