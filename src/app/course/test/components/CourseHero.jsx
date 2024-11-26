import React from "react";
import "./CourseHero.css";
import Image from "next/image";
function CourseHero() {
  return (
    <div className="course-hero">
      <Image
        src="/assets/np.png"
        alt="National Project"
        width={1920}
        height={1080}
      />

      <div className="course-overlay">
        <div className="course-text">
          <h1>National Project</h1>
          <h2>Season 2</h2>
          <p>เปิดโอกาสให้น้องๆ ทั่วประเทศ สามารถสมัครเข้าร่วมฝึกฝนทักษะ พัฒนาผลงานร่วมกับทีมงาน Hamster Hub เข้าแข่งในรายการ National Software Contest 2025 ได้ทั้งทักษะสำคัญ รางวัลและโควต้าเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ</p>
        </div>
        <div className="course-links">
          <a href="#">Book</a>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;
