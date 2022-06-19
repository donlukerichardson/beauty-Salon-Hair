import React from "react";

function Package() {
  return (
    <>
      <section className=" package" id="package">
        <div className="section-title">
          <h1>Forfaits Promotionnels</h1>
          <span>pour la fête de votre mariéey</span>
        </div>
        <div className="package-cards">
          <div className="card">
            <div className="card-title">
              <h1>Bronze</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Soin Visage eclat</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Brushing</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Aisselle</p>
              </div>
              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  139 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">255dhs</strong>{" "}
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack ${Bronze} est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
              {/* <button className="btn">Je veux ceci</button> */}
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Argent</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Massage relaxant</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Brushing</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Aissele</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Les poointes</p>
              </div>
              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  149 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">25O dhs</strong>{" "}
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack ${Argent} est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Gold</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Manucure spa</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Modelage</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Pose Vernis</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Brushing</p>
              </div>

              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  49 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">10O dhs</strong>{" "}
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack ${Gold} est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Diamant</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Makeup professionnel</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Pose vernis</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon" />
                <p>Demi chignon</p>
              </div>
              <div className="item">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>
                  189 dhs <span>(Au lieu de )</span>{" "}
                  <strong className="crwa">400 dhs</strong>{" "}
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+212700893408&text=Bonjour Lamassati, ce pack ${Diamant} est-il disponible ?"
                target="_blank"
              >
                <button className="btn btn-send-msg">send message</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Package;
