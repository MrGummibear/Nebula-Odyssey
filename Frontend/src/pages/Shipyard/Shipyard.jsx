import "./Shipyard.css";
import { useState } from "react";
import werftTypen from "../../assets/data/werften";

const Shipyard = () => {
  // Ships
  const [ships, setShips] = useState([]);
  const [shipImage, setShipImage] = useState(
    `url(/werften/uebersicht-title.png)`
  );
  const [shpiData, setShipData] = useState({});

  const handleShipType = (type) => {
    setShips(werftTypen[type]);
  };

  const changeDescriptionAndImage = (descriptionKey) => {
    let item = null;
    ["klein", "mittel", "gross"].forEach((size) => {
      if (!item) {
        item = werftTypen[size].find(
          (element) => element.id === descriptionKey
        );
      }
    });

    if (item) {
      setShipData(item.properties);
      setShipImage(`url(${item.img})`);
    }
  };

  // Counter
  const [count, setCount] = useState(0);
  const maxCount = 100;

  const incrementCount = () => {
    setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : prevCount));
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const number = parseInt(value, 10);

    if (!isNaN(number)) {
      setCount(number > maxCount ? maxCount : number);
    } else if (value === "") {
      setCount(0);
    }
  };

  return (
    <div className="content-box">
      <div
        id="werften-title"
        className="werften-title"
        style={{ backgroundImage: shipImage }}
      >
        <div className="ship-data">
          <ul>
            <li>
              <p className="data-left">Angriffsenergie:</p>{" "}
              <p className="data-right">{shpiData.attackEnergy}</p>
            </li>
            <li>
              <p className="data-left">Stahlkosten:</p>{" "}
              <p className="data-right">{shpiData.steelcosts}</p>
            </li>
            <li>
              <p className="data-left">Mikrochipkosten:</p>{" "}
              <p className="data-right">{shpiData.mikroshipkosten}</p>
            </li>
            <li>
              <p className="data-left">Chemiekosten:</p>{" "}
              <p className="data-right">{shpiData.chemicalcosts}</p>
            </li>
            <li>
              <p className="data-left">Energiekosten:</p>{" "}
              <p className="data-right">{shpiData.energycosts}</p>
            </li>
            <li>
              <p className="data-left">Feuerpower:</p>{" "}
              <p className="data-right">{shpiData.firepower}</p>
            </li>
            <li>
              <p className="data-left">Hülle:</p>{" "}
              <p className="data-right">{shpiData.hull}</p>
            </li>
            <li>
              <p className="data-left">Schild:</p>{" "}
              <p className="data-right">{shpiData.shield}</p>
            </li>
            <li>
              <p className="data-left">Geschwindigkeit:</p>{" "}
              <p className="data-right">{shpiData.speed}</p>
            </li>
            <li>
              <p className="data-left">Kraftstoffverbrauch:</p>{" "}
              <p className="data-right">{shpiData.fuelconsume}</p>
            </li>
            <li>
              <p className="data-left">Munitionsverbrauch:</p>{" "}
              <p className="data-right">{shpiData.ammoconsume}</p>
            </li>
            <li>
              <p className="data-left">Hangar:</p>{" "}
              <p className="data-right">{shpiData.hangaring}</p>
            </li>
            <li>
              <p className="data-left">Fracht:</p>{" "}
              <p className="data-right">{shpiData.cargo}</p>
            </li>
          </ul>
        </div>
        <div className="build-menu">
          <div className="increment-decrement">
            <input
              type="text"
              className="build-counter"
              value={count}
              onChange={handleInputChange}
              min="0"
              max={maxCount}
            />
            <button className="btn" onClick={incrementCount}>
              +
            </button>
            <button className="btn" onClick={decrementCount}>
              -
            </button>
          </div>
          <button className="btn buy-btn">Kaufen</button>
        </div>
      </div>
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
                onClick={() => changeDescriptionAndImage(ship.id)}
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
