import { tab } from './components/tab';

function addListeners() {
    let menu = document.getElementById('menu');
    let home = document.getElementById('home');
    let contact = document.getElementById('contact');
    console.log('in addlisteners.js')
    let tabs = [menu, home, contact];
    console.log(tabs);
    tabs.forEach(function(item) {
        // add listeners to item to call tab() method with its own function
        item.addEventListener('click', function(e) {
            tab(item.id); // will call the tab function with 'home' 'menu' or 'contact'
        })
    });
}

export { addListeners }