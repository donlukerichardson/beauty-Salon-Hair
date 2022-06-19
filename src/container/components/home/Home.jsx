import React from "react";

function Home() {
  return (
    <>
      <section id="accueil" className="home">
        <div className="container">
          <div className="home-img">
            <img src="/img/home-img.png" alt="" />
          </div>
          <div className="home-content">
            <h1>
              Bienvenue
              <br />
              au Salon Lamasati dans une ambiance
              <br />
              chaleureuse et reposante
            </h1>
            <h1></h1>

            <a
              href="http://wa.me/+212700893408"
              target="_blank"
              className="btn btn-outline"
            >
              <i className="fab fa-whatsapp" />
              Contactez-nous &#128513;
            </a>

            {/* <a
              href="http://wa.me/+212680830141"
              target="_blank"
              className="btn btn-outline"
            >
              <i className="fab fa-whatsapp" />
              Planifiez votre temps
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;