"use client";
import React from "react";
import qr_vector from "../../../public/assets/qrcode-2.png";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

import "./Hero.scss";
import Container from "../container/Container";
import useHeroAnimation from "@/app/hooks/UseHeroAnimation";

const Hero = () => {
  const heroRef = useRef();
  const heroTitleRef = useRef();
  const heroSubtitleRef = useRef();
  const heroButtonRef = useRef();
  const heroRightRef = useRef();

  // Animation
  useHeroAnimation(
    heroRef,
    heroTitleRef,
    heroSubtitleRef,
    heroButtonRef,
    heroRightRef
  );

  return (
    <section className="hero" ref={heroRef} id="home">
      <Container>
        <div className="hero_info">
          <div className="hero_left">
            <h1 className="hero_title" ref={heroTitleRef}>
              QR-GENERATOR
            </h1>
            <h3 className="hero_subtitle" ref={heroSubtitleRef}>
              QR-Generator is an app for you to discover and customize a huge
              variety of generated QR codes.
            </h3>
            <Link to="feature" smooth={true} duration={1000}>
              <button className="hero_button" ref={heroButtonRef}>
                Learn more
              </button>
            </Link>
          </div>
          <div className="hero_right" ref={heroRightRef}>
            <div>
              <Image src={qr_vector} width={600} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
