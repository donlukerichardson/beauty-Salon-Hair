import React from "react";

function Gallery() {
  return (
    <>
      <section className="gallery" id="gallery">
        <div className="gallery-content">
          <div className="gallery-list-img">
            <div className="section-title">
              <h1>Galerie</h1>
              {/* <span>les princesses de notre instagram</span> */}
            </div>
            <div className="container py-4 row">
              <div className="gallery-img col-md-3">
                <img src="/img/galerie/g1.jpeg" alt="" />
              </div>
              <div className="gallery-img col-md-3">
                <img src="/img/galerie/g2.jpeg" alt="" />
              </div>
              <div className="gallery-img col-md-3">
                <img src="/img/galerie/g3.jpeg" alt="" />
              </div>
              <div className="gallery-img col-md-3">
                <img src="/img/galerie/g8.jpeg" alt="" />
              </div>
              {/* <div className="gallery-img col-md-3">
                <img src="/img/galerie/g5.jpeg" alt="" />
              </div>
              <div className="gallery-img col-md-3">
                <img src="/img/galerie/g6.jpeg" alt="" />
              </div>
              <div className="gallery-img col-md-3">
                <img src="/img/galerie/g7.jpeg" alt="" />
              </div> */}
            </div>
          </div>

          {/* <button className="btn">voir plus</button> */}
        </div>
      </section>
    </>
  );
}

export default Gallery;
