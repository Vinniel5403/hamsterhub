"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Post.css";

function Post() {
  const posts = [
    {
      img: "/assets/np.png",
      title: "National Project 2025",
      subtitle: "Design & Dev high quality project for national competition",
      about: "#",
      link: "#",
      position: "bottom",
      detail: [
        {
          title: "🏆 เข้าแข่งขันรายการระดับประเทศ",
          text: "เข้าร่วมแข่งขันรายการที่เลือกสรร up ประสบการณ์เทพๆ",
        },
        {
          title: "👨‍🏫 ฝึกกับผู้เชี่ยวชาญ",
          text: "ฝึกกับทีมงานผู้ปั้นน้องๆ ที่ได้เข้ารอบชิง 7 ผลงาน ใน NSC-2024",
        },
        {
          title: "📂 ผลงาน เข้ารอบ Portfolio",
          text: "ผลงานที่มั่นใจเข้ารอบ Port + ฝีมือระดับน้องๆ วิศวะคอมฯ",
        },
        {
          title: "🤝 ฝึกทำงานเป็นทีม",
          text: "ฝึกทำงานเป็นทีม ได้แก้ปัญหาพร้อมเพื่อนๆ",
        },
        {
          title: "🎉 ทักษะสำคัญ",
          text: "ใช้รหัส 2025 เพื่อรับราคาพิเศษปีใหม่ รับได้เพียง 20 คน",
        },
      ],
    },
    {
      img: "https://nj.dekhub.com/public/imgs/unity.png",
      title: "Unity",
      subtitle: "Design & Develop 2D&3D Professional Game",
      about: "#",
      link: "#",
      position: "top",
      detail: [],
    },
    {
      img: "https://nj.dekhub.com/public/imgs/python.png",
      title: "Python",
      subtitle:
        "Breakthrough problem solving limitation with challenged missions & rewards ",
      about: "#",
      link: "#",
      position: "top",
      detail: [],
    },
    {
      img: "https://nj.dekhub.com/public/imgs/roblox.png",
      title: "Roblox",
      subtitle: "From imagination to amazing Game with several crucial skills ",
      about: "#",
      link: "#",
      position: "top",
      detail: [],
    },
  ];

  // Initialize individual indexes for each post
  const [detailIndexes, setDetailIndexes] = useState(posts.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setDetailIndexes((prevIndexes) =>
        prevIndexes.map((currentIndex, postIndex) => {
          const details = posts[postIndex].detail;
          if (details.length > 0) {
            return (currentIndex + 1) % details.length;
          }
          return currentIndex; // Stay at 0 if no details
        })
      );
    }, 5000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [posts]);

  return (
    <div className="post">
      {posts.map((post, postIndex) => (
        <div key={postIndex} className="post-item">
          <div className="post-img">  
          <Image
            src={post.img}
            alt={post.title}
            width={1800}
            height={1200}
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            className="post-overlay"
            style={{
              justifyContent: post.position === "top" ? "start" : "end",
              bottom: post.position === "bottom" ? "0" : "0",
            }}
          >
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>
            <div className="post-links">
              <a href={post.about}>More Detail</a>
              <a href={post.link} className="post-trans">
                Book
              </a>
            </div>
          </div>
          </div>
          <div
            className="post-text-panel"
            style={{
              height: post.detail.length > 0 ? "20vh" : "0vh",
            }}
          >
            {post.detail.map((item, idx) => (
              <div
                key={idx}
                className={`post-text ${
                  idx === detailIndexes[postIndex] ? "visible" : ""
                }`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
