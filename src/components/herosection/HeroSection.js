import React from "react";
import "./herosection.css";
import CoderBoy from "../../assets/coder-boy.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import IlamiLogo from "../../assets/agro-logo.png";
import VisionalLogo from "../../assets/visional-logo.png";
import AronLogo from "../../assets/aron-logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <video loop autoPlay muted className="bg-video">
          <source
            src={require("../../assets/hero-video.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <div className="content-left">
            <h1>
              Pioneering the Future of Digital Excellence in Design and
              Development.
            </h1>
            <p>
              <span>
                <AcUnitIcon fontSize="large" />
              </span>
              At MarginTechnologies, our passion lies in innovation, and we take
              pride in our ability to create cutting-edge digital products from
              the ground up.
            </p>
            <div className="companies">
              <a
                href="https://ilamiagro.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="companies-logo">
                  <img src={IlamiLogo} alt="ilami-agro" />
                </div>
              </a>
              <a
                href="https://getvisional.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="companies-logo">
                  <img src={VisionalLogo} alt="visional commerce" />
                </div>
              </a>
              <a
                href="https://aron-engineering.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="companies-logo">
                  <img src={AronLogo} alt="aron engineering" />
                </div>
              </a>
            </div>
          </div>
          <div className="content-right">
            <div className="content-right_img">
              <img src={CoderBoy} alt="coder-boy" />
            </div>
            <div className="content-right_social">
              <p>Connect with us</p>
              <a
                href="https://www.facebook.com/profile.php?id=61554031543717"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="large" />
              </a>
              <a
                href="https://www.instagram.com/margin_technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/margin-technologies-57b0892a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
