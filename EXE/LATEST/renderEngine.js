
// renderEngine.js – Dynamic view loader with full fallback support

export function renderView(viewName) {
  const panel = document.getElementById("mainView") || document.getElementById("panel");
  if (!panel) return console.error("No panel container found");

  const modulePath = `./views/${viewName}View.js`;

  import(modulePath)
    .then(module => {
      if (typeof module.default === 'function') {
        panel.innerHTML = "";
        panel.appendChild(module.default());
      } else if (typeof module.render === 'function') {
        panel.innerHTML = "";
        panel.appendChild(module.render());
      } else {
        panel.innerHTML = `<p>✅ Loaded: ${viewName}, but no render function exported.</p>`;
      }
    })
    .catch(err => {
      console.warn(`[MODGPT] View '${viewName}' not found or failed to load:`, err);
      panel.innerHTML = `
        <div style="padding:20px;">
          <h2>⚠️ View Not Found</h2>
          <p>No JS view found for: <code>${viewName}</code></p>
          <p>This is a fallback screen.</p>
        </div>
      `;
    });
}
