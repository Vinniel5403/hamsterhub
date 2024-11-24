import React from "react";
import Image from "next/image";
import "./Post.css";

function Post() {
  // ข้อมูลที่ใช้ใน component
  const posts = [
    {
      img: "https://media.discordapp.net/attachments/1288114105705828404/1309167412834467850/api.png?ex=674292ea&is=6741416a&hm=a7611c6592a68ba36b9b4c27e6b3cc2a4a445d4e17a54e1b8d1f55972aaa6def&=&format=webp&quality=lossless&width=1440&height=582",
      title: "National Project-2",
      subtitle: "2nd Winner NSC",
      about: "#",
      link: "#",
      position: "bottom",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/unity.png",
      title: "Unity",
      subtitle: "C# and Game Dev",
      about: "#",
      link: "#",
      position: "top",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/python.png",
      title: "Python",
      subtitle: "Adventure & Missions",
      about: "#",
      link: "#",
      position: "top",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/roblox.png",
      title: "Roblox",
      subtitle: "Design & Dev. for Kid",
      about: "#",
      link: "#",
      position: "top",
    },
  ];

  return (
    <div className="post">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          {/* Next.js Image component */}
          <Image
            src={post.img}
            alt={post.title}

            width={1920}
            height={800}
            objectFit="cover"
            
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
        </div>
      ))}
    </div>
  );
}

export default Post;
