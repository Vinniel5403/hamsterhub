import React from "react";

import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";
import CourseGet from "./components/CourseGet";
import CourseOutline from "./components/CourseOutline";
import Slider from "@/app/components/Slider";
import CourseContent from "./components/CourseContent";
import CourseTag from "./components/CourseTag";

function Page() {
  const items =[
    {
      title: "mrCITY",
      description: null,
      image: "/assets/gallery-tcas.jpg",
      content: "https://nj.dekhub.com/public/videos/mrCITY.mp4",
    },
    {
      title: "Beam",
      description: null,
      image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
      content: "https://nj.dekhub.com/public/videos/Beam.mp4",
    },
    {
      title: "Veggie Dash",
      description: null,
      image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
      content: "https://nj.dekhub.com/public/videos/Veggie%20Dash.mp4",
    },
    {
      title: "ขนมปัง",
      description: null,
      image: "https://nj.dekhub.com/public/imgs/gallery-Safe.png",
      content: "https://nj.dekhub.com/public/videos/Knompang.mp4",
    },
    
    {
      title: "wOof",
      description: null,
      image: "https://nj.dekhub.com/public/imgs/gallery-Fluke.png",
      content: "https://nj.dekhub.com/public/videos/wOof.mp4",
    },
    {
      title: "Pang",
      description: null,
      image: "https://nj.dekhub.com/public/imgs/gallery-Fluke.png",
      content: "https://nj.dekhub.com/public/videos/Pang.mp4",
    },

  ]
  const courseData =[
    {
      name: "National Project-2",
      description:"เริ่มพัฒนาผลงานใต่อันดับสู่สนามแข่งระดับประเทศใน 9 เดือน",
      cover: "/assets/np2.png",
      price: "฿19,990",
      date: "เริ่ม 8 ม.ค. 2025",

    }
  ]
  return (
    <div className="test">
      <Navbar />
      <CourseHero 
      cover={courseData[0].cover} 
      name={courseData[0].name} 
      description={courseData[0].description}
      price={courseData[0].price}
      date={courseData[0].date}
        /> 

      <CourseContent />
      <CourseGet />
      <CourseOutline />
      
      <CourseTag />
      <Slider items={items}/>
      <Footer />
    </div>
  );
}

export default Page;
