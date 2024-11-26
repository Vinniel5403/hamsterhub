import React from "react";
import "./CourseTag.css";

function CourseTag() {
  return (
    <div className="course-tag">
      <div className="course-name">
        <img src="https://hamsterhub.co/asset/image/course/icon/GP.png" alt="" />
        <h1>National Project</h1>
        <p>เริ่ม 8 ม.ค. เวลา:19:00-21:00</p>
        <h3>฿19,990</h3>
        <hr />
      </div>
      <div className="tag">
        <p>อายุ</p>
        <h3>13-22 ปี</h3>
      </div>
      <div className="tag">
        <p>หมวดหมู่</p>
        <h3>new, Project Development</h3>
      </div>
      <div className="tag">
        <p>ระยะเวลา</p>
        <h3>150 ชม.</h3>
      </div>
    </div>
  );
}

export default CourseTag;
