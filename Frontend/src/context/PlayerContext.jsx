/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import mockPlayerData from '../assets/data/mockData';
import playermanager from '../../public/javascript/playermanager';
export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({
    username: "Guest",
    silica: 0,
    ore: 0,
    chem: 0,
    fuel: 0,
    ammo: 0,
    steel: 0,
    electronics: 0,
    energy: 0,
});

  useEffect(() => {
    // Simuliere das Laden von Daten vom Backend
    setPlayerData(mockPlayerData);
  }, []);

  const addPlayerData = (data) => {
    setPlayerData(prevData => [...prevData, data]);
  };

  return (
    <PlayerContext.Provider value={{ playerData, addPlayerData, currentPlayer, setCurrentPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;

