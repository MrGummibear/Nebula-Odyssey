import "./Ressourcebar.css"

const Ressourcebar = () => {
    return (
        <div className='ressourcebar'>
            <div className="ressources">
          <div className="raw-material">
            <div className="raw raw1">
              <ImageWithTooltip src="/ressource-icons/SILICA.png" alt="SILICA" />
              <p className="ressource-counter">0000</p>
            </div>
            <div className="raw raw2">
              <ImageWithTooltip src="/ressource-icons/ORE.png" alt="ORE" />
              <p className="ressource-counter">0000</p>
            </div>
            <div className="raw raw3">
              <ImageWithTooltip src="/ressource-icons/CHEM.png" alt="CHEM" />
              <p className="ressource-counter">0000</p>
            </div>
          </div>
          <div className="products">
            <div className="prod prod3">
              <ImageWithTooltip src="/ressource-icons/FUEL.png" alt="FUEL" />
              <p className="ressource-counter">0000</p>
            </div>
            <div className="prod prod1">
              <ImageWithTooltip src="/ressource-icons/AMMO.png" alt="AMMO" />
              <p className="ressource-counter">0000</p>
            </div>
            <div className="prod prod4">
              <ImageWithTooltip src="/ressource-icons/STEEL.png" alt="STEEL" />
              <p className="ressource-counter">0000</p>
            </div>
            <div className="prod prod2">
              <ImageWithTooltip src="/ressource-icons/ELECTRONICS.png" alt="ELECTRONICS" />
              <p className="ressource-counter">0000</p>
            </div>
            <div className="prod prod5">
              <ImageWithTooltip src="/ressource-icons/ENERGY.png" alt="ENERGY" />
              <p className="ressource-counter">0000</p>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Ressourcebar;
