// aendern der Title-Box innerhalb der Content Box bei Buttonclick (Vgl. forschung.js)

const buttonKlein = document.getElementById("change-klein");
const buttonMittel = document.getElementById("change-mittel");
const buttonGross = document.getElementById("change-gross");
const btnContent = document.getElementById("btn-content");

const imgPaths = {
  kltransporter:
    "../img/img/werften/kleine_werft/kleiner_transporter/kleiner_transporter1.png",
  ljaeger: "../img/img/werften/kleine_werft/leichter_jaeger/leichter_jaeger1.png",
  sjaeger: "../img/img/werften/kleine_werft/schwerer_jaeger/schwerer_jaeger1.png",
  bomber: "../img/img/werften/kleine_werft/bomber/bomber_1.png",
  fregatte: "../img/img/werften/kleine_werft/fregatte/fregatte_1.png",
  miningdrone: "../img/img/werften/kleine_werft/mining_drone/mining_drone1.png",
  flaggeschuetz:
    "../img/img/werften/kleine_werft/flaggeschütz/flaggeschütz1.png",
  lasergeschuetz:
    "../img/img/werften/kleine_werft/lasergeschütz/lasergeschütz1.jpg",
  grtransporter:
    "../img/img/werften/mittlere_werft/großer_transporter/großer_transporter1.png",
  zerstoerer: "../img/img/werften/mittlere_werft/zerstörer/zerstörer_1.png",
  kreuzer: "../img/img/werften/mittlere_werft/kreuzer/kreuzer_1.png",
  flugdeckkreuzer:
    "../img/img/werften/mittlere_werft/flugdeckkreuzer/flugdeckkreuzer_1.png",
  kolonieschiff:
    "../img/img/werften/mittlere_werft/kolonieschiff/kolonieschiff_1.png",
  bergbauschiff:
    "../img/img/werften/mittlere_werft/bergbauschiff/bergbauschiff_1.png",
  ionenkanone: "../img/img/werften/mittlere_werft/ionenkanone/ionenkanone1.jpg",
  railgun: "../img/img/werften/mittlere_werft/railgun/railgun_1.png",
  schlachtschiff:
    "../img/img/werften/große_werft/schlachtschiff/schlachtschiff_1.png",
  traegerschiff:
    "../img/img/werften/große_werft/traegerschiff/traegerschiff_1.png",
  schlachtkreuzer:
    "../img/img/werften/große_werft/schlachtkreuzer/schlachtkreuzer_1.png",
  partikelgeschuetz:
    "../img/img/werften/große_werft/partikelgeschütz/partikelgeschütz1.jpg",
};

//angepasster Code: die verschiedenen Werften werden in einem Objekt gespeichert
// daraufhin wird eine allgemeine Funktion erstellt,  die den Werfttyp als Argument erhaelt
// und dementsprechend den content der div aendert.
// die event-listener verwenden pfeilfunktionen um  die funktion "changeContent" aufzurufen
// und dabei den richtigen WerftTypen zu übergeben

const werftTypen = {
  klein:
    '<button id="kleinerTransporter" class="btn btn1">Kleiner Transporter</button>\n<button id="leichterJaeger" class="btn btn2">Leichter Jaeger</button>\n<button id="schwererJaeger" class="btn btn3">Schwerer Jaeger</button>\n<button id="bomber" class="btn btn4">Bomber</button>\n<button id="fregatte" class="btn btn5">Fregatte</button>\n<button id="miningDrone" class="btn btn6">Mining Drone</button>\n<button id="flaggeschuetz" class="btn btn7">Flaggeschütz</button>\n<button id="lasergeschuetz" class="btn btn8">Lasergeschütz</button>',

  mittel:
    '<button id="grosserTransporter" class="btn btn1">Großer Transporter</button>\n<button id="zerstoerer" class="btn btn2">Zerstörer</button>\n<button id="kreuzer" class="btn btn3">Kreuzer</button>\n<button id="flugdeckkreuzer" class="btn btn4">Flugdeckkreuzer</button>\n<button id="kolonieschiff" class="btn btn5">Kolonieschiff</button>\n<button id="bergbauschiff" class="btn btn6">Bergbauschiff</button>\n<button id="ionenkanone" class="btn btn7">Ionenkanone</button>\n<button id="railgun" class="btn btn8">Railgun</button>',
  gross:
    '<button id="schlachtschiff" class="btn btn9">Schlachtschiff</button>\n<button id="traegerschiff" class="btn btn10">Traegerschiff</button>\n<button id="schlachtkreuzer" class="btn btn11">Schlachtkreuzer</button>\n<button id="partikelgeschuetz" class="btn btn12">Partikelgeschütz</button>',
};

function changeContent(werftTyp) {
  btnContent.innerHTML = werftTypen[werftTyp];
}

buttonKlein.addEventListener("click", () => {
  changeContent("klein");
  kleinerTransporter = document.getElementById("kleinerTransporter");
  leichterJaeger = document.getElementById("leichterJaeger");
  schwererJaeger = document.getElementById("schwererJaeger");
  bomber = document.getElementById("bomber");
  fregatte = document.getElementById("fregatte");
  miningDrone = document.getElementById("miningDrone");
  flaggeschuetz = document.getElementById("flaggeschuetz");
  lasergeschuetz = document.getElementById("lasergeschuetz");
  kleinerTransporter.addEventListener("click", () =>
    changeImageWerften("kltransporter")
  );
  leichterJaeger.addEventListener("click", () => changeImageWerften("ljaeger"));
  schwererJaeger.addEventListener("click", () => changeImageWerften("sjaeger"));
  bomber.addEventListener("click", () => changeImageWerften("bomber"));
  fregatte.addEventListener("click", () => changeImageWerften("fregatte"));
  miningDrone.addEventListener("click", () =>
    changeImageWerften("miningdrone")
  );
  flaggeschuetz.addEventListener("click", () =>
    changeImageWerften("flaggeschuetz")
  );
  lasergeschuetz.addEventListener("click", () =>
    changeImageWerften("lasergeschuetz")
  );
});
buttonMittel.addEventListener("click", () => {
  changeContent("mittel");
  grosserTransporter = document.getElementById("grosserTransporter");
  zerstoerer = document.getElementById("zerstoerer");
  kreuzer = document.getElementById("kreuzer");
  flugdeckkreuzer = document.getElementById("flugdeckkreuzer");
  kolonieschiff = document.getElementById("kolonieschiff");
  bergbauschiff = document.getElementById("bergbauschiff");
  ionenkanone = document.getElementById("ionenkanone");
  railgun = document.getElementById("railgun");
  grosserTransporter.addEventListener(
    "click",
    () => changeImageWerften("grtransporter"),
    console.log(imgPaths.grtransporter)
  );
  zerstoerer.addEventListener("click", () => changeImageWerften("zerstoerer"));
  kreuzer.addEventListener("click", () => changeImageWerften("kreuzer"));

  flugdeckkreuzer.addEventListener("click", () =>
    changeImageWerften("flugdeckkreuzer")
  );

  kolonieschiff.addEventListener("click", () =>
    changeImageWerften("kolonieschiff")
  );

  bergbauschiff.addEventListener("click", () =>
    changeImageWerften("bergbauschiff")
  );

  ionenkanone.addEventListener("click", () =>
    changeImageWerften("ionenkanone")
  );

  railgun.addEventListener("click", () => changeImageWerften("railgun"));
});
buttonGross.addEventListener("click", () => {
  changeContent("gross");
  schlachtschiff = document.getElementById("schlachtschiff");
  traegerschiff = document.getElementById("traegerschiff");
  schlachtkreuzer = document.getElementById("schlachtkreuzer");
  partikelgeschuetz = document.getElementById("partikelgeschuetz");
  schlachtschiff.addEventListener("click", () =>
    changeImageWerften("schlachtschiff")
  );
  traegerschiff.addEventListener("click", () =>
    changeImageWerften("traegerschiff")
  );
  schlachtkreuzer.addEventListener("click", () =>
    changeImageWerften("schlachtkreuzer")
  );
  partikelgeschuetz.addEventListener("click", () =>
    changeImageWerften("partikelgeschuetz")
  );
});

// aendern des Übersichtsbilds bei button-click
// Für jede ID in werftTypen.klein
let kleinerTransporter = document.getElementById("kleinerTransporter");
let leichterJaeger = document.getElementById("leichterJaeger");
let schwererJaeger = document.getElementById("schwererJaeger");
let bomber = document.getElementById("bomber");
let fregatte = document.getElementById("fregatte");
let miningDrone = document.getElementById("miningDrone");
let flaggeschuetz = document.getElementById("flaggeschuetz");
let lasergeschuetz = document.getElementById("lasergeschuetz");

// Für jede ID in werftTypen.mittel
let grosserTransporter = document.getElementById("grosserTransporter");
let zerstoerer = document.getElementById("zerstoerer");
let kreuzer = document.getElementById("kreuzer");
let flugdeckkreuzer = document.getElementById("flugdeckkreuzer");
let kolonieschiff = document.getElementById("kolonieschiff");
let bergbauschiff = document.getElementById("bergbauschiff");
let ionenkanone = document.getElementById("ionenkanone");
let railgun = document.getElementById("railgun");

// Für jede ID in werftTypen.gross
let schlachtschiff = document.getElementById("schlachtschiff");
let traegerschiff = document.getElementById("traegerschiff");
let schlachtkreuzer = document.getElementById("schlachtkreuzer");
let partikelgeschuetz = document.getElementById("partikelgeschuetz");

const werftenTitle = document.getElementById("werften-title");

// Festlegung der Bildvariablen

// Funktion zum aendern des Bildes im div werften-title

function changeImageWerften(bild) {
  werftenTitle.style.backgroundImage = 'url("' + imgPaths[bild] + '")';
}

//Funktion zum Anpassen der Button-Texte innerhalb der Buttonbox bei kleinerem Bildschirm

function adjustButtonText() {
  const screenWidth = window.innerWidth;
  let buttons;

  if (screenWidth <= 1440) {
    buttons = document.getElementById("flaggeschuetz");
    buttons.innerText = "Flag";
  }
}

adjustButtonText();
