let cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "elastic.out"
  });
});

// Page-load animations
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
tl.from(".subcontain1 img", {
  scale: -2,
  opacity: 0,
  duration: 0.4,
});
tl.from(".subcontain2 h1", {
  y: -20,
  opacity: 0,
  duration: 0.4,
});
tl.from(".subcontain2 p", {
  y: -20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

// ScrollTrigger animation (only for devices wider than 768px)
if (window.innerWidth > 768) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".section2 .category", {
    transform: "translateX(-320%)",
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 0%",
      end: "top -170%",
      scrub: 5,
      pin: true,
    }
  });
}



const buttons = document.querySelectorAll("button"); // Selects all buttons

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.1,
      backgroundColor: "#63c19d",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
      duration: 0.3
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      backgroundColor: "#4ea384",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      duration: 0.3
    });
  });
});
