import React from "react";
import "./Description.css";
import Image from "next/image";

function Description() {
  return (
    <div className="description">
      <div className="left-panel">
        <div className="flex">
          <Image
            src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/460466653_552705277316722_1392580314329367547_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTMuP8-QwC8xxkGxrli63XrnJwoJDxylSucnCgkPHKVJL0qS9qWr3SmsuLMNJc7rBsNZ1wP8X79w_gHEXjvszZ&_nc_ohc=kQAN4Q6TGJEQ7kNvgEvY6O5&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AR9ZR07k3NcJ0_ZRpWjoazZ&oh=00_AYBs-VDUuLveWl3FtPvxQSV1U69mfyaOmTzKs5AslmKDKQ&oe=67496BD2"
            alt=""
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div className="right-panel">
        <Image
          src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/456891194_539050338682216_2955436370705817819_n.png?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeF9_ogatXN3Rn3gqYkFTZXdeDgPcj_fDT14OA9yP98NPSORDee7dKycz2ABGRoXjp8wc_-noRlD4f_R9qSjCXV6&_nc_ohc=GP2E54TKWboQ7kNvgH7M_kR&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=AANf5dX445nmOx8OFAku_Rq&oh=00_AYDvdSBefQGl9beNJJR-QwEGo1QHecePROjJuTVqfrL_mQ&oe=67499420"
          width={1200}
          height={1200}
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
