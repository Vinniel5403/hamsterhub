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
      image:
        "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/446668699_483959664191284_6159870530134804904_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFDNR7hUJdAb1DfYgTRH_LOjEjbXFLvrnmMSNtcUu-ueaJuqZuWwZSGPsED-IZXtGZEI9CwYQqqyEWuJ03TElhH&_nc_ohc=FpxljzVWWvUQ7kNvgEu_Gjg&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AaW9p-QBJMa7B6ex1Ph0tE3&oh=00_AYCJKmVXsz8DZYiBdEyzsGiIhnitY7u9ZtacCxCP110sGw&oe=673F9A4D",
      content:
        "https://videocdn.cdnpk.net/videos/e80ff838-ac7f-446d-80cc-8cc36bb50d24/horizontal/previews/clear/large.mp4?token=exp=1732040809~hmac=813c500812b053811f04202e21db5e91418c8ea8981a4de0a33f113b8323530b",
    },
    {
      title: "Lorem Test Page 2",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://img.freepik.com/free-photo/smiling-pleased-asian-male-student-with-braces-showing-thumbs-up-recommend-product-service-with-excellent-quality-like-approve-idea-man-nod-approval-agree-with-person-white-background_1258-55402.jpg?t=st=1731837740~exp=1731841340~hmac=8eb2502b9488f9b30ed35c5d56ed944c2d1329fa9554d026b816d0e4092bb054&w=1380",
      content: "#",
    },
    {
      title: "Lorem Test Page 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/422633578_408260225094562_8773412351267869376_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTOpr5_lQj7vN8M63gwp1MNJgZMHbs0240mBkwduzTbsnFxWM3tDUvN3YC4wHhJaYODU-HCCTfufpjY2pHFvnZ&_nc_ohc=m8Dck08phCUQ7kNvgFfAHd8&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A8iL9SI1kT3EYsMJzMKowDH&oh=00_AYBkdfm6mn5uSamDd_32zit6RATp0fBJy1SqlM35ewdl3g&oe=6740F3E4",
      content: "#",
    },
    {
      title: "Lorem Test Page 4",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=85&f=jpeg",
      content: "#",
    },
    {
      title: "Lorem Test Page 5",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/449787487_505937761993474_3188480051447968676_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFVYvQG5fBcu7O21_A8bQB19ZJ19b-BwTL1knX1v4HBMjmMuwclitFph2CqcJ_HiEV6eUNwswvwhLiDGLRWdmjX&_nc_ohc=olk23Als-koQ7kNvgE6ppQY&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AnWKr5t4yG_HzGBgwU_K7We&oh=00_AYCOeZA7TMPEAiQa1ac4pPkLqBzNhXssHqcojX648U01NQ&oe=6740E7F4",
      content: "#",
    },
    {
      title: "Lorem Test Page 6",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://img.freepik.com/free-photo/medium-shot-man-posing-outside_23-2149028795.jpg?t=st=1731834837~exp=1731838437~hmac=5241877b2697609ff14137c21a1b0753f485ea29702d6e78a5c4cc88dda20289&w=1380",
      content: "#",
    },
    {
      title: "Lorem Test Page 7",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image:
        "https://img.freepik.com/free-psd/portrait-young-man-with-afro-dreadlocks-hairstyle_23-2150164187.jpg?t=st=1731834874~exp=1731838474~hmac=4276d0925fe11fa81e33b043d915d834b5899d1496f356c8bd4c3c73c6d73b34&w=1380",
      content: "#",
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
          <div
            key={index}
            className="slide"
            ref={index === 0 ? slideRef : null}
          >
            <img src={review.image} alt={`Slide ${index + 1}`} />
            <video src={review.content} muted autoPlay loop></video>
            <div className="review-overlay">
              <p>{review.description}</p>
              <h1>{review.title}</h1>
            </div>
          </div>
        ))}
      </div>

        <button
          id="left-prevSlide-button"
          aria-label="Previous Slide"
          onClick={() => handleNavigation("prev")}
        >
          &#10094;
        </button>
        <button
        id="right-nextSlide-button"
          aria-label="Next Slide"
          onClick={() => handleNavigation("next")}
        >
          &#10095;
        </button>

    </section>
  );
}

export default Review;
