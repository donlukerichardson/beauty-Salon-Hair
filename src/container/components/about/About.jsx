import React from "react";

function About() {
  return (
    <>
      <section
        className="about"
        id="about"
        style={{ backgroundImage: `url(./img/arabesque-left-bottom.svg)` }}
      >
        <div className="container">
          <div className="section-title">
            <h1>notre histoire</h1>
            <span>studio hair</span>
          </div>
          <div className="about-detail">
            <div className="about-detail-content">
              <div className="about-img">
                <img src="/img/about-img.jpg" alt="" />
              </div>
              <div className="about-description">
                <p>
                  Un coiffeur ou une coiffeuse est une personne formée pour
                  couper et entretenir les cheveux. Elle peut travailler dans un
                  salon de coiffure, à son domicile ou chez son client. Les
                  types de coiffures, les techniques et les outils employés sont
                  nombreux et varient selon le mandat confié au coiffeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
