import React from "react";
import Navbar from "../components/Navbar";
import Description from "./Parts/Description";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Review from "./Parts/Review";
import "./Home.css";
import MainSlider from "./Parts/MainSlider";
import Post from "./Parts/Post";


function HomePage() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <MainSlider />
      <Description />
      <Post />
      <Review />
      <Footer />
    </div>
  );
}

export default HomePage;
