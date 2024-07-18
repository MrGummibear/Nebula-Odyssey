import "./Research.css"

const Research = () => {
    return (
        <div className="content-box">
            <div className="researchheader" id="r-header">
              <div className="researchflex">
                <div id="costtable" className="researchcosts">
                  <h1 id="forschungs-title">Bergbau Stufe X</h1>
                  <table width="400px">
                    <thead>
                      <tr>
                        <td id="forschungs-title">Bergbau</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Ressource</th>
                        <th>Kosten</th>
                      </tr>
                      <tr>
                        <td>Stahl</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>Elektronik</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>Energie</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>Treibstoff</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>Munition</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>Silicium</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>Erz</td>
                        <td>0000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="r-footer" className="researchfooter">
                  <div className="box-left">
                    <p className="left" id="description"></p>
                  </div>
                  <div className="detail-box">
                    <button className="right btn" type="button">Details</button>
                  </div>
                </div>
              </div>
            </div>
            <section className="researchoverview">
              <div>
                <div className="element">
                  <input type="button" className="f-bergbau testevent" />
                  <span className="tooltip">Bergbau</span>
                </div>
                <div className="element">
                  <input type="button" className="f-funktechnik testevent" />
                  <span className="tooltip">Funktechnik</span>
                </div>
                <div className="element">
                  <input type="button" className="f-panzerung testevent" />
                  <span className="tooltip">Panzerung</span>
                </div>
                <div className="element">
                  <input type="button" className="f-ballistik testevent" />
                  <span className="tooltip">Ballistik</span>
                </div>
              </div>
              <div>
                <div className="element">
                  <input type="button" className="f-energiewaffen testevent" />
                  <span className="tooltip">Energiewaffen</span>
                </div>
                <div className="element">
                  <input type="button" className="f-schildtechnik testevent" />
                  <span className="tooltip">Schildtechnik</span>
                </div>
                <div className="element">
                  <input type="button" className="f-sprungantrieb testevent" />
                  <span className="tooltip">Sprungantriebe</span>
                </div>
                <div className="element">
                  <input type="button" className="f-verbrennung testevent" />
                  <span className="tooltip">Verbrennungstriebwerke</span>
                </div>
              </div>
            </section>
        </div>
    );
}

export default Research;
