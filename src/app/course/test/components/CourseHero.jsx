import React from "react";
import "./CourseHero.css";
import Image from "next/image";

function CourseHero({ cover, name, sub_name, price, date }) {
  return (
    <div className="course-hero">
      <Image src={cover} alt={name} width={1920} height={1080} />

      <div className="course-overlay">
        <div className="course-text">
          <h1>{name}</h1>
          <p>สร้างผลงานระดับประเทศเต็มอิ่มภายใน 9 เดือน</p>
        </div>
        <hr />
        <div className="course-price">
          <p>{date}</p>
          <h2>{price}</h2>
        </div>
        <div className="course-links">
          <a href="#">Book</a>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;
