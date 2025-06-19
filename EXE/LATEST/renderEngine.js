
import emails_inbox from './views/emails_inboxView.js';

const VIEWS = {
  emails_inbox
};

export function renderView(viewName, props = {}) {
  const container = document.getElementById('mainView');
  if (!container) return;
  container.innerHTML = '';
  const renderFn = VIEWS[viewName];
  if (renderFn) {
    try {
      const view = renderFn(props);
      container.appendChild(view);
    } catch (err) {
    console.error('View render error:', err);
      container.innerHTML = `<div class='error'>Error rendering view '${viewName}'.</div>`;
    }
  } else {
    container.innerHTML = `<div class='error'>View '${viewName}' not found.</div>`;
  }
}
