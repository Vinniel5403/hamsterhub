import React from "react";
import "./Gallery.css";
import Slider from "@/app/components/Slider";

const items = [
  {
    title: "Test Group",
    description: "Description for Test Group",
    galleryItems: [
      {
        title: "Songkla",
        description: "lorem ipsum dolor sit amet consectetur.",
        subtitle: null,
        image:
          "https://media.discordapp.net/attachments/1057987880653426699/1316417522672730133/IMG_7096.JPG?ex=675e449b&is=675cf31b&hm=9acce38308268c89e08aa1c9de0a3dc3c3718f42eadd151125a340a00ef0333d&=&format=webp&width=525&height=350",
        content: "https://nj.dekhub.com/public/videos/Kong.mp4",
      },
      {
        title: "Veggie Dash",
        description: "Ohm's Project",
        image:
          "https://media.discordapp.net/attachments/1276889979590676501/1317502285903040613/tonbid.png?ex=675eeb1e&is=675d999e&hm=e041feb782b5a8111bb413c4b86c7dfa2a7569cc76d635dc6a587ea8669ee993&=&format=webp&quality=lossless&width=550&height=332",
        content: "https://nj.dekhub.com/public/videos/gallery-Ohm.mp4",
      },
      {
        title: "P'Zard",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image:
          "https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/69865207_2396392743772738_8382228401607409664_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGoXnN0QjZwmJ6qNJNAVfN8nmZVmpgjyXWeZlWamCPJdZUzGECDJ2UVXrzCmm0Ss1vcjmcvWkNZ8KdJB-3pw9YI&_nc_ohc=4XzSVmVkHAUQ7kNvgEtIkef&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=Amp8JTlMPwyybKsnyQTaLmV&oh=00_AYBfg1_diDau5WheZg0Bune78BdiJFjHXqi7mRzvUFlfkw&oe=678520A8",
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
];

function GallerySlider() {
  return (
    <div className="gallery">
      {items.map((group, groupIndex) => (
        <div key={groupIndex} className="gallery-slider">
          <div className="gallery-video">
            <video autoPlay loop muted playsInline>
              <source
                src="https://nj.dekhub.com/public/videos/header1.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <Slider items={group.galleryItems} id="gallery-slider" />
          <h2>{group.title}</h2>
          <p>{group.description}</p>
        </div>
        
      ))}
      
    </div>
  );
}

export default GallerySlider;
