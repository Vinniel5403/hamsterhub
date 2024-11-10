'use client';
import { React, useEffect } from "react";
import { FaHome, FaInfoCircle, FaBookOpen, FaUserPlus } from 'react-icons/fa'; // นำเข้าไอคอนที่ต้องการ
import "./Navbar.css";
import Link from "next/link";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        // เพิ่มเช็คว่า scrollY ถึง 800 หรือยัง
        if (window.scrollY > 40) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ทำความสะอาดหลังจากการใช้งาน
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // วนแค่ครั้งแรกตอนที่คอมโพเนนต์ถูก mount

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#" className='inline'><FaHome /> เกี่ยวกับ Hamster Hub</a>
        </li>
        <li>
          <a href="#" className='inline'><FaInfoCircle /> ผลงานของเรา</a>
        </li>
        <li>
          <a href="#" className='inline'><FaBookOpen /> คอร์สแนะนำ</a>
        </li>
        <li>
          <a href="#" className='inline' id="register"><FaUserPlus /> สมัครเรียน</a>
        </li>
      
      </ul>
    </div>
  );
}

export default Navbar;
