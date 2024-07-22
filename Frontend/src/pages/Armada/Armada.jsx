/* eslint-disable react/prop-types */
import './Armada.css';
import { useState, useEffect } from 'react';
import activities from '../../assets/data/activities';

const Armada = () => {
    return (
        <div className="content-box">
            <div className='armada-title'>
                <h1>Armada</h1>
            </div>
            <section>
                {activities.map((activity, index) => (
                    <Activity key={index} activity={activity} />
                ))}
            </section>
            <section>02</section>
        </div>
    );
};

const Activity = ({ activity }) => {
    const [countdown, setCountdown] = useState(activity.timestamp);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, [activity.timestamp]);

    return (
        <div className='activity'>
            <div className='activity-info'>
                <ul>Truppenstärke: {activity.info.Truppenstärke}</ul>
                {Object.values(activity.info.Einheiten).map((einheit, index) => (
                    <li key={index}>{einheit}</li>
                ))}
            </div>
            <div className='activity-visual'>
                <div>
                    <img src={activity.planets[0].img} alt={activity.planets[0].name} />
                    <p className='activity-planet'>{activity.planets[0].name}</p>
                </div>
                <div className='timer'>
                    {countdown}s
                    <i className="arrow fa-solid fa-shuttle-space"></i>
                </div>
                <div>
                    <img src={activity.planets[1].img} alt={activity.planets[1].name} />
                    <p className='activity-planet'>{activity.planets[1].name}</p>
                </div>
            </div>
        </div>
    );
};

export default Armada;

