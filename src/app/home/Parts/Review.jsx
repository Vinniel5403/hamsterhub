"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Review.css";

function Review() {
  const sliderRef = useRef(null);
  const slideRef = useRef(null); // Reference to a single slide
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      title: "Lorem Test Page 1",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/446668699_483959664191284_6159870530134804904_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFDNR7hUJdAb1DfYgTRH_LOjEjbXFLvrnmMSNtcUu-ueaJuqZuWwZSGPsED-IZXtGZEI9CwYQqqyEWuJ03TElhH&_nc_ohc=FpxljzVWWvUQ7kNvgEu_Gjg&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AaW9p-QBJMa7B6ex1Ph0tE3&oh=00_AYCJKmVXsz8DZYiBdEyzsGiIhnitY7u9ZtacCxCP110sGw&oe=673F9A4D",
    },
    {
      title: "Lorem Test Page 2",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://img.freepik.com/free-photo/smiling-pleased-asian-male-student-with-braces-showing-thumbs-up-recommend-product-service-with-excellent-quality-like-approve-idea-man-nod-approval-agree-with-person-white-background_1258-55402.jpg?t=st=1731837740~exp=1731841340~hmac=8eb2502b9488f9b30ed35c5d56ed944c2d1329fa9554d026b816d0e4092bb054&w=1380",
    },
    {
      title: "Lorem Test Page 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://media.discordapp.net/attachments/1057987880653426699/1305904059345272843/IMG_3886.jpg?ex=673aa82e&is=673956ae&hm=36165742d6d00ff0cbef18c5725227cdb7c157fa1cfbe13d70c1988a8b589f08&=&format=webp&width=507&height=676",
    },
    {
      title: "Lorem Test Page 4",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=85&f=jpeg",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:"https://media.discordapp.net/attachments/1057987880653426699/1306221959402623017/IMG_6751.png?ex=673a7ebf&is=67392d3f&hm=5720cf9fade1e7bbca3401337687250c111405cdb8a0bcc3a1a7a1a5665ecd81&=&format=webp&quality=lossless&width=233&height=350",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:"https://img.freepik.com/free-photo/medium-shot-man-posing-outside_23-2149028795.jpg?t=st=1731834837~exp=1731838437~hmac=5241877b2697609ff14137c21a1b0753f485ea29702d6e78a5c4cc88dda20289&w=1380",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:"https://img.freepik.com/free-psd/portrait-young-man-with-afro-dreadlocks-hairstyle_23-2150164187.jpg?t=st=1731834874~exp=1731838474~hmac=4276d0925fe11fa81e33b043d915d834b5899d1496f356c8bd4c3c73c6d73b34&w=1380",
    },
  ];

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    const slideWidth = slideRef.current ? slideRef.current.offsetWidth : 0; // Get width of a single slide
    const slideOffset = slideWidth * index; // Calculate target position
    if (slider) {
      slider.scrollTo({
        left: slideOffset,
        behavior: "smooth",
      });
    }
    setActiveIndex(index); // Update the active index
  };

  useEffect(() => {
    const autoScroll = () => {
      const nextIndex = (activeIndex + 1) % reviews.length; // Move to next slide
      scrollToSlide(nextIndex);
    };

    const intervalId = setInterval(autoScroll, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [activeIndex, reviews.length]);

  const handleNavigation = (direction) => {
    const newIndex =
      direction === "prev"
        ? (activeIndex - 1 + reviews.length) % reviews.length
        : (activeIndex + 1) % reviews.length;
    scrollToSlide(newIndex);
  };

  return (
    <section className="review">
      <div className="slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <div key={index} className="slide" ref={index === 0 ? slideRef : null}>
            <img src={review.image} alt={`Slide ${index + 1}`} />
            <p>{review.description}</p>
          </div>
        ))}
      </div>
      <div className="slider-nav">
        <button
          aria-label="Previous Slide"
          onClick={() => handleNavigation("prev")}
        >
          &#10094;
        </button>
        <button
          aria-label="Next Slide"
          onClick={() => handleNavigation("next")}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Review;
