import React from "react";
import "./CourseTag.css";
import Link from "next/link";

function CourseTag() {
  return (
    <div className="course-tag">
      <div className="course-name">
        
        <h1>National Project</h1>
        <p>เริ่ม 8 ม.ค. เวลา:19:00-21:00</p>
        <h3>฿19,990</h3>
        <hr />
      </div>
      <div className="tag">
        <p>ระยะเวลา</p>
        <h3>150 ชม.</h3>
      </div>
      <Link href="#">Book</Link>
    </div>
  );
}

export default CourseTag;
