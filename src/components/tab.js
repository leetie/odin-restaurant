import { contact } from './tabs/contact';
import { home } from './tabs/home';
import { menu } from './tabs/menu';
function clearTab() {
  
}
function tab(content=home) {
  // content is html content, default will be home tab with no args   
  //clear values on page and append content
  content();
}


export { tab }
