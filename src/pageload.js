import { navBar } from './components/navbar';
import { footer } from './components/footer';
import { tab } from './components/tab'

function pageLoad() {
    navBar();
    footer();
    tab();
}

export { pageLoad };