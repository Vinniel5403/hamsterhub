import React from "react";
import "./CourseGet.css";
import Image from "next/image";
import Link from "next/link";

function CourseGet() {
  return (
    <div className="course-get">
     
     <Image
        src="/assets/test2.png"
        alt="National software"
        width={1200}
        height={1200}
      />
       <h3 id="coursegettext">สิ่งที่จะได้รับ</h3>
      <div className="course-get-text">
        
     
        <ul>
          
          <li>
            <h5>ฝึกกับผู้เชี่ยวชาญ</h5>
            <p>
              ฝึกกับทีมงานที่เข้าชิง 7 ผลงานกับเพื่อนๆ พี่ๆ
              ที่ชอบแนวเดียวกันแบบสนุก
            </p>
          </li>
          <li>
            <h5>ผลงาน เข้ารอบ Port </h5>
            <p>มีน้ำหนักที่จะเข้าวิศวะคอมฯ มหาวิทยาลัยชั้นนำ</p>
          </li>
          <li>
 
            <h5>เข้าแข่งขันรายการระดับประเทศ</h5>
            <p> up ประสบการณ์เทพๆ ได้ฝึกทำงานเป็นทีม ได้แก้ปัญหาด้วยตัวเอง พร้อมเพื่อนๆ</p>
          </li>
          <li>
            <h5>และอีกมากมายที่น้องจะได้เปรียบ</h5>
          </li>
        </ul>
      </div>
      <Link href="/course/book"></Link>
    </div>
  );
}

export default CourseGet;
