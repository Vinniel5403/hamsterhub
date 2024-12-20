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
        title: "Best",
        subtitle: "Game Jam Special",

        image:
          "https://nj.dekhub.com/public/imgs/Gallery/Roblox/GameJam_Best.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/GameJam_Best.mp4",
      },
      {
        title: "เวียร์",
        subtitle: "Roblox Creator Camp",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Roblox/RB45L1_Vier.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/RB45L1_Vier.mp4",
      },
      {
        title: "Ball",
        subtitle: "Roblox Game Project",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Roblox/RBL6_NongBall.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Roblox/RBL6_NongBall.mp4",
      },
      {
        title: "X",
        subtitle: "Open World Project",
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
        subtitle: "Game Jam Specials",

        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/GameJam_Ton.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/GameJam_Ton.mp4",
      },
      {
        title: "Star Odyssey",
        subtitle: "Game Jam 5",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/GameJam_jumping5.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/GameJam_jumping5.mp4",
      },
      {
        title: "Orange",
        subtitle: "Computer Software project",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/Game_SpaceCat.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/Game_SpaceCat.mp4",
      },
      {
        title: "Phufa",
        subtitle: "Project Express Special",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Desktop/PXS_Phufa.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Desktop/PXS_Phufa.mp4",
      },
      {
        title: "Fear Of Asuka",
        subtitle: "Game Jam 3",
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
        subtitle: "Zard's Project",

        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/wOof.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/wOof.mp4",
      },
      {
        title: "Hamster Town",
        subtitle: null,
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/HamsterTownMobile.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/HamsterTownMobile.mp4",
      },
      {
        title: "Fijob",
        subtitle: "Big's Project",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/fijob.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/MobileApp&Game/fijob.mp4",
      },
      {
        title: "mrCITY",
        subtitle: "2nd Winner NSC 2024",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/MobileApp&Game/mrcity.PNG",
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
        subtitle: "Vin's Project",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Web&App/HamsterHubCo.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Web&App/HamsterHubCo.mp4",
      },
      {
        title: "Hamster Town Web",
        subtitle: "Web's Project",
        image:
        "https://nj.dekhub.com/public/imgs/Gallery/Web&App/HamsterTownWeb.png",
        content: "https://nj.dekhub.com/public/videos/Gallery/Web&App/HamsterTownWeb.mp4",
      },
      {
        title: "PHC Map",
        subtitle: "ฝึก Python ผ่านเกม",
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
