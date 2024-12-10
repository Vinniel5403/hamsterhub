import React from "react";
import "./Footer.css";
import { FaFacebook, FaLine, FaInstagram } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <ul className="footer-link">
          <li>
            <a
              href="https://www.facebook.com/HamsterHubThailand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="Fa"/>
              <p>: Hamster Hub</p>
            </a>
          </li>
          <li className="footer-pipe">
            |
          </li>
          <li>
            <a
              href="https://page.line.me/jkm4247u?openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Line"
            >
              <FaLine className="Fa"/>
              <p>: @smart-school</p>
            </a>
          </li>
          <li className="footer-pipe">
            |
          </li>

          <li>
            
              <MdLocalPhone />
              <p>: 090-060-2555</p>
          </li>
          <li className="footer-pipe">
            |
          </li>
          <li>
            <a
              href="https://www.instagram.com/hamsterhub_ig/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaInstagram className="Fa"/>
             <p>: hamsterhub_ig </p>
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
