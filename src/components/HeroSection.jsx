import * as React from "react";
import HeroSectionData from "../data/HeroSectionData";

import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../style/HeroSection.css";
import myPic from "../assets/myPic.jpg";
import bullet from "../assets/BulletPoints.svg";
import { Link } from "react-scroll";

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
        <ul className="navBar-wrapper">
          <li>
            <box-icon
              class="icon-nav"
              name="star"
              type="solid"
              rotate="180"
              color="#DDD"
            ></box-icon>
            <Link
              to="whyMe"
              smooth={true}
              duration={600}
              className="whyHireMe-nav"
            >
              Why hire me
            </Link>
          </li>
          <li>
            <box-icon
              class="icon-nav"
              name="briefcase-alt"
              type="solid"
              color="#DDD"
            ></box-icon>
            <Link
              to="portfolio"
              smooth={true}
              duration={600}
              className="portfolio-nav"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <box-icon
              class="icon-nav"
              name="paper-plane"
              type="solid"
              color="#DDD"
            ></box-icon>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="contact-nav"
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
      <main name="hero" className="container">
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
