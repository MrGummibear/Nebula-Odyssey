import { useState } from "react";
import "./Defense.css";
import werftTypen from "../../assets/data/werften";

const defaultDescription = (
  <div>
    <p>Willkommen bei deinen Verteidigungsanlagen!</p>
    <p>
      Schütze deinen Stützpunkt in dieser gefährlichen Galaxie mit unseren
      hochmodernen Verteidigungssystemen. Jede Anlage ist darauf ausgelegt,
      Angriffe effektiv abzuwehren und deine Kolonien zu sichern.
    </p>
    <p>
      Wähle eine Anlage, um mehr zu erfahren und bereite dich auf den nächsten
      Angriff vor!
    </p>
    <p>Bleib wachsam und sicher!</p>
  </div>
);

const Defense = () => {
  const [description, setDescription] = useState(defaultDescription);
  const [image, setImage] = useState(`/werften/uebersicht-title.png`);

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
      setDescription(item.description);
      setImage(item.img);
    }
  };

  return (
    <div className="content-box">
      <div className="defense-top">
        <div className="defense-info">
          <h3>Deine Verteidigungsanlagen</h3>
          <ul>
            <li>
              <p>Lasergeschuetz: 0</p>
            </li>
            <li>
              <p>Flaggeschuetz: 0</p>
            </li>
            <li>
              <p>Ionenkanone: 0</p>
            </li>
            <li>
              <p>Railgun: 0</p>
            </li>
            <li>
              <p>Partikelgeschuetz: 0</p>
            </li>
          </ul>
        </div>
        <div className="defense-img">
          <img src={image} alt="Verteidigungsanlage"></img>
        </div>
      </div>
      <div className="defense-bot">
        <div className="defense-btnbox">
          <button
            className="btn"
            onClick={() => setDescription(defaultDescription)}
          >
            Übersicht
          </button>
          <button
            className="btn"
            onClick={() => changeDescriptionAndImage("lasergeschuetz")}
          >
            Lasergeschuetz
          </button>
          <button
            className="btn"
            onClick={() => changeDescriptionAndImage("flaggeschuetz")}
          >
            Flaggeschuetz
          </button>
          <button
            className="btn"
            onClick={() => changeDescriptionAndImage("ionenkanone")}
          >
            Ionenkanone
          </button>
          <button
            className="btn"
            onClick={() => changeDescriptionAndImage("railgun")}
          >
            Railgun
          </button>
          <button
            className="btn"
            onClick={() => changeDescriptionAndImage("partikelgeschuetz")}
          >
            Partikelgeschuetz
          </button>
        </div>
        <div className="defense-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Defense;
