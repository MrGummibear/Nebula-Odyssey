import "./Navbar.css";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { PlayerContext } from '../../context/PlayerContext';
import Playermanager from '../../../public/javascript/playermanager.js';

let player = new Playermanager.Player();
player.Planets.push(new Playermanager.Planet());
player.Planets.push(new Playermanager.Planet());
player.Planets.push(new Playermanager.Planet());
player.Planets.push(new Playermanager.Planet());

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };

    const ManageTimeFunctions = () => {
        player.Planets.forEach(element => {
            element.ManageRessourceBalance();
            console.log(player.Planets[0].planetRessources);
        });
        updateTime();
    };

    useEffect(() => {
        const intervalId = setInterval(ManageTimeFunctions, 1000);

        return () => clearInterval(intervalId);
    }, []); //

    return (
        <>
            {currentTime}
        </>
    );
};

const Navbar = () => {
    const { currentPlayer } = useContext(PlayerContext);

    return (
        <header>
            <div className="head-bar">
                <NavLink to='/overview' className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
                <NavLink to='#' className={({ isActive }) => isActive ? 'active' : ''}>NOTIZEN</NavLink>
                <NavLink to='#' className={({ isActive }) => isActive ? 'active' : ''}>HIGHSCORE</NavLink>
                <NavLink to='#' className={({ isActive }) => isActive ? 'active' : ''}>EINSTELLUNGEN</NavLink>
                <NavLink to='#' className={({ isActive }) => isActive ? 'active' : ''}>SUPPORT</NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>{ currentPlayer && currentPlayer.username === 'Guest' ? 'LOGIN' : 'LOGOUT'}</NavLink>
            </div>
                <div className="player">
                    <a href="#">{currentPlayer.username}</a>
                </div>
            <div className="clock" id="clock">
                <p><Clock/></p>
            </div>
        </header>
    );
}

export default Navbar;


