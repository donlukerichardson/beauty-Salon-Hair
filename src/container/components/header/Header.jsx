import React, { useState } from "react";

function Header() {
   const [isMobile, setIsMobile] = useState(false);
  // const toggleMenu =(e)=> {
  //   e.target.parentElement.previousSibling.classList.toggle("show-nav");
  // }
  return (
    <>
      <header className="header" id="header">
        <div className="navbar">
          <div className="logo">
            <img src="/img/logo/logorh.png" alt="" />
          </div>
          <nav className="nav-menu" id="nav-menu navbarNavAltMarkup">
            {/* <ul
              className={isMobile ? "nav-links-mobile" : "nav-list"}
              onClick={() => setIsMobile(false)}
            > */}
               <ul
              className= {isMobile ? "nav-menu" : "nav-list"}
              onClick={() => setIsMobile(false)}>
              <li>
                <a href="#accueil" className="nav-link active">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  A propos
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  Service
                </a>
              </li>
              {/* <li>
                <a href="#package" className="nav-link">
                  Emballer
                </a>
              </li> */}
              <li>
                <a href="#gallery" className="nav-link">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contacte
                </a>
              </li>
            </ul>
            <button className="mobile-menu-icon" 
            onClick={()=> setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </nav>
          {/* <div className="nav-toggle" id="nav-toggle">
          {isMobile ? (  
          <i className="fas fa-times" onClick={toggleMenu}></i>
               ) : (
            <i className="fas fa-bars" onClick={toggleMenu} />
            )}
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
