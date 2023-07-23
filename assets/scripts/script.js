gsap.registerPlugin(ScrollTrigger);

gsap.timeline({})
.to('main', { overflow: 'hidden', height: "100vh"})
.to('main', { clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)", duration: 1 })
.to('main', { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 })
.to('main', { overflow: 'auto', height: "auto"})
.fromTo('.header__content', { opacity: 0, y: 25 }, { opacity: 1, duration: 2, y: 0 })

gsap.fromTo('.shadow', {opacity: 0, y: 25}, { opacity: 1, y: 0, scrollTrigger: {
    trigger: "header",
    start: "bottom bottom",
    end: "+=100",
    scrub: true,
} });

gsap.fromTo('nav', {opacity: 0}, { opacity: 1, scrollTrigger: {
    trigger: "header",
    start: "bottom top",
    end: "+=100",
    scrub: true,
} });

gsap.to('.header__image-container', {
    scale: 1.2,
    opacity: .2,
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        scrub: 0,
      }
});