import React from "react";
import "./Description.css";
import Image from "next/image";

function Description() {
  return (
    <div className="description">
      <div className="panel">
        <Image src="/assets/HWR.png" alt="panel" width={1200} height={1200} />
      </div>
      <div className="panel">
        <h2>Who we are?</h2>
        <hr />
        <p>พวกเราจะได้ฝึกจากสิ่งที่ดีที่สุดในโลก</p>
        <p>
          {" "}
          มีพี่ๆ ใจดีคอยสนับสนุน ดึงศักยภาพแต่ละคนมาพัฒนา สร้างความมั่นใจ
          และพบเพื่อนใหม่กับภารกิจที่ท้าทายไปด้วยกัน{" "}
        </p>
        <p>Anyone can do anything</p>
      </div>  
    </div>
  );
}

export default Description;
