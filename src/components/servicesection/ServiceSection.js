import React from "react";
import "./servicesection.css";
import { Data } from "./ServiceData";

const ServiceSection = () => {
  return (
    <>
      <div className="servicesection">
        <div className="service-content">
          <h3>SERVICESECTION</h3>
          <h1>
            Elevate <span>Your Digital Presence</span> with Our Comprehensive
            Suite of Services.
          </h1>
          <p>
            Embark on a transformative journey with our extensive range of
            digital services designed to propel your business to new heights.
            Explore the boundless possibilities with us as we embark on a
            collaborative journey to shape the future of your online success.
          </p>
        </div>
        <div className="servicecard">
          {Data.map((items) => (
            <div key={items.worknum} className="servicecard-card">
              <div className="servicecard-img">
                <img src={items.img} alt={items.title} />
              </div>
              <div className="servicecard-text">
                <h1>{items.title}</h1>
                <p>{items.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
