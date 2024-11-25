import React from "react";
import "./CourseVideo.css";

function CourseVideo() {
  return (
    <div className="course-video">
      <h1>คุณจะได้พบกับ</h1>
      <video
        src="https://hamsterhub.co/asset/image/course/gallery/Beam.mp4"
        alt="test"
        autoPlay
        muted
        width={800}
        height={800}
      ></video>
      <div className="course-vid-text">
        <h1>Lorem ipsum dolor sit.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit,
        nesciunt quibusdam aspernatur numquam hic distinctio dolores rem, non
        perspiciatis odit ut ipsam! Eligendi totam assumenda, reiciendis est
        ipsum eveniet commodi doloremque beatae corrupti consectetur cum
        necessitatibus, perferendis nam vero?
      </p>
      </div>
    </div>
  );
}

export default CourseVideo;
