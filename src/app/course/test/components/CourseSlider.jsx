"use client";
import React, { useRef, useState, useEffect } from "react";
import "./CourseSlider.css";
import Image from "next/image";

function CourseSlider() {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const CourseSliders = [
    {
      title: null,
      description: null,
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/446668699_483959664191284_6159870530134804904_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFDNR7hUJdAb1DfYgTRH_LOjEjbXFLvrnmMSNtcUu-ueaJuqZuWwZSGPsED-IZXtGZEI9CwYQqqyEWuJ03TElhH&_nc_ohc=9tzuKhW7Yg0Q7kNvgFfId15&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AUzODf8cVwGEpTjKPTAEsvi&oh=00_AYC1ibGNXYj7ZueGd8z9JlZ5qlkmuu1_DZaOMYBLpeL-Bw&oe=6745188D",
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
        ? (activeIndex - 1 + CourseSliders.length) % CourseSliders.length
        : (activeIndex + 1) % CourseSliders.length;
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
            <video
              preload="auto"

              src={CourseSlider.content}
              ref={el => videoRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            ></video>
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