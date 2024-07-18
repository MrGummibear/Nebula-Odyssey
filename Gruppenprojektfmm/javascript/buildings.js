/*

hier muss eine klasse erstellt werden die an alle gebaeude vererbt
funktion zum gebaeude bauen benötigt(muss das playerdata script updaten)
funktion zum anpassen der ressourcen bei den entsprechenden gebaeuden benötigt
benötigt standartwerte die alle gebaeude haben sollen z.b. kosten stufe baufunktion abrissfunktion 
benötigt funktion umd die planeten upzudaten wenn etwas fertig gebaut wurde


es muss für jedes gebaeude ein script erstellt werden und die entsprechenden werte eingetragen werden
*/
class building {
    constructor() {

    }
    metalCost;
    energyCost;
    LogEnergycost() {
        console.log(this.energyCost);
    }
}
class PowerPlant extends building()
{

}
let i = PowerPlant = new PowerPlant();
