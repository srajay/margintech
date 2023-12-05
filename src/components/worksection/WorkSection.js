import React from "react";
import "./worksection.css";
import { Data } from "./WorkData";

const WorkSection = () => {
  return (
    <>
      <div className="worksection">
        <div className="work-content">
          <h3>WORKSECTION</h3>
          <h1>
            Bringing <span>Digital Dreams to Life</span> through Software
            Development, UI/UX Design, and SEO Excellence.
          </h1>
          <p>
            Elevate your online presence through cutting-edge UI/UX design,
            bespoke web development, and captivating video editing. Immerse your
            audience in breathtaking travel experiences with our cinematic
            travel videos.
          </p>
        </div>
        <div className="workcard">
          {Data.map((items) => (
            <div key={items.worknum} className="workcard-card">
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                <div className="workcard-img">
                  <img src={items.img} alt={items.title} />
                </div>
                <div className="workcard-text">
                  <h1>{items.title}</h1>
                  <h2>{items.para}</h2>
                </div>
                <div className="workcard-line"></div>
                <div className="workcard-date">
                  <p>{items.task}</p>
                  <p>{items.date}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkSection;
