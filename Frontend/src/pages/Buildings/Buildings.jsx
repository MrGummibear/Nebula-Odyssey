import "./Buildings.css"

const Buildings = () => {
    return (
        <div className="content-box">
            <div className="uebersicht-title">
                <h1>Gebaeude</h1>
            </div>
            <div>
                <h1 className="gebaeude-heading">Kerngebaeude</h1>
                <div className="gebaeude-box one">
                    <div className="text">
                        <h1>Lagerhaus</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur, ad nisi. Maiores quasi error minus. Totam laborum
                            iusto.
                        </p>
                    </div>
                    <div className="button-box">
                        <a href="#">
                            <button className="btn geb-1">Bauen</button>
                        </a>
                    </div>
                </div>
                <div className="gebaeude-box two">
                    <div className="text">
                        <h1>Raffinerie</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur, ad nisi. Maiores quasi error minus. Totam laborum
                            iusto.
                        </p>
                    </div>
                    <div className="button-box">
                        <a href="#">
                            <button className="btn geb-1">Bauen</button>
                        </a>
                    </div>
                </div>
                <div className="gebaeude-box three">
                    <div className="text">
                        <h1>Forschungszentrum</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur, ad nisi. Maiores quasi error minus. Totam laborum
                            iusto.
                        </p>
                    </div>
                    <div className="button-box">
                        <a href="#">
                            <button className="btn geb-1">Bauen</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buildings;