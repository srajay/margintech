import React, { useState } from "react";
import "./workpagefilter.css";
import { WorkData } from "./WorkpageData";
import WorkBox from "./WorkBox";

const WorkpageFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const filteredProducts = activeCategory
    ? WorkData.filter((product) => product.category === activeCategory)
    : WorkData;
  return (
    <>
      <div className="project-cat">
        <button
          className={activeCategory === null ? "active" : ""}
          onClick={() => toggleCategory(null)}
        >
          All
        </button>
        <button
          className={activeCategory === "design" ? "active" : ""}
          onClick={() => toggleCategory("design")}
        >
          Design
        </button>
        <button
          className={activeCategory === "development" ? "active" : ""}
          onClick={() => toggleCategory("development")}
        >
          Development
        </button>
      </div>
      <WorkBox filteredProducts={filteredProducts} />
    </>
  );
};

export default WorkpageFilter;
