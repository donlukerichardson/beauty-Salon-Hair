import React from "react";

function Menu() {
  return (
    <>
      <section id="menu" className="menu">
        <div className="container">
          <div className="section-title">
            <h2>
              Check our tasty <span>Menu</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">
                  Coiffure{" "}
                </li>
                <li data-filter=".filter-salads"> Soin Visage </li>
                <li data-filter=".filter-salads">épilation</li>{" "}
                <li data-filter=".filter-specialty">Massage</li>{" "}
                <li data-filter=".filter-starters">Maquillage</li>{" "}
                <li data-filter=".filter-salads">Pack Marée</li>{" "}
                <li data-filter=".filter-manucure">Manucure</li>{" "}
              </ul>
            </div>
          </div>
          <div className="row menu-container">
            <div className="col-lg-6 menu-item filter-starters">
              <div className="menu-content">
                <a href="#">Les pointes</a>
                <span>10 dh</span>
              </div>
              <div className="menu-content">
                <a href="#">Les coupes</a>
                <span>15 dh</span>
              </div>
              <div className="menu-ingredients">à partire de 15 dh</div>
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
            <div className="col-lg-6 menu-item filter-specialty">
              <div className="menu-content">
                <a href="#">Balayage</a>
                <span>350 dh</span>
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Kératine</a>
                    <span>500 dh</span>
                  </div>
                  <div className="menu-ingredients">à partire de 500 dh</div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Soin casque à vapeur</a>
                    <span>150 dh</span>
                  </div>
                  <div className="menu-ingredients">à partire de 150 dh</div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Les anglaise/babilise</a>
                    <span>30 dh</span>
                  </div>
                  <div className="menu-ingredients">à partire de 30 dh</div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">Coloration sourcils</a>
                    <span>15 dh</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Tab Content 1 */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
