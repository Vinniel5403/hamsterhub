"use client";
import React, { useRef, useState, useEffect } from "react";
import "./CourseSlider.css";
import Image from "next/image";

function CourseSlider() {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const CourseSliders = [
    {
      title: null,
      description: null,
      image: "https://nj.dekhub.com/public/imgs/header2.png",
      content: "#",
    },
    {
      title: "",
      description: "",
      image: "https://nj.dekhub.com/public/imgs/header3.png",
      content: "#",
    },
    {
      title: "",
      description: "",
      image: "/assets/np.png",
      content: "#",
    },
    
  ];

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
        ? (activeIndex - 1 + CourseSliders.length) % CourseSliders.length
        : (activeIndex + 1) % CourseSliders.length;
    scrollToSlide(newIndex);
  };


  return (
    <section className="CourseSlider">
      <div className="slider" ref={sliderRef}>
        {CourseSliders.map((CourseSlider, index) => (
          <div
            key={index}
            className="slide"
            ref={index === 0 ? slideRef : null}
          >
            <Image
              src={CourseSlider.image}
              alt={`Slide ${index + 1}`}
              width={800} 
              height={800} 

              priority={index === 0} 
            />
            
            <div className="CourseSlider-overlay">
              <p>{CourseSlider.description}</p>
              <h1>{CourseSlider.title}</h1>
            </div>
          </div>
        ))}
      </div>

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
    </section>
  );
}

export default CourseSlider;