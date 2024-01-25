import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import MarginLogo from "../../assets/margin-logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <NavLink to="/">
            <img src={MarginLogo} alt="marginlogo" />
            <p>Margintech</p>
          </NavLink>
        </div>
        <div className="navbar-links">
          <li>
            <NavLink to="/">
              <p
                className={activeNavItem === "home" ? "active" : ""}
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/work">
              <p
                className={activeNavItem === "work" ? "active" : ""}
                onClick={() => handleNavItemClick("work")}
              >
                Work
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <p
                className={activeNavItem === "about" ? "active" : ""}
                onClick={() => handleNavItemClick("about")}
              >
                About
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <p
                className={activeNavItem === "contact" ? "active" : ""}
                onClick={() => handleNavItemClick("contact")}
              >
                Contact
              </p>
            </NavLink>
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
                  <NavLink to="/">
                    <p
                      className={activeNavItem === "home" ? "active" : ""}
                      onClick={() => handleNavItemClick("home")}
                    >
                      Home
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/work">
                    <p
                      className={activeNavItem === "work" ? "active" : ""}
                      onClick={() => handleNavItemClick("work")}
                    >
                      Work
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <p
                      className={activeNavItem === "about" ? "active" : ""}
                      onClick={() => handleNavItemClick("about")}
                    >
                      About
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <p
                      className={activeNavItem === "contact" ? "active" : ""}
                      onClick={() => handleNavItemClick("contact")}
                    >
                      Contact
                    </p>
                  </NavLink>
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
