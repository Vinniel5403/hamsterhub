import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLine, FaDiscord } from "react-icons/fa"; // Importing the icons from react-icons

function Footer() {
  return (
    <div className="footer">
      <a href="https://hamsterhub.co/" target="_blank" rel="noopener noreferrer">
        <img
          id="hamsterhub-footer"
          className="logo"
          src="HamsterLogo.png"
          alt="HamsterHubLogo"
        />
      </a>
      <div className="footer-contact">
        <h6>Contact</h6>
        <p>smschoolsth@gmail.com</p>
        <p>090 060 2555</p>
        <p>@smart-school</p>
      </div>
      <ul className="footer-link">
        <li>
          <a href="https://www.facebook.com/HamsterHubThailand" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} /> {/* Facebook Icon */}
          </a>
        </li>
        <li>
          <a
            href="https://page.line.me/jkm4247u?openQrModal=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLine size={30} /> {/* Line Icon */}
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} /> {/* Discord Icon */}
          </a>
        </li>
      </ul>
      <p>Copyright © 2024</p>
    </div>
  );
}

export default Footer;
