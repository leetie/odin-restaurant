function testfunc() {
  console.log('hello from navbar.js')
  // let nav = document.createElement('nav');
  // nav.classList = 'navbar navbar-expand fixed-top primary';
  // return nav
}

function navBar() {
  let target = document.getElementById('test-content');
  let nav = document.createElement('nav');
  nav.classList = 'navbar navbar-expand fixed-top primary';

  let brand = document.createElement('a');
  brand.classList = 'navbar-brand';
  brand.href = '#';

  let pepper = document.createElement('span');
  pepper.classList = 'fas fa-pepper-hot fa-2x';

  brand.appendChild(pepper);

  nav.appendChild(brand);

  target.appendChild(nav);
  //looks a little grey because picture isnt under it?

}

export {testfunc, navBar};