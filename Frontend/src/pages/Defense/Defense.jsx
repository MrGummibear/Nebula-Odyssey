import "./Defense.css";
import { useState } from "react";

const Defense = () => {
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
      <div className="defense-top">
        <div className="defense-info"></div>
        <div className="defense-img"></div>
      </div>
      <div className="defense-bot">
        <div className="defense-btnbox"></div>
        <div className="defense-description"></div>
      </div>
    </div>
  );
};

export default Defense;
