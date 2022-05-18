import React from "react";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home-img">
            <img src="/img/home-image.PNG" alt="" />
          </div>

          <div className="home-content">
            <h1>
              Bienvenue
              <br />
              <span>dans Salon Rihana</span>
            </h1>
            <h1>Votre grand jour dans le style</h1>
            <p>
              Venez voir notre coin des mariées et profitez-en pour programmer
              votre rendez-vous.
            </p>
            <a
              href="http://wa.me/+212680830141"
              target="_blank"
              className="btn btn-outline"
            >
              <i className="fab fa-whatsapp" />
              Planifiez votre temps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
