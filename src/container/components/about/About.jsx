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
            {/* <span>coiff_rihana</span> */}
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
                    ? "Dans une ambiance paisible, souriante et relaxante ici le temps marque une pause, la vôtre. Délicieuse sensation de bien-être, privilège d'une attention unique, alchimie subtile des méthodes traditionnelles et avant-gardistes, abandonnez-vous entre les mains expertes de nos esthéticiennes et coiffeurs au travers d'une large gamme de produits de soins.Notre équipe est à votre écoute et vous accueille du mardi au dimanche de 9h30h à 21h00"
                    : "Nous vous proposons des soins de qualité pour vos cheveux ainsi que votre corps avec des produits certifiés, soins du visage, séances amincissantes, manucure, soin des pieds, épilations à la cire. . . . . "}
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
