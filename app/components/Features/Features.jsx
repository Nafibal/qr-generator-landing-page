"use client";
import React, { useEffect, useRef } from "react";

import "./Features.scss";
import Container from "../container/Container";
import FeatureCard from "./FeatureCard";

import featureImg1 from "../../../public/assets/feature/QR_Code-amico.png";
import featureImg2 from "../../../public/assets/feature/QR_Code-rafiki.png";
import featureImg3 from "../../../public/assets/feature/QR_Code-bro.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFeaturesAnimation from "@/app/hooks/useFeaturesAnimation";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef();
  const featureTitleRef = useRef();
  const featureSubtitleRef = useRef();

  // Animation
  useFeaturesAnimation(featuresRef, featureTitleRef, featureSubtitleRef);

  return (
    <section className="features" id="feature" ref={featuresRef}>
      <Container>
        <div className="feature_container">
          <h2 className="feature_title" ref={featureTitleRef}>
            More than just a tool
          </h2>
          <h4 className="feature_subtitle" ref={featureSubtitleRef}>
            Create your own customizable QR Code!
          </h4>
          <div className="feature_card_container">
            <FeatureCard
              text="Generating QR codes with customizable data."
              image={featureImg1}
            />
            <FeatureCard
              text="Displaying generated QR codes."
              image={featureImg2}
            />
            <FeatureCard text="Customizable Color" image={featureImg3} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
