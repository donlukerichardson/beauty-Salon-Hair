import React from "react";

function Menuu() {
  return (
    <>
    <div className="parentmenu">
    <section id="menu" className="menu container">
      <div className="container">
          <div className="section-title">
            <h2>
              Check our tasty Menu
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mt-2 mb-3">
              <ul className="nav nav-tabs active">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="coiffure-tab"
                    type="button"
                    data-bs-target="#coiffure"
                    role="tab"
                    aria-controls="coiffure"
                    aria-selected="true"
                  >
                    Coiffure
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="soin-tab"
                    type="button"
                    data-bs-target="#soin"
                    role="tab"
                    aria-controls="soin"
                    aria-selected="true"
                  >
                    Soin Visage
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="épilation-tab"
                    type="button"
                    data-bs-target="#épilation"
                    role="tab"
                    aria-controls="épilation"
                    aria-selected="true"
                  >
                    épilation
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="massage-tab"
                    type="button"
                    data-bs-target="#massage"
                    role="tab"
                    aria-controls="massage"
                    aria-selected="true"
                  >
                    Massage
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="maquillage-tab"
                    type="button"
                    data-bs-target="#maquillage"
                    role="tab"
                    aria-controls="maquillage"
                    aria-selected="true"
                  >
                    Maquillage
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="pack-tab"
                    type="button"
                    data-bs-target="#pack"
                    role="tab"
                    aria-controls="pack"
                    aria-selected="true"
                  >
                    Pack Marée
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    id="manucure-tab"
                    type="button"
                    data-bs-target="#manucure"
                    role="tab"
                    aria-controls="manucure"
                    aria-selected="true"
                  >
                    Manucure
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabControl">
          <div
            className="tab-pane fade show active"
            role="tabpanel"
            id="coiffure"
            aria-labelledby="coiffure-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Les pointes</a>
                  <span>10 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 15 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Les coupes</a>
                  <span>15 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Brushing</a>
                  <span>15 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 15 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Coloration</a>
                  <span>50 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 50 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Les méches</a>
                  <span>100 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 100 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Balayage</a>
                  <span>350 dh dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Kératine</a>
                  <span>500 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 500 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Soin Casque à vapeur</a>
                  <span>150 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Les anglaise / babilise</a>
                  <span>30 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 30 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Coloration sourcils</a>
                  <span>15 dh</span>
                </div>
              </div>
              {/* End Tab Content 1 */}
            </div>
          </div>
          <div
            className="tab-pane fade show"
            role="tabpanel"
            id="soin"
            aria-labelledby="soin-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Modelage visage</a>
                  <span>30 dh</span>
                </div>{" "}
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Soin basique</a>
                  <span>100 dh</span>
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Soin éclat</a>
                  <span>200 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Soin académie</a>
                  <span>300 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Soin académie profond</a>
                  <span>350 dh</span>
                </div>
              </div>
              {/* End Tab Content 1 */}
            </div>
          </div>
          <div
            className="tab-pane fade show"
            role="tabpanel"
            id="épilation"
            aria-labelledby="épilation-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Sourcils</a>
                  <span>10 dh</span>{" "}
                </div>
              </div>{" "}
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Duvet</a>
                  <span>10 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Visage</a>
                  <span>50 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Dos</a>
                  <span>30 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Vente</a>
                  <span>20 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Maillot intégrale</a>
                  <span>50 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Jambes complétes</a>
                  <span>70 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Demi-jambes</a>
                  <span>35 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Bras compléte</a>
                  <span>70 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Demi-bas </a>
                  <span>35 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Aisselles</a>
                  <span>20 dh</span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div
            className="tab-pane fade show"
            role="tabpanel"
            id="massage"
            aria-labelledby="massage-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Relaxant 30min</a>
                  <span>100 dh</span>
                </div>
                <div className="menu-content">
                  <a href="#">Amincissant 30min</a>
                  <span>150 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Antifatigue 45min</a>
                  <span>200 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Modelage 15min</a>
                  <span>50 dh</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            role="tabpanel"
            id="maquillage"
            aria-labelledby="maquillage-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Maquillage du jour :</a>
                  <span>80 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 80 dh</div>
              </div>
              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Maquillage de soir :</a>
                  <span>150 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Maquillage de soir professionnel :</a>
                  <span>200 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Pose faux cils :</a>
                  <span>20 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Pose cils cils :</a>
                  <span>40 dh</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            role="tabpanel"
            id="pack"
            aria-labelledby="pack-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-11 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">
                    Epilation + Manucure + Pédicure + Maquillage + Soin du
                    Visage + Coiffure...:
                  </a>
                  <span>990 dh</span>
                </div>
                <div className="menu-ingredients">à partire de 990 dh</div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            role="tabpanel"
            id="manucure"
            aria-labelledby="manucure-tab"
          >
            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Manucure classique :</a>
                  <span>40 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Manucure spa / modelage :</a>
                  <span>50 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Péducure classique :</a>
                  <span>70 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Péducure spa / modelage :</a>
                  <span>100 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Pose vernis classique :</a>
                  <span>15 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Vernis semi-permanents :</a>
                  <span>80 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Faux ongles avec pose vernis :</a>
                  <span>70 dh</span>
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Gel :</a>
                  <span>150 dh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  );
}

export default Menuu;
