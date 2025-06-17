
// particles.js — PS3-style drifting particles
tsParticles.load("particles-bg", {
  fpsLimit: 60,
  background: { color: "#000000" },
  particles: {
    number: { value: 85, density: { enable: true, area: 900 } },
    color: { value: ["#ff0044", "#00e0ff", "#8a2be2"] },
    shape: { type: "circle" },
    opacity: { value: 0.2, random: true },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      outModes: { default: "bounce" },
      straight: false
    }
  },
  detectRetina: true
});
