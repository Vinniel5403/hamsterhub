'use client';
import React, { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { SiPython, SiUnity, SiRoblox } from 'react-icons/si';
import "./Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  // Data for dropdown menu
  const Link = [
      {
        name: "Indie Games Dev.",
        href: "#course",
        price: "฿1290",
        startDate: "7 ธ.ค. 2567",
        time: "14:00-16:00",
        logo: "https://hamsterhub.co/asset/image/course/icon/GPM.png"
      },
      {
        name: "National Project 2025: Season-2",
        href: "#course",
        price: "฿19,990",
        startDate: "8 ม.ค.",
        time: "19:00-21:00",
        logo: "https://hamsterhub.co/asset/image/course/icon/GP.png"
      },
      {
        name: "Game Hackathon & Hamster Hub Awards 2024",
        href: "#course",
        price: "฿190",
        startDate: "14 ธ.ค.",
        time: "19:00-21:00",
        logo: "https://hamsterhub.co/asset/image/course/icon/HGJICON.png"
      },
      {
        name: "Python Super Pro. Pack",
        href: "#course",
        price: "฿4990",
        startDate: "23 พ.ย. 2567",
        time: "19:00-21:00",
        logo: "https://hamsterhub.co/asset/image/course/icon/AI.png"
      },
      {
        name: "Python Highschool Camp (Level 1)",
        href: "#course",
        price: "฿1290",
        startDate: "23 พ.ย.",
        time: "19:00-21:00",
        logo: "https://hamsterhub.co/asset/image/course/icon/PSP.png"
      },
      {
        name: "2D Game Creator Camp",
        href: "#course",
        price: "฿2490",
        startDate: "30 พ.ย.",
        time: "19:00-21:00",
        logo: "https://hamsterhub.co/asset/image/course/icon/GMC.png"
      },
      {
        name: "Roblox Creator Camp",
        href: "#course",
        price: "฿1290",
        startDate: "30 พ.ย. 2567",
        time: "18.00 - 20.00",
        logo: "https://hamsterhub.co/asset/image/course/icon/RB.png"
      },
    
    
    
  ];

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
          <a href="#">
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
            <a href="#">
              <SiRoblox className="nav-icon" />
            </a>
          </li>

          {/* Hamburger Menu */}
          <label htmlFor="hamburger-checkbox" className="hamburger-button">
            <FaBars />
          </label>
          <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
          
          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            {Link.map((item, index) => (
              <a href={item.href} key={index} className="dropdown-item">
                <div className="course-name">
                <img src={item.logo} alt={item.name} />
                <h1>{item.name}</h1>
                </div>
                <h2>{item.price}</h2>
              </a>
            ))}
          </div>
          <li></li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
