import React from "react";
import Image from "next/image"; // Import Image for optimized images
import "./Test.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function Page() {
  return (
    <div className="test">
      <Navbar />

      <div className="course-content">
        <Image
          src="https://nj.dekhub.com/public/imgs/header3.png"
          alt="National Project"
          width={1920} 
          height={1080} 
          className="course-image" 
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default Page;
