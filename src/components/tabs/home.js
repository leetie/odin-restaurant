function home() {
  // home stuff
  console.log('rendering home elements');
  let tab = document.getElementById('tab');
  let picture = document.createElement('img');
  picture.src = '../../../assets/images/main.jpg';
  picture.classList = 'img img-fluid'

  let container = document.createElement('div');
  container.classList = 'container';

  tab.appendChild(picture);
}

export { home }