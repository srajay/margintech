import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MarginLogo from "../../assets/margin-logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <Link to="/">
            <img src={MarginLogo} alt="marginlogo" />
            <p>Margintech</p>
          </Link>
        </div>
        <div className="navbar-links">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <p>Work</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </li>
        </div>
        <div className="navbar-mob">
          {!navOpen ? (
            <div className="nav-close" onClick={() => setNavOpen(true)}>
              <MenuIcon style={{ fontSize: "2.5rem" }} />
            </div>
          ) : (
            <div className="nav-open" onClick={() => setNavOpen(false)}>
              <div className="close-icon">
                <CloseIcon style={{ fontSize: "2.5rem" }} />
              </div>

              <div className="navbar-items">
                <li>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/work">
                    <p>Work</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <p>Contact</p>
                  </Link>
                </li>
                <div className="social-links">
                  <a href="https://www.facebook.com/profile.php?id=61554031543717">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.youtube.com/">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
