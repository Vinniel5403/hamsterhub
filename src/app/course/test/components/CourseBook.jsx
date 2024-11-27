import React from "react";
import Link from "next/link";
import "./CourseBook.css";
function CourseBook() {
  return (
    <div className="course-book">
      <div className="course-name">
        <img
          src="https://hamsterhub.co/asset/image/course/icon/GP.png"
          alt=""
        />
        <h1>National Project</h1>
        <p>เริ่ม 8 ม.ค. เวลา:19:00-21:00</p>
        <h3>฿19,990</h3>
        <hr />
      </div>

      <Link href="#">Book</Link>
    </div>
  );
}

export default CourseBook;
