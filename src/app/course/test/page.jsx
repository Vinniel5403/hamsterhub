import React from "react";

import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";
import CourseGet from "./components/CourseGet";
import CourseOutline from "./components/CourseOutline";
import CourseSlider from "./components/CourseSlider";
import CourseContent from "./components/CourseContent";
import CourseTag from "./components/CourseTag";

function Page() {
  const courseData =[
    {
      name: "National Project",
      cover: "/assets/np.png",
      sub_name: "season 2",
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
      sub_name={courseData[0].sub_name}
      price={courseData[0].price}
      date={courseData[0].date}
        /> 

      <CourseContent />
      <CourseGet />
      <CourseOutline />
      
      <CourseTag />
      <CourseSlider />
      <Footer />
    </div>
  );
}

export default Page;
