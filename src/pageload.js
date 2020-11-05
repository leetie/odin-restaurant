import { navBar } from './components/navbar';
import { footer } from './components/footer';
import { tab } from './components/tab';
import { addListeners } from './addlisteners.js';

function pageLoad() {
    navBar();
    footer();
    tab();
    addListeners();
}

export { pageLoad };