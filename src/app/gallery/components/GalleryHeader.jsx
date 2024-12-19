import React from "react";
import "./GalleryHeader.css";

function GalleryHeader() {
  return (
    <div className="galleryHeader">
      <video
        src="/assets/Gallery1.mp4"
        className="galleryHeader-desktop"
        autoPlay
        muted
        playsInline
        disablePictureInPicture
      ></video>
      <video
        src="/assets/Gallery-mobile.mp4"
        className="galleryHeader-mobile"
        autoPlay
        muted
        playsInline
        disablePictureInPicture
      ></video>
      <div className="galleryHeader-header">
        <h2>รวมส่วนหนึ่งของผลงาน ที่สร้างสรรค์โดยชาว Hamster</h2>
      </div>
    </div>
  );
}

export default GalleryHeader;
