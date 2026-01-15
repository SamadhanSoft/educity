import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event => {
      if (mobileMenu && navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    })

     if (mobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);


  const showMenu = () => {
    // const menu = document.querySelector(".nav-links");
    // menu.classList.toggle("show");
    // setMobileMenu(!mobileMenu);
    // mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav ref = {navRef} className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" width="150px" />
      <ul className={mobileMenu ? "" : "hide"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="contact-us btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        width={30}
        onClick={showMenu}
      />
    </nav>
  );
};
export default Navbar;
