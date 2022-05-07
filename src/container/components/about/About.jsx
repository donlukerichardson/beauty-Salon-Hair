import React from "react";

function About() {
  return (
    <>
      <section className="about" id="about" 
      style={{backgroundImage: `url(./img/arabesque-left-bottom.svg)`}}
      >
        <div className="container">
          <div className="section-title">
            <h1>notre histoire</h1>
            <span>studio hair</span>
          </div>
          <div className="about-detail">
            <div className="about-detail-content">
              <div className="about-img">
                <img src="/img/about-img.jpg" alt="" />
              </div>
              <div className="about-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit
                  possimus a sint
                </p>
                <p>
                  Obcaecati porro accusamus iusto rem aperiam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Velit possimus a sint
                </p>
                <p>
                  Eligendi nostrum architecto quibusdam. Neque odio enim quasi
                  ad culpa similique quas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
