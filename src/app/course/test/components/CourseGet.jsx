import React from "react";
import "./CourseGet.css";
import Image from "next/image";
import Link from "next/link";

function CourseGet() {
  return (
    <div className="course-get">
     

      <div className="course-get-text">
        
      <h1 id="coursegettext">สิ่งที่จะได้รับ</h1>
        <ul>
          
          <li>
            <h3>ฝึกกับผู้เชี่ยวชาญ</h3>
            <p>
              ฝึกกับทีมงานที่เข้าชิง 7 ผลงานกับเพื่อนๆ พี่ๆ
              ที่ชอบแนวเดียวกันแบบสนุก
            </p>
          </li>
          <li>
            <h3>ผลงาน เข้ารอบ Port </h3>
            <p>มีน้ำหนักที่จะเข้าวิศวะคอมฯ มหาวิทยาลัยชั้นนำ</p>
          </li>
          <li>
 
            <h3>เข้าแข่งขันรายการระดับประเทศ</h3>
            <p> up ประสบการณ์เทพๆ ได้ฝึกทำงานเป็นทีม ได้แก้ปัญหาด้วยตัวเอง พร้อมเพื่อนๆ</p>
          </li>
          <li>
            <h3>และอีกมากมายที่น้องจะได้เปรียบ</h3>
          </li>
        </ul>
      </div>
      <Link href="/course/book"></Link>
    </div>
  );
}

export default CourseGet;
