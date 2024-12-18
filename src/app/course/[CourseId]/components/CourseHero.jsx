import React from "react";
import "./CourseHero.css";
import Image from "next/image";

function CourseHero({ courseData }) {
  const { cover, name, description, price, date,promotion, definition, book_link } = courseData; 

  return (
    <div className="course-hero">
      <div className="course-hero-img">
        <Image src={cover} alt={name} width={1920} height={1080} priority />

        <div className="course-header">
          <p>
           {promotion}
          </p>
        </div>
        <div className="course-overlay">
          <div className="course-text">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
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

export default CourseHero;
