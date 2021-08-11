const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .to(".footer", { y: 0, ease: "elastic" })
  .from(".postBtn", { opacity: 0, stagger: 0.7 })
  .fromTo(
    ".img",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );
