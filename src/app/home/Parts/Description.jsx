import React from "react";
import "./Description.css";

function Description() {
  return (
    <div className="description">
      <div className="left-panel">
        <div className="flex">
          <img
            src="https://media.discordapp.net/attachments/1006093882347507722/1308905441756975134/flat-illustration-promotional-posing-characters-there-is-space-for-your-text-on-the-banner-vector.png?ex=673fa4af&is=673e532f&hm=1a3dd15787ba2edc226400180166265e7b7b592907ba78bac99cb9797ffaaf78&=&format=webp&quality=lossless&width=676&height=676"
            alt=""
          />
        </div>
      </div>
      <div className="right-panel">
        <img
          src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/294346208_1067269747225069_1550590391262281833_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEVsSRAgdveqL6CABGiRuTqOd17q-Rxa9E53Xur5HFr0eOpe-tnFgY_OovQHWFlZk4DyOwcIyF9vx0mXOSETB9F&_nc_ohc=_3xSHgx9yygQ7kNvgEIdb1P&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A65_uN3mHtt3uNGpgGpo-x-&oh=00_AYB1XFCI7dnn8Frq25G7ZmIZKDdo8kEejb6q6nabObi3oQ&oe=673F8AC4"
          alt=""
        />
        <div className="des-overlay">
          <h2>test</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="des-links">
            <a href="#">test</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
