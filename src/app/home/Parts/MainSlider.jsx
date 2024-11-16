'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import './MainSlider.css';

function MainSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const intervalRef = useRef(null); // Ref for interval ID

  const images = [
    {
      title: "Lorem",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/460466653_552705277316722_1392580314329367547_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTMuP8-QwC8xxkGxrli63XrnJwoJDxylSucnCgkPHKVJL0qS9qWr3SmsuLMNJc7rBsNZ1wP8X79w_gHEXjvszZ&_nc_ohc=KiHWnsXMbPIQ7kNvgEuMzhA&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=ApEa9tDjltaaiuCYme8ikwl&oh=00_AYCH_nHXFKafieSCGoZ81tfjQyhsFSkObBF8CynU2TU0ag&oe=673E6F52",
      link: "#",
    },
    {
      title: "Lorem",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/269905077_943637332921645_4105436616537830205_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErMDvcgoGWtk0_OhfmgyA-I9ewKSHaRu0j17ApIdpG7RZkXHab4MDg6Nyigoo-N_RiBGmAxiljPL6NnqtbQdU8&_nc_ohc=vbye6rUYKeIQ7kNvgGgCf4S&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AZ470zEMltkumH5W5Tdgn_j&oh=00_AYBOWg6jj1mEOqd6LsKw8W3T_AdHHbSf4ZIBa7PJ9xuxcw&oe=673E8DF8",
      link: "https://hamsterhub.co/course/942",
    },
    {
      title: "Lorem",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/270119393_947128242572554_7424003175334953487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfufRDLjnzw96IJPD0KlM-Dpi-j7Bl9Y4OmL6PsGX1jpQ5T_UqTiZQhp_vOe2C73DHNQsDQ-8Np5oeiZcTyk15&_nc_ohc=leoTycZYM9cQ7kNvgE91g1W&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A8bVfwOXF8JHilzsI-MxQG4&oh=00_AYByJloc66Ts7Ymk38pvG4l1SyyNnufBdiZsxCRRxFeMsw&oe=673E58F8",
      link: "https://hamsterhub.co/course/942",
    },
  ];

  const scrollToSlide = useCallback((index) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth;
    if (slider) {
      slider.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
      setActiveIndex(index); // Update active index
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide(); // Clear existing interval before starting a new one
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToSlide(nextIndex);
        return nextIndex;
      });
    }, 5000);
  }, [images.length, scrollToSlide]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide; // Clean up interval on component unmount
  }, [startAutoSlide, stopAutoSlide]);

  const handleManualSlideChange = (index) => {
    stopAutoSlide(); // Stop automatic sliding
    scrollToSlide(index); // Navigate to the selected slide
    startAutoSlide(); // Restart auto-slide after manual navigation
  };

  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.image} alt={`Slide ${index + 1}`} />
              <div className="text-overlay">
                <h1>{image.title}</h1>
                <p>{image.description}</p>
                <a href={image.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {images.map((_, index) => (
            <button
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleManualSlideChange(index)}
            >
              <img src={images[index].image} alt={`Slide ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainSlider;
