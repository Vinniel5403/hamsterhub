"use client";
import { useState, useEffect} from "react";
import Image from "next/image";
import "./Post.css";
import { FaChalkboardTeacher, FaMedal, FaTrophy, FaUsers, FaTools } from "react-icons/fa";

function Post() {
  const posts = [
    {
      img: "/assets/np.png",
      title: "National Project-2",
      subtitle: "2nd Winner NSC",
      about: "#",
      link: "#",
      position: "top",
      detail: [
        {
          title: "👨‍🏫 ฝึกกับผู้เชี่ยวชาญ",
          text: "ฝึกกับทีมงานผู้ปั้นน้องๆ ที่ได้เข้ารอบชิง 7 ผลงาน ใน NSC-2024",
        },
         {

          title: "📂 ผลงาน เข้ารอบ Portfolio",
          text: "ผลงานที่มั่นใจเข้ารอบ Port + ฝีมือระดับน้องๆ วิศวะคอมฯ",
        },
        {
   
          title: "🏆 เข้าแข่งขันรายการระดับประเทศ",
          text: "เข้าร่วมแข่งขันรายการที่เลือกสรร up ประสบการณ์เทพๆ",
        },
        {

          title: "🎉 ฝึกทำงานเป็นทีม",
          text: "ฝึกทำงานเป็นทีม ได้แก้ปัญหาพร้อมเพื่อนๆ",
        },
        {
   
          title: "🎉 ทักษะสำคัญ",

        },
      ],
    },
    {
      img: "https://nj.dekhub.com/public/imgs/unity.png",
      title: "Unity",
      subtitle: "C# and Game Dev",
      about: "#",
      link: "#",
      position: "top",
      detail: [],
    },
    {
      img: "https://nj.dekhub.com/public/imgs/python.png",
      title: "Python",
      subtitle: "Adventure & Missions",
      about: "#",
      link: "#",
      position: "top",
      detail: [],
    },
    {
      img: "https://nj.dekhub.com/public/imgs/roblox.png",
      title: "Roblox",
      subtitle: "Design & Dev. for Kid",
      about: "#",
      link: "#",
      position: "top",
      detail: [],
    },
  ];
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDetailIndex((prevIndex) => (prevIndex + 1) % posts[0].detail.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    
    <div className="post">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
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
          <div className="post-text-panel">
            {post.detail.map((item, idx) => (
               <div
               key={idx}
               className={`post-text ${idx === currentDetailIndex ? "visible" : ""}`}
             >
                {item.icon && <div>{item.icon}</div>}
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
