
import layoutView from './views/layoutView.js';
import './renderEngine.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("panel").appendChild(layoutView());
});
