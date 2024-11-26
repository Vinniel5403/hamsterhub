import React from "react";
import "./CourseVideo.css";

function CourseVideo() {
  return (
    <div className="course-video">
      <h1>คุณจะได้พบกับ</h1>
      <div className="course-video-container">
        <video
          src="https://hamsterhub.co/asset/image/course/gallery/Beam.mp4"
          alt="test"
          autoPlay
          muted
          width={800}
          height={800}
          className="course-section"
        ></video>
        <div className=" course-section">
          <h1>สอนอะไรบ้าง?</h1>
          <p>
            เราสอนเฉพาะที่น้องจะได้ใช้งานจริง🦾 โดยเฉพาะเรื่องยากในวิศวะฯ
            ไว้ก่อน เช่นการเขียนโปรแกรม การแก้ bug และการออกแบบซอฟต์แวร์ที่ดี
            ตามหลักของ ⚙ Software Engineering ⚙ และออกแบบเชิงวัตถุ (Object
            Oriented Design)
            ยังมีเทคนิคอีกหลายอย่างที่น้องควรได้ฝึกเพื่อความได้เปรียบ
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseVideo;
