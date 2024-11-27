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
      image: "https://media.discordapp.net/attachments/1288114105705828404/1308195585949696051/api.png?ex=6746f2d4&is=6745a154&hm=7c18d752f05630c4e0047524134b8c937157a7741316f86e64ef2e8bc59f2110&=&format=webp&quality=lossless&width=1183&height=676",
      content: "#",
    },
    {
      title: "",
      description: "",
      image: "https://media.discordapp.net/attachments/1288114105705828404/1308196130915487806/api.png?ex=6746f356&is=6745a1d6&hm=c01b58859d46ad4c100097e7d3f7d44073432eb8adf59b4c2ccf4349ac0c5d14&=&format=webp&quality=lossless&width=550&height=311",
      content: "#",
    },
    {
      title: "",
      description: "",
      image: "https://media.discordapp.net/attachments/1288114105705828404/1308637170403246182/image.png?ex=674693d6&is=67454256&hm=0344b16e1bdf5c0d212e850c51ea212289f23de7051775765250ec8d10e67fc1&=&format=webp&quality=lossless&width=1202&height=676",
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