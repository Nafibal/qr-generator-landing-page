"use client";
import React from "react";
import qr_vector from "../../../public/assets/qrcode-2.png";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

import "./Hero.scss";
import Container from "../container/Container";

const Hero = () => {
  const heroRef = useRef();
  const heroTitleRef = useRef();
  const heroSubtitleRef = useRef();
  const heroButtonRef = useRef();
  const heroRightRef = useRef();

  useEffect(() => {
    let heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
      },
    });
    heroTl
      .fromTo(
        [heroTitleRef.current],
        {
          delay: 0.5,
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 0.5,
        }
      )
      .fromTo(
        [heroSubtitleRef.current],
        {
          delay: 0.5,
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 0.5,
        }
      )
      .fromTo(
        [heroButtonRef.current],
        {
          delay: 0.5,
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 0.1,
        }
      )
      .fromTo(
        [heroRightRef.current],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      );
  }, []);

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
            <button className="hero_button" ref={heroButtonRef}>
              Learn more
            </button>
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
