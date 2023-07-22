console.log('ook');


gsap.registerPlugin(ScrollTrigger);

gsap.to('.header__image-container', {
    scale: 1.2,
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        scrub: 0,
        pin: false,
      }
});