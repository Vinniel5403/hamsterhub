import React from "react";
import "./Post.css";

function Post() {
  // ข้อมูลที่ใช้ใน component
  const posts = [
    {
      img: "https://media.discordapp.net/attachments/1288114105705828404/1309167412834467850/api.png?ex=6741416a&is=673fefea&hm=8a5b922bed1e90ccc7badccc2ff7ed4ca2331342d52fa16f149b777439d0ade1&=&format=webp&quality=lossless&width=1440&height=582",
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
      subtitle: "Adventure &  Missions",
      about: "#",
      link: "#",
      position: "top",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/roblox.png ",
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
        <div
        key={index}
        className="post-item">
          <img src={post.img} alt={post.title} />
          <div
            className="post-overlay"
            style={{
              justifyContent: post.position === "top" ? "start" : "end",
            }}
          >
            <h2>{post.title}</h2>
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
