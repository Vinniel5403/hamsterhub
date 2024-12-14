import React from "react";
import "./Gallery.css";
import Slider from "@/app/components/Slider";

const items = [
  {
    title: "Test Group",
    description: "Description for Test Group",
    galleryItems: [
      {
        title: null,
        description: null,
        subtitle: null,
        image: "/assets/gallery-tcas.jpg",
        content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
      },
      {
        title: "Veggie Dash",
        description: "Ohm's Project",
        image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
    ],
  },
  {
    title: "Another Group",
    description: "Description for Another Group",
    galleryItems: [
      {
        title: null,
        description: null,
        image: "/assets/gallery-tcas.jpg",
        content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
      },
      {
        title: "Veggie Dash",
        description: "Ohm's Project",
        image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
    ],
  },
  {
    title: "Another Group",
    description: "Description for Another Group",
    galleryItems: [
      {
        title: null,
        description: null,
        image: "/assets/gallery-tcas.jpg",
        content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
      },
      {
        title: "Veggie Dash",
        description: "Ohm's Project",
        image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
    ],
  },
  {
    title: "Another Group",
    description: "Description for Another Group",
    galleryItems: [
      {
        title: null,
        description: null,
        image: "/assets/gallery-tcas.jpg",
        content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
      },
      {
        title: "Veggie Dash",
        description: "Ohm's Project",
        image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
    ],
  },
  {
    title: "Another Group",
    description: "Description for Another Group",
    galleryItems: [
      {
        title: null,
        description: null,
        image: "/assets/gallery-tcas.jpg",
        content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
      },
      {
        title: "Veggie Dash",
        description: "Ohm's Project",
        image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
    ],
  },
  {
    title: "Another Group",
    description: "Description for Another Group",
    galleryItems: [
      {
        title: null,
        subtitle: null,
        description: null,
        image: "/assets/gallery-tcas.jpg",
        content: "https://nj.dekhub.com/public/videos/gallery-TC.mp4",
      },
      {
        title: "วิศวะ ม.เกษตร",
        subtitle: "Ohm's Project",
        description: null,
        image: "https://nj.dekhub.com/public/imgs/gallery-Ohm.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "Lorem Test Page 5",
        subtitle: "Lorem ipsum dolor sit amet consectetur.",
        description: "test",
        image: "https://nj.dekhub.com/public/imgs/gallery-Zard.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Zard.mp4",
      },
      {
        title: "Developer",
        subtitle: "Safe, From gamer become ",
        description: null,
        image: "https://nj.dekhub.com/public/imgs/gallery-Safe.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Safe.mp4",
      },

      {
        title: "วิศวะคอมฯ บางมด",
        subtitle: "Fluke's Game Project",
        description: null,
        image: "https://nj.dekhub.com/public/imgs/gallery-Fluke.png",
        content: "https://nj.dekhub.com/public/videos/gallery-Fluke.mp4",
      },
    ],
  },
];

function GallerySlider() {
  return (
    <div className="gallery">
      {items.map((group, groupIndex) => (
        <div key={groupIndex} className="gallery-slider">
          <video autoPlay loop muted playsInline>
            <source
              src="https://nj.dekhub.com/public/videos/header1.mp4"
              type="video/mp4"
            />
          </video>
          <Slider items={group.galleryItems} id="gallery-slider" />
        </div>
      ))}
    </div>
  );
}

export default GallerySlider;
