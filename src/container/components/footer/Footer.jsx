import React from 'react'

function Footer() {
  return (
    <>
          <footer className="footer" id="contact">
        <div className="footer-list">
          <div className="footer-data">
            <h1><a href><img src="img/logo.svg" alt=''/></a></h1>
            <div className="footer-data-social">
              <a href><i className="fab fa-facebook" /></a>
              <a href><i className="fab fa-instagram" /></a>
              <a href><i className="fab fa-twitter" /></a>
            </div>
          </div>
          <div className="footer-data">
            <h2>address</h2>
            <p>Centre Ville - St 26<br /> Fez - Morocco</p>
          </div>
          <div className="footer-data">
            <h2>We Opened</h2>
            <p>Monday To Friday <br /> From 09:00 To 18:00</p>
          </div>
          <div className="footer-data">
            <h2>Contact</h2>
            <p>+212 688727657</p>
            {/* <p>(20) 4444-555-666</p> */}
          </div>
        </div>
        <div className="copy">
          <p>© All Rights Reserved</p>
          <span>Created by 🤎 Web Trend</span>
        </div>
      </footer>
    </>
  )
}

export default Footer