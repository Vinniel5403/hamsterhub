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
      <CourseSlider />
      <Footer />
    </div>
  );
}

export default Page;
