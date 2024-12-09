import React from "react";
import "./CourseGet.css";
import Image from "next/image";


function CourseGet() {
  // ข้อมูลทั้งหมดเก็บใน array
  const courseData = [
    {
 
      title: "👨‍🏫ฝึกกับผู้เชี่ยวชาญ",
      description: "ฝึกกับทีมงานที่เข้าชิง 7 ผลงานกับเพื่อนๆ พี่ๆ ที่ชอบแนวเดียวกันแบบสนุก",
    },
    {
     
      title: "📂ผลงาน เข้ารอบ Portfolio",
      description: "มีน้ำหนักที่จะเข้าวิศวะคอมฯ มหาวิทยาลัยชั้นนำ",
    },
    {
    
      title: "🏆เข้าแข่งขันรายการระดับประเทศ",
      description: "up ประสบการณ์เทพๆ ได้ฝึกทำงานเป็นทีม ได้แก้ปัญหาด้วยตัวเอง พร้อมเพื่อนๆ",
    },
    {
 
      title: "🎉และอีกมากมายที่น้องจะได้เปรียบ",
      description: null, // ไม่มีคำอธิบาย
    },
    
  ];

  return (
    <div className="course-get">
     <video autoPlay controls src="/assets/WhoWeAre.mp4"></video>
      <h3 id="coursegettext">สิ่งที่จะได้รับ</h3>
      <div className="course-get-text">
        <ul>
          {courseData.map((item, index) => (
            <li key={index}>

              <h4>{item.title}</h4>
              {item.description && <p>{item.description}</p>}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default CourseGet;
