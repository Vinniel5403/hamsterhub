import React from "react";

import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";
import CourseVideo from "./components/CourseVideo";
import CourseSlider from "./components/CourseSlider";
import CourseGet from "./components/CourseGet";
import CourseTag from "./components/CourseTag";
import CourseContent from "./components/CourseContent";
import CourseBook from "./components/CourseBook";

function Page() {
  const courseData =[
    {
      name: "National Project",
      cover: "/assets/np.png",
      sub_name: "season 2"

    }
  ]
  return (
    <div className="test">
      <Navbar />
      <CourseHero 
      cover={courseData[0].cover} 
      name={courseData[0].name} 
      sub_name={courseData[0].sub_name}
        /> 
      <CourseTag /> 
      <CourseVideo />
      <CourseContent />
      <CourseGet />
      <CourseBook />
      <CourseSlider />
      
      
      <Footer />
    </div>
  );
}

export default Page;
