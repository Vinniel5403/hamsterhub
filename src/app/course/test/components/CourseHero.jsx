import React from "react";
import "./CourseHero.css";
import Image from "next/image";

function CourseHero({ cover, name, sub_name, price, date }) {
  return (
    <div className="course-hero">
      <div className="course-hero-img">
      <Image src={cover} alt={name} width={1920} height={1080} />

      <div className="course-header">
        <p>ราคาพิเศษ! ก่อน5ธันวาคมนี้ ฿15,000</p>
      </div>
      <div className="course-overlay">
        <div className="course-text">
          <h1>{name}</h1>
          <p>สร้างผลงานระดับประเทศเต็มอิ่มภายใน 9 เดือน</p>
        </div>
      </div>
      </div>
      <div className="course-hero-buttom">
        <div className="course-price">
          <p> 8 ม.ค. 68 - 22 ก.ย. 68 (จันทร์, พฤหัส 19:00-21:00)</p>
          <p></p>

          <h3>{price}</h3>
        </div>
        <hr />
        <div className="course-links">
          <p>
            สมัครพัฒนาผลงานเข้าแข่ง NSC-2025 ได้ทักษะสำคัญ
            รางวัลและโควต้าเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ
          </p>{" "}
          <a href="#">Book</a>
        </div>
      </div>
      <div className="course-hero-buttom-mobile">
        <div className="course-price">
          <p> 8 ม.ค. 68 - 22 ก.ย. 68 </p>
          <p>(จันทร์, พฤหัส 19:00-21:00)</p>

          <p>
            สมัครพัฒนาผลงานเข้าแข่ง NSC-2025 ได้ทักษะสำคัญ
            รางวัลและโควต้าเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ
          </p>
         
        </div>
        <hr />
        <div className="course-links">
          <div className="flex">
          <h3>{price}</h3>
          <a href="#">Book</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;
