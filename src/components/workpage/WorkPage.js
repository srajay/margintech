import React from "react";
import "./workpage.css";
import WorkpageFilter from "./WorkpageFilter";

const WorkPage = () => {
  return (
    <>
      <div className="workpage">
        <div className="workpage-header">
          <p>
            Creating next level <br />
            digital products
          </p>
        </div>
        <div className="workpage-content">
          <WorkpageFilter />
        </div>
      </div>
    </>
  );
};

export default WorkPage;
