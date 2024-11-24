import React from "react";

import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";

function Page() {
  return (
    <div className="test">
      <Navbar />
      <CourseHero />
      
      <Footer />
    </div>
  );
}

export default Page;
