var tl = gsap.timeline();
tl.from("nav h1", {
  y: -20,
  opacity: 0,
  duration: 0.5,
});
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2
});

