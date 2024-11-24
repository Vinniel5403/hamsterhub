import React from "react";
import "./CourseHero.css";
import Image from "next/image";
function CourseHero() {
  return (
    <div className="course-hero">
      <Image
        src="https://nj.dekhub.com/public/imgs/header3.png"
        alt="National Project"
        width={1920}
        height={1080}
      />

      <div className="course-overlay">
        <h1>test</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="course-links">
          <a href="#">test</a>
        </div>
      </div>
      <div className="tag">
        <p>#tag #here</p>
      </div>
    </div>
  );
}

export default CourseHero;
