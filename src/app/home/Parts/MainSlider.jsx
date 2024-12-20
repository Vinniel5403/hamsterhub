"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import "./MainSlider.css";
import Image from "next/image";

function MainSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      title: "Veggie Dash: 3rd NSC Winner",
      description:
        "พลังแห่งความสำเร็จเริ่มจากก้าวเล็กๆ เสมอ\n ยินดีกับอันดับ 3ของประเทศกับว่าที่วิศวะคอมฯ ปี 2025 ครับ ",
      type: "video",
      content: "https://nj.dekhub.com/public/videos/header1.mp4",
      // image: "https://nj.dekhub.com/public/imgs/header1.png",
      image: "/assets/header1.png",
      placeholder: "/assets/Placeholder.png",
      link: "#",
    },
    {
      title: "PHCMAP",
      description:
        "ทะลุขีดจำกัดการเขียนภาษา Python ผ่านภารกิจท้าทายด้วยระบบเกมแนวผจญภัย\n แข่งและขิง แย่งชิง Rewards เท่ๆ ตลอดเส้นทาง",
      type: "image",
      content: "https://nj.dekhub.com/public/imgs/header2.png",
      image: "https://nj.dekhub.com/public/imgs/header2.png",
      link: "#",
    },
    {
      title: "Unity HDRP",
      description:
        "พัฒนาเกมและกราฟฟิกคุณภาพสูง ให้ความสมจริงระดับมืออาชีพด้วย\n Unity High Definition Render Pipeline (HDRP)",
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
    }, 25000);
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
                  <Image
                    src={slide.content}
                    alt={`Slide ${index + 1}`}
                    width={1920}
                    height={1200}
                    priority
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={slide.placeholder}
                  >
                    <source src={slide.content} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="text-overlay">
                <h1>{slide.title}</h1>
                <div className="slide-description">
                  {slide.description.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                {/* <a
                  href={slide.link}
                  target="_blank"
                  
                  rel="noopener noreferrer"
                >
                  เพิ่มเติม
                </a> */}
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
              <Image
                src={slide.image}
                width={400}
                height={400}
                alt={`Thumbnail ${index + 1}`}
                onError={(e) => (e.target.src = "/assets/Placeholder.png")}
                priority
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainSlider;
