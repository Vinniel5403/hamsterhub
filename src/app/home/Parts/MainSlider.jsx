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
      content: "https://nj.dekhub.com/public/videos/header1.mp4",
      image: "https://media.discordapp.net/attachments/1288114105705828404/1309112466441109614/product-development-vector-icon-symbol-creative-sign-from-seo-and-development-icons.png?ex=6740657e&is=673f13fe&hm=86bebddbc46763f1a69ae3835b6f32f5c4b535f47ec029257888ce0a47c3fa04&=&format=webp&quality=lossless",
      link: "#",
    },
    {
      title: "Game Hackathon & Hamster Hub Awards 2024",
      description:
        "กิจกรรมสุดพิเศษที่ไม่เคยจัดมาเลยในรอบปี เปิดพื้นที่ให้พวกเราได้แสดงฝีมือ ทั้งการออกแบบ การเขียนโปรแกรม และการสร้างเกมสนุกๆ ใน 60 นาที ผู้ชนะจะได้เผชิญหน้ากับแชมป์จากรายการต่างๆ เพื่อชิงรางวัลใหญ่ประจำปี",
      type: "image",
      content: "https://nj.dekhub.com/public/imgs/header2.png",
      image: "https://nj.dekhub.com/public/imgs/header2.png",
      link: "#",
    },
    {
      title: "Unity HDRP",
      description: "พัฒนาเกมและกราฟฟิกคุณภาพสูงด้วย Unity High Definition Render Pipeline (HDRP)",
      type: "image",
      content: "https://nj.dekhub.com/public/imgs/header3.png",
      image: "https://nj.dekhub.com/public/imgs/header3.png",
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
  const updateActiveIndex = useCallback(
    (newIndex) => {
      setActiveIndex(newIndex);
      scrollToSlide(newIndex);
    },
    [scrollToSlide]
  );

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) return; // ป้องกันการสร้าง interval ซ้ำ

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        scrollToSlide(nextIndex);
        return nextIndex;
      });
    }, 15000);
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

  const handleManualSlideChange = useCallback(
    (index) => {
      updateActiveIndex(index);
    },
    [updateActiveIndex]
  );

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
                  <video autoPlay loop muted >
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
