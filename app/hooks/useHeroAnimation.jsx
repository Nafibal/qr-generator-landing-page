import { useEffect, useRef } from "react";
import gsap from "gsap";

const useHeroAnimation = (
  heroRef,
  heroTitleRef,
  heroSubtitleRef,
  heroButtonRef,
  heroRightRef
) => {
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
  }, [heroRef, heroTitleRef, heroSubtitleRef, heroButtonRef, heroRightRef]);
};

export default useHeroAnimation;
