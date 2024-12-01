import React from "react";
import "./CourseHero.css";
import Image from "next/image";

function CourseHero({ cover, name, sub_name, price, date }) {
  return (
    <div className="course-hero">
      <Image src={cover} alt={name} width={1920} height={1080} />

      <div className="course-header">
        <p>ราคาพิเศษ! ก่อน5ธันวาคมนี้ ฿1,500</p>
      </div>
      <div className="course-overlay">
        <div className="course-text">
          <h1>{name}</h1>
          <p>สร้างผลงานระดับประเทศเต็มอิ่มภายใน 9 เดือน</p>
        </div>
      </div>
    <div className="course-hero-buttom">
      <div className="course-price">
        <p>{date}</p>
        <h2>{price}</h2>
      </div>
      <hr />
      <div className="course-links">
        <p>
          ผลงานที่เราให้น้องได้ฝึกออกแบบ คิดวิธีการสร้างเอง ประยุกต์สิ่งที่เรียน
          แล้วยังได้แนวคิดของเพื่อนๆ เป็นสังคมที่เรียนรู้ร่วมกันครับ
        </p>{" "}
        <a href="#">Book</a>
      </div>
    </div>
    </div>
  );
}

export default CourseHero;
