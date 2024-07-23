/* eslint-disable react/prop-types */
import './Armada.css';
import { useState, useEffect } from 'react';
import activities from '../../assets/data/activities';
import units from '../../assets/data/units';

const Armada = () => {
    return (
        <div className="content-box">
            <div className='armada-title'>
                <h1>Armada</h1>
            </div>
            <section>
                <h3>Armada im Einsatz</h3>
                {activities.map((activity, index) => (
                    <Activity key={index} activity={activity} />
                ))}
            </section>
            <section>
                <h3>Armada im Hangar</h3>
                <ul>
                <li className='unit-box-title'><p className='text-left'>Einheit</p><p className='text-right'>Anzahl</p></li>
                {units.map((unit, index) => (
                    <Units key={index} unit={unit} />
                ))}
                </ul>
            </section>
        </div>
    );
};

const Activity = ({ activity }) => {
    const [countdown, setCountdown] = useState(activity.timestamp);
    const countdownAnimation = {
        marginTop: '5px',
        animation: `moveShip ${activity.timestamp}s linear`,
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, [activity.timestamp]);

    return (
        <div className='activity'>
            <div className='activity-info'>
                <p>Truppenstärke: {activity.info.Truppenstärke}</p>
                <ul>
                {Object.values(activity.info.Einheiten).map((einheit, index) => (
                    <li key={index}>{einheit}</li>
                ))}
                </ul>
            </div>
            <div className='activity-visual'>
                <div>
                    <img src={activity.planets[0].img} alt={activity.planets[0].name} />
                    <p className='activity-planet'>{activity.planets[0].name}</p>
                </div>
                <div className='timer'>
                    {countdown}s
                    <i className="fa-solid fa-shuttle-space" style={countdownAnimation}></i>
                </div>
                <div>
                    <img src={activity.planets[1].img} alt={activity.planets[1].name} />
                    <p className='activity-planet'>{activity.planets[1].name}</p>
                </div>
            </div>
        </div>
    );

};

const Units = ({ unit }) =>{
        return(
            <li className='unit-box'><p className='text-left'>{unit.id}</p><p className='text-right'>{unit.number}</p></li>
        );
} 

export default Armada;

