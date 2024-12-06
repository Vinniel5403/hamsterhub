import React from "react";
import "./CourseTag.css";
import Link from "next/link";

function CourseTag() {
  return (
    <div className="course-tag">
      <div className="course-tag-desktop">
        <div className="course-price">
          
          <h3>National Project</h3>
          <h3>฿19,990</h3>
        </div>
        <hr />
        <div className="course-links">
        <p> 8 ม.ค. 68 - 22 ก.ย. 68 </p>
          

          <a href="#">Book</a>
        </div>
      </div>
      <div className="course-tag-mobile">
        <div className="course-name">
          <h3>National Project</h3>
          <p>เริ่ม 8 ม.ค. เวลา:19:00-21:00</p>
          <p>ระยะเวลา</p>
          <h4>150 ชม.</h4>
          <hr />
        </div>
        <div className="tag">
        <h3>฿19,990</h3>
        <Link href="#">Book</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseTag;
