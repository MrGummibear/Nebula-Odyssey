import readline from "readline";

// Funktion zum Erstellen des Auswahlmenüs
function createMenu(options) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Bitte waehlen Sie eine Option:");
  console.log(options);
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Ihre Auswahl: ", (answer) => {
    const choice = parseInt(answer);
    if (isNaN(choice) || choice < 1 || choice > options.length) {
      console.log(
        "Ungültige Auswahl. Bitte geben Sie eine Nummer zwischen 1 und " +
          options.length +
          " ein."
      );
      rl.close();
      return;
    }
    console.log("Sie haben '" + options[choice - 1] + "' ausgewaehlt.");
    rl.close();
  });
}

// Beispielaufruf
createMenu(["Leichter Jaeger", "Schwerer Jaeger", "Bomber"]);

// Funktion zum überprüfen der firepower

function calculateFirePower(teamName, array) {
  let firePower = 0;
  for (const unit of array) {
    firePower += unit.firepower || 0;
  }
  console.log(`${teamName} Firepower: ${firePower}`);
}
