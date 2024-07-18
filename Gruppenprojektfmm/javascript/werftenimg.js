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

// Funktion zum aendern des Bildes im div werften-title

function changeImageWerften(bild) {
  werftenTitle.style.backgroundImage = 'url("' + imgPaths[bild] + '")';
  console.log("hey");
}

kleinerTransporter.addEventListener("click", () =>
  changeImageWerften("kltransporter")
);
