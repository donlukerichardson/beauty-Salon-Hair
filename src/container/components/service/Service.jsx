import React from 'react'

function Service() {
  return (
    <>
     <section className="services"  id="services"
      style={{backgroundImage: `url(./img/arabesque-left-top.svg)`}}
     >
        <div className="services-content">
          <div className="section-title">
            <h1>services</h1>
            <span>Ce que nous faisons</span>
          </div>
          <div className="services-content-description">
            <div className="box">
              <div className="inner">
                <img src="/img/services/manicure.png" />
                <p>Manucure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/pedicure.png" />
                <p>Manucure / Pédicure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/makeup.png" />
                <p>Maquillage</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/hairstyle.png" />
                <p>Pack Mariée</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/haircut.png" />
                <p>Coiffure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/eyebrow design.png" />
                <p>Soins Visage</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/waxing.png" />
                <p>épilation</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/services/skin cleansing.png" />
                <p>Cheveux</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service