import { useEffect, useRef } from "react";
import gsap from "gsap";

const useFeaturesAnimation = (
  featuresRef,
  featureTitleRef,
  featureSubtitleRef
) => {
  useEffect(() => {
    let featureCard = gsap.utils.toArray(".feature_card");
    let featureTl = gsap.timeline({
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "20% 75%",
      },
    });
    featureTl
      .fromTo(
        [featureTitleRef.current],
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
        [featureSubtitleRef.current],
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
        featureCard,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.25,
        },
        ">-0.5s"
      );
  }, [featuresRef, featureTitleRef, featureSubtitleRef]);
};

export default useFeaturesAnimation;
