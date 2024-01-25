import { useEffect, useRef } from "react";
import gsap from "gsap";

const useGeneratorAnimation = (
  generatorRef,
  generatorTitleRef,
  generatorSubtitleRef,
  qrRef
) => {
  useEffect(() => {
    let generatorTl = gsap.timeline({
      scrollTrigger: {
        trigger: generatorRef.current,
        start: "20% 75%",
      },
    });
    generatorTl
      .fromTo(
        [generatorTitleRef.current],
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
        [generatorSubtitleRef.current],
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
        [qrRef.current],
        {
          delay: 0.5,
          clipPath: "inset(100% -20% -20% -20%)",
        },
        {
          clipPath: "inset(-20% -20% -20% -20%)",
          duration: 0.5,
        }
      );
  }, [generatorRef, generatorTitleRef, generatorSubtitleRef, qrRef]);
};

export default useGeneratorAnimation;
