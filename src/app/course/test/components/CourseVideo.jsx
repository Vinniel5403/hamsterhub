import React from "react";
import "./CourseVideo.css";

function CourseVideo() {
  return (
    <div className="course-video">
      <h1>คุณจะได้พบกับ</h1>
      <video
        src="https://nj.dekhub.com/public/videos/gallery-Ohm.mp4"
        alt="test"
        autoPlay
        muted
        width={800}
        height={800}
      >test</video>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit,
        nesciunt quibusdam aspernatur numquam hic distinctio dolores rem, non
        perspiciatis odit ut ipsam! Eligendi totam assumenda, reiciendis est
        ipsum eveniet commodi doloremque beatae corrupti consectetur cum
        necessitatibus, perferendis nam vero?
      </p>
    </div>
  );
}

export default CourseVideo;
