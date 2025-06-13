document.addEventListener("DOMContentLoaded", async () => {
  const { tsParticles } = window;
  if (!tsParticles) return;

  await tsParticles.load("tsparticles", {
    particles: {
      number: { value: 20 },
      size: { value: 2 },
      move: { enable: true, speed: 0.3 },
      opacity: { value: 0.1 },
      color: { value: "#ffffff" }
    },
    background: { color: "#000000" },
    fullScreen: { enable: false }
  });
});
