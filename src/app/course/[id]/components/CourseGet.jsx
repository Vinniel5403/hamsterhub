import React from "react";
import "./CourseGet.css";
import Image from "next/image";

function CourseGet({ get }) {
  const { get_title, get_list, get_video } = get;

  return (
    <div className="course-get">
      <video controls src={get_video}></video>
      <h3 id="coursegettext">{get_title}</h3>
      <div className="course-get-text">
        <ul>
          {get_list.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              {item.description && <p>{item.description}</p>}
            </li>
          ))}
        </ul>
      </div>
   
    </div>
  );
}

export default CourseGet;
