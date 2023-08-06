import * as React from "react";
import HeroSectionData from "../data/HeroSectionData";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../style/HeroSection.css";
import myPic from "../assets/myPic.jpg";
import bullet from "../assets/BulletPoints.svg";

function HeroSection() {
  const {
    name,
    surname,
    position,
    description,
    facebook,
    twitter,
    instargram,
    linkedIn,
  } = HeroSectionData;

  return (
    <ChakraProvider>
      <header className="header">
        <div className="myProfile">
          <div>My Profile</div>
        </div>
        <div className="navBar-wrapper">
          <a href="#why" className="whyHireMe-nav">
            Why hire me
          </a>
          <a href="#port" className="portfolio-nav">
            Portfolio
          </a>
          <a href="#contact" className="contact-nav">
            Contact
          </a>
          {/* <div className="whyHireMe-nav">Why hire me</div>
          <div className="portfolio-nav">Portfolio</div>
          <div className="contact-nav">Contact</div> */}
        </div>
      </header>
      <main className="container">
        <div className="left-container">
          <div className="greeting">Hi!</div>
          <div className="name">
            I'm {name} {surname}. <br />
            {position}
          </div>
          <div className="description">{description}</div>
          <div className="contact-container">
            <div className="followMe">Follow me</div>
            <div className="social-media">
              <img className="facebook" src={facebook} alt="facebookLogo" />
              <img className="twitter" src={twitter} alt="twitterLogo" />
              <img
                className="instargram"
                src={instargram}
                alt="instargramLogo"
              />
              <img className="linkedIn" src={linkedIn} alt="linkedInLogo" />
            </div>
          </div>
          <div className="button-container">
            <Button
              className="send-request-button"
              colorScheme="pink"
              variant="ghost"
            >
              Send Request
            </Button>
            <Button
              className="download-cv-button"
              colorScheme="pink"
              variant="ghost"
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className="right-container">
          <span className="image-container">
            <img className="myPicture" src={myPic} alt="myPicture" />
            <img className="bullet-bottom" src={bullet} alt="myPicture" />
            <img className="bullet-top" src={bullet} alt="myPicture" />
          </span>
        </div>
      </main>
    </ChakraProvider>
  );
}

export default HeroSection;
