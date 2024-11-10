'use client';
import React, { useEffect, useState } from "react";
import { FaUsers, FaHeart, FaBook, FaMicrophone } from "react-icons/fa";
import './About.css';

function About() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.querySelector('.about-video');
      const contentElement = document.querySelector('.about-info');
      if (videoElement && contentElement) {
        const videoTop = videoElement.getBoundingClientRect().top;
        const contentTop = contentElement.getBoundingClientRect().top;

        // Detect current scroll position and direction
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        if (isScrollingDown && contentTop <= window.innerHeight -100) {
          // Shrink when scrolling down and content enters view
          setIsShrunk(true);
        } else if (!isScrollingDown && videoTop >= -400) {
          // Reset shrink when scrolling up past the video element
          setIsShrunk(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className='about'>
      <div className={`about-video ${isShrunk ? 'shrunk' : ''}`}>
        <video muted autoPlay loop playsInline>
          <source
            src="https://hamsterhub.co/asset/image/Songkhla.mp4"
            type="video/mp4"
          />
        </video>
        <div className="about-content">
          <div className="flex">
            <h2>โปรเจค</h2>
            <h2 className="blue">สงขลา</h2>
           
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed iure enim labore quisquam soluta, impedit ut cum ipsam reiciendis quasi.</p>
        </div>
      </div>
      <div className="about-info">
        <div className="left">
          <FaUsers size="2em" />
          <h2>สังคมที่น่ารัก</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="right">
          <FaHeart size="2em" />
          <h2>ให้ความสำคัญกับน้องทุกคน</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="left">
          <FaBook size="2em" />
          <h2>ไม่เน้นสอนเยอะ</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="right">
          <FaMicrophone size="2em" />
          <h2>ฝึกการนำเสนอ</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
