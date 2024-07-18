import unitData from "./unitData.js";
import teams from "./teams.js";
import readline from "readline";
import Fleet from "./fleet.js";
import Kampfsystem from "./kampfsystem.js";
import { buyAlgorythm } from "./buyAlgorithm.js";
class Player {
  constructor(starterFleet) {
    this.getStartFleets();
    this.fleet = this.startFleets[starterFleet - 1];
    for (let i = 0; i < 10; i++) {
      this.planetsDone.push(false);
    }
  }
  startFleets = [];
  planetsDone = [];
  starterFleetname = "";
  fleet;
  points = 0;
  pointsMultiply = 100;
  fightCounter = 0;

  getStartFleets() {
    this.startFleets.push(teams.titanenBund);
    this.startFleets.push(teams.sturmFlotte);
  }
}
let planets = [
  { id: 1, loot: 100000, maxLoot: 1000000 },
  { id: 2, loot: 250000, maxLoot: 20000000 },
  { id: 3, loot: 400000, maxLoot: 30000000 },
  { id: 4, loot: 600000, maxLoot: 40000000 },
  { id: 5, loot: 700000, maxLoot: 50000000 },
  { id: 6, loot: 800000, maxLoot: 60000000 },
  { id: 7, loot: 1000000, maxLoot: 70000000 },
  { id: 8, loot: 1400000, maxLoot: 80000000 },
  { id: 9, loot: 1500000, maxLoot: 90000000 },
  { id: 10, loot: 5000000, maxLoot: 100000000, isDone: false },
];

function regenerateLoot() {
  // wird gecalled,wenn Kampf (erst nach dem aller ersten Kampf) gewonnen wird, um das Loot eines Planeten zu regenerieren
  player.fightCounter++;
  for (let i = 0; i < planets.length; i++) {
    planets[i].loot += (1 + i) * 200000;
  }
}

async function createMenu(options, callText) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(callText);

  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  async function askForChoice() {
    return new Promise((resolve, reject) => {
      rl.question("", (answer) => {
        const choice = parseInt(answer);
        if (isNaN(choice) || choice < 1 || choice > options.length) {
          console.log(
            "Ungültige Auswahl. Bitte geben Sie eine Nummer zwischen 1 und " +
              options.length +
              " ein."
          );
          reject(new Error("Invalid choice"));
        } else {
          console.log("Sie haben '" + options[choice - 1] + "' ausgewählt.");
          resolve(choice);
        }
      });
    });
  }

  let answer = await askForChoice().catch((error) => {});

  while (!answer) {
    answer = await askForChoice().catch((error) => {});
  }

  rl.close();

  return answer;
}
const startFleetOptions = ["den Titanenbund", "die Sturmflotte"];
const attackPlanetOptions = [];
for (let i = 0; i < 10; i++) {
  if (i === 0) {
    attackPlanetOptions.push(`Rasende Schwärme`);
  } else if (i === 1) {
    attackPlanetOptions.push(`Eiserne Armada`);
  } else if (i === 2) {
    attackPlanetOptions.push(`Schattenflotte`);
  } else if (i === 3) {
    attackPlanetOptions.push(`Ewige Wacht`);
  } else if (i === 4) {
    attackPlanetOptions.push(`Himmelssturm`);
  } else if (i === 5) {
    attackPlanetOptions.push(`Eiserner Ring`);
  } else if (i === 6) {
    attackPlanetOptions.push(`Schwarzflügel`);
  } else if (i === 7) {
    attackPlanetOptions.push(`Todeswelle`);
  } else if (i === 8) {
    attackPlanetOptions.push(`Klingensturm`);
  } else if (i === 9) {
    attackPlanetOptions.push(`Götterhammer`);
  }
}
let player;
async function executeMenu() {
  if (!player) {
    const startFleetIndex = await createMenu(
      startFleetOptions,
      "Welche Startflotte wählst du"
    );
    player = new Player(startFleetIndex);
  }

  while (player.fleet.fleetArray > 0 || !planets[9].isDone) {
    const targetPlanetId = await createMenu(
      attackPlanetOptions,
      "Welchen Planeten greifst du an"
    );
    let defenderPlanet = teams.planets[targetPlanetId - 1]();
    let result = Kampfsystem.handleFight(player.fleet, defenderPlanet);
    player.fightCounter++;

    let conqueredRessources = 0;
    if (result[0].fleetArray.length > 0 && result[1].fleetArray.length === 0) {
      console.log(
        `Du hast den Kampf gewonnen und ${(conqueredRessources = getLoot(
          targetPlanetId - 1
        ))} ressourcen erbeutet`
      );
      player.fleet.ressources += conqueredRessources;
      if (targetPlanetId - 1 === 9) {
        break;
      }
    } else {
    }
    console.log(
      `du hast noch ${player.fleet.fleetArray.length} schiffe verbleibend und ${player.fleet.ammo} Munition übrig`
    );
    if (player.fleet.fleetArray.length < 10) {
      console.log("Deine Flotte wurde Vernichtet du hast verloren");
      break;
    }
    if (targetPlanetId - 1 === 9) {
      console.log(
        `Du hast das Spiel gewonnen , dein Highscore beträgt ${
          player.fleet.ressources * (100 - player.fightCounter / 10)
        }`
      );
      break;
    }

    buyAlgorythm(player.fleet, conqueredRessources);
  }
}
function getLoot(planetnumber) {
  // wird aufgerufen, wenn handleFight -> win
  let loot = planets[planetnumber].loot;
  if (player.fleet.actualCargo + loot >= player.fleet.maxCargo) {
    loot = player.fleet.maxCargo - player.fleet.actualCargo;
    player.fleet.ressources += loot;
    player.fleet.actualCargo += loot;
    planets[planetnumber].loot -= loot;
  } else {
    player.fleet.ressources += loot;
    player.fleet.actualCargo += loot;
    planets[planetnumber].loot -= loot;
  }
  regenerateLoot();

  return loot;
}

console.log(`Wilkommen bei Nebula Odyssey`);
console.log(`du muzzt zwischen 2 starter Flotten wählen`);

executeMenu();
