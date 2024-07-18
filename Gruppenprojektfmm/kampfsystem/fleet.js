import Unit from "./unit.js";
export default class Fleet {
    constructor(ships) {
        this.fleetArray = ships;
        this.setMaxCargo(ships);
    }
    fleetArray;
    maxCargo = 0;
    actualCargo = 0;
    ressources = 0;
    ammo = 0;
    setMaxCargo(fleet) {
        if (Array.isArray(fleet)) {
            this.maxCargo = fleet.reduce((accumulator, unit) => {
                return accumulator + unit.cargo;
            }, 0);
        }
    }



    setAmmo(ammo) {
        if (this.actualCargo + ammo <= this.maxCargo) {
            this.actualCargo += ammo;
            this.ammo += ammo;
        }
        else {
            console.log("du hast nicht genug frachtraum");
        }
    }
    addShips(ships) {
        if (ships instanceof Unit) {
            this.fleetArray.push(ships);
            this.ammo += ships.cargo / 2;
            this.actualCargo += ships.cargo / 2;
            this.maxCargo += ships.cargo;

        }
        if (Array.isArray(ships)) {
            ships.forEach(element => {
                this.fleetArray.push(element);
                this.ammo += element.cargo / 2;
                this.actualCargo += element.cargo / 2;
                this.maxCargo += element.cargo;
            });
        }

    }
}