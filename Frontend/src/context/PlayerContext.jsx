/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import mockPlayerData from '../assets/data/mockData';

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState([]);

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

