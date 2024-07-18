import unitData from "./unitData.js";
import unit from "./unit.js";
import fleet from "./fleet.js";

function createArmy(shipType, amount, target) {
  for (let i = 0; i < amount; i++) {
    target.push(new shipType());
  }
  return target;
}
function shuffle(units) {
  // Fisher-Yates-Shuffle , mischt das Array zufaellig durch
  if (Array.isArray(units)) {
    for (let i = units.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [units[i], units[j]] = [units[j], units[i]];
    }
  }
  // gibt neu gemischtes array zurück
  return units;
}

function handleFight(attackerFleet, defenderFleet) {
  const attacker = attackerFleet.fleetArray;
  const defender = defenderFleet.fleetArray;
  shuffle(attacker);
  shuffle(defender);

  let attackerCantShootCounter = 0;

  let attackerCounter = 0;
  let count = 0;
  let defenderCounter = 0;
  while (attacker.length > 0 && defender.length > 0) {
    if (attackerCantShootCounter > Math.floor(attacker.length / 5)) {
      console.log(
        `Der Angriffsflotte ist die munition ausgegangen und sie ist geflohen`
      );
      break;
    }
    if (count % 2 === 0) {
      let defenderIndex = Math.floor(Math.random() * defender.length);
      if (attacker[attackerCounter] instanceof unit) {
        if (attacker[attackerCounter].checkAmmo(attackerFleet)) {
          let isDead = attacker[attackerCounter].angriff(
            defender[defenderIndex]
          );
          if (isDead) {
            defender.splice(defenderIndex, 1);
          }
        } else {
          attackerCantShootCounter += 1;
          console.log(
            `${attacker[attackerCounter].name} hat nicht genug munition zum feuern.`
          );
        }
        attackerCounter++;
      } else {
        attackerCounter = 0;
      }
    } else {
      let attackerIndex = Math.floor(Math.random() * attacker.length);
      if (defender[defenderCounter] instanceof unit) {
        if (defender[defenderCounter].checkAmmo(defenderFleet)) {
          let isDead = defender[defenderCounter].angriff(
            attacker[attackerIndex]
          );
          if (isDead) {
            attacker.splice(attackerIndex, 1);
          }
        } else {
          console.log(
            `${defender[defenderCounter].name} hat nicht genug munition zum feuern.`
          );
        }
        defenderCounter++;
      } else {
        defenderCounter = 0;
      }
    }
    if (
      attackerCounter >= attacker.length &&
      defenderCounter >= defender.length
    ) {
      attackerCounter = 0;
      defenderCounter = 0;
    }
    count++;
  }
  return [attackerFleet, defenderFleet];
}
export default {
  handleFight,
};
