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
                <img src="/img/service/manicure.png" />
                <p>Manucure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/pedicure.png" />
                <p>Pédicure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/makeup.png" />
                <p>Maquillage</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/hairstyle.png" />
                <p>Pack Mariée</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/haircut.png" />
                <p>Coiffure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/soinvisage.PNG" />
                <p>soin visage</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/waxing.png" />
                <p>épilation</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <img src="/img/service/skin cleansing.png" />
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