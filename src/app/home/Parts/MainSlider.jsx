"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import "./MainSlider.css";

function MainSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      title: "2024 Project",
      description: "ผลงานของนักเรียนของเรา",
      type: "video",
      content: "./assets/LoopTest1.mp4",
      image: "https://hamsterhub.co/asset/image/course/cover/NP2025.png",
      link: "#",
    },
    {
      title: "Game Hackathon & Hamster Hub Awards 2024",
      description: "กิจกรรมสุดพิเศษที่ไม่เคยจัดมาเลยในรอบปี เปิดพื้นที่ให้พวกเราได้แสดงฝีมือ ทั้งการออกแบบ การเขียนโปรแกรม และการสร้างเกมสนุกๆ ใน 60 นาที ผู้ชนะจะได้เผชิญหน้ากับแชมป์จากรายการต่างๆ เพื่อชิงรางวัลใหญ่ประจำปี",
      type: "image",
      content: "./assets/xenoblade.png",
      image: "./assets/xenoblade.png",
      link: "#",
    },
    {
      title: "Lorem",
      description: "Lorem ipsum do sit amet consectetur.",
      type: "image",
      content: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/270119393_947128242572554_7424003175334953487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfufRDLjnzw96IJPD0KlM-Dpi-j7Bl9Y4OmL6PsGX1jpQ5T_UqTiZQhp_vOe2C73DHNQsDQ-8Np5oeiZcTyk15&_nc_ohc=leoTycZYM9cQ7kNvgE91g1W&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A8bVfwOXF8JHilzsI-MxQG4&oh=00_AYByJloc66Ts7Ymk38pvG4l1SyyNnufBdiZsxCRRxFeMsw&oe=673E58F8",
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/270119393_947128242572554_7424003175334953487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfufRDLjnzw96IJPD0KlM-Dpi-j7Bl9Y4OmL6PsGX1jpQ5T_UqTiZQhp_vOe2C73DHNQsDQ-8Np5oeiZcTyk15&_nc_ohc=leoTycZYM9cQ7kNvgE91g1W&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A8bVfwOXF8JHilzsI-MxQG4&oh=00_AYByJloc66Ts7Ymk38pvG4l1SyyNnufBdiZsxCRRxFeMsw&oe=673E58F8",
      link: "#",
    },
  ];

  const scrollToSlide = useCallback((index) => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.offsetWidth;
      slider.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  }, []);

  // แยก logic การอัพเดท activeIndex ออกมา
  const updateActiveIndex = useCallback((newIndex) => {
    setActiveIndex(newIndex);
    scrollToSlide(newIndex);
  }, [scrollToSlide]);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) return; // ป้องกันการสร้าง interval ซ้ำ
    
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        scrollToSlide(nextIndex);
        return nextIndex;
      });
    }, 116000);
  }, [slides.length, scrollToSlide]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // ใช้ useEffect เดียว
  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, [startAutoSlide, stopAutoSlide]);

  const handleManualSlideChange = useCallback((index) => {
    updateActiveIndex(index);
  }, [updateActiveIndex]);

  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
              {slide.type === "image" ? (
              
                <img src={slide.content} alt={`Slide ${index + 1}`} />
              ) : (
                <video autoPlay loop muted>
                  <source src={slide.content} type="video/mp4" />
                </video>
              )}
              </div>
              <div className="text-overlay">
              <h1>{slide.title}</h1>
                <div className="slide-description">
                <p>{slide.description}</p>
                </div>
                
                
                <a
                  href={slide.link}
                  target="_blank"
                  className="button-link"
                  rel="noopener noreferrer"
                >
                  เพิ่มเติม
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleManualSlideChange(index)}
            >
              <img src={slide.image} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainSlider;