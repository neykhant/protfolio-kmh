import React from "react";
import "./MobileNav.css";
import { NavLink, Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const closeSideBar = () => {
    setTimeout(() => {
      toggleMenu();
    }, 1000);
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        // onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="" alt="" />
          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skill" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#work-experience" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn">
              <a
                href="./asset/images/KhantMawHein.pdf"
                download="KhantMawHeinCV.pdf"
                className="download-cv"
              >
                Hire Me
              </a>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
