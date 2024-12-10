import React from "react";
import "./Gallery.css";
import Slider from "@/app/components/Slider";

const items = [
  [
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
  }],

  [
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
    }],
    [
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
      }]
];

function App() {
  return (
    <div className="gallery">
      {items.map((group, groupIndex) => (
        <Slider key={groupIndex} items={group} />
      ))}
    </div>
  );
}

export default App;
