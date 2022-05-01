import React from 'react'

function Header() {
  return (
    <>
     <header className="header" id="header">
        <div className="navbar">
          <div className="logo">
          <img src="img/logo.svg" alt=''/>
          </div>
          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li><a href="#" className="nav-link active">home</a></li>
              <li><a href="#about" className="nav-link">about</a></li>
              <li><a href="#services" className="nav-link">services</a></li>
              <li><a href="#package" className="nav-link">package</a></li>
              <li><a href="#gallery" className="nav-link">gallery</a></li>
              <li><a href="#contact" className="nav-link">contact</a></li>
            </ul>
          </nav>
          <div className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header