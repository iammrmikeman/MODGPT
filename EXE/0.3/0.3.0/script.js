document.addEventListener("DOMContentLoaded", async () => {
  await tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: "#000000" },
    particles: {
      number: { value: 15 },
      color: { value: "#ff0040" },
      opacity: { value: 0.05 },
      size: { value: 2 },
      move: { enable: true, speed: 0.2 },
      shape: { type: "circle" }
    }
  });
});

document.querySelectorAll('.icon-build').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: BUILD");
  });
});

document.querySelectorAll('.icon-repair').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: REPAIR");
  });
});

document.querySelectorAll('.icon-confirm').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: CONFIRM");
  });
});

document.querySelectorAll('.icon-cancel').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: CANCEL");
  });
});

document.querySelectorAll('.icon-force').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: FORCE");
  });
});

document.querySelectorAll('.icon-help').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: HELP");
  });
});

document.querySelectorAll('.icon-terms').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: TERMS");
  });
});

document.querySelectorAll('.icon-next').forEach(el => {
  el.parentElement.addEventListener('click', () => {
    console.log("[MODGPT] Clicked: NEXT");
  });
});
