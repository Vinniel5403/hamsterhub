import React from "react";
import "./Description.css";
import Image from "next/image";
import Link from "next/link";

function Description() {
  return (
    <div className="description">
      <div className="panel">
        <Image src="/assets/HWR.png" alt="panel" width={1200} height={1200} priority />
      </div>
      <div className="panel">
        <div className="des-text-wrap">
        <h2>Who we are?</h2>

        <p>พวกเราจะได้ฝึกจากสิ่งที่ดีที่สุดในโลก</p>
        <p>
          {" "}
          มีพี่ๆ ใจดีคอยสนับสนุน ดึงศักยภาพแต่ละคนมาพัฒนา สร้างความมั่นใจ
          และพบเพื่อนใหม่กับภารกิจที่ท้าทายไปด้วยกัน{" "}
        </p>
        <p>Anyone can do anything</p>
        <Link href="/gallery">
       Project Gallery
        </Link>
      </div>  
      </div>
    </div>
  );
}

export default Description;
