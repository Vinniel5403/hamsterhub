import React from "react";
import Navbar from "../components/Navbar";
import Description from "./Parts/Description";
import Footer from "../components/Footer";
import Review from "./Parts/Review";
import MainSlider from "./Parts/MainSlider";
import Post from "./Parts/Post";
import "./Home.css";


function HomePage() {
  return (
    <div className="home">
      <Navbar/>
      <MainSlider />
      {/* <Description /> */}
      <Post />
      <Review />
      <Footer />
    </div>
  );
}

export default HomePage;
