import gsap from "gsap"

export function homeAnimation(completeAnimation) {
  gsap.to("body", { css: { visibility: "visible", duration: 0 } })
  const tl = gsap.timeline()

  tl.from(".line span", {
    delay: 1,
    y: 100,
    ease: "power4.out",
    skewY: 7,
    duration: 1.8,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", {
      duration: 1.6,
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", {
      width: 0,
      duration: 1.6,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", {
      duration: 0,
      css: { display: "none" },
    })
    .from(".case-image img", {
      duration: 1.6,
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    })
}
