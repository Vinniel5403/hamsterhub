import React from "react";
import "./CourseContent.css";
import Image from "next/image";

function CourseContent() {
  const CourseData = [
    {
      header: "สอนอะไรบ้าง?",
      content:
        "เราสอนเฉพาะที่น้องจะได้ใช้งานจริง โดยเฉพาะเรื่องยากในวิศวะฯ ไว้ก่อน เช่นการเขียนโปรแกรม การแก้ bug Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni neque",
      video: null,
    },
    {
      header: "ทำไมต้องฝึกสร้างผลงาน ?",
      content:
        "เปิดโอกาสให้น้องๆ ทั่วประเทศ สามารถสมัครเข้าร่วมฝึกฝนทักษะ พัฒนาผลงานร่วมกับทีมงาน Hamster Hub Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      video: null,
    },
  ];

  return (
    <div className="course-content">
      <div className="content-text">
        <h2>โครงการ National Project 2025 </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni neque,
          consequuntur rerum rem aut reprehenderit
        </p>
      </div>
      {CourseData.map((item, index) => (
        <div className="course-item" key={index}>
          <ul>
            <li>
              <h3>{item.header}</h3>
            </li>

              <p>{item.content}</p>

          </ul>
        </div>
      ))}
      <Image
        src="/assets/hamsterimg1.png"
        alt="National software"
        width={400}
        height={400}
      />
    </div>
  );
}

export default CourseContent;
