console.log("💣 preload loaded (FULL TRACE MODE)");

window.addEventListener("load", () => {
  console.log("💣 DOM fully loaded (window.load)");

  document.addEventListener("click", (e) => {
    const target = e.target;
    console.log("🖱️ Click detected:");
    console.log("  🔹 target:", target);
    console.log("  🔹 outerHTML:", target?.outerHTML?.slice(0, 300));
    console.log("  🔹 id:", target.id);
    console.log("  🔹 class:", target.className);
    console.log("  🔹 text:", target.textContent?.slice(0, 100));

    let path = [];
    let node = target;
    while (node) {
      path.unshift(`${node.tagName?.toLowerCase() || '?'}${node.id ? '#' + node.id : ''}`);
      node = node.parentElement;
    }
    console.log("  📂 DOM path:", path.join(" > "));

    const modal = document.getElementById("settingsModal");
    if (target.closest && target.closest('#MODGPTICON')) {
      console.log("✅ MODGPTICON click detected — toggling modal");
      if (modal) {
        modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
        console.log("✅ Modal state changed:", modal.style.display);
      } else {
        console.warn("⚠️ No settingsModal found.");
      }
    }
  }, true);
});
