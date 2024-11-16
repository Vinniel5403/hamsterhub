"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Review.css";

function Review() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      title: "Lorem Test Page 1",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://via.placeholder.com/800x600?text=Slide+1",
    },
    {
      title: "Lorem Test Page 2",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://via.placeholder.com/800x600?text=Slide+2",
    },
    {
      title: "Lorem Test Page 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://via.placeholder.com/800x600?text=Slide+3",
    },
    {
      title: "Lorem Test Page 4",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://via.placeholder.com/800x600?text=Slide+4",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://via.placeholder.com/800x600?text=Slide+5",
    },
  ];

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.offsetWidth; // Width of a single slide
      const slideOffset = slideWidth * index; // Calculate target position
      slider.scrollTo({
        left: slideOffset,
        behavior: "smooth",
      });
    }
    setActiveIndex(index); // Update the active index
  };

  useEffect(() => {
    const autoScroll = () => {
      const nextIndex = (activeIndex + 1) % reviews.length; // Move to next slide
      scrollToSlide(nextIndex);
    };

    const intervalId = setInterval(autoScroll, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [activeIndex, reviews.length]);

  const handleNavigation = (direction) => {
    const newIndex =
      direction === "prev"
        ? (activeIndex - 1 + reviews.length) % reviews.length
        : (activeIndex + 1) % reviews.length;
    scrollToSlide(newIndex);
  };

  return (
    <section className="review">
      <div className="slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <div key={index} className="slide">
            <img src={review.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider-nav">
        <button
          aria-label="Previous Slide"
          onClick={() => handleNavigation("prev")}
        >
          &#10094;
        </button>
        <button
          aria-label="Next Slide"
          onClick={() => handleNavigation("next")}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Review;
