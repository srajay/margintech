import React from "react";
import { motion } from "framer-motion";
import "./workbox.css";

const WorkBox = ({ filteredProducts }) => {
  return (
    <>
      <div className="workbox-container">
        {filteredProducts.map((items) => (
          <motion.div
            layout
            key={items.id}
            className="workbox-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href={items.link} target="_blank" rel="noopener noreferrer">
              <div className="workbox-img">
                <img src={items.img} alt={items.title} />
              </div>
              <div className="workbox-title">
                <p>{items.title}</p>
              </div>
              <div className="workbox-line"></div>
              <div className="workbox-task">
                <p>{items.task}</p>
                <p>{items.date}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default WorkBox;
