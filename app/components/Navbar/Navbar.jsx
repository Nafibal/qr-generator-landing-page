"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ path }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const prevScroll = useRef();

  const [activeMobile, setActiveMobile] = useState(false);

  const handleActiveMobile = () => {
    setActiveMobile(!activeMobile);
  };

  useEffect(() => {
    setActiveMobile(false);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    prevScroll.current = scrollTop;
  }, [scrollTop]);

  return (
    <nav
      className={`navigation ${
        prevScroll.current < scrollTop ? "scroll" : ""
      } `}
    >
      <button className="toggle_button" onClick={handleActiveMobile}>
        {activeMobile ? (
          <FontAwesomeIcon icon={faXmark} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="icon" />
        )}
      </button>
      <div className="container">
        <div className="logo">
          <h1>
            QR<span>GENERATOR</span>
          </h1>
        </div>
        <ul className="nav_list">
          <Link className={`nav_item `} to="home" smooth={true} duration={1000}>
            <p className="test"> Home</p>
          </Link>
          <Link
            className={`nav_item`}
            to="feature"
            smooth={true}
            duration={1000}
          >
            <p className="test"> Features</p>
          </Link>
          <Link className={`nav_item`} to="app" smooth={true} duration={1000}>
            <p className="test"> App</p>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
