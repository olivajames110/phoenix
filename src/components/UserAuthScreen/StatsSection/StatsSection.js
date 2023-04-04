import React from "react";
import "./StatsSection.css";

const StatsSection = (props) => {
  return (
    <section id="stats">
      <div className="stats-container">
        <div className="stats-item">
          <div className="primary">$1+ billion</div>
          <div className="secondary">loans funded</div>
        </div>
        <div className="stats-item">
          <div className="primary">2,500+</div>
          <div className="secondary">Investors supported</div>
        </div>
        <div className="stats-item">
          <div className="primary">4.8 / 5.0</div>
          <div className="secondary">Customer rating</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
