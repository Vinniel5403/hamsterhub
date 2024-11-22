'use client';

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"; // Import the server-side Navbar component

export default function NavbarWrapper() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 80);
      console.log("morethan80");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Navbar className={scrolling ? 'scrolled' : ''} />;
}