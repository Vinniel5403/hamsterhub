import React from "react";
import "./CourseOutline.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

function CourseOutline({ timeline }) {
  const { timeline_title, timeline_description, timeline_list, timeline_img } = timeline;
  

  return (
    <div className="course-outline">
       
      <input
        type="checkbox"
        id="timeline-checkbox"
        className="hidden-checkbox"
      />
      <div className="course-timeline">
      <Image src={timeline_img} alt="" width={1600} height={1400} className="outline-img"/>
        <div className="timeline-title">
          <h3> {timeline_title} </h3>
          <p>
           {timeline_description}
          </p>
        </div>

        {timeline_list.map((month, index) => (
          <div
            key={index}
            className={`timeline ${index % 2 === 0 ? "left" : "right"}`}
          >
            <h5>Month {index + 1}</h5>
            <h3>{month.title}</h3>

            <ul>
              {month.topics.map((topic, idx) => (
                <li key={idx}>
                  <p>{topic}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="button-container">
          <label htmlFor="timeline-checkbox" className="checkbox-label">
            <FaChevronDown id="down" />
            <FaChevronUp id="up" />
          </label>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default CourseOutline;
