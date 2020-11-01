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

  let text = document.createElement('span');
  text.classList = 'brand ml-4';
  text.innerHTML = 'Legacy Cuisine';
  nav.appendChild(text);

  //nav links
  let classes = 'nav-item nav-link';
  let linkOne = document.createElement('a');
  linkOne.href = '#';
  linkOne.classList = 'ml-auto nav-item nav-link';
  linkOne.innerHTML = 'Home';
  nav.appendChild(linkOne);

  let linkTwo = document.createElement('a');
  linkTwo.href = '#';
  linkTwo.classList = classes;
  linkTwo.innerHTML = 'Menu';
  nav.appendChild(linkTwo);

  let linkThree = document.createElement('a');
  linkThree.href = '#';
  linkThree.classList = classes;
  linkThree.innerHTML = 'Contact';
  nav.appendChild(linkThree);
  target.appendChild(nav);
}

export {navBar};