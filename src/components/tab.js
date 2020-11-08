import { contact } from './tabs/contact';
import { home } from './tabs/home';
import { menu } from './tabs/menu';
function clearTab() {
  // get root for tab, clear content
  let tab = document.getElementById('tab');
  tab.innerHTML = '';
}

function tab(content='home') {
  switch(content) {
    case 'home':
      clearTab();
      home();
      break;
    case 'menu-link':
      clearTab();
      menu();
      break;
    case 'contact':
      clearTab();
      contact();
      break;
  }
}


export { tab }
