import React from "react";
import "./CourseHero.css";
import Image from "next/image";

function CourseHero({ cover, name, sub_name }) {
  return (
    <div className="course-hero">
      <Image
        src={cover}
        alt={name}
        width={1920}
        height={1080}
      />

      <div className="course-overlay">
        <div className="course-text">
          <h1>{name}</h1>
          <h2>{sub_name}</h2>
        </div>
        <hr />
        <div className="course-links">
          <a href="#">Book</a>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;
