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
          <div className="about-detail">
            <div className="about-detail-content">
              <div className="about-img">
                <img src="/img/about-img.jpg" alt="" />
              </div>
              <div className="about-description">
                <div className="section-title">
                  <h1>notre histoire</h1>
                  {/* <span>coiff_rihana</span> */}
                </div>
                <p>
                  {/* {showMore ? text : `${text.substring(0, 3)}`} */}

                  {showMore ? (
                    <div style={{ textAlign: "center", fontStyle: "italic" }}>
                      Nous vous proposons des soins de qualité pour vos cheveux
                      ainsi que votre corps avec des produits certifiés, soins
                      du visage, séances amincissantes, manucure, soin des
                      pieds, épilations à la cire et à la lumiére plulsée.
                      <br /> <br /> Dans une ambiance paisible, souriante et
                      relaxante ici le temps marque une pause, la vôtre.
                      <br /> <br /> Délicieuse sensation de bien-être, privilège
                      d'une attention unique, alchimie subtile des méthodes
                      traditionnelles et avant-gardistes, abandonnez-vous entre
                      les mains expertes de nos esthéticiennes et coiffeurs au
                      travers d'une large gamme de produits de soins.
                      <br />
                      <br />
                      Notre équipe est à votre écoute et vous accueille du mardi
                      au dimanche de 09h00h à 21h00
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", fontStyle: "italic" }}>
                      Nous vous proposons des soins de qualité pour vos cheveux
                      ainsi que votre corps avec des produits certifiés, soins
                      du visage, séances amincissantes, manucure, soin des
                      pieds, épilations à la cire et à la lumiére plulsée.{" "}
                    </div>
                  )}
                </p>
                <button
                  style={{ marginBottom: "20px" }}
                  className="btn "
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Montrer moins" : "Montrer plus"}
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
