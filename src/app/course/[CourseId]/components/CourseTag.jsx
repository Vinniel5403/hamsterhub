import React from "react";
import "./CourseTag.css";
import Link from "next/link";

function CourseTag({ courseData }) {
  const {  price, date, definition,book_link } = courseData;
  return (
    <div className="course-tag">
           <div className="course-hero-buttom">
        <div className="course-price">
          <p>{date}</p>
          <h3>{price}</h3>
        </div>
        <hr />
        <div className="course-links">
          <p>
            {definition}
          </p>
          <a href={book_link}>Book</a>
        </div>
      </div>
      <div className="course-hero-buttom-mobile">
        <div className="course-price">
          <p>
            {definition}
          </p>
          <hr />

          <div className="course-price-mobile-wrapper">
            <p>{date}</p>
         
          </div>
        </div>

        <div className="course-links">
          <h3>{price}</h3>
          <a href={book_link}>Book</a>
        </div>
      </div>
    </div>
  );
}

export default CourseTag;
