import React from "react";
import "./CourseVideo.css";

function CourseVideo() {
  return (
    <div className="course-video">
      <div className=" course-section">
        <video
          src="https://hamsterhub.co/asset/image/course/gallery/Beam.mp4"
          alt="test"
          autoPlay
          muted
          width={800}
          height={800}
          className="course-section"
        ></video>
      </div>
      <div className=" course-section">
        <div className="course-section-text">
          <h1>คุณจะได้พบกับ</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            atque eaque eos inventore corrupti minus. Nesciunt debitis ea animi.
            Vero fugiat vel odio mollitia. Doloribus aliquid placeat incidunt ad
            nulla nostrum voluptates quae ex illum. Nam delectus dolor sapiente
            itaque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseVideo;
