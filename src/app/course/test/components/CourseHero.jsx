import React from "react";
import "./CourseHero.css";
import Image from "next/image";

function CourseHero({ cover, name, description, price, date }) {
  return (
    <div className="course-hero">
      <div className="course-hero-img">
      <Image src={cover} alt={name} width={1920} height={1080} />

      <div className="course-header">
        <p>ภายใน 15 ธันวาคมนี้ใช้รหัสผู้แนะนำ "2025" ได้ราคาพิเศษ</p>
      </div>
      <div className="course-overlay">
        <div className="course-text">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      </div>
      <div className="course-hero-buttom">
        <div className="course-price">
          <p> 8 ม.ค. 68 - 22 ก.ย. 68 (จันทร์, พฤหัส 19:00-21:00)</p>

          <h3>{price}</h3>
        </div>
        <hr />
        <div className="course-links">
          <p>
          "ความสนุก" เป็นสำคัญและต่อเนื่อง ทะลายขีดจำกัดของน้อง พัฒนาทักษะสู่ผลงานระดับประเทศ
          </p>{" "}
          <a href="#">Book</a>
        </div>
      </div>
      <div className="course-hero-buttom-mobile">
        <div className="course-price">
        <p>
            สมัครพัฒนาผลงานเข้าแข่ง NSC-2025 ได้ทักษะสำคัญ
            รางวัลและโควต้าเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ
          </p>
          <hr />
          
          <p> 8 ม.ค. 68 - 22 ก.ย. 68 </p>
          <p>(จันทร์, พฤหัส 19:00-21:00)</p>
        </div>
       
        <div className="course-links">

          <h3>{price}</h3>
          <a href="#">Book</a>

        </div>
      </div>
    </div>
  );
}

export default CourseHero;
