import React from "react";
import "./CourseContent.css";
import Image from "next/image";

function CourseContent() {
  const CourseData = [
    {
      header: "Conceptual Design",
      content:
        "ออกแบบแนวคิดที่แตกต่าง หรือมีประโยชน์ชัดเจน นำไปสู่ชัยชนะร่วมกับผู้เชี่ยวชาญ",
    },
    {
      header: "Personal Coach",
      content:
        "เจาะลึกถึงจุดอ่อนและจุดแข็งของทีมงานทุกคน และปรับแนวการพัฒนาให้เข้ากับศักยภาพ",
    },
    {
      header: "Prototype",
      content:
        "สร้างต้นแบบเพื่อเก็บประสบการณ์การใช้งานและความคิดเห็นในกลุ่มผู้ทดสอบ",
    },
    {
      header: "Simulation",
      content: "จําลองสถานการณ์ให้เหมือนจริง ก่อนจะลงพื้นที่ทดสอบจริง",
    },
    {
      header: "UX/UI Design",
      content: "ออกแบบประสบการณ์ที่ดีที่สุดเพื่อให้ประทับใจผู้ใช้งาน",
    },
    {
      header: "เลือกเทคโนโลยีที่เหมาะกับตัวผลงาน",
      content: "เพื่อความเร็วการพัฒนาและคุณภาพผลงาน",
    },
    {
      header: "เข้าร่วมการแข่งโชว์ผลงานให้โลกรู้",
      content:
        "ในระการระดับประเทศขึ้นไปเช่น NSC, YSC, Thailand Game Show, Global Game Jam, The New Gen และอื่น",
    },
    {
      header: "Agile Techniques",
      content: "เทคนิคค่อยๆ พัฒนาทีละส่วนและเก็บรายละเอียดแบบมืออาชีพ",
    },
    {
      header: "พัฒนาผลงานแล้วนำขึ้น Store",
      content:
        "เก็บรายละเอียดจนสมบูรณ์ เข้าถึงผู้คนทั้งโลกและอาจสร้างรายได้ด้วย",
    },
  ];

  return (
    <div className="course-content">
      <div className="content-text">
        <h3>กระบวนการพัฒนาโปรเจค</h3>
        <p>
        กระบวนการพัฒนาโปรเจค
        ใช้หลัก Software Engineering ผนวกเข้ากับประสบการณ์ออกแบบ ส่งมอบโครงการซอฟต์แวร์ขนาดใหญ่ให้บริษัทชั้นนำหลายแห่ง Simplify จนเหลือกระบวนการที่ง่าย แล้วพัฒนาโครงการให้น้องๆ จนได้ผลดีขึ้นมากในปีนี้
        </p>
      </div>
      <div className="course-img">
      <Image
        src="/assets/NSC3.png"
        alt="National software"
        width={1200}
        height={1200}
        id="NSC-img-desktop"
        priority
      />
      <Image
        src="/assets/NSC-mobile.png"
        alt="National software"
        width={1200}
        height={1200}
        id="NSC-img-mobile"
        priority
      />

      <p>
      เริ่มด้วยความสนุก ออกแบบเป้าหมายร่วมกัน พัฒนาเส้นทางพัฒนาสู่การยกระดับผลงานสู่ระดับ Pro ด้วยการคุมคุณภาพทุกขั้นตอน แล้วนำไปใช้ประโยชน์ได้จริง
        </p>
        </div>
      <div className="course-item">
      
        <ul>
          
          {CourseData.map((item, index) => (
            <li key={index}>
              <h4>{item.header}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseContent;
