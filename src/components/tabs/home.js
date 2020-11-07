import { el, mount } from 'redom';
function home() {
  const tab = document.getElementById('tab');
  const container = el(
    'div', {
      class: 'container text-center'
    }
  );
  const jumbotron = el(
    '.jumbotron.notice'
  );
  mount(container, jumbotron);
  mount(tab, container);
}

export { home }