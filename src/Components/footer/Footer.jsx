import React from "react";
import "./footer.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="allItems">
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          doloribus natus quasi, non provident error quia nisi, corporis
          voluptate incidunt deserunt quam molestiae placeat numquam? Facilis
          qui perspiciatis praesentium iusto dolorem voluptates libero neque
          cupiditate, consectetur deserunt omnis amet nisi.
        </div>
        <div className="socialIcons">
          <span className="icon"><FaFacebookF/></span>
          <span className="icon"><FaInstagram/></span>
          <span className="icon"><FaTwitter/></span>
          <span className="icon"><FaLinkedin/></span>
        </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
