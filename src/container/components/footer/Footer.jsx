import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-list">
          <div className="footer-data">
            <img src="img/service/logo.png" alt="" style={{ width: "200px" }} />
            <div className="footer-data-social">
              <a href="#facebook">
                <i className="fab fa-facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/lamassati_beauty_center/"
              >
                <i className="fab fa-instagram" />
              </a>
              <a href="http://wa.me/++212700893408" target="_blank">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
          <div className="footer-data">
            <h2>adresse</h2>
            <p>
              N'54,Rue Ain Snam Boulvard Al Alawiyin - Sector 5 Hay Nahda <br />{" "}
              Karia - Salé
            </p>
          </div>
          <div className="footer-data">
            <h2>Nous avons ouvert</h2>
            <p>
              Chaque Jours
              <br /> De 09h00 à 22h00
            </p>
          </div>
          <div className="footer-data">
            <h2>Contacter</h2>
            <p>+212 700893408</p>
          </div>
        </div>
        <div className="copy">
          <p>© Tous les droits sont réservés</p>
          <span>Créé par 🤎 A.Z.K Web</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
