import Unit from "./unit.js";
import unitData from "./unitData.js";
import Fleet from "./fleet.js";

function createArmy(shipType, amount, target) {
  // Funktion zum Erstellen einer Flotte/Army
  for (let i = 0; i < amount; i++) {
    const newShip = shipType;
    if (Array.isArray(target)) {
      target.push(new newShip());
    }
  }
  return [...target];
}

const sturmFlotte = new Fleet([]); // erstellen einer neuen Flotten-Instanz aus "Fleet" (s. import Zeile 3), Team 1

sturmFlotte.addShips(createArmy(unitData.LeichterJaeger, 100, []));
sturmFlotte.addShips(createArmy(unitData.KleinerTransporter, 10, []));
sturmFlotte.addShips(createArmy(unitData.SchwererJaeger, 10, []));
sturmFlotte.addShips(createArmy(unitData.Bomber, 50, []));
sturmFlotte.addShips(createArmy(unitData.Fregatte, 0, []));
sturmFlotte.addShips(createArmy(unitData.GrosserTransporter, 200, []));
sturmFlotte.addShips(createArmy(unitData.Zerstörer, 0, []));
sturmFlotte.addShips(createArmy(unitData.Kreuzer, 10, []));
sturmFlotte.addShips(createArmy(unitData.FlugDeckKreuzer, 1, []));
sturmFlotte.addShips(createArmy(unitData.TraegerSchiff, 0, []));
sturmFlotte.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
sturmFlotte.addShips(createArmy(unitData.SchlachtSchiff, 0, []));

const titanenBund = new Fleet([]); // erstellen einer neuen Flotten-Instanz aus "Fleet" (s. import Zeile 3), Team 2
titanenBund.addShips(createArmy(unitData.LeichterJaeger, 10, []));
titanenBund.addShips(createArmy(unitData.KleinerTransporter, 10, []));
titanenBund.addShips(createArmy(unitData.SchwererJaeger, 8, []));
titanenBund.addShips(createArmy(unitData.Bomber, 0, []));
titanenBund.addShips(createArmy(unitData.Fregatte, 8, []));
titanenBund.addShips(createArmy(unitData.GrosserTransporter, 200, []));
titanenBund.addShips(createArmy(unitData.Zerstörer, 20, []));
titanenBund.addShips(createArmy(unitData.Kreuzer, 10, []));
titanenBund.addShips(createArmy(unitData.FlugDeckKreuzer, 1, []));
titanenBund.addShips(createArmy(unitData.TraegerSchiff, 0, []));
titanenBund.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
titanenBund.addShips(createArmy(unitData.SchlachtSchiff, 0, []));

function planetOne() {
  // erstellen der Planetenflotten mit verschiedenen units
  let enemyOne = new Fleet([]);
  enemyOne.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyOne.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyOne.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemyOne.addShips(createArmy(unitData.Bomber, 5, []));
  enemyOne.addShips(createArmy(unitData.Fregatte, 3, []));
  enemyOne.addShips(createArmy(unitData.GrosserTransporter, 10, []));
  enemyOne.addShips(createArmy(unitData.Zerstörer, 0, []));
  enemyOne.addShips(createArmy(unitData.Kreuzer, 0, []));
  enemyOne.addShips(createArmy(unitData.FlugDeckKreuzer, 0, []));
  enemyOne.addShips(createArmy(unitData.TraegerSchiff, 0, []));
  enemyOne.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
  enemyOne.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyOne;
}

function planetTwo() {
  let enemyTwo = new Fleet([]);

  enemyTwo.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyTwo.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyTwo.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemyTwo.addShips(createArmy(unitData.Bomber, 8, []));
  enemyTwo.addShips(createArmy(unitData.Fregatte, 5, []));
  enemyTwo.addShips(createArmy(unitData.GrosserTransporter, 10, []));
  enemyTwo.addShips(createArmy(unitData.Zerstörer, 3, []));
  enemyTwo.addShips(createArmy(unitData.Kreuzer, 0, []));
  enemyTwo.addShips(createArmy(unitData.FlugDeckKreuzer, 0, []));
  enemyTwo.addShips(createArmy(unitData.TraegerSchiff, 0, []));
  enemyTwo.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
  enemyTwo.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyTwo;
}

function planetThree() {
  let enemyThree = new Fleet([]);
  enemyThree.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyThree.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyThree.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemyThree.addShips(createArmy(unitData.Bomber, 8, []));
  [];
  enemyThree.addShips(createArmy(unitData.Fregatte, 6, []));
  enemyThree.addShips(createArmy(unitData.GrosserTransporter, 10, []));
  enemyThree.addShips(createArmy(unitData.Zerstörer, 3, []));
  enemyThree.addShips(createArmy(unitData.Kreuzer, 0, []));
  enemyThree.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemyThree.addShips(createArmy(unitData.TraegerSchiff, 0, []));
  enemyThree.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
  enemyThree.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyThree;
}

function planetFour() {
  let enemyFour = new Fleet([]);
  enemyFour.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyFour.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyFour.addShips(createArmy(unitData.SchwererJaeger, 100, []));
  enemyFour.addShips(createArmy(unitData.Bomber, 20, []));
  enemyFour.addShips(createArmy(unitData.Fregatte, 10, []));
  enemyFour.addShips(createArmy(unitData.GrosserTransporter, 10, []));
  enemyFour.addShips(createArmy(unitData.Zerstörer, 1, []));
  enemyFour.addShips(createArmy(unitData.Kreuzer, 0, []));
  enemyFour.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemyFour.addShips(createArmy(unitData.TraegerSchiff, 0, []));
  enemyFour.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
  enemyFour.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyFour;
}

function planetFive() {
  let enemyFive = new Fleet([]);
  enemyFive.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyFive.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyFive.addShips(createArmy(unitData.SchwererJaeger, 100, []));
  enemyFive.addShips(createArmy(unitData.Bomber, 15, []));
  enemyFive.addShips(createArmy(unitData.Fregatte, 15, []));
  enemyFive.addShips(createArmy(unitData.GrosserTransporter, 15, []));
  enemyFive.addShips(createArmy(unitData.Zerstörer, 3, []));
  enemyFive.addShips(createArmy(unitData.Kreuzer, 0, []));
  enemyFive.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemyFive.addShips(createArmy(unitData.TraegerSchiff, 1, []));
  enemyFive.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
  enemyFive.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyFive;
}

function planetSix() {
  let enemySix = new Fleet([]);
  enemySix.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemySix.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemySix.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemySix.addShips(createArmy(unitData.Bomber, 10, []));
  enemySix.addShips(createArmy(unitData.Fregatte, 10, []));
  enemySix.addShips(createArmy(unitData.GrosserTransporter, 20, []));
  enemySix.addShips(createArmy(unitData.Zerstörer, 5, []));
  enemySix.addShips(createArmy(unitData.Kreuzer, 3, []));
  enemySix.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemySix.addShips(createArmy(unitData.TraegerSchiff, 2, []));
  enemySix.addShips(createArmy(unitData.SchlachtKreuzer, 0, []));
  enemySix.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemySix;
}

function planetSeven() {
  let enemySeven = new Fleet([]);
  enemySeven.addShips(createArmy(unitData.LeichterJaeger, 50, []));
  enemySeven.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemySeven.addShips(createArmy(unitData.SchwererJaeger, 30, []));
  enemySeven.addShips(createArmy(unitData.Bomber, 5, []));
  enemySeven.addShips(createArmy(unitData.Fregatte, 10, []));
  enemySeven.addShips(createArmy(unitData.GrosserTransporter, 30, []));
  enemySeven.addShips(createArmy(unitData.Zerstörer, 7, []));
  enemySeven.addShips(createArmy(unitData.Kreuzer, 5, []));
  enemySeven.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemySeven.addShips(createArmy(unitData.TraegerSchiff, 1, []));
  enemySeven.addShips(createArmy(unitData.SchlachtKreuzer, 1, []));
  enemySeven.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemySeven;
}
function planetEight() {
  let enemyEight = new Fleet([]);
  enemyEight.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyEight.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyEight.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemyEight.addShips(createArmy(unitData.Bomber, 10, []));
  enemyEight.addShips(createArmy(unitData.Fregatte, 5, []));
  enemyEight.addShips(createArmy(unitData.GrosserTransporter, 50, []));
  enemyEight.addShips(createArmy(unitData.Zerstörer, 10, []));
  enemyEight.addShips(createArmy(unitData.Kreuzer, 10, []));
  enemyEight.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemyEight.addShips(createArmy(unitData.TraegerSchiff, 1, []));
  enemyEight.addShips(createArmy(unitData.SchlachtKreuzer, 1, []));
  enemyEight.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyEight;
}
function planetNine() {
  let enemyNine = new Fleet([]);
  enemyNine.addShips(createArmy(unitData.LeichterJaeger, 100, []));
  enemyNine.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyNine.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemyNine.addShips(createArmy(unitData.Bomber, 15, []));
  enemyNine.addShips(createArmy(unitData.Fregatte, 10, []));
  enemyNine.addShips(createArmy(unitData.GrosserTransporter, 50, []));
  enemyNine.addShips(createArmy(unitData.Zerstörer, 10, []));
  enemyNine.addShips(createArmy(unitData.Kreuzer, 10, []));
  enemyNine.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemyNine.addShips(createArmy(unitData.TraegerSchiff, 1, []));
  enemyNine.addShips(createArmy(unitData.SchlachtKreuzer, 1, []));
  enemyNine.addShips(createArmy(unitData.SchlachtSchiff, 0, []));
  return enemyNine;
}
function planetTen() {
  let enemyTen = new Fleet([]);
  enemyTen.addShips(createArmy(unitData.LeichterJaeger, 200, []));
  enemyTen.addShips(createArmy(unitData.KleinerTransporter, 10, []));
  enemyTen.addShips(createArmy(unitData.SchwererJaeger, 50, []));
  enemyTen.addShips(createArmy(unitData.Bomber, 10, []));
  enemyTen.addShips(createArmy(unitData.Fregatte, 10, []));
  enemyTen.addShips(createArmy(unitData.GrosserTransporter, 10, []));
  enemyTen.addShips(createArmy(unitData.Zerstörer, 10, []));
  enemyTen.addShips(createArmy(unitData.Kreuzer, 5, []));
  enemyTen.addShips(createArmy(unitData.FlugDeckKreuzer, 5, []));
  enemyTen.addShips(createArmy(unitData.TraegerSchiff, 5, []));
  enemyTen.addShips(createArmy(unitData.SchlachtKreuzer, 5, []));
  enemyTen.addShips(createArmy(unitData.SchlachtSchiff, 5, []));
  return enemyTen;
}

const planets = [
  planetOne,
  planetTwo,
  planetThree,
  planetFour,
  planetFive,
  planetSix,
  planetSeven,
  planetEight,
  planetNine,
  planetTen,
];
export default {
  sturmFlotte,
  titanenBund,
  planets,
};
