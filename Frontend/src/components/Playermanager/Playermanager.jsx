import { useContext, useEffect } from "react";
import { PlayerContext } from "../../context/PlayerContext";

const Playermanager = () => {
  const { addResourcesToCurrentPlayer } = useContext(PlayerContext);

  useEffect(() => {
    const interval = setInterval(() => {
      const additionalResources = {
        silica: 10,
        ore: 10,
        chem: 10,
        fuel: 10,
        ammo: 10,
        steel: 10,
        electronics: 10,
        energy: 10,
      };

      addResourcesToCurrentPlayer(additionalResources);
    }, 1000);

    return () => clearInterval(interval);
  }, [addResourcesToCurrentPlayer]);

  return <div></div>;
};

export default Playermanager;
