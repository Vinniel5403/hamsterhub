import React from "react";
import "./Description.css";
import Image from "next/image";

function Description() {
  return (
    <div className="description">
      <div className="left-panel">
        <div className="flex">
          <Image
            src="/assets/test1.png"
            alt="left-panel"
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div className="right-panel">
        <Image
          src="/assets/test2.png"
          width={1200}
          height={1200}
          alt="right-panel"
        />
        {/* <div className="des-overlay">
          <h2>test</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="des-links">
            <a href="#">test</a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Description;
