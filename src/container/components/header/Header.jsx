import React, { useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState("accueil");
  // const toggleMenu =(e)=> {
  //   e.target.parentElement.previousSibling.classList.toggle("show-nav");
  // }
  return (
    <>
      <header className="header" id="header">
        <div className="navbar">
          <div className="logo">
            <img src="/img/service/logo.png" alt="" />
          </div>
          <nav
            style={{
              backgroundColor: isMobile ? "#EADBD7" : "transparent",
              // display: isMobile ? "" : "none",
              minHeight: isMobile ? "100vh" : "0vh",
              boxShadow: isMobile ? "0 0 5px rgb(0 0 0 / 40%)" : "none",
            }}
            className="nav-menu"
            id="nav-menu navbarNavAltMarkup"
          >
            {/* <ul
              className={isMobile ? "nav-links-mobile" : "nav-list"}
              onClick={() => setIsMobile(false)}
            > */}
            <ul
              className={isMobile ? "nav-menu" : "nav-list"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <a
                  href="#accueil"
                  className={
                    isActive === "accueil" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("accueil")}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={
                    isActive === "about" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("about")}
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={
                    isActive === "services" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("services")}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#package"
                  className={
                    isActive === "package" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("package")}
                >
                  Forfaits
                </a>
              </li>
              <li>
                <a
                  href="#Rdv"
                  className={
                    isActive === "Rdv" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("Rdv")}
                >
                  Prenez rendez-vous
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className={
                    isActive === "gallery" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("gallery")}
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={
                    isActive === "contact" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsActive("contact")}
                >
                  Contacte
                </a>
              </li>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
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
