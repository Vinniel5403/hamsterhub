import React from "react";
import "./CourseGet.css";
import Image from "next/image";
import Link from "next/link";

function CourseGet() {
  return (
    <div className="course-get">
      <div className="course-get-container">
      <Image
          src="/assets/np2.png"
          alt="NationalProject"
          className="course-section"
          width={1202}
          height={676}
        />
        <ul className="course-section">
          <h1>สิ่งที่จะได้รับ</h1>
          <li>
            <p> ได้ฝึกกับทีมงานผู้สร้างน้องๆ ที่เข้ารอบชิง NSC-2024 7 ผลงาน</p>
          </li>
          <li>
            <p>ได้พูดคุยกับเพื่อนๆ พี่ๆ ที่ชอบแนวเดียวกัน ในบรรยากาศสนุกสนาน</p>
          </li>
          <li>
            <p>ได้ผลงานที่มั่นใจได้รอบ Port + ฝีมือระดับน้องๆ วิศวะคอมฯ</p>
          </li>
          <li>
            <p>ได้เข้าร่วมแข่งขันรายการที่เลือกสรร up ประสบการณ์เทพๆ</p>
          </li>
          <li>
            <p>ได้ฝึกทำงานเป็นทีม ได้แก้ปัญหาด้วยตัวเอง พร้อมเพื่อนๆ</p>
          </li> 
          <li>
            <p>และอื่นๆ อีกมากมายที่ Hamster Hub ให้น้องได้เปรียบ</p>
          </li>
        </ul>

        
      
      
      </div>
      <Link href="/course/book"></Link>
    </div>
  );
}

export default CourseGet;
