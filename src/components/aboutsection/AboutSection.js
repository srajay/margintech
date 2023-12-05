import React from "react";
import "./aboutsection.css";
import AboutImg from "../../assets/about-img.png";

const AboutSection = () => {
  return (
    <>
      <div className="aboutsection">
        <div className="about-content">
          <div className="about-img">
            <img src={AboutImg} alt="working-together" />
          </div>
          <div className="about-text">
            <p>
              Nestled in the heart of Nepal, our digital agency is a dynamic hub
              of creativity, technology, and strategic prowess. With a global
              perspective and a commitment to excellence, we proudly collaborate
              with clients worldwide, transforming visions into digital
              masterpieces.
              <br />
              <br />
              <span>
                Join us on a journey of digital evolution, where your success is
                our ultimate destination.
              </span>
            </p>
          </div>
          <div className="about-score">
            <div className="happy-clients">
              <h1>+ 5</h1>
              <p>Happy Clients</p>
            </div>
            <div className="website">
              <h1>+ 4</h1>
              <p>Websites</p>
            </div>
            <div className="design">
              <h1>+ 2</h1>
              <p>Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
