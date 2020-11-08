import { renderSelection } from './render-menu';

function addSelectionListeners() {
  let selectEl = document.getElementById('menu-select');
  selectEl.addEventListener('change', function() {
    renderSelection(selectEl.value);
  });
}

export { addSelectionListeners }