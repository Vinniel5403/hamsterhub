import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post-item">
        <img
          src="https://media.discordapp.net/attachments/1273255250819682415/1307718959402848338/61l1-fhsBL.png?ex=673b53b0&is=673a0230&hm=694627b17a02ce2033796b8c4292b0bb98811d8899066cc9f4b0b8cac99946f5&=&format=webp&quality=lossless&width=426&height=676"
          alt="1"
        />
        <div className="post-overlay">
          <h1>Python</h1>
          <h3>Highschool camp</h3>
        </div>
      </div>
      
      <div className="post-item">
        <img
          src="https://media.discordapp.net/attachments/1288114105705828404/1307719421871259759/xxx.png?ex=673b541e&is=673a029e&hm=c33f517ca8f300da0c7da58d40376b810b484727b60600ff23a4e1a216805b8b&=&format=webp&quality=lossless&width=911&height=676"
          alt="1"
        />
        <div className="post-overlay">
          <h1>Unity</h1>
          <h3>Highschool camp</h3>
        </div>
      </div>
      <div className="post-item">
        <img
          src="https://media.discordapp.net/attachments/1288114105705828404/1307719549340225556/IMG_3886.jpg?ex=673b543c&is=673a02bc&hm=1111d43c219ef7c0a5e1b4eddf0ca25f0c254be3d3c2d61980acf3b3ef029ddf&=&format=webp&width=507&height=676"
          alt="1"
        />
        <div className="post-overlay">
          <h1>Roblox</h1>
          <h3>Horror Gay</h3>
        </div>
      </div>
     
    </div>
  );
}

export default Post;
