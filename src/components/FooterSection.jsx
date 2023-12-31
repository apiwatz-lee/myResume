import React from "react";
import FooterData from "../data/FooterSectionData";
import "../style/FooterSection.css";

function Footer() {
  const { email, copyright } = FooterData;
  const { messageBox, instargram, messageLetter } = FooterData.icon;
  return (
    <div name="contact">
      <footer id="contact" className="footer-section">
        <div className="email">
          <img src={messageBox} alt="" />
          {email}
        </div>
        <div className="contact-hidden">
          <img className="instargramFooter" src={instargram} alt="" />
          <img className="messageLetter" src={messageLetter} alt="" />
        </div>
        <div className="copyright">&#169; {copyright}</div>

        <div className="contact">
          <img className="instargramFooter" src={instargram} alt="" />
          <img className="messageLetter" src={messageLetter} alt="" />
          <div className="copyright-hidden">&#169; {copyright}</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
