import unitData from "./unitData.js";
import Unit from "./unit.js";
import readlineSync from "readline-sync";
import chalk from "chalk";
import Fleet from "./fleet.js";
let ammoPrice = 0.1;

function playerDecision(currentFleet, conqueredRessources) { /* Readline Sync Start - 3 verschiedene auswahlen */
  let exit = false;
  let choices = [
    "Status anzeigen",
    "Schiffe bauen",
    `Munition kaufen | Munitionspreis: ${ammoPrice} Stahl pro Mutitionseinheit`,
  ];
  let index = readlineSync.keyInSelect(
    choices,
    chalk.red.bold(
      "Womit kann ich ihnen heute helfen? Etwas einlagern, wollen Sie vielleicht neue Schiffe bauen oder Munition kaufen?"
    )
  );
  switch (index) {
    case 0:
      currentFleet.ressources; /* --------------- 1 Auswahl - Ressourcen werden gelagert --------------- */
      console.log(`Sie haben zuletzt ${chalk.yellow(
        conqueredRessources
      )} ${chalk.grey("Ressourcen")} erbeutet. 
      Du hast insgesamt: 
      ${chalk.yellow(currentFleet.ressources)} ${chalk.grey("Ressourcen")}
      ${chalk.yellow(currentFleet.ammo)} ${chalk.grey("Munition")}
      ${chalk.yellow(
        currentFleet.actualCargo
      )} Frachtkapazität von ${chalk.grey(currentFleet.maxCargo)} belegt
      `);
      let shipCount = {}; /* zählt Schiffe zusammen */
      currentFleet.fleetArray.forEach((ship) => {
        const shipName = ship.name;
        if (shipCount[shipName]) {
          shipCount[shipName]++;
        } else {
          shipCount[shipName] = 1;
        }
      });
      console.log(chalk.underline(`Deine momentane Flotte:`));
      for (let ship in shipCount) {
        console.log(
          `"${chalk.green(ship)}": ${chalk.bold(shipCount[ship])}`
        ); /* Anzeige der momentanen flotte 2/2 */
      }
      conqueredRessources = 0;
      break;

    case 1 /* --------------- 2 Auswahl - Schiffe werden gekauft -> function buyShip --------------- */:
      while (currentFleet.ressources > 200) {
        const ship = randomShip();
        if (canAfford(ship, currentFleet.ressources)) {
          buyShip(ship, currentFleet);
        } else {
          removeShip(ship);
        }
      }
      break;

    case 2 /* --------------- 3 Auswahl - Ammo wird gekauft -> function buyAmmo --------------- */:
      buyAmmo(ammoPrice, currentFleet);
      break;
    default:
      console.log("Ungueltige Auswahl.");
  }
}

function canAfford(ship, currentResources) {
  /* fragt ab ob genug Resources vorhanden sind */
  return currentResources >= ship.steelcosts;
}

function buyShip(ship, currentFleet) {
  /* zieht Resources ab und pushed neues ship in die Fleet */
  currentFleet.ressources -= ship.steelcosts;
  currentFleet.addShips(ship);
  console.log(`Du hast ${chalk.green(ship.name)} gebaut!`);
  console.log(chalk.grey("Verbleibende Ressourcen:"), currentFleet.ressources);
}

function buyAmmo(ammoPrice, currentFleet) {
  /* hier wird die Ammo gekauft */
  let ammoAmount = currentFleet.ressources / ammoPrice;

  if (currentFleet.actualCargo + ammoAmount <= currentFleet.maxCargo) {
    currentFleet.ammo += ammoAmount;
    currentFleet.actualCargo += ammoAmount;
    currentFleet.ressources -= ammoAmount * ammoPrice;
  } else {
    ammoAmount = currentFleet.maxCargo - currentFleet.actualCargo;
    currentFleet.actualCargo += ammoAmount;
    currentFleet.ressources -= ammoAmount * ammoPrice;
  }

  console.log(chalk.underline(`Deine aktuellen Ressourcen:`) + " " + chalk.grey.bold(currentFleet.ressources + " Stahl."));
  console.log(`Du hast ${chalk.cyan.bold(ammoAmount + " " + "Munition")} für ${chalk.grey.bold(ammoPrice + " " + "Ressourcen")} pro Einheit gekauft! Du hast jetzt ${chalk.cyan.bold(currentFleet.ammo + " " + "Munition")} .`);
};

function randomShip() {
  /* wählt ein zufälligen index aus der onlyships liste */
  let randomIndex = Math.floor(Math.random() * unitData.onlyShips.length);
  return new unitData.onlyShips[randomIndex]();
}

function removeShip(ship) {
  /* entfernt ein ship aus der liste */
  const index = unitData.onlyShips.indexOf(ship);
  if (index !== -1) {
    unitData.onlyShips.splice(index, 1);
  }
}


export function buyAlgorythm(currentFleet, conqueredRessources) { /* Exportierte gesamtfunktion */
  console.log("-".repeat(50)); /*<-- Trennstriche*/
  console.log(chalk.red.bold("Willkommen bei Imperial Industries, wir haben eine tolle Auswahl an Schiffblaupausen für sie im Angebot!"));
  console.log("-".repeat(50)); /*<-- Trennstriche*/

  while (currentFleet.ressources > 200) {
    playerDecision(currentFleet, conqueredRessources);
  }

  if (currentFleet.ressources <= 200) {
    console.log(
      `Keine Ressourcen mehr zum Bauen oder kaufen verfügbar.\n${chalk.underline(
        `Deine momentane Flotte`
      )}:`
    ); /* Anzeige der momentanen flotte 1/2 */
  }
  let shipCount = {}; /* zählt Schiffe zusammen */
  currentFleet.fleetArray.forEach((ship) => {
    const shipName = ship.name;
    if (shipCount[shipName]) {
      shipCount[shipName]++;
    } else {
      shipCount[shipName] = 1;
    }
  });
  for (let ship in shipCount) {
    console.log(
      `"${chalk.green(ship)}": ${chalk.bold(shipCount[ship])}`
    ); /* Anzeige der momentanen flotte 2/2 */
  }
  console.log("-".repeat(50)); /*<-- Trennstriche*/
}

//buyAlgorythm(testFleet,conqueredRessources);
