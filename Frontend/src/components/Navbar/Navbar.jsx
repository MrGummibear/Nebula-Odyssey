import "./Navbar.css"
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { PlayerContext } from '../../context/PlayerContext';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000);

    return (
        <div>
            <h1>{currentTime}</h1>
        </div>
    )
}

const Navbar = () => {
    const { playerData } = useContext(PlayerContext);
    const currentUser = playerData.length > 0 ? playerData[playerData.length - 1].username : 'Guest';

    return (
        <header>
            <div className="head-bar">
                <NavLink to='/overview' activeClassName='active'>HOME</NavLink>
                <NavLink to='#' activeClassName='active'>NOTIZEN</NavLink>
                <NavLink to='#' activeClassName='active'>HIGHSCORE</NavLink>
                <NavLink to='#' activeClassName='active'>EINSTELLUNGEN</NavLink>
                <NavLink to='#' activeClassName='active'>SUPPORT</NavLink>
                <NavLink to='/' activeClassName='active'>LOGOUT</NavLink>
            </div>
            {playerData && (
                <div className="player">
                    <a href="#">{currentUser}</a>
                </div>
            )}
            <div className="clock" id="clock">
                <p><Clock/></p>
            </div>
        </header>
    );
}

export default Navbar;


