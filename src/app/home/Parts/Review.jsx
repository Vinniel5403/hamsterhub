"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Review.css";
import Image from "next/image";

function Review() {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      title: null,
      description: null,
      image: "/assets/gallery-tcas.jpg",
      content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
    },
    {
      title: "วิศวะ ม.เกษตร",
      description: "Ohm's Project",
      image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
      content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
      content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
    },
    {
      title: "Developer",
      description: "Safe, From gamer become ",
      image: "https://nj.dekhub.com/public/imgs/gallery-Safe.png",
      content: "https://nj.dekhub.com/public/videos/gallery-Safe.mp4",
    },
    
    {
      title: "วิศวะคอมฯ บางมด",
      description: "Fluke's Game Project",
      image: "https://nj.dekhub.com/public/imgs/gallery-Fluke.png",
      content: "https://nj.dekhub.com/public/videos/gallery-Fluke.mp4",
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
        ? (activeIndex - 1 + reviews.length) % reviews.length
        : (activeIndex + 1) % reviews.length;
    scrollToSlide(newIndex);
  };

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];
      video.play(); // Play the video
    }
  };
  
  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
      video.pause(); // Pause the video
    }
  };
  

  return (
    <section className="review">
      <div className="slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="slide"
            ref={index === 0 ? slideRef : null}
          >
            <Image
              src={review.image}
              alt={`Slide ${index + 1}`}
              width={800} 
              height={800} 

              priority={index === 0} 
            />
            <video
              preload="auto"  

              playsInline
              src={review.content}
              ref={el => videoRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            ></video>
            <div className="review-overlay">
              <p>{review.description}</p>
              <h1>{review.title}</h1>
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

export default Review;