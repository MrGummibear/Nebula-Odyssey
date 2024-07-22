/* eslint-disable react/prop-types */
import React, {useState} from "react";
import "./Spacemap.css"

const PlanetBox = ({ number, image, circleColor, triangleColor, skullColor, planetName, playerName, onClick }) => (
  <div className="planet-box" onClick={(e) => {
            e.stopPropagation();
            onClick();
            }}>
    <div className="planetnumber">
      <p>{number}</p>
      <div className="alert-icons">
        <i className="fa-solid fa-circle" style={{ color: circleColor }}></i>
        <i className="fa-solid fa-triangle-exclamation" style={{ color: triangleColor }}></i>
        <i className="fa-solid fa-skull-crossbones" style={{ color: skullColor }}></i>
      </div>
    </div>
    <div><img src={image} alt="planet" /></div>
    <div className="planet-data">
      <p>{planetName}</p>
      <p>{playerName}</p>
    </div>
  </div>
);


const Spacemap = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const planetsData = [
        { number: '0-0', image: '/planets/p-1.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", circleColor: '#62d117', triangleColor: '#adadad', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '1-0', image: '/planets/p-2.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#adadad', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '2-0', image: '/planets/p-3.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '3-0', image: '/planets/p-4.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '4-0', image: '/planets/p-5.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '5-0', image: '/planets/p-6.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '6-0', image: '/planets/p-7.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '7-0', image: '/planets/p-1.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#adadad', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '8-0', image: '/planets/p-2.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#adadad', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '9-0', image: '/planets/p-3.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '10-0', image: '/planets/p-4.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '11-0', image: '/planets/p-5.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '12-0', image: '/planets/p-6.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '13-0', image: '/planets/p-7.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '14-0', image: '/planets/p-3.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        { number: '15-0', image: '/planets/p-4.png', info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",circleColor: '#62d117', triangleColor: '#ffdb39', skullColor: '#adadad', planetName: 'Planetname', playerName: 'Player' },
        // ... alle anderen Planeten-Daten
      ];
    
      return (
        <div className="content-box" onClick={() => setSelectedPlanet(null)}>
          <div className="sonnensystem">
            <i className="fa-solid fa-spaghetti-monster-flying" style={{ color: '#ffffff' }}></i>
            <p>Sonnensystem</p>
            {[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                <button className="arrow-button">
                  <span className="arrow-left"></span>
                </button>
                <div className="koordinate">01</div>
                <button className="arrow-button">
                  <span className="arrow-right"></span>
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="galaxy">
            {planetsData.map((planet, index) => (
              <PlanetBox 
                key={index}
                number={planet.number}
                image={planet.image}
                info={planet.info}
                circleColor={planet.circleColor}
                triangleColor={planet.triangleColor}
                skullColor={planet.skullColor}
                planetName={planet.planetName}
                playerName={planet.playerName}
                onClick={() => setSelectedPlanet(planet)}
              />
            ))}
            <div className="planet-uebersicht">
              {selectedPlanet ? (
                <>
                  <img id="planet-uebersicht-img" src={selectedPlanet.image} alt={selectedPlanet.planetName} />
                  <div>
                    <p>{selectedPlanet.planetName}</p>
                    <p>{selectedPlanet.playerName}</p>
                    <p>{selectedPlanet.info}</p>
                  </div>
                </>
              ) : (
                <p>Klicke auf einen Planeten, um Details zu sehen</p>
              )}
            </div>
          </div>
        </div>
      );
    };
    
    export default Spacemap;
