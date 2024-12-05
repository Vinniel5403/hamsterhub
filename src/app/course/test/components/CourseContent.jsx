import React from "react";
import "./CourseContent.css";
import Image from "next/image";

function CourseContent() {
  const CourseData = [
    {
      header: "1 Conceptual Design",
      content: "ออกแบบแนวคิดที่แตกต่าง หรือมีประโยชน์ชัดเจน นำไปสู่ชัยชนะร่วมกับผู้เชี่ยวชาญ",
  },
  {
      header: "2 Personal Coach",
      content: "เจาะลึกถึงจุดอ่อนและจุดแข็งของทีมงานทุกคน และปรับแนวการพัฒนาให้เข้ากับศักยภาพ",
  },
  {
      header: "3 Prototype",
      content: "สร้างต้นแบบเพื่อเก็บประสบการณ์การใช้งานและความคิดเห็นในกลุ่มผู้ทดสอบ",
  },
  {
      header: "4 Simulation",
      content: "จําลองสถานการณ์ให้เหมือนจริง ก่อนจะลงพื้นที่ทดสอบจริง",
  },
  {
      header: "5 UX/UI Design",
      content: "ออกแบบประสบการณ์ที่ดีที่สุดเพื่อให้ประทับใจผู้ใช้งาน",
  },
  {
      header: "6 เลือกเทคโนโลยีที่เหมาะกับตัวผลงาน",
      content: "เพื่อความเร็วการพัฒนาและคุณภาพผลงาน",
  },
  {
      header: "7 เข้าร่วมการแข่งโชว์ผลงานให้โลกรู้",
      content: "ในระการระดับประเทศขึ้นไปเช่น NSC, YSC, Thailand Game Show, Global Game Jam, The New Gen และอื่น",
  },
  {
      header: "8 Agile Techniques",
      content: "เทคนิคค่อยๆ พัฒนาทีละส่วนและเก็บรายละเอียดแบบมืออาชีพ",
  },
  {
      header: "9 พัฒนาผลงานแล้วนำขึ้น Store",
      content: "เก็บรายละเอียดจนสมบูรณ์ เข้าถึงผู้คนทั้งโลกและอาจสร้างรายได้ด้วย",
  }

  ];

  return (
    <div className="course-content">
      <div className="content-text">
        <h3>กระบวนการพัฒนาโปรเจค</h3>
      
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
        src="https://media.discordapp.net/attachments/1288114105705828404/1314149226879385640/NSC_3.png?ex=6752b857&is=675166d7&hm=43a8d0df7c7a04025b12c4f09c0785ebc22ec93bfa5e963bf85ec122f010cf6d&=&format=webp&quality=lossless&width=676&height=676"
        alt="National software"
        width={400}
        height={400}
      />
    </div>
  );
}

export default CourseContent;
