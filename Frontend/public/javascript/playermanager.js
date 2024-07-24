

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
        this.basicIncome.Set(10, 10, 10, 10, 10, 0, 10, 10)
    }
    planetRessources = new RessourceContainer();

    miningFacility = new MiningStation();
    fuelFactory = new FuelFactory();
    raffinery = new Raffinery();
    powerPlant = new PowerPlant();
    solarField = new SolarField();
    ammoFactory = new AmmoFactory();
    recycler = new Recycler();
    spyCenter = new SpyCenter();
    smallShipyard = new SmallShipyard();
    mediumShipyard = new MediumShipyard();
    bigShipyard = new LargeShipyard();
    researchCenter = new ResearchCenter();
    shieldGenerator = 0;

    // planetInstance.UpgradeBuilding(planetInstance.miningFacility)
    UpgradeBuilding(building) {
        if (RessourceContainer.Substrate(this.planetRessources, building.buildingCosts) !== false) {
            this.planetRessources = RessourceContainer.Substrate(this.planetRessources, building.buildingCosts);
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
    ManageRessourceBalance() {

    }
}
class Building {
    level = 0;
    buildingTime;

    buildingCosts = new RessourceContainer();
    balance = new RessourceContainer();
    GetCostOf(ressource) {
        return ressource * Mathf.Pow(1.25, level)
    }
    GetBuildingTime() {
        return this.buildingTime * Math.pow(1.25, this.level)
    }
    UpdateBuildingCosts() {
        this.buildingCosts.steel *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.chemicals *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.electronics *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.energy *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.fuel *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.ammo *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.silicium *= Mathf.Pow(1.3, this.level);
        this.buildingCosts.ore *= Mathf.Pow(1.3, this.level);
    }
    UpdateBalance(){
        this.balance.steel*= Mathf.Pow(1.25,this.level);
        this.balance.chemicals*= Mathf.Pow(1.25,this.level);
        this.balance.electronics*= Mathf.Pow(1.25,this.level);
        this.balance.energy*= Mathf.Pow(1.25,this.level);
        this.balance.fuel*= Mathf.Pow(1.25,this.level);
        this.balance.ammo*= Mathf.Pow(1.25,this.level);
        this.balance.silicium*= Mathf.Pow(1.25,this.level);
        this.balance.ore*= Mathf.Pow(1.25,this.level);
    }
}
class MiningStation extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class FuelFactory extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class Raffinery extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class PowerPlant extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SolarField extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class AmmoFactory extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class Recycler extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SpyCenter extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class FuelDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class ChemicalDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class OreDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class AmmoDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class EnergyDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SteelDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class WasteDepot extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class SmallShipyard extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class MediumShipyard extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class LargeShipyard extends Building {
    constructor() {
        this.balance.Set(0, 0, 0, 0, 0, 0, 0, 0)
        this.buildingCosts.Set(0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class ResearchCenter extends Building {
    constructor() {
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
        return ressource * Mathf.Pow(1.25, level)
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