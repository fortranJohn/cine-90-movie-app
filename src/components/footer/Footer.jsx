import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Term of use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad et,
          cupiditate mollitia obcaecati eius ipsam laboriosam in neque eaque!
          Inventore dignissimos quos dolor nulla suscipit et veniam voluptas
          reiciendis quam. Voluptatum totam, aspernatur libero deleniti ullam
          architecto, sint consequatur reprehenderit corrupti debitis, vel fuga
          explicabo nihil similique fugiat incidunt nobis.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF/>
          </span>
          <span className="icon">
            <FaInstagram/>
          </span>
          <span className="icon">
            <FaTwitter/>
          </span>
          <span className="icon">
            <FaLinkedin/>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
