import React from "react";
import "./Post.css";

function Post() {
  // ข้อมูลที่ใช้ใน component
  const posts = [
    {
      img: "https://nj.dekhub.com/public/imgs/project.png",
      title: "National Proejct-2",
      subtitle: "2nd Winner NSC",
      about: "#",
      link: "#",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/unity.png",
      title: "Unity",
      subtitle: "C# and Game Dev",
      about: "#",
      link: "#",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/python.png",
      title: "Python",
      subtitle: "Adventure &  Missions",
      about: "#",
      link: "#",
    },
    {
      img: "https://nj.dekhub.com/public/imgs/roblox.png ",
      title: "Roblox",
      subtitle: "Design & Dev. for Kid",
      about: "#",
      link: "#",
    },
  ];

  return (
    <div className="post">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          <img src={post.img} alt={post.title} />
          <div className="post-overlay">
            <h2>{post.title}</h2>
            <p>{post.subtitle}</p>
            <div className="post-links">
            <a href={post.about} >More Detail</a>
            <a href={post.link} id="post-trans">Book</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
