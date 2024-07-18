import "./Menubox.css"
import { Link } from "react-router-dom";

const Menubox = () => {
    return (
        <div className="main-content">
          <div className="logo">
            <img src="/icons/logo_placeholder.png" alt="" />
          </div>
          <div className="menu-box">
            <Link to='/overview'>
                <button className="btn uebersicht">Übersicht</button>
            </Link>
            <Link to='/spacemap'>
                <button className="btn raumkarte">Raumkarte</button>
            </Link>
            <Link to='/buildings'>
                <button className="btn ziviler">Gebaeude</button>
            </Link>
            <Link to='/research'>
                <button className="btn forschung">Forschung</button>
            </Link>
            <Link to='/shipyard'>
                <button className="btn werften">Werften</button>
            </Link>
            <Link to='/defense'>
                <button className="btn verteidigung">Verteidigung</button>
            </Link>
            <Link to='/armada'>
                <button className="btn armada">Armada</button>
            </Link>
          </div>
        </div>
    );
};

export default Menubox;
