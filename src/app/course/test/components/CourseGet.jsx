import React from "react";
import "./CourseGet.css";
import Image from "next/image";
import Link from "next/link";

function CourseGet() {
  return (
    <div className="course-get">
      <Image
        src="https://media.discordapp.net/attachments/1057987880653426699/1306221997050822686/IMG_6833.png?ex=674cf3c8&is=674ba248&hm=8cca258e95bb4214973504eec751b7f0e48a37dbd89f715ba52b49af4552f4f2&=&format=webp&quality=lossless&width=1014&height=676"
        alt="NationalProject"
        width={1600}
        height={1280}
      />

      <div className="course-get-text">
        <ul>
          <h1>สิ่งที่จะได้รับ</h1>
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
