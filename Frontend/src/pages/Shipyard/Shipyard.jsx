import "./Shipyard.css";
import { useState } from "react";

const Shipyard = () => {
  const [shipsSmall, setShipsSmall] = useState([]);
  const [shipsMedium, setShipsMedium] = useState([]);
  const [shipsBig, setShipsBig] = useState([]);

  const werftTypen = {
    klein: [
      {
        id: "kleinerTransporter",
        class: "btn btn1",
        label: "Kleiner Transporter",
      },
      { id: "leichterJaeger", class: "btn btn2", label: "Leichter Jaeger" },
      { id: "schwererJaeger", class: "btn btn3", label: "Schwerer Jaeger" },
      { id: "bomber", class: "btn btn4", label: "Bomber" },
      { id: "fregatte", class: "btn btn5", label: "Fregatte" },
      { id: "miningDrone", class: "btn btn6", label: "Mining Drone" },
      { id: "flaggeschuetz", class: "btn btn7", label: "Flaggeschütz" },
      { id: "lasergeschuetz", class: "btn btn8", label: "Lasergeschütz" },
    ],
    mittel: [
      {
        id: "grosserTransporter",
        class: "btn btn1",
        label: "Großer Transporter",
      },
      { id: "zerstoerer", class: "btn btn2", label: "Zerstörer" },
      { id: "kreuzer", class: "btn btn3", label: "Kreuzer" },
      { id: "flugdeckkreuzer", class: "btn btn4", label: "Flugdeckkreuzer" },
      { id: "kolonieschiff", class: "btn btn5", label: "Kolonieschiff" },
      { id: "bergbauschiff", class: "btn btn6", label: "Bergbauschiff" },
      { id: "ionenkanone", class: "btn btn7", label: "Ionenkanone" },
      { id: "railgun", class: "btn btn8", label: "Railgun" },
    ],
    gross: [
      { id: "schlachtschiff", class: "btn btn9", label: "Schlachtschiff" },
      { id: "traegerschiff", class: "btn btn10", label: "Trägerschiff" },
      { id: "schlachtkreuzer", class: "btn btn11", label: "Schlachtkreuzer" },
      {
        id: "partikelgeschuetz",
        class: "btn btn12",
        label: "Partikelgeschütz",
      },
    ],
  };

  const handleSmallShips = () => {
    setShipsMedium([]);
    setShipsBig([]);
    setShipsSmall(werftTypen.klein);
  };

  const handleMediumShips = () => {
    setShipsSmall([]);
    setShipsBig([]);
    setShipsMedium(werftTypen.mittel);
  };

  const handleBigShips = () => {
    setShipsSmall([]);
    setShipsMedium([]);
    setShipsBig(werftTypen.gross);
  };

  return (
    <div className="content-box">
      <div id="werften-title" className="werften-title"></div>
      <div className="werften-box">
        <div className="werft">
          <div className="werft-bar">
            <button
              className="btn"
              id="change-klein"
              onClick={handleSmallShips}
            >
              {" "}
              Kleine Werft
            </button>
            <button
              className="btn"
              id="change-mittel"
              onClick={handleMediumShips}
            >
              Mittlere Werft
            </button>
            <button className="btn" id="change-gross" onClick={handleBigShips}>
              Große Werft
            </button>
          </div>
          <div className="btn-box" id="btn-content">
            {shipsSmall.map((ship) => (
              <button key={ship.id} id={ship.id} className={ship.class}>
                {ship.label}
              </button>
            ))}
            {shipsMedium.map((ship) => (
              <button key={ship.id} id={ship.id} className={ship.class}>
                {ship.label}
              </button>
            ))}
            {shipsBig.map((ship) => (
              <button key={ship.id} id={ship.id} className={ship.class}>
                {ship.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipyard;

// bei button klick ändert sich der content im div btn-box
// kleine werft > btn box enthält 8 buttons
// mittlere werft > btn box enthält 8 buttons
// gr. werft > btn box enthält 4 buttons
