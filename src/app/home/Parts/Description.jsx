import React from "react";
import "./Description.css";

function Description() {
  return (
    <div className="description">
      <div className="left-panel">
        <h2>Hamster Hub คือ</h2>
        <div className="flex">
          <p>
            ชุมชนที่น้องๆ ได้เก่งเร็วมากอย่างมีความสุข มีพี่ๆ
            ส่งเสริมทักษะเท่าที่จำเป็นเพื่อสร้างผลงานที่ได้ใช้จริง
            น้องจะได้เรียนรู้แล้วฝึกทำ จนได้ผลงานระดับเข้าแข่งขัน
            สู่ความมั่นใจในสถาบันระดับท็อป
          </p>
        </div>
      </div>
      <div className="right-panel">
        <img
          src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/294346208_1067269747225069_1550590391262281833_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEVsSRAgdveqL6CABGiRuTqOd17q-Rxa9E53Xur5HFr0eOpe-tnFgY_OovQHWFlZk4DyOwcIyF9vx0mXOSETB9F&_nc_ohc=_3xSHgx9yygQ7kNvgEIdb1P&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=A65_uN3mHtt3uNGpgGpo-x-&oh=00_AYB1XFCI7dnn8Frq25G7ZmIZKDdo8kEejb6q6nabObi3oQ&oe=673F8AC4"
          alt=""
        />
      </div>
    </div>
  );
}

export default Description;
