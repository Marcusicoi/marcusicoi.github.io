document.getElementById("button").onclick = function() { try {
  var ip1 = Math.floor(Math.random() * 254) + 1,
      ip2 = Math.floor(Math.random() * 254) + 1,
      ip3 = Math.floor(Math.random() * 254) + 1,
      ip4 = Math.floor(Math.random() * 254) + 1;
  function ip2bin(num, length = 8) {
    function padStart(string, length, char) {
      return length > 0 ? padStart(char + string, --length, char) : string;
    };
    const numString = num.toString(2);
    return numString.length === length ? numString : padStart(numString, length - numString.length, "0");
  };
  var IPClass = "N/A";
  if (ip1 <= 127) {
    IPClass = "A";
  } else if (ip1 >= 128 && ip1 <= 191) {
    IPClass = "B";
  } else if (ip1 >= 192 && ip1 <= 223) {
    IPClass = "C";
  } else if (ip1 >= 224 && ip1 <= 239) {
    IPClass = "D";
  } else if (ip1 >= 239) {
    IPClass = "E";
  };
  function choose(array) {
    return array[Math.floor(Math.random() * array.length)];
  };
  var scope = Math.floor(Math.random() * 3) + 1;
  var snIPClass = "N/A";
  var sna = [128, 192, 224, 240, 248, 252, 254, 255, 255, 255, 255, 255];
  var sn1 = choose(sna),
      sn2 = choose(sna),
      sn3 = choose(sna),
      sn4 = choose(sna);
  if (sn1 !== 255) {
    sn2 = 0;
    sn3 = 0;
    sn4 = 0;
  } else if (sn2 !== 255) {
    snIPClass = "A";
    sn3 = 0;
    sn4 = 0;
  } else if (sn3 !== 255) {
    snIPClass = "B";
    sn4 = 0;
  } else { 
    snIPClass = "C";
  };
  
  var CIDR = 0;
  if (sn2 === 0) {
    switch(sn1) {
      case 128: CIDR = 1; break;
      case 192: CIDR = 2; break;
      case 224: CIDR = 3; break;
      case 240: CIDR = 4; break;
      case 248: CIDR = 5; break;
      case 252: CIDR = 6; break;
      case 254: CIDR = 7; break;
      case 255: CIDR = 8; break;
    };
  } else if (sn3 === 0) {
    switch(sn2) {
      case 128: CIDR = 9; break;
      case 192: CIDR = 10; break;
      case 224: CIDR = 11; break;
      case 240: CIDR = 12; break;
      case 248: CIDR = 13; break;
      case 252: CIDR = 14; break;
      case 254: CIDR = 15; break;
      case 255: CIDR = 16; break;
    };
  } else if (sn4 === 0) {
    switch(sn3) {
      case 128: CIDR = 17; break;
      case 192: CIDR = 18; break;
      case 224: CIDR = 19; break;
      case 240: CIDR = 20; break;
      case 248: CIDR = 21; break;
      case 252: CIDR = 22; break;
      case 254: CIDR = 23; break;
      case 255: CIDR = 24; break;
    };
  } else if (sn4 !== 0) {
    switch(sn4) {
      case 128: CIDR = 25; break;
      case 192: CIDR = 26; break;
      case 224: CIDR = 27; break;
      case 240: CIDR = 28; break;
      case 248: CIDR = 29; break;
      case 252: CIDR = 30; break;
      case 254: CIDR = 31; break;
      case 255: CIDR = 32; break;
    };
  };
  function randomInteger(n, decimals = 0) {
    let random = Math.random() * n;
    let power = Math.pow(10, decimals);
    return Math.floor(random * power) / power;
  };
  function randomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  function choose2(first, second) {
    return Math.random() < 0.5 ? first : second;
  };
  function IP() {
    return Math.floor(Math.random() * 254) + 1;
  };
  function hex(size) {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  };
  function name(inp) {
    let characters = "";
    for (let i = 0; i < inp.length; i++) {
      if (inp.split("")[i] == "0") {
        if (i == 0) {
          characters += [
            "B", "C", "D", "F", "G", 
            "H", "J", "K", "L", "M", 
            "N", "P", "Q", "R", "S", 
            "T", "V", "W", "X", "Y", "Z"][Math.floor(Math.random() * 21)];
        } else {
          characters += [
            "b", "c", "d", "f", "g", 
            "h", "j", "k", "l", "m", 
            "n", "p", "q", "r", "s", 
            "t", "v", "w", "x", "y", "z"][Math.floor(Math.random() * 21)];
          };
        } else if (inp.split("")[i] == "1") {
          if (i == 0) {
            characters += ["A", "E", "I", "O", "U"][Math.floor(Math.random() * 5)];
          } else {
            characters += ["a", "e", "i", "o", "u"][Math.floor(Math.random() * 5)];
          };
        } else if (inp.split("")[i] == "2") {
          characters += Math.floor(Math.random() * 10);
        };
     };
     return characters;
  };
  function randomPin(chars = "01", len = Math.floor(Math.random() * 5) + 5) {
    return [...Array(len)].map((i) => chars[Math.floor(Math.random() * chars.length)]).join('');
  };
  function FURL(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  var namev = randomPin();
  var pnv = randomPin(),
      mnv = randomPin(),
      snv = randomPin(),
      cityv = randomPin();
  var profilesex = choose(["Male", "Female"]),
      profilepronoun;
  if (profilesex === "Male") { profilepronoun = "he/him" } else { profilepronoun = "she/her" };
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  var profilebirthday = randomDate(new Date(1970, 1, 1), new Date());
  var profilebirthyear = new Date(profilebirthday).getFullYear();
  var profileage = 2024 - profilebirthyear;
  var profileschoolgrade, 
      profileschool, 
      profilecollege = randomArbitrary(21, 26);
  if (profileage < 6) {
    profileschoolgrade = "Not in school";
    profileschool = "Not in school";
  } else if (profileage === 6) {
    profileschoolgrade = "Kindergarten";
    profileschool = "Kindergarten";
  } else if (profileage > 6 && profileage < 13) {
    profileschoolgrade = profileage - 6;
    profileschool = "Elementary School";
  } else if (profileage > 13 && profileage < 19) {
      profileschoolgrade = profileage - 6;
      profileschool = "High School";
  } else if (profileage > 19 && profileage < profilecollege) {
    profileschoolgrade = "College";
    profileschool = "College";
  } else if (profileage > profilecollege) {
    profileschoolgrade = "Graduated";
    profileschool = "Graduated";
  };
  var pmnv = randomPin(),
      pmmnv = randomPin(),
      pmsnv = randomPin(),
      pfnv = randomPin(),
      pfmnv = randomPin(),
      pfsnv = randomPin(),
      pwnv = randomPin(),
      pwmnv = randomPin(),
      pwsnv = randomPin();
  var profilewife = false;
  if (profileage > 18 && Math.random() < 0.5) profilewife = true;
  var profilegeneration = "";
  if (profilebirthyear >= 1970 && profilebirthyear <= 1980) profilegeneration = "Gen X"
  else if (profilebirthyear >= 1981 && profilebirthyear <= 1996) profilegeneration = "Millenials"
  else if (profilebirthyear >= 1997 && profilebirthyear <= 2012) profilegeneration = "Gen Z"
  else if (profilebirthyear > 2012) profilegeneration = "Gen Alpha"
  document.getElementById("result").innerHTML = `
    IP: ${ip1}.${ip2}.${ip3}.${ip4}<br>
    IPv4: ${ip2bin(ip1)} ${ip2bin(ip2)} ${ip2bin(ip3)} ${ip2bin(ip4)}<br>
    IPv6: 0000:0000:0000:0000:0000:ffff:${ip1.toString(16)}${ip2.toString(16)}:${ip3.toString(16)}${ip4.toString(16)}<br>
    IPv6 SHORTENED: ::${ip1.toString(16)}${ip2.toString(16)}:${ip3.toString(16)}${ip4.toString(16)}<br>
    IPv6 SHORTENED (+%): ::${ip1.toString(16)}${ip2.toString(16)}:${ip3.toString(16)}${ip4.toString(16)}%${scope}<br>
    IP CLASS: ${IPClass}<br>
    IP TYPE: ${choose(["Public", "Public", "Public", "Public", "Private", "Static", "Dynamic"])}<br>
    SCOPE ID: ${scope}<br>
    CONNECTED: ${[null, "Loopback Psuedo-Interface", "Wi-Fi", "Ethernet"][scope]}<br>
    CIDR NOTATION: ${sn1}.${sn2}.${sn3}.${sn4}/${CIDR}<br>
    SUBNET MASK: ${sn1}.${sn2}.${sn3}.${sn4}<br>
    SUBNET IP CLASS: ${snIPClass}<br>
    WILDCARD MASK: ${sn4}.${sn3}.${sn2}.${sn1}<br>
    NETWORK ADDRESS: ${ip1}.${ip2}.${ip3}.0<br>
    BROADCAST ADDRESS: ${ip1}.${ip2}.${ip3}.255<br>
    in-addr.arpa: ${ip4}.${ip3}.${ip2}.${ip1}.in-addr.arpa<br>
    6to4 PREFIX: 2002:${ip1.toString(16)}${ip2.toString(16)}:${ip3.toString(16)}${ip4.toString(16)}::/48<br>
    N/W COORDINATES: N ${choose2(Math.random() * 100, Math.random() * -100)} W ${choose2(Math.random() * 100, Math.random() * -100)}<br>
    MINECRAFT COORDINATES: ${randomInteger(choose2(4096, -4096))}, ${randomInteger(choose2(-10, 50))}, ${randomInteger(choose2(4096, -4096))}<br>
    DMS COORDINATES (N/E): ${randomInteger(91)}° ${randomInteger(60)}' ${randomInteger(60, 1)}" N ${randomInteger(181)}° ${randomInteger(60)}' ${randomInteger(60, 1)}" E<br>
    DD COORDINATES: ${randomInteger(choose2(90, -90), 5)}, ${randomInteger(choose2(180, -180), 5)}.<br>
    DMM COORDINATES: ${randomInteger(choose2(90, -90))}° ${randomInteger(60, 3)}' N ${randomInteger(choose2(180, -180))}° ${randomInteger(60, 3)}' W<br>
    SSN: ${Math.floor(Math.pow(10, 8) + Math.random() * (9 * Math.pow(10, 8)))}<br>
    UPNP: ${choose(["Enabled", "Enabled", "Disabled"])}<br>
    DMZ: 162.168.${IP()}.${IP()}<br>
    MAC: ${hex(2)}-${hex(2)}-${hex(2)}-${hex(2)}-${hex(2)}-${hex(2)}<br>
    EXTERNAL MAC: ${hex(2)}-${hex(2)}-${hex(2)}-${hex(2)}-${hex(2)}-${hex(2)}<br>
    ISP: Ucom Universal<br>
    LAN: ${choose(["10.0.0", "192.168.0", "192.168.1", "192.168.2", "127.0.0", `${IP()}.${IP()}.${IP()}`])}.${IP()}<br>
    WAN: ${choose(["192", "172"])}.168.${IP()}.${IP()}<br>
    DNS: ${choose(["1.1.1.1", "8.8.8.8"])}<br>
    ALT DNS: ${choose(["1.1.1.8.1", "76.76.19.19", "76.233.122.150"])}<br>
    DNS SUFFIX: ${name(namev).toLowerCase()}.${choose(["com", "php", "org", "io", "pro", "fun", "google.com", "netlify.app", ".gov", ".int", ".edu"])}<br>
    DNS SUFFIX NAME VALUE: ${namev}<br>
    GATEWAY: ${choose(["192", "172"])}.168.${IP()}.${IP()}<br>
    TCP PORT: ${randomInteger(49151)}<br>
    UDP PORT: ${randomInteger(49151)}<br>
    SCTP PORT: ${randomInteger(49151)}<br>
    DCCP PORT: ${randomInteger(49151)}<br>
    ROUTER VENDOR: ${choose(router)}<br>
    DEVICE VENDOR: ${choose(device)}<br>
    PROFILE NAME: ${FURL(name(pnv))} ${FURL(name(mnv))} ${choose("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))}. ${FURL(name(snv))}<br>
    PROFILE NAME NAME VALUE: ${pnv} ${mnv} ${snv}<br>
    PROFILE SEX: ${profilesex}<br>
    PROFILE PRONOUN: ${profilepronoun}<br>
    PROFILE CITY: ${FURL(name(cityv))}<br>
    PROFILE CITY NAME VALUE: ${cityv}<br>
    PROFILE CITY POSTAL CODE: ${randomPin("0123456789", 4)}<br>
    PROFILE COUNTRY: ${choose(countryList)}<br>
    PROFILE BIRTHDAY: ${profilebirthday}<br>
    PROFILE AGE: ${profileage}<br>
    PROFILE ETHNICITY: ${choose(ethnicities)}<br>
    PROFILE SKIN TONE: ${choose(["Very Light", "Light", "Fair", "Medium", "Olive", "Tan", "Dark", "Very Dark"])}<br>
    PROFILE SCHOOL GRADE: ${profileschoolgrade}<br>
    PROFILE SCHOOL: ${profileschool}<br>
    PROFILE FUTURE/CURRENT UNIVERSITY: ${choose(universities)}<br>
    PROFILE FUTURE/CURRENT JOB: ${choose(jobs)}<br>
    PROFILE MOTHER'S NAME: ${FURL(name(pmnv))} ${FURL(name(pmmnv))} ${choose("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))}. ${FURL(name(pmsnv))}<br>
    PROFILE MOTHER'S NAME NAME VALUE: ${pmnv} ${pmmnv} ${pmsnv}<br>
    PROFILE FATHER'S NAME: ${FURL(name(pfnv))} ${FURL(name(pfmnv))} ${choose("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))}. ${FURL(name(pfsnv))}<br>
    PROFILE FATHER'S NAME NAME VALUE: ${pfnv} ${pfmnv} ${pfsnv}<br>
    PROFILE SOCIETY CLASS: ${choose(["Upper Class", "Middle Class", "Working Class", "Lower Class", "Underclass"])}<br>
    PROFILE STATUS: ${profilewife ? "Married" : "Single"}<br>
    PROFILE WIFE'S NAME: ${profilewife ? `${FURL(name(pwnv))} ${FURL(name(pwmnv))} ${choose("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))}. ${FURL(name(pwsnv))}` : "No Wife"}<br>
    PROFILE WIFE'S NAME NAME VALUE: ${profilewife ? `${pwnv} ${pwmnv} ${pwsnv}` : "No Wife"}<br>
    PROFILE SIBLINGS: ${randomInteger(3)}<br>
    PROFILE KIDS: ${profilewife ? randomInteger(3) : 0}<br>
    PROFILE GENERATION: ${profilegeneration}<br>
  `
  } catch (err) { document.getElementById("result").innerHTML = err };
};