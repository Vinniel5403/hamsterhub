import React from "react";
import Image from "next/image";
import "./Footer.css";
import { FaFacebook, FaPhoneAlt, FaLine } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://www.facebook.com/HamsterHubThailand"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-logo"
        >
          <Image
            className="logo"
            src="/assets/Hamster.png"
            alt="HamsterHub Logo"
            width={100} // Specify width
            height={100} // Specify height
          />
        </a>

        <ul className="footer-link">
          <li>
            <a
              href="https://www.facebook.com/HamsterHubThailand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
              Hamster Hub
            </a>
          </li>
          <li>
            <a
              href="https://page.line.me/jkm4247u?openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Line"
            >
              <FaLine />
              @smart-school
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaPhoneAlt />
              090-060-2555
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
