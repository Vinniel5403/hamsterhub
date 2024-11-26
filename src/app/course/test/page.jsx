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

function Page() {
  return (
    <div className="test">
      <Navbar />
      <CourseHero /> 
      <CourseTag /> 
      <CourseVideo />
      <CourseContent />
      <CourseGet />
      <CourseSlider />
      
      
      <Footer />
    </div>
  );
}

export default Page;
