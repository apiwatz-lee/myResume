import React from "react";
import PortFolio from "../data/PortfolioSectionData";
import "../style/Portfolio.css";
import arrow from "../assets/Arrow.svg";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio-section">
      <section className="portfolio-header">
        <div className="portfolio">Portfolio</div>
        <div className="see-more">
          See More{" "}
          <span className="arrow">
            <img src={arrow} alt="Arrow" />
          </span>
        </div>
      </section>
      <section className="portfolio-container">
        <div className="portfolio-box">
          {PortFolio.map((item, index) => {
            return (
              <img
                className="portfolio-image"
                src={item}
                alt="eachPortfolio"
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
