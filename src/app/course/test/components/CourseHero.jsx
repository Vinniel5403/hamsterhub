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
          <p>กิจกรรมสุดพิเศษที่ไม่เคยจัดมาเลยในรอบปี เปิดพื้นที่ให้พวกเราได้แสดงฝีมือ ทั้งการออกแบบ การเขียนโปรแกรม และการสร้างเกมสนุกๆ ใน 60 นาที ผู้ชนะจะได้เผชิญหน้ากับแชมป์จากรายการต่างๆ เพื่อชิงรางวัลใหญ่ประจำปี</p>
        </div>
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
