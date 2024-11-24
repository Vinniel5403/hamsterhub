import React from "react";

import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";
import CourseVideo from "./components/CourseVideo";
import CourseSlider from "./components/CourseSlider";

function Page() {
  return (
    <div className="test">
      <Navbar />
      <CourseHero />  
      <CourseVideo />
      <CourseSlider />
      
      <Footer />
    </div>
  );
}

export default Page;
