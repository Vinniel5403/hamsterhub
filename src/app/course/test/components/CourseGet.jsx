import React from "react";
import "./CourseGet.css";
import Image from "next/image";


function CourseGet() {
  // ข้อมูลทั้งหมดเก็บใน array
  const courseData = [
    {
 
      title: "👨‍🏫 ฝึกกับผู้เชี่ยวชาญ",
      description: "ฝึกกับทีมงานผู้ปั้นน้องๆ ที่ได้เข้ารอบชิง 7 ผลงาน ใน NSC-2024",
    },
    {
     
      title: "📂 ผลงาน เข้ารอบ Portfolio",
      description: "ผลงานที่มั่นใจเข้ารอบ Port + ฝีมือระดับน้องๆ วิศวะคอมฯ",
    },
    {
    
      title: "🏆 เข้าแข่งขันรายการระดับประเทศ",
      description: "เข้าร่วมแข่งขันรายการที่เลือกสรร up ประสบการณ์เทพๆ",
    },
    {
 
      title: "🎉 ฝึกทำงานเป็นทีม",
      description: "ฝึกทำงานเป็นทีม ได้แก้ปัญหาพร้อมเพื่อนๆ",
    },
    {
 
      title: "🎉 ทักษะสำคัญ",
      description: "ทักษะสำคัญในโลกเทคโนโลยีที่ทำให้น้องได้เปรียบ",
    },
    
  ];

  return (
    <div className="course-get">
     <video controls src="/assets/WhoWeAre.mp4"></video>
      <h3 id="coursegettext">🎁 สรุปสิ่งที่จะได้จากโครงการ National Project 2025</h3>
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
