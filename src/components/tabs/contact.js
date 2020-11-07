import { el, mount } from 'redom';

function contact() {
  // contact stuff
  console.log('rendering contact elements');
  const hello = el("h1", "Hello RE:DOM!");
  mount(document.body, hello);

}

export { contact }