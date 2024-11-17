import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLine, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <a href="https://hamsterhub.co/" target="_blank" rel="noopener noreferrer">
        <img
          id="hamsterhub-footer"
          className="logo"
          src="HamsterLogo.png"
          alt="HamsterHub Logo"
        />
      </a>
      <div className="footer-contact">
        <p>Email: smschoolsth@gmail.com</p>
        <p>Phone: 090 060 2555</p>
        <p>Social: @smart-school</p>
      </div>
      <ul className="footer-link">
        <li>
          <a href="https://www.facebook.com/HamsterHubThailand" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://page.line.me/jkm4247u?openQrModal=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLine />
          </a>
        </li>
        <li>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </li>
      </ul>
      <p>&copy; 2024 HamsterHub. All rights reserved.</p>
    </div>
  );
}

export default Footer;
