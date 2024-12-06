import React from "react";
import "./CourseTag.css";
import Link from "next/link";

function CourseTag() {
  return (
    <div className="course-tag">
      <div className="course-name">
        
        <h3>National Project</h3>
        <p>เริ่ม 8 ม.ค. เวลา:19:00-21:00</p>
        {/* <p>ระยะเวลา</p> */}
        <h5>150 ชม.</h5>
        <hr />
      </div>
      <div className="tag">
      <h5>฿19,990</h5>
    
      </div>
      <Link href="#">Book</Link>
    </div>
  );
}

export default CourseTag;
