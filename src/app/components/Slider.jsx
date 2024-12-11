"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

function Slider({ items }) {
    const sliderRef = useRef(null);
    const slideRef = useRef(null);
    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const scrollToSlide = (index) => {
      const slider = sliderRef.current;
      const slideWidth = slideRef.current ? slideRef.current.offsetWidth : 0;
      const slideOffset = slideWidth * index;
      if (slider) {
        slider.scrollTo({
          left: slideOffset,
          behavior: "smooth",
        });
      }
      setActiveIndex(index);
    };
  
    const handleNavigation = (direction) => {
      const newIndex =
        direction === "prev"
          ? (activeIndex - 1 + items.length) % items.length
          : (activeIndex + 1) % items.length;
      scrollToSlide(newIndex);
    };
  
    const handleMouseEnter = (index) => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
    };
  
    const handleMouseLeave = (index) => {
      if (videoRefs.current[index]) {
        const video = videoRefs.current[index];
        video.pause();
        video.currentTime = 0;
      }
    };
  
  return (
    <div className="sliderComponent">
      <div className="slider" ref={sliderRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="slide"
            ref={index === 0 ? slideRef : null}
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={800}
              priority
           
            />
            <video
              preload="auto"
              playsInline
              src={item.content}
              ref={(el) => (videoRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            ></video>
                        <div className="play">
              <FaPlay />
            </div>
            <div className="sliderOverlay">
              <p>{item.subtitle}</p>
              <h1>{item.title}</h1>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
        <button
          id="left-prevSlide-button"
          aria-label="Previous Slide"
          onClick={() => handleNavigation("prev")}
        >
          &#10094;
        </button>
        <button
          id="right-nextSlide-button"
          aria-label="Next Slide"
          onClick={() => handleNavigation("next")}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Slider;
