import React from "react";
import "./Gallery.css";
import Slider from "@/app/components/Slider";
import Image from "next/image";

const items = [
  {
    title: "Roblox Game",
    description:
      "Take a tour & play your favorite ones with million Roblox players among variety of categories & platforms: mobile, tablet, and computer.",
    galleryItems: [
      {
        title: "GameJam",
        subtitle: "Best",

        image:
          "https://nj.dekhub.com/public/imgs/Gallery/Roblox/GameJam_Best.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/GameJam_Best.mp4",
      },
      {
        title: "เวียร์",
        subtitle: "RB45L1",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Roblox/RB45L1_Vier.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/RB45L1_Vier.mp4",
      },
      {
        title: "น้องบอล",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Roblox/RBL6_NongBall.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/RBL6_NongBall.mp4",
      },
      {
        title: "RBL4_X",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Roblox/RBL4_X.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/RBL4_X.mp4",
      },
     
    ],
  },
  {
    title: "Desktop Game",
    description:
      "Hamster Game Dev. created indy simple games based on their styles and funny gameplay.",
    galleryItems: [
      {
        title: "Gambling Invader",
        subtitle: "Araieek's Game",

        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/GameJam_Ton.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/GameJam_Ton.mp4",
      },
      {
        title: "Jumping Game",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/GameJam_jumping5.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/GameJam_jumping5.mp4",
      },
      {
        title: "เกมแมวตะลุยอวกาศ",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/Game_SpaceCat.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/Game_SpaceCat.mp4",
      },
      {
        title: "Phufa",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/PXS_Phufa.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/PXS_Phufa.mp4",
      },
      {
        title: "Program",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/GameJam_program.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/GameJam_program.mp4",
      },
    ],
  },
  {
    title: "Mobile Game",
    description:
      "Many hamsters developed the app or game on the mobile device downloadable from App&Playstore, some of them already made $.",
    galleryItems: [
      {
        title: "wOof",
        subtitle: "",

        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/wOof.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/wOof.mp4",
      },
      {
        title: "Hamster Town",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/HamsterTownMobile.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/HamsterTownMobile.mp4",
      },
      {
        title: "fijob",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/fijob.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/fijob.mp4",
      },
      {
        title: "mrCITY",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/mrCITY.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/mrCITY.mp4",
      },
    
    ],
  },
  {
    title: "App & Web",
    description:
      "Production Stage of our projects creates their real users and benefits for people in and outside Hamster Hub.",
    galleryItems: [
      {
        title: "HamsterHub Co",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Web&App/HamsterHubCo.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Web&App/HamsterHubCo.mp4",
      },
      {
        title: "Hamster Town Web",
        subtitle: "Ohm's Project",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Web&App/HamsterTownWeb.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Web&App/HamsterTownWeb.mp4",
      },
      {
        title: "PHC Map",
        subtitle: "",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Web&App/PHCMap.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Web&App/PHCMap.mp4",
      },
    ],
  },
];


function GallerySlider() {
  return (
    <div className="gallery">
      {items.map((group, groupIndex) => (
        <div key={groupIndex} className="gallery-slider">
          {/* <div className="gallery-cover">
          <Image src='/assets/Gallery1.png' width={1920} height={1080} priority />
          <video src="/assets/Gallery1.mp4" autoPlay muted></video>
          </div> */}
          <div className="gallery-text">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
          </div>
          <Slider items={group.galleryItems} id="gallery-slider" />
        </div>
      ))}
    </div>
  );
}

export default GallerySlider;
