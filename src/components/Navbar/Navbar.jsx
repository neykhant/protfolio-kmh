import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    event.preventDefault();
    setOpenMenu(!openMenu);
    setTimeout(() => {}, 500);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img src="/asset/images/vite.svg" alt="" className="logo" /> */}
          <p>Khant Maw Hein</p>
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

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{
                fontSize: "1.8rem",
              }}
            >
              {openMenu ? <IoMdClose /> : <GiHamburgerMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
