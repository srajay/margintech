import React from "react";
import "./contactsection.css";
import ContactImg from "../../assets/contact-img1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactSection = () => {
  return (
    <>
      <div className="contactsection">
        <div className="contact-content">
          <div className="contact-img">
            <img src={ContactImg} alt="ContactUs" />
          </div>
          <div className="contact-info">
            <p>Contact Information</p>
            <div className="contact-location">
              <p>
                <LocationOnIcon /> Patan, Lalitpur
              </p>
              <p>
                <LocalPhoneIcon /> +977 9808550222
              </p>
              <p>
                <MailIcon /> margin.tech01@gmail.com
              </p>
            </div>

            <div className="social-icon">
              <a href="https://www.facebook.com/">
                <FacebookIcon fontSize="medium" />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon fontSize="medium" />
              </a>
              <a href="https://www.youtube.com/">
                <TwitterIcon fontSize="medium" />
              </a>
            </div>
            <div className="rights">
              <p>All rights reserved &copy; Margintechnologies 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
