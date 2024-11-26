import React from "react";
import "./CourseTag.css";

function CourseTag() {
  return (
    <div className="course-tag">
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
