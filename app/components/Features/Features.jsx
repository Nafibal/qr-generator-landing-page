import React from "react";

import "./Features.scss";
import Container from "../container/Container";
import FeatureCard from "./FeatureCard";

import featureImg1 from "../../../public/assets/feature/QR_Code-amico.png";
import featureImg2 from "../../../public/assets/feature/QR_Code-rafiki.png";
import featureImg3 from "../../../public/assets/feature/QR_Code-bro.png";

const Features = () => {
  return (
    <section className="features" id="feature">
      <Container>
        <div className="feature_container">
          <h2 className="feature_title">More than just a tool</h2>
          <h4 className="feature_subtitle">
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
