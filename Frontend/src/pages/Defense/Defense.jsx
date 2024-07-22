import "./Defense.css";
import { useState } from "react";

const Defense = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(`/werften/uebersicht-title.png`);

  const descriptionText = {
    lasergeschuetz: `Lasergeschuetz Lorem ipsum dolor sit amet.`,
    flaggeschuetz: `Flaggeschuetz Lorem ipsum dolor sit amet.`,
    ionenkanone: `Ionenkanone Lorem ipsum dolor sit amet.`,
    railgun: `Railgun Lorem ipsum dolor sit amet.`,
    partikelgeschuetz: `Partikelgeschuetz Lorem ipsum dolor sit amet.`,
  };

  const changeDescription = (text) => {
    setDescription(descriptionText[text]);
  };

  const changeImage = () => {
    setImage;
  };

  return (
    <div className="content-box">
      <div className="defense-top">
        <div className="defense-info"></div>
        <div className="defense-img">
          <img src={image} alt="Verteidigungsanlage"></img>
        </div>
      </div>
      <div className="defense-bot">
        <div className="defense-btnbox">
          <button
            className="btn"
            onClick={
              (() => changeDescription("lasergeschuetz"), () => changeImage())
            }
          >
            Lasergeschuetz
          </button>
          <button
            className="btn"
            onClick={() => changeDescription("flaggeschuetz")}
          >
            Flaggeschuetz
          </button>
          <button
            className="btn"
            onClick={() => changeDescription("ionenkanone")}
          >
            Ionenkanone
          </button>
          <button className="btn" onClick={() => changeDescription("railgun")}>
            Railgun
          </button>
          <button
            className="btn"
            onClick={() => changeDescription("partikelgeschuetz")}
          >
            Partikelgeschuetz
          </button>
        </div>
        <div className="defense-description">
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default Defense;
