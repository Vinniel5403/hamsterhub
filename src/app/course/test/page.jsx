import React from "react";
import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function page() {
  return (
    <div className="test">
      <Navbar />

      <div className="course-content">
        <img
          src="https://hamsterhub.co/asset/image/course/cover/NP2.png"
          alt="National Project"
        />
      </div>
      <Footer />
    </div>
  );
}

export default page;
