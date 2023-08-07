import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import WhyHireMeSection from "./components/WhyHireMeSection";
import FooterSection from "./components/FooterSection";
import "boxicons";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <HeroSection />
      <WhyHireMeSection />
      <PortfolioSection />
      <FooterSection />
    </ChakraProvider>
  );
}

export default App;
