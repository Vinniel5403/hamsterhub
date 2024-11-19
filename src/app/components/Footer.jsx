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
          <img
            id="hamsterhub-footer"
            className="logo"
            src="HamsterLogo.png"
            alt="HamsterHub Logo"
          />
        </a>
        <div className="footer-contact">
          <p><a href="mailto:smschoolsth@gmail.com">smschoolsth@gmail.com</a></p>
          <p><a href="tel:+66900602555">090 060 2555</a></p>
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
        <p>&copy; 2024 HamsterHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
