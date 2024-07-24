import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../context/PlayerContext';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { addPlayerData } = useContext(PlayerContext);

  const handleLogin = () => {
    const playerData = { username, password };
    addPlayerData(playerData); // Daten zum globalen Zustand hinzufügen
    navigate("/overview");
  };

    return (
        <div className="login-content">
            <img 
                className="login-logo" 
                src="/icons/logo_placeholder.png" 
                alt="Logo Nebula Odyssey" 
            />
            <h1 className="login-title">Nebula Odyssey</h1>
            <div className="login-box">
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
            <img
                className="schlachtkreuzer-img" 
                src="/werften/große_werft/schlachtkreuzer/schlachtkreuzer_1-removebg-preview.png" 
                alt="schlachtkreuzer" 
            />
            <img
                className="schlachtschiff-img" 
                src="/werften/große_werft/schlachtschiff/schlachtschiff_1-removebg-preview.png" 
                alt="schlachtschiff" 
            />
        </div>
    );
};

export default Login;


