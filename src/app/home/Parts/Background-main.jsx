'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa';
import './Background-main.css';

function BackgroundMain() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Background">
      <video muted autoPlay loop playsInline>
        <source src="https://videos.pexels.com/video-files/854086/854086-hd_1920_1080_25fps.mp4" type="video/mp4" />

      </video>
      {/* <img src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
      <div
        className="content"
        style={{ transform: `translate(0, calc(0% + ${(scrollY * 1.1)^2}px))` }}
      >
        <h1>Hamster Hub</h1>
        <h4>Welcome to coding & gaming friendly community</h4>
        <h6>"สังคมเทคโนโลยีที่สนุกแต่เท่"</h6>
        
        <button>
          <a href="https://hamsterhub.co/" target="_blank" rel="noopener noreferrer">
            สมัครเรียน <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
          </a>
        </button>
        
        <h3>
          <FaArrowUp />
        </h3>
      </div>
    </div>
  );
}

export default BackgroundMain;
