import React from "react";
import "./CourseTag.css";
import Link from "next/link";

function CourseTag({ cover, name, description, price, date }) {
  return (
    <div className="course-tag">
    <div className="course-hero-buttom">
        <div className="course-price">
          <p> 8 ม.ค. 68 - 22 ก.ย. 68 (จันทร์, พฤหัส 19:00-21:00)</p>

          <h3>{price}</h3>
        </div>
        <hr />
        <div className="course-links">
          <p>
          &quot;ความสนุก&quot; เป็นสำคัญและต่อเนื่อง ทะลายขีดจำกัดของน้อง พัฒนาทักษะสู่ผลงานระดับประเทศ
          </p>{" "}
          <a href="#">Book</a>
        </div>
      </div>
      <div className="course-hero-buttom-mobile">
        <div className="course-price">
        <p>
          &quot;ความสนุก&quot; เป็นสำคัญและต่อเนื่อง ทะลายขีดจำกัดของน้อง พัฒนาทักษะสู่ผลงานระดับประเทศ
          </p>{" "}
          <hr />
          
          <div className="course-price-mobile-wrapper">
          <p> 8 ม.ค. 68 - 22 ก.ย. 68 </p>
          <p>(จันทร์, พฤหัส 19:00-21:00)</p>
          </div>
        </div>
       
        <div className="course-links">

          <h3>{price}</h3>
          <a href="#">Book</a>

        </div>
      </div>
    </div>
  );
}

export default CourseTag;
