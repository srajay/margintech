import React from "react";
import "./contactsection.css";
import ContactImg from "../../assets/contact-img1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
                <LocationOnIcon />
                <a
                  href="https://www.google.com/maps/place/27%C2%B040'23.1%22N+85%C2%B019'27.3%22E/@27.67308,85.3229135,18z/data=!3m1!4b1!4m12!1m7!3m6!1s0x39eb19c50daa2fb1:0x6f197fa38097b530!2sPatan+Darbar+Square!8m2!3d27.6726981!4d85.3253211!16s%2Fm%2F0h1h5qp!3m3!8m2!3d27.67308!4d85.324245?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patan, Lalitpur
                </a>
              </p>
              <p>
                <LocalPhoneIcon />
                <a
                  href="tel:+977 9808550222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +977 9808550222
                </a>
              </p>
              <p>
                <MailIcon />
                <a
                  href="mailto:margin.tech01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  margin.tech01@gmail.com
                </a>
              </p>
            </div>

            <div className="social-icon">
              <a
                href="https://www.facebook.com/profile.php?id=61554031543717"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a
                href="https://www.instagram.com/margin_technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="medium" />
              </a>
              <a
                href="https://www.linkedin.com/in/margin-technologies-57b0892a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
            </div>
            <div className="rights">
              <p>All rights reserved &copy; MarginTech 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
