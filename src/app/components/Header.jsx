import React from "react";
import { FaFacebook, FaLine, FaDiscord } from "react-icons/fa"; // นำเข้าไอคอนจาก react-icons
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="hamster-logo">
        <img id="hamsterHubLogo" src="HamsterLogo.png" alt="HamsterHubLogo" />
        <p>Hamster Hub</p>
      </div>

      <div className="social">
  <ul>
    <li>
      <a href="https://www.facebook.com/HamsterHubThailand" target="_blank">
        <FaFacebook className="logo" />
      </a>
    </li>
    <li>
      <a href="https://page.line.me/jkm4247u?openQrModal=true" target="_blank">
        <FaLine className="logo" />
      </a>
    </li>
    <li>
      <a href="https://page.line.me/jkm4247u?openQrModal=true" target="_blank">
        <FaDiscord className="logo" />
      </a>
    </li>
  </ul>
</div>

    </div>
  );
}

export default Header;
