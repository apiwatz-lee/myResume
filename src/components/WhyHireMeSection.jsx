import React from "react";
import skillsSet from "../data/WhyHireMeSectionData";
import "../style/WhyHireMe.css";

function WhyHireMe() {
  return (
    <div id="why" className="whyHireMe-container">
      <div className="topic">Why Hire Me?</div>
      <div className="card-container">
        {skillsSet.map((item, index) => {
          return (
            <div className="skill-card" key={index}>
              <span className="icon-container">
                <img
                  className="skill-iconBackground"
                  src={item.background}
                  alt={item.skill}
                />
                <img className="skill-icon" src={item.icon} alt={item.skill} />
              </span>
              <div className="skill-topic">{item.skill}</div>
              <div className="skill-detail">{item.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyHireMe;
