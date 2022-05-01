import React from 'react'

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home-img">
            <img src="/img/home-img.png" alt='' />
          </div>
          <div className="home-content">
          <h1>Welcome<br /><span>in Salon Rihana</span></h1>
            <h1>Your big day<br /><span>in style</span></h1>
            <p>Come see our bride's corner and take the opportunity to schedule your date.</p>
            <a href="#btn" className="btn btn-outline">
              <i className="fab fa-whatsapp" />
              Schedule your time
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home