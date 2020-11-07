function menu() {
  // menu stuff
  console.log('rendering menu elements');
  let tab = document.getElementById('tab');
  let picture = document.createElement('img');
  picture.src = '../../../assets/images/main.jpg';
  picture.classList = 'img img-fluid'

  let container = document.createElement('div');
  container.classList = 'container';

  tab.appendChild(picture);
}

export { menu }