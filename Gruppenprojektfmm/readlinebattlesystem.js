const readlineSync = require('readline-sync');
let attackers = [];
let defenders = [];

class Unit {
    name;
    healtpoints;
    dmg;
    armorbreak;
    armor;
    attack(unit) {
        if (unit instanceof Unit) {
            console.log(`${this.name} greift ${unit.name} an`)
            let reducedarmor = unit.armor - this.armorbreak;
            if (reducedarmor < 0) { reducedarmor = 0; }
            console.log(`${this.name} fügt ${unit.name} ${this.dmg / 100 * (100 - reducedarmor)} schaden zu`)
            unit.healtpoints -= this.dmg / 100 * (100 - reducedarmor);
            if (unit.healtpoints <= 0) {
                console.log(`${unit.name} wurde von ${this.name} besiegt`);
                return true
            }
            else { return false; }
        }
    }
}
class Lancer extends Unit {
    constructor() {
        super();
        this.name = "Lancer";
        this.healtpoints = 30;
        this.dmg = 25;
        this.armorbreak = 75;
        this.armor = 25;
    }
}
class knight extends Unit {
    constructor() {
        super();
        this.name = "Knight";
        this.healtpoints = 60;
        this.dmg = 50;
        this.armorbreak = 0;
        this.armor = 75;
    }
}
class Archer extends Unit {
    constructor() {
        super();
        this.name = "Archer";
        this.healtpoints = 20;
        this.dmg = 80;
        this.armorbreak = 0;
        this.armor = 5;

    }
}
class Viking extends Unit {
    constructor() {
        super();
        this.name = "Viking";
        this.healtpoints = 100;
        this.dmg = 30;
        this.armorbreak = 30;
        this.armor = 20;
    }
}
function getRandom(arr) {
    return Math.floor(Math.random() * arr.length);
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
function handleFight(attackers, defenders) {
    shuffle(attackers);
    shuffle(defenders);
    let attackCount = 0;
    let indexCount = 0;

    if (Array.isArray(attackers) && Array.isArray(defenders)) {
        //console.log("hier")
        while (attackers.length > 0 && defenders.length > 0) {
            //console.log("hier")
            if (attackCount % 2 === 0) {
                let enemyIndex = getRandom(defenders);
                if (attackers[indexCount] instanceof Unit) {
                    if (attackers[indexCount].attack(defenders[enemyIndex])) {
                        return defenders.splice(defenders[enemyIndex], 1);
                    }
                }

            }
            else {
                let enemyIndex = getRandom(attackers);
                if (defenders[indexCount] instanceof Unit) {
                    if (defenders[indexCount].attack(attackers[enemyIndex])) {
                        return attackers.splice(attackers[enemyIndex], 1);

                    }
                }

            }
            //console.log(attackers.length);
            //console.log(defenders.length);
            indexCount++;
            attackCount++;
        }
    }
}
const clearLine = () => {
    console.clear();
};
function createWarriors(warriorName, teamName) {
    console.log(`wie viele ${warriorName}s soll es im ${teamName} geben ?`)
    let input;
    while (true) {
        input = readlineSync.question();
        clearLine();
        if (!isNaN(input)) {
            console.log(`es gibt ${input} ${warriorName}s`);
            break;
        }
        else {
            console.log("bitte gib eine zahl ein")
            continue;
        }
    }
    if (input < 0) {
        console.log("die anzahl wurde auf 0 aufgerundet");
        input = 0;
    }
    return input;
}

function addUnits(arrayToAdd, UnitType, count) {
    for (let i = 0; i < count; i++) {
        arrayToAdd.push(new UnitType());
    }
}

while (true) {

    let attackersKnight = createWarriors("Knight", "Angreiferteam");
    let attackersLancer = createWarriors("Lancer", "Angreiferteam");
    let attackersArcher = createWarriors("Archer", "Angreiferteam");
    let attackersViking = createWarriors("Viking", "Angreiferteam");

    let defendersKnight = createWarriors("Knight", "Verteidigerteam");
    let defendersLancer = createWarriors("Lancer", "Verteidigerteam");
    let defendersArcher = createWarriors("Archer", "Verteidigerteam");
    let defendersViking = createWarriors("Viking", "Verteidigerteam");

    addUnits(attackers, knight, attackersKnight);
    addUnits(attackers, Lancer, attackersLancer);
    addUnits(attackers, Archer, attackersArcher);
    addUnits(attackers, Viking, attackersViking);

    addUnits(defenders, knight, defendersKnight);
    addUnits(defenders, Lancer, defendersLancer);
    addUnits(defenders, Archer, defendersArcher);
    addUnits(defenders, Viking, defendersViking);

    handleFight(attackers, defenders);
    //console.log(attackers[2].attack(defenders[2]))
    break;
}
