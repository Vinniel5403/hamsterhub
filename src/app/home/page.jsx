import React from "react";
import Navbar from "../components/Navbar";
import Description from "./Parts/Description";
import Footer from "../components/Footer";
import MainSlider from "./Parts/MainSlider";
import Post from "./Parts/Post";
import Slider from "@/app/components/Slider";
import HomeSlider from "./Parts/HomeSlider";
import "./Home.css";

const items = [
  {
    title: null,
    subtitlen: null,
    description: null,
    image: "/assets/gallery-tcas.jpg",
    content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
  },
  {
    title: "วิศวะ ม.เกษตร",
    subtitle: "Ohm's Project",
    description: null,
    image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
    content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
  },
  {
    title: "P'Zard",
    subtitle: "",
    description: null,
    image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
    content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
  },
  {
    title: "N'Safe",
    subtitle: "from gamer to developer",
    description: null,
    image: "https://nj.dekhub.com/public/imgs/gallery-Safe.png",
    content: "https://nj.dekhub.com/public/videos/gallery-Safe.mp4",
  },
  
  {
    title: "วิศวะคอมฯ บางมด",
    subtitle: "Fluke's Game Project",
    description: null,
    image: "https://nj.dekhub.com/public/imgs/gallery-Fluke.png",
    content: "https://nj.dekhub.com/public/videos/gallery-Fluke.mp4",
  },
];

function HomePage() {
  return (
    <div className="home">
      <Navbar/>
      <MainSlider />
      <Description />
      <Post />
      <HomeSlider />
      <Slider items={items} />
      <Footer />
    </div>
  );
}

export default HomePage;
