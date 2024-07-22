import "./Shipyard.css";
import { useState } from "react";
import werftTypen from "../../assets/data/werften";

const Shipyard = () => {
  const [ships, setShips] = useState([]);
  const [shipImage, setShipImage] = useState(
    `url(/werften/uebersicht-title.png)`
  );

  const handleShipType = (type) => {
    setShips(werftTypen[type]);
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
              onClick={() => handleShipType("klein")}
            >
              {" "}
              Kleine Werft
            </button>
            <button
              className="btn"
              id="change-mittel"
              onClick={() => handleShipType("mittel")}
            >
              Mittlere Werft
            </button>
            <button
              className="btn"
              id="change-gross"
              onClick={() => handleShipType("gross")}
            >
              Große Werft
            </button>
          </div>
          <div className="btn-box" id="btn-content">
            {ships.map((ship) => (
              <button
                key={ship.id}
                id={ship.id}
                className={ship.class}
                onClick={() => changeImage(ship.img)}
              >
                {ship.label}
              </button>
            ))}
            {ships.map((ship) => (
              <button
                key={ship.id}
                id={ship.id}
                className={ship.class}
                onClick={() => changeImage(ship.img)}
              >
                {ship.label}
              </button>
            ))}
            {ships.map((ship) => (
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
