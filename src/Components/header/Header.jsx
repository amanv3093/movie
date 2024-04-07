import React from "react";
import "./header.css";
import logo from "../../assets/movix-logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  return (
    <header className="header">
      <ContentWrapper>
        <div className="nav-items">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="menuItems">
            <li className="menuItem">Movies</li>
            <li className="menuItem">Tv Shows</li>
            <li className="menuItem">
              <HiOutlineSearch />
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
