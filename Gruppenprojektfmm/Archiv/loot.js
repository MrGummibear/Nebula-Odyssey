import Unit from "../kampfsystem/unit.js";
import unitData from "../kampfsystem/unitData.js";
import teams from "../kampfsystem/teams.js";
import Fleet from "../kampfsystem/fleet.js";

/* 
Lootsystem, das dem Spieler nach erfolgreichem Kampf einen gewissen Wert an Ressourcen gibt.
Jeder Planet hat bei Spielstart einen festen Grundwert an Ressourcen.
Bei Win -> Spieler lootet so viel Ressourcen, wie er tragen kann (Berechnung maxCargo - Cargo = aktuellerCargoWert -> auffüllen)

-- Notiz: neu gekaufte Schiffe haben 50% ihres Cargos IMMER mit Munition gefüllt -- 

Planeten können mehrmals angegriffen werden -> Ressourcenwert des Planeten füllt sich nach JEDEM Kampf z.B. um 10% auf.

Beispiel:

->     Spieler (maxCargo: 20.000 cargoAktuell: 10.000), KampfCounter: 0 
->     besiegt Gegner 1 (Planet 1) (Loot: 20.000)
->     Spieler  erhält 10.000 Loot (maxCargo: 20.000 cargoAktuell: 20.000), Kampfcounter 1
->     Planet 1 (Loot verbleibend: 10.000)
->     Spieler kauft neue Schiffe (maxCargo:30.000, cargoAktuell: 10.000 (50% Auslastung von den neuen Schiffen mit einem Cargowert von 10k -> cargoAktuell hat mind. +5000 Cargo))
->     Spieler kämpft gegen Planet 2 (Loot: 30.000)
->     Spieler besiegt Planet 2
->     Spieler erhält 20.000 Loot (maxCargo: 30.000, cargoAktuell: 30.000), Kampfcounter 2
->     Planet 1 regeneriert 10% Loot, da Kampfcounter hochgeht (Zeit vergeht) -> Planet 1 Loot verbleibend: 11.000 units) 

--------------------------------------------------------------------------
*/

//Festlegen von Loot-Werten der Planeten

let planets = {
  planetEins: { id: 1, loot: 5000, maxLoot: 10000 }, // loot von 0 auf 5000 geändert
  planetZwei: { id: 2, loot: 20000, maxLoot: 20000 },
  planetDrei: { id: 3, loot: 30000, maxLoot: 30000 },
  planetVier: { id: 4, loot: 40000, maxLoot: 40000 },
  planetFünf: { id: 5, loot: 50000, maxLoot: 50000 },
  planetSechs: { id: 6, loot: 60000, maxLoot: 60000 },
  planetSieben: { id: 7, loot: 70000, maxLoot: 70000 },
  planetAcht: { id: 8, loot: 80000, maxLoot: 80000 },
  planetNeun: { id: 9, loot: 90000, maxLoot: 90000 },
  planetZehn: { id: 10, loot: 100000, maxLoot: 100000 },
};

/* console.log("Sturmflotte:", teams.sturmFlotte);
console.log("Titanenbund:", teams.titanenBund); testen, ob der import funktioniert*/

const spielerEins = new Fleet(teams.sturmFlotte);
/* console.log(spielerEins); */

function getLoot(planetLootObj) {
  // wird aufgerufen, wenn handleFight -> win
  let loot = planetLootObj.loot;
  if (spielerEins.actualCargo + loot <= spielerEins.maxCargo) {
    spielerEins.actualCargo += loot;
    loot = 0;
  } else {
    loot -= spielerEins.maxCargo - spielerEins.actualCargo;
    spielerEins.actualCargo = spielerEins.maxCargo;
  }
  spielerEins.ressources = spielerEins.actualCargo - spielerEins.ammo;
  planetLootObj.loot = loot;
  return loot;
}

console.log(planets.planetAcht);
getLoot(planets.planetAcht);
console.log(spielerEins);
console.log(planets.planetAcht);

let fightsDone = 1;
function regenerateLoot(fightsDone) {
  // wird gecalled,wenn Kampf (erst nach dem aller ersten Kampf) gewonnen wird, um das Loot eines Planeten zu regenerieren
  fightsDone++;
  for (const planet in planets) {
    planets[planet].loot += planets[planet].id * 1000;
    if (planets[planet].loot > planets[planet].maxLoot) {
      planets[planet].loot = planets[planet].maxLoot;
    }
    return planets[planet].loot;
  }
}

console.log(planets.planetEins);
