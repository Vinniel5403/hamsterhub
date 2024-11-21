import React from "react";
import "./Post.css";

function Post() {
  // ข้อมูลที่ใช้ใน component
  const posts = [
    {
      img: "https://media.discordapp.net/attachments/1288114105705828404/1309167412834467850/api.png?ex=674098aa&is=673f472a&hm=2c9cd11733c94142f12b3351a24521a9c9883af4d7e1a9cd334ad0ada0ea3794&=&format=webp&quality=lossless&width=1440&height=582",
      title: "National Project-2",
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
            <a href={post.link} className="post-trans">Book</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
