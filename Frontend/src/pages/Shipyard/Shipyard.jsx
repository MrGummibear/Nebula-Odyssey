import "./Shipyard.css";
import { useState } from "react";

const Shipyard = () => {
  const [shipsSmall, setShipsSmall] = useState([]);
  const [shipsMedium, setShipsMedium] = useState([]);
  const [shipsBig, setShipsBig] = useState([]);
  const [shipImage, setShipImage] = useState(
    `url(/werften/uebersicht-title.png)`
  );

  const werftTypen = {
    klein: [
      {
        id: "kleinerTransporter",
        class: "btn btn1",
        label: "Kleiner Transporter",
        img: "/werften/kleine_werft/kleiner_transporter/kleiner_transporter1.png",
      },
      {
        id: "leichterJaeger",
        class: "btn btn2",
        label: "Leichter Jaeger",
        img: "/werften/kleine_werft/leichter_jaeger/leichter_jaeger1.png",
      },
      {
        id: "schwererJaeger",
        class: "btn btn3",
        label: "Schwerer Jaeger",
        img: "/werften/kleine_werft/schwerer_jaeger/schwerer_jaeger1.png",
      },
      {
        id: "bomber",
        class: "btn btn4",
        label: "Bomber",
        img: "/werften/kleine_werft/bomber/bomber_1.png",
      },
      {
        id: "fregatte",
        class: "btn btn5",
        label: "Fregatte",
        img: "/werften/kleine_werft/fregatte/fregatte_1.png",
      },
      {
        id: "miningDrone",
        class: "btn btn6",
        label: "Mining Drone",
        img: "/werften/kleine_werft/mining_drone/mining_drone1.png",
      },
      {
        id: "flaggeschuetz",
        class: "btn btn7",
        label: "Flaggeschütz",
        img: "/werften/kleine_werft/flaggeschütz/flaggeschütz1.png",
      },
      {
        id: "lasergeschuetz",
        class: "btn btn8",
        label: "Lasergeschütz",
        img: "/werften/kleine_werft/lasergeschütz/lasergeschütz1.jpg",
      },
    ],
    mittel: [
      {
        id: "grosserTransporter",
        class: "btn btn1",
        label: "Großer Transporter",
        img: "/werften/mittlere_werft/großer_transporter/großer_transporter1.png",
      },
      {
        id: "zerstoerer",
        class: "btn btn2",
        label: "Zerstörer",
        img: "/werften/mittlere_werft/zerstörer/zerstörer_1.png",
      },
      {
        id: "kreuzer",
        class: "btn btn3",
        label: "Kreuzer",
        img: "/werften/mittlere_werft/kreuzer/kreuzer_1.png",
      },
      {
        id: "flugdeckkreuzer",
        class: "btn btn4",
        label: "Flugdeckkreuzer",
        img: "/werften/mittlere_werft/flugdeckkreuzer/flugdeckkreuzer_1.png",
      },
      {
        id: "kolonieschiff",
        class: "btn btn5",
        label: "Kolonieschiff",
        img: "/werften/mittlere_werft/kolonieschiff/kolonieschiff_1.png",
      },
      {
        id: "bergbauschiff",
        class: "btn btn6",
        label: "Bergbauschiff",
        img: "/werften/mittlere_werft/bergbauschiff/bergbauschiff_1.png",
      },
      {
        id: "ionenkanone",
        class: "btn btn7",
        label: "Ionenkanone",
        img: "/werften/mittlere_werft/ionenkanone/ionenkanone1.jpg",
      },
      {
        id: "railgun",
        class: "btn btn8",
        label: "Railgun",
        img: "/werften/mittlere_werft/railgun/railgun_1.png",
      },
    ],
    gross: [
      {
        id: "schlachtschiff",
        class: "btn btn9",
        label: "Schlachtschiff",
        img: "/werften/große_werft/schlachtschiff/schlachtschiff_1.png",
      },
      {
        id: "traegerschiff",
        class: "btn btn10",
        label: "Trägerschiff",
        img: "/werften/große_werft/traegerschiff/traegerschiff_1.png",
      },
      {
        id: "schlachtkreuzer",
        class: "btn btn11",
        label: "Schlachtkreuzer",
        img: "/werften/große_werft/schlachtkreuzer/schlachtkreuzer_1.png",
      },
      {
        id: "partikelgeschuetz",
        class: "btn btn12",
        label: "Partikelgeschütz",
        img: "/werften/große_werft/partikelgeschütz/partikelgeschütz1.jpg",
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

  const changeImage = (img) => {
    setShipImage(`url(${img})`);
  };

  return (
    <div className="content-box">
      <div
        id="werften-title"
        className="werften-title"
        style={{ backgroundImage: shipImage }}
      ></div>
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
              <button
                key={ship.id}
                id={ship.id}
                className={ship.class}
                onClick={() => changeImage(ship.img)}
              >
                {ship.label}
              </button>
            ))}
            {shipsMedium.map((ship) => (
              <button
                key={ship.id}
                id={ship.id}
                className={ship.class}
                onClick={() => changeImage(ship.img)}
              >
                {ship.label}
              </button>
            ))}
            {shipsBig.map((ship) => (
              <button
                key={ship.id}
                id={ship.id}
                className={ship.class}
                onClick={() => changeImage(ship.img)}
              >
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
