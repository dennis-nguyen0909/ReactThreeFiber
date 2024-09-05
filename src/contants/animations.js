
import gsap, { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
export const animationsTimeline = (
  timeLine,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationsProps
) => {
  timeLine.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeLine.to(
    firstTarget,
    {
      ...animationsProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeLine.to(
    secondTarget,
    {
      ...animationsProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

export const animateWithGsap = (target, animatonProps, scrollProps) => {
  gsap.to(target, {
    ...animatonProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
