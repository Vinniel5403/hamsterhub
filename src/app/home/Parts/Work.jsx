import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./Work.css";

function Work() {
  return (
    <div className="work">
      <div className="work-text">
        <h2 className="blue">ตัวอย่างผลงานของผู้เรียน</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum
          dolore nam nisi possimus omnis qui adipisci sunt repellendus deserunt.
        </p>
        <a href="https://www.facebook.com/HamsterHubThailand" target="_blank" className="trans-btn">
          <FaFacebook className="icon" />
          เพิ่มเติม
        </a>
      </div>
      <div className="work-vid"> 
        <video muted autoPlay loop playsInline>
          <source
            src="https://hamsterhub.co/asset/image/Songkhla.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Work;
