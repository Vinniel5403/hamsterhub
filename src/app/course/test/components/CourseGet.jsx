import React from "react";
import "./CourseGet.css";
import Image from "next/image";
import Link from "next/link";

function CourseGet() {
  return (
    <div className="course-get">
      
          <Image
            src="https://media.discordapp.net/attachments/1057987880653426699/1312341989127360552/beamNSC.jpg?ex=674ccdf8&is=674b7c78&hm=c429f6dba2d7c4c7a8fc5d995c8f05064080cd6f8a6aae10d3b8386324e3059b&=&format=webp&width=1202&height=676"
            alt="NationalProject"
          
            width={1600}
            height={1280}
          />

        <div className="course-get-text">
          <ul>
            <h1>สิ่งที่จะได้รับ</h1>

            <li>
              <p>
                {" "}
                ได้ฝึกกับทีมงานผู้สร้างน้องๆ ที่เข้ารอบชิง NSC-2024 7 ผลงาน
              </p>
            </li>
            <li>
              <p>
                ได้พูดคุยกับเพื่อนๆ พี่ๆ ที่ชอบแนวเดียวกัน ในบรรยากาศสนุกสนาน
              </p>
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
