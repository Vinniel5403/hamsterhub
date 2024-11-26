import React from "react";
import "./CourseContent.css";

function CourseContent() {
  const CourseData = [
    {
      header: "โครงการ National Project 2025  🏆",
      content:
        "เปิดโอกาสให้น้องๆ ทั่วประเทศ สามารถสมัครเข้าร่วมฝึกฝนทักษะ พัฒนาผลงานร่วมกับทีมงาน Hamster Hub เข้าแข่งในรายการ National Software Contest 2025 ได้ทั้งทักษะสำคัญ รางวัลและโควต้าเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ",
    },
    {
      header: "ทำไมต้องฝึกสร้างผลงาน💻 ?",
      content:
        "เปิดโอกาสให้น้องๆ ทั่วประเทศ สามารถสมัครเข้าร่วมฝึกฝนทักษะ พัฒนาผลงานร่วมกับทีมงาน Hamster Hub เข้าแข่งในรายการ National Software Contest 2025 ได้ทั้งทักษะสำคัญ รางวัลและโควต้าเข้าศึกษาต่อในมหาวิทยาลัยชั้นนำ",
    },
    {
      header: "สอนอะไรบ้าง?",
      content:
        "ราสอนเฉพาะที่น้องจะได้ใช้งานจริง🦾 โดยเฉพาะเรื่องยากในวิศวะฯ ไว้ก่อน เช่นการเขียนโปรแกรม การแก้ bug และการออกแบบซอฟต์แวร์ที่ดี ตามหลักของ ⚙ Software Engineering ⚙ และออกแบบเชิงวัตถุ (Object Oriented Design) ยังมีเทคนิคอีกหลายอย่างที่น้องควรได้ฝึกเพื่อความได้เปรียบ",
    },
    {
      header: "สอนอย่างไรล่ะ ถ้าน้องไม่มีพื้นฐานเรียนได้ไหม?",
      content:
        "เริ่มที่ตัวน้องก่อนเลย เพราะเป็นการสอนสด เราจะเห็นจุดเด่นได้ชัด ได้ฝึกฝนจุดเด่นของน้องจนมั่นใจ แล้วค่อยๆ ปรับจุดอ่อน ฝึกให้น้องได้เห็นตัวเอง แก้ปัญหาด้วยตัวเอง โดยการ inspire ให้เห็นความสนุก🤣 ของการสร้างคุณค่าให้ตนเอง☝ สร้างประโยชน์ให้คนอื่น",
    },
    {
        header: "คุ้มไหม  🙋‍♂️?",
        content: "โครงการนี้มีระยะเวลา 9 เดือน สัปดาห์ละ 2 วัน วันละ 2 ชม. รวม 150 ชั่วโมง สอนสดด้วยทีมงานมืออาชีพ ที่สร้างผลงานระดับเข้ารอบ Port วิศวะคอมฯ มาแล้ว 3 ปี ทั้งสถาบันเทคโนโลยีพระจอมเกล้าบางมด ลาดกระบัง พระนครเหนือ จุฬาลงกรณ์ เกษตร ธรรมศาสตร์ มหิดล สงขลานครินทร์ เชียงใหม่ ขอนแก่น และมหาวิทยาลัยระดับท๊อปของสหรัฐอเมริกาและแคนาดา",
    }
  ];

  return (
    <div className="course-content">
      {CourseData.map((item, index) => (
        <div className="course-item" key={index}>
          <h2>{item.header}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseContent;
