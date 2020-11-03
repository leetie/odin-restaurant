import { contact } from './tabs/contact';
import { home } from './tabs/home';
import { menu } from './tabs/menu';
function clearTab() {

}
function tab(content=home) {
  // content is html content, default will be home tab with no args   
  //clear values on page and append content
  // on page load render home tab with home stuff, add listeners to tab buttons
  // onclick, render contents of clicked tab through this funciton... clear first, run function of desired tab
  content();
}


export { tab }
