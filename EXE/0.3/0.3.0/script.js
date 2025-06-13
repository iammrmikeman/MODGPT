document.addEventListener("DOMContentLoaded", async () => {
  const { tsParticles } = window;
  if (!tsParticles) return;

  await tsParticles.load("tsparticles", {
    particles: {
      number: { value: 18 },
      size: { value: 1.5 },
      move: { enable: true, speed: 0.25 },
      opacity: { value: 0.08 },
      color: { value: "#ffffff" }
    },
    background: { color: "#000000" },
    fullScreen: { enable: false }
  });
});
