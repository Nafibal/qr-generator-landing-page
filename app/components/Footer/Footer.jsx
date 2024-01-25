import React from "react";

import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="row">
          <a href="#">
            <FontAwesomeIcon
              className="icon"
              icon={faFacebook}
            ></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="icon"
              icon={faInstagram}
            ></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="icon"
              icon={faYoutube}
            ></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </a>
        </div>

        <div class="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div class="row">
          Nafi Baliya Copyright © 2024 - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
