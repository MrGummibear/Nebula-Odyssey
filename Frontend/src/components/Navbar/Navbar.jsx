import "./Navbar.css"
import { useState } from "react";

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
    return (
        <header>
            <div className="head-bar">
                <a href="../src/index.html">HOME</a>
                <a href="#">NOTIZEN</a>
                <a href="#">HIGHSCORE</a>
                <a href="#">EINSTELLUNGEN</a>
                <a href="#">SUPPORT</a>
                <a href="#">LOGOUT</a>
            </div>
            <div className="player"><a href="#">PLAYER</a></div>
            <div className="clock" id="clock">
                <p><Clock/></p>
            </div>
        </header>
    );
}

export default Navbar;


