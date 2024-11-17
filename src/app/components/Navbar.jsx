'use client';
import React, { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { SiPython, SiUnity, SiRoblox } from 'react-icons/si';
import "./Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true); // Navbar should have a solid background when scrolled
      } else {
        setScrolling(false); // Make it transparent when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <ul>
        <li>
          <a href="#" >
            <img src="Hamster.png" alt="Hamster Logo" />
          </a>
        </li>
        <div className="nav-wrapper">
          <li>
            <a href="#">
              <SiPython className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <SiUnity className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="#" >
              <SiRoblox className="nav-icon" />
            </a>
          </li>
          <li>
            <label htmlFor="hamburger-checkbox" className="hamburger-button">
              <FaBars />
            </label>
            <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
            <div className="dropdown-menu">
              <a href="#course" className="dropdown-item">Course</a>
              <a href="#register" className="dropdown-item">Register</a>
              <a href="#about-us" className="dropdown-item">About Us</a>
            </div>
          </li>
          <li>
           
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
