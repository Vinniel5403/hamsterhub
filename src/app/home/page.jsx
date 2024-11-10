import React from "react";
import Navbar from "../components/Navbar";
import Description from "./Parts/Description";
import Header from "../components/Header";
import About from "./Parts/About";
import Activities from "./Parts/Activities";
import BackgroundMain from "./Parts/Background-main";
import Footer from "../components/Footer";
import Gallery from "./Parts/Gallery";
import Panel from "./Parts/Panel";
import Work from "./Parts/Work";
import Stat from "./Parts/Stat";
import "./Home.css";


function HomePage() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <BackgroundMain />
      <Description />
      <About />
      <Activities />
      <Gallery />
      <Stat />
      <Footer />
    </div>
  );
}

export default HomePage;
