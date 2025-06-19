
import emails_inboxView from './views/emails_inboxView.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = emails_inboxView();
  const main = document.getElementById("mainView");
  if (main) {
    main.appendChild(root);
  } else {
    console.error("Main view container not found.");
  }
});
