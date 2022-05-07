import React from 'react'

function Gallery() {
  return (
    <>
      <section className="gallery" id="gallery">
        <div className="gallery-content">
          <div className="section-title">
            <h1>Galerie</h1>
            <span>les princesses de notre instagram</span>
          </div>
          <div className="gallery-list-img">
            <div className="gallery-img">
              <img src="/img/img-insta/photo1.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo2.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo3.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo4.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo5.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo6.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo7.png" alt=''/>
            </div>
            <div className="gallery-img">
              <img src="img/img-insta/photo8.png" alt=''/>
            </div>
          </div>
          <button className="btn">voir plus</button>
        </div>
      </section>
    </>
  )
}

export default Gallery