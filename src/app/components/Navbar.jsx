import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { SiPython, SiUnity, SiRoblox } from 'react-icons/si';
import { getCourses } from "@/utils/api";
import Link from "next/link"; // Import Link from next/link
import "./Navbar.css";

export default async function Navbar() {
  const LinkData = await getCourses(); // Renaming Link to LinkData to avoid confusion with next/link
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/" >
            <img src="/assets/Hamster.png" alt="Hamster Logo" />
          </Link>
        </li>
        <div className="nav-wrapper">

            <a href="#">
              <SiPython className="nav-icon" />
            </a>

            <a href="#">
              <SiUnity className="nav-icon" />
            </a>

            <a href="#">
              <SiRoblox className="nav-icon" />
            </a>

          
          <label htmlFor="hamburger-checkbox" className="hamburger-button">
            <HiOutlineBars3 />
          </label>
          <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
          <div className="dropdown-menu">
            {LinkData.map((item, index) => (
              <Link href={`/course/${item.no}`} key={index} className="dropdown-item">

                  <div className="course-name">
                   <h1></h1>
                    <h1>{item.subject}</h1>
                  </div>
              </Link>
            ))}
          </div>
          <li></li>
        </div>
      </ul>
      
    </div>
  );
}
