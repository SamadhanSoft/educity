import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" width="150px" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>
          <button className="contact-us btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
