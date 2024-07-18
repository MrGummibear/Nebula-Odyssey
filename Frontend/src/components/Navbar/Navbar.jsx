import "./Navbar.css"

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
                <p>CLOCK</p>
            </div>
        </header>
    );
}

export default Navbar;


