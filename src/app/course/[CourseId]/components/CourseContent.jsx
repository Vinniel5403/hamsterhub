import React from "react";
import "./CourseContent.css";
import Image from "next/image";

function CourseContent({ content,courseDetail  }) {
  const {   content_title, content_description,  content_img, content_img_mobile, img_description, content_detail } = content;
  const { name }  = courseDetail;

  return (
    <div className="course-content">
      <div className="content-text">
        <h3>{content_title}</h3>
        <p>
          {content_description}
        </p>
        
      </div>
      <div className="course-img">
      <Image
        src={content_img}
       
        alt={name}
        width={1200}
        height={1200}
        id="content-img-desktop"
        priority
      />
      <Image
        src={content_img_mobile}
        alt={name}
        width={1200}
        height={1200}
        id="content-img-mobile"
        priority
      />

      <p>
        {img_description}
        </p>
        </div>
      <div className="course-item">
      
        <ul>
          
          {content_detail.map((item, index) => (
            <li key={index}>
              <h4>{item.header}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseContent;
