import React from "react";

import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";
import CourseVideo from "./components/CourseVideo";
import CourseSlider from "./components/CourseSlider";
import CourseGet from "./components/CourseGet";
import CourseContent from "./components/CourseContent";
import CourseTag from "./components/CourseTag";

function Page() {
  const courseData =[
    {
      name: "National Project",
      cover: "/assets/np.png",
      sub_name: "season 2",
      price: "฿19,990",
      date: "เริ่ม 8 ม.ค. เวลา:19:00-21:00",

    }
  ]
  return (
    <div className="test">
      <Navbar />
      <CourseHero 
      cover={courseData[0].cover} 
      name={courseData[0].name} 
      sub_name={courseData[0].sub_name}
      price={courseData[0].price}
      date={courseData[0].date}
        /> 
     
      <CourseContent />
      <CourseVideo />
      
      <CourseGet />
      <CourseTag />
      <CourseSlider />
      
      
      <Footer />
    </div>
  );
}

export default Page;
