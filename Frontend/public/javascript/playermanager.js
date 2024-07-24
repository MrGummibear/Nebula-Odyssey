

class Player {
    constructor() {
        this.Planets.push(new Planet())
    }
    technologie = {
        mining: 0,
        funcTech: 0,
        armor: 0,
        ballistic: 0,
        energyWeapons: 0,
        jumpDrives: 0
    }
    Planets = []

    currentPlanet = [0];

    SwitchPlanet(planetNumber) {
        this.currentPlanet = planetNumber;
    }

    StartResearch(research) {

    }

}
class Planet {
    constructor() {
        this.basicIncome = new RessourceContainer();
        this.currentIncome = new RessourceContainer();
        this.basicIncome.Set(10, 30, 10, 10, 10, 0, 10, 10)
    }
    planetRessources = new RessourceContainer();

    buildings = [
        this.miningFacility = new MiningStation(),
        this.fuelFactory = new FuelFactory(),
        this.raffinery = new Raffinery(),
        this.powerPlant = new PowerPlant(),
        this.solarField = new SolarField(),
        this.ammoFactory = new AmmoFactory(),
        this.recycler = new Recycler(),
        this.spyCenter = new SpyCenter(),
        this.smallShipyard = new SmallShipyard(),
        this.mediumShipyard = new MediumShipyard(),
        this.bigShipyard = new LargeShipyard(),
        this.researchCenter = new ResearchCenter(),
        //this.shieldGenerator = 0,
    ]


    // planetInstance.UpgradeBuilding(planetInstance.buildings.miningfacility)
    UpgradeBuilding(building) {
        if (RessourceContainer.Substrate(this.planetRessources, building.buildingCosts) !== false) {
            this.planetRessources = RessourceContainer.Substrate(this.planetRessources, building.buildingCosts);
            building.UpdateBalance();
            building.UpdateBuildingCosts();
            building.level++;
        }
    }
    ships = {
        smallTransport: 0,
        lightHunter: 0,
        heavyHunter: 0,
        bomber: 0,
        frigate: 0,
        miningDrone: 0,
        bigTransport: 0,
        destroyer: 0,
        cruiser: 0,
        lightCarrier: 0,
        colonieShip: 0,
        miningShip: 0,
        warShip: 0,
        heavyCarrier: 0,
        battleCruiser: 0
    }
    defense = {
        flak: 0,
        ionCannon: 0,
        laserCannon: 0,
        railGun: 0,
        particleCannon: 0
    }

    /*
     * miningstation ++ore chemicals silicium   --energy
     * fuelfactory ++fuel  -- chemicals
     * raffinery ++steel electronics  --ore chemicals silicium
     * powerplant ++energy  --fuel
     * solarfield ++energy  --0
     * ammofactory ++ammo  --steel electronics
   
        this.steel
        this.chemicals
        this.electronics
        this.energy
        this.fuel
        this.ammo
        this.silicium 
        this.ore 
     */
        /* {
    username: "Marius",
    password: "1234",
    silica: 20000,
    ore: 20000,
    chem: 20000,
    fuel: 20000,
    ammo: 20000,
    steel: 20000,
    electronics: 20000,
    energy: 20000,
  },*/
        ManageRessourceBalance() {
            let totalBalance = new RessourceContainer();
            totalBalance = RessourceContainer.Addition(totalBalance, this.basicIncome);
            let totalEnergy = 0;
        
            this.buildings.forEach(element => {
                totalBalance = RessourceContainer.Addition(totalBalance, element.balance);
                totalEnergy += element.balance.energy;
            });
            if (totalBalance.energy < 0) {
                this.buildings.forEach(element => {
                    if (element.balance.energy < 0) {
                        let reductionFactor = Math.abs(totalBalance.energy / element.balance.energy);
                        element.balance.steel *= reductionFactor;
                        element.balance.chemicals *= reductionFactor;
                        element.balance.electronics *= reductionFactor;
                        element.balance.fuel *= reductionFactor;
                        element.balance.ammo *= reductionFactor;
                        element.balance.silicium *= reductionFactor;
                        element.balance.ore *= reductionFactor;
                        element.balance.energy *= reductionFactor;
                    }
                });
            }
            if (totalBalance.chemicals < 0) {
                this.buildings.forEach(element => {
                    if (element.balance.fuel > 0) {
                        let reductionFactor = Math.abs(totalBalance.chemicals / element.balance.chemicals);
                        element.balance.steel *= reductionFactor;
                        element.balance.chemicals *= reductionFactor;
                        element.balance.electronics *= reductionFactor;
                        element.balance.fuel *= reductionFactor;
                        element.balance.ammo *= reductionFactor;
                        element.balance.silicium *= reductionFactor;
                        element.balance.ore *= reductionFactor;
                        element.balance.energy *= reductionFactor;
                    }
                });
            }
            if (totalBalance.ore < 0) {
                this.buildings.forEach(element => {
                    if (element.balance.steel > 0) {
                        let reductionFactor = Math.abs(totalBalance.ore / element.balance.ore);
                        element.balance.steel *= reductionFactor;
                        element.balance.chemicals *= reductionFactor;
                        element.balance.electronics *= reductionFactor;
                        element.balance.fuel *= reductionFactor;
                        element.balance.ammo *= reductionFactor;
                        element.balance.silicium *= reductionFactor;
                        element.balance.ore *= reductionFactor;
                        element.balance.energy *= reductionFactor;
                    }
                });
            }
            if (totalBalance.steel < 0 || totalBalance.electronics < 0) {
                this.buildings.forEach(element => {
                    if (element.balance.ammo > 0) {
                        let reductionFactor = Math.min(
                            totalBalance.steel / element.balance.steel,
                            totalBalance.electronics / element.balance.electronics
                        );
                        element.balance.steel *= reductionFactor;
                        element.balance.chemicals *= reductionFactor;
                        element.balance.electronics *= reductionFactor;
                        element.balance.fuel *= reductionFactor;
                        element.balance.ammo *= reductionFactor;
                        element.balance.silicium *= reductionFactor;
                        element.balance.ore *= reductionFactor;
                        element.balance.energy *= reductionFactor;
                    }
                });
            }
        
            if (totalBalance.ore < 0 || totalBalance.chemicals < 0 || totalBalance.silicium < 0) {
                this.buildings.forEach(element => {
                    if (element.balance.steel > 0 || element.balance.electronics > 0) {
                        let reductionFactor = Math.min(
                            totalBalance.ore / element.balance.ore,
                            totalBalance.chemicals / element.balance.chemicals,
                            totalBalance.silicium / element.balance.silicium
                        );
                        element.balance.steel *= reductionFactor;
                        element.balance.chemicals *= reductionFactor;
                        element.balance.electronics *= reductionFactor;
                        element.balance.fuel *= reductionFactor;
                        element.balance.ammo *= reductionFactor;
                        element.balance.silicium *= reductionFactor;
                        element.balance.ore *= reductionFactor;
                        element.balance.energy *= reductionFactor;
                    }
                });
            }
            this.planetRessources = RessourceContainer.Addition(this.planetRessources, totalBalance);
        }
}
class Building {
    level = 0;
    buildingTime;

    buildingCosts = new RessourceContainer();
    balance = new RessourceContainer();
    GetCostOf(ressource) {
        return ressource * Math.pow(1.25, level)
    }
    GetBuildingTime() {
        return this.buildingTime * Math.pow(1.25, this.level)
    }
    UpdateBuildingCosts() {
        this.buildingCosts.steel *= Math.pow(1.3, this.level);
        this.buildingCosts.chemicals *= Math.pow(1.3, this.level);
        this.buildingCosts.electronics *= Math.pow(1.3, this.level);
        this.buildingCosts.energy *= Math.pow(1.3, this.level);
        this.buildingCosts.fuel *= Math.pow(1.3, this.level);
        this.buildingCosts.ammo *= Math.pow(1.3, this.level);
        this.buildingCosts.silicium *= Math.pow(1.3, this.level);
        this.buildingCosts.ore *= Math.pow(1.3, this.level);
    }
    UpdateBalance() {
        this.balance.steel *= Math.pow(1.25, this.level);
        this.balance.chemicals *= Math.pow(1.25, this.level);
        this.balance.electronics *= Math.pow(1.25, this.level);
        this.balance.energy *= Math.pow(1.25, this.level);
        this.balance.fuel *= Math.pow(1.25, this.level);
        this.balance.ammo *= Math.pow(1.25, this.level);
        this.balance.silicium *= Math.pow(1.25, this.level);
        this.balance.ore *= Math.pow(1.25, this.level);
    }
}
class MiningStation extends Building {
    constructor() {
        super();
        this.balance.Set(0, 30, 0, -20, 0, 0, 30, 30)
        this.buildingCosts.Set(90, 0, 50, 60, 0, 0, 0, 30)
    }
}
class FuelFactory extends Building {
    constructor() {
        super();
        this.balance.Set(0, -10, 0, 0, 30, 0, 0, 0)
        this.buildingCosts.Set(150, 0, 80, 20, 0, 0, 0, 20)
    }
}
class Raffinery extends Building {
    constructor() {
        super();
        this.balance.Set(30, -10, 30, 0, 0, 0, -20, -20)
        this.buildingCosts.Set(150, 0, 60, 30, 0, 0, 0, 10)
    }
}
class PowerPlant extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 30, -20, 0, 0, 0)
        this.buildingCosts.Set(110, 0, 60, 50, 0, 0, 0, 20)
    }
}
class SolarField extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 30, 0, 0, 0, 0)
        this.buildingCosts.Set(80, 0, 80, 20, 0, 0, 0, 20)
    }
}
class AmmoFactory extends Building {
    constructor() {
        super();
        this.balance.Set(-20, 0, -20, 0, 0, 30, 0, 0)
        this.buildingCosts.Set(100, 0, 50, 40, 0, 0, 0, 30)
    }
}
class Recycler extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SpyCenter extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class FuelDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class ChemicalDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class OreDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class AmmoDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class EnergyDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SteelDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class WasteDepot extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SmallShipyard extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class MediumShipyard extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class LargeShipyard extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class ResearchCenter extends Building {
    constructor() {
        super();
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class Research {
    level = 0;
    researchTime;

    steelCost;
    chemicalsCost;
    electronicCost;
    energyCost;
    fuelCost;
    ammoCost;
    siliciumCost;
    oreCost;
    GetCostOf(ressource) {
        return ressource * Math.pow(1.25, level)
    }
    GetResearchTime() {
        return this.researchTime * Math.pow(1.25, this.level)
    }

}
class RessourceContainer {
    constructor() {
        this.steel = 0;
        this.chemicals = 0;
        this.electronics = 0;
        this.energy = 0;
        this.fuel = 0;
        this.ammo = 0;
        this.silicium = 0;
        this.ore = 0;
    }
    Set(steel, chemicals, electronics, energy, fuel, ammo, silicium, ore) {
        this.steel = steel;
        this.chemicals = chemicals;
        this.electronics = electronics;
        this.energy = energy;
        this.fuel = fuel;
        this.ammo = ammo;
        this.silicium = silicium;
        this.ore = ore;
    }

    static Addition(container1, container2) {
        let result = new RessourceContainer();
        result.steel = container1.steel + container2.steel;
        result.chemicals = container1.chemicals + container2.chemicals;
        result.electronics = container1.electronics + container2.electronics;
        result.energy = container1.energy + container2.energy;
        result.fuel = container1.fuel + container2.fuel;
        result.ammo = container1.ammo + container2.ammo;
        result.silicium = container1.silicium + container2.silicium;
        result.ore = container1.ore + container2.ore;
        return result;
    }
    static Substrate(container1, container2) {
        let result = new RessourceContainer();
        result.steel = container1.steel - container2.steel;
        result.chemicals = container1.chemicals - container2.chemicals;
        result.electronics = container1.electronics - container2.electronics;
        result.energy = container1.energy - container2.energy;
        result.fuel = container1.fuel - container2.fuel;
        result.ammo = container1.ammo - container2.ammo;
        result.silicium = container1.silicium - container2.silicium;
        result.ore = container1.ore - container2.ore;
        if (
            result.steel < 0 ||
            result.chemicals < 0 ||
            result.electronics < 0 ||
            result.energy < 0 ||
            result.fuel < 0 ||
            result.ammo < 0 ||
            result.silicium < 0 ||
            result.ore < 0
        ) { return false; }
        else {
            return result;
        }
    }
}
const test = new RessourceContainer();

export default {
    Player,
    Planet,
    Building,
    MiningStation,
    FuelFactory,
    Raffinery,
    PowerPlant,
    SolarField,
    AmmoFactory,
    Recycler,
    SpyCenter,
    FuelDepot,
    ChemicalDepot,
    OreDepot,
    AmmoDepot,
    EnergyDepot,
    SteelDepot,
    WasteDepot,
    SmallShipyard,
    MediumShipyard,
    LargeShipyard,
    ResearchCenter
}