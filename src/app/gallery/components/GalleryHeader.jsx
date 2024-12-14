'use client';
import React from "react";
import "./GalleryHeader.css";

function GalleryHeader() {
  return (
    <div className="galleryHeader">
      <div className="galleryHeader-text">
        <h1>Gallery</h1>
        <p>มาส่องผลงานของน้องๆใน Hamster Hub</p>
      </div>
      
      <div className="galleryHeader-header">

        <h2>
        รวมส่วนหนึ่งของผลงาน ที่สร้างสรรค์โดยชาว Hamster
        </h2>
 
      </div>
    </div>
  );
}

export default GalleryHeader;
