import React from "react";
import "./FeatureCard.scss";
import Image from "next/image";

const FeatureCard = ({ text, image }) => {
  return (
    <div className="feature_card">
      <Image src={image} width={280} />
      <div className="feature_info">
        <p className="feature_text">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
