particlesJS("stars-bg", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.7,
      random: true,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      direction: "bottom-right",
      speed: 6,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
