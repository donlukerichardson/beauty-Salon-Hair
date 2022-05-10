import React from 'react'

function Footer() {
  return (
    <>
          <footer className="footer" id="contact">
        <div className="footer-list">
          <div className="footer-data">
            <img src="img/logo/logorh.png" alt='' style={{width:"100%"}}/>
            <div className="footer-data-social">
              <a href><i className="fab fa-facebook" /></a>
              <a href><i className="fab fa-instagram" /></a>
              <a href><i className="fab fa-twitter" /></a>
            </div>
          </div>
          <div className="footer-data">
            <h2>adresse</h2>
            <p>Centre Ville - St 26<br /> Fés - Maroc</p>
          </div>
          <div className="footer-data">
            <h2>Nous avons ouvert</h2>
            <p>Lundi à vendredi <br /> De 09h00 à 18h00</p>
          </div>
          <div className="footer-data">
            <h2>Contacter</h2>
            <p>+212 688727657</p>
            {/* <p>(20) 4444-555-666</p> */}
          </div>
        </div>
        <div className="copy">
          <p>© Tous les droits sont réservés</p>
          <span>Créé par 🤎 Tendance Web</span>
        </div>
      </footer>
    </>
  )
}

export default Footer