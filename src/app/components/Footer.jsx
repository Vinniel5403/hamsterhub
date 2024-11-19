import React from "react";
import "./Footer.css";
import { FaFacebook, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://hamsterhub.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-logo"
        >
          <img className="logo" src="HamsterLogo.png" alt="HamsterHub Logo" />
        </a>
        <div className="footer-contact">
          <p>smschoolsth@gmail.com</p>
          <p>090 060 2555</p>
          <p>@smart-school</p>
        </div>
        <ul className="footer-link">
          <li>
            <a
              href="https://www.facebook.com/HamsterHubThailand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://page.line.me/jkm4247u?openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Line"
            >
              <img src="./assets/line.svg" className="icon-img" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; 2024 HamsterHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
