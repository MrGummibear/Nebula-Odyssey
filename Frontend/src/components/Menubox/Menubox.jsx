import "./Menubox.css"
import { NavLink } from "react-router-dom";

const Menubox = () => {
    return (
        <div className="main-content">
          <div className="logo">
            <img src="/icons/logo_placeholder.png" alt="" />
          </div>
          <div className="menu-box">
            <NavLink to='/overview' activeClassName='active'>
                <button className="btn uebersicht">Übersicht</button>
            </NavLink>
            <NavLink to='/spacemap' activeClassName='active'>
                <button className="btn raumkarte">Raumkarte</button>
            </NavLink>
            <NavLink to='/buildings' activeClassName='active'>
                <button className="btn ziviler">Gebaeude</button>
            </NavLink>
            <NavLink to='/research' activeClassName='active'>
                <button className="btn forschung">Forschung</button>
            </NavLink>
            <NavLink to='/shipyard' activeClassName='active'>
                <button className="btn werften">Werften</button>
            </NavLink>
            <NavLink to='/defense'activeClassName='active'>
                <button className="btn verteidigung">Verteidigung</button>
            </NavLink>
            <NavLink to='/armada' activeClassName='active'>
                <button className="btn armada">Armada</button>
            </NavLink>
          </div>
        </div>
    );
};

export default Menubox;
