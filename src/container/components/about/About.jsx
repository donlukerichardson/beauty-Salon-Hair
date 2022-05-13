import React, { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);
  const data =
    "Un coiffeur ou une coiffeuse est une personne formée pour couper et entretenir les cheveux. Elle peut travailler dans un salon de coiffure, à son domicile ou chez son client. Lestypes de coiffures, les techniques et les outils employés sont nombreux et varient selon le mandat confié au coiffeur";
  const { text } = data;
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
            <span>coiff_rihana</span>
          </div>
          <div className="about-detail">
            <div className="about-detail-content">
              <div className="about-img">
                <img src="/img/about-img.jpg" alt="" />
              </div>
              <div className="about-description">
                <p>
                  {/* {showMore ? text : `${text.substring(0, 3)}`} */}
            
                  {showMore
                    ? "Un coiffeur ou une coiffeuse est une personne formée pour couper et entretenir les cheveux. "
                    : " Elle peut travailler dans un salon de coiffure, à son domicile ou chez son client. Lestypes de coiffures,les techniques et les outils employés sont nombreux et varient selon le mandat confié au coiffeur. . . "}
                </p>
                <button
                style={{marginBottom:"20px"}}
                    className="btn "
                    onClick={() => setShowMore(!showMore)}
                  >
                  Montre plus
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
