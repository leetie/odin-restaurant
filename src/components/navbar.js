function navBar() {
  //root
  let target = document.getElementById('navbar');
  let nav = document.createElement('nav');
  nav.classList = 'navbar navbar-expand-md fixed-top navbar-dark bg-dark';

  let brand = document.createElement('a');
  brand.classList = 'navbar-brand';

  let bowl = document.createElement('img');
  bowl.src = './images/bowl.png';
  bowl.style = 'width: 40px; height: 40px;'
  brand.appendChild(bowl);

  let toggler = document.createElement('button');
  toggler.classList = 'navbar-toggler';
  toggler.type = 'button';
  toggler.setAttribute('aria-controls', 'navbarNav');
  toggler.setAttribute('data-toggle', 'collapse');
  toggler.setAttribute('data-target', '#navbarNav');
  toggler.setAttribute('aria-expanded', 'false');
  toggler.setAttribute('aria-label', 'Toggle navigation');

  let togglerIcon = document.createElement('span');
  togglerIcon.classList = 'navbar-toggler-icon';
  toggler.appendChild(togglerIcon);

  let text = document.createElement('span');
  text.classList = 'brand';
  text.innerHTML = 'Dragonstar';

  let collapsible = document.createElement('div');
  collapsible.classList = 'collapse navbar-collapse';
  collapsible.id = 'navbarNav';

  let unorderList = document.createElement('ul');
  unorderList.classList = 'navbar-nav ml-auto';

  //nav links
  let linkOneLi = document.createElement('li');
  linkOneLi.classList = 'nav-item';
  let linkOne = document.createElement('a');
  linkOne.setAttribute('data-toggle', 'collapse');
  linkOne.setAttribute('data-target', '#navbarNav');
  linkOne.href = '';
  linkOne.classList = 'nav-link'
  linkOne.innerHTML = 'Home';
  linkOne.id = 'home';
  linkOneLi.appendChild(linkOne);
  unorderList.appendChild(linkOneLi);

  let linkTwoLi = document.createElement('li');
  linkTwoLi.classList = 'nav-item';
  let linkTwo = document.createElement('a');
  linkTwo.setAttribute('data-toggle', 'collapse');
  linkTwo.setAttribute('data-target', '#navbarNav');
  linkTwo.id = 'menu-link';
  linkTwo.href = '#menu-select';
  linkTwo.classList = 'nav-link';
  linkTwo.innerHTML = 'Menu';
  linkTwoLi.appendChild(linkTwo);
  unorderList.appendChild(linkTwoLi);

  let linkThreeLi = document.createElement('li');
  linkThreeLi.classList = 'nav-item';
  let linkThree = document.createElement('a');
  linkThree.setAttribute('data-toggle', 'collapse');
  linkThree.setAttribute('data-target', '#navbarNav');
  linkThree.id = 'contact';
  linkThree.href = '';
  linkThree.classList = 'nav-link';
  linkThree.innerHTML = 'Contact';
  linkThreeLi.appendChild(linkThree);
  unorderList.appendChild(linkThreeLi);

  nav.appendChild(brand);
  nav.appendChild(text);
  nav.appendChild(toggler);

  collapsible.appendChild(unorderList);
  nav.appendChild(collapsible);
  target.appendChild(nav);
}

export {navBar};