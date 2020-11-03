function addListeners() {
    let menu = document.getElementById('menu');
    let home = document.getElementById('home');
    let contact = document.getElementById('contact');
    console.log('in addlisteners.js')
    let tabs = [menu, home, contact];
    console.log(tabs);
    tabs.forEach(function(item) {
        console.log(item);
        // add listeners to item to call tab() method with its own function
    });
}

export { addListeners }