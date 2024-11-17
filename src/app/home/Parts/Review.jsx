"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Review.css";

function Review() {
  const sliderRef = useRef(null);
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
      image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/66780508_399110890707628_360779009505624064_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFO5cjP4E4pFsnEliCb2DdN7DYeufVqCU7sNh659WoJTkul-4R53aDdar7RdG-NUt2M1A4CfGI4Fa9Wsw1apchf&_nc_ohc=MWfhK4c8odoQ7kNvgHJNyol&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A6S4Qff9kvYKpRz2hdL2Rka&oh=00_AYDX6OVeSxzg71CllywWv9HOlH7fYX6U_bC0LrGpvcf1-w&oe=67612104",
    },
    {
      title: "Lorem Test Page 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-89269.jpg?t=st=1731833100~exp=1731836700~hmac=2941f131de270af4e67b385e254a7f079aea20ee35bbe0e8bf32e73f974737d0&w=1380",
    },
    {
      title: "Lorem Test Page 4",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=85&f=jpeg",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:"https://img.freepik.com/free-photo/close-up-portrait-young-successful-african-american-adult-man-red-hoodie_176420-33869.jpg?t=st=1731834903~exp=1731838503~hmac=328b69226c8635dd51a2829debe3a58c702ae575a64c2b4ed680af8ea3cf59f3&w=1380",
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
    if (slider) {
      const slideWidth = slider.offsetWidth; // Width of a single slide
      const slideOffset = slideWidth * index; // Calculate target position
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
          <div key={index} className="slide">
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
