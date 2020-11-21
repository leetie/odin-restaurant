function home() {
  const tab = document.getElementById('tab');
  tab.innerHTML = `
    <div class="container text-center notice">
      <div class="jumbotron notice">
        <div class="row">
          <i class="fa fa-times-circle fa-2x ml-auto" aria-hidden="true"></i>
        </div>
        <h1 class="display-4">Notice</h1>
        <p class="lead">
          We are pleased to announce that we will resume normal operations on
          July 28.<br />
          We look forward to serving you once again
        </p>
        <hr class="my-4" />
        <p>
          We are committed to following state guidelines to provide safe
          service for you.
        </p>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg"
            href="https://www.nh.gov/covid19/resources-guidance/businesses.htm"
            target="_blank"
            role="button"
            >Learn more</a
          >
        </p>
      </div>
    </div>
  `;

  let closeNotice = document.getElementsByClassName('notice')[0];
  closeNotice.addEventListener('click', function() {
    closeNotice.style = 'display: none';
  });


  // set carousel images back to home
  let carousel = document.getElementById('carouselInner');
  carousel.innerHTML = `
  <div class="carousel-item active">
  <img
    class="d-block w-100"
    src="./images/main.jpg"
    alt="dishes"
  />
  </div>
  <div class="carousel-item">
  <img
    class="d-block w-100"
    src="./images/noodles.jpg"
    alt="noodles"
  />
  </div>
  <div class="carousel-item">
  <img
    class="d-block w-100"
    src="./images/orange-chicken.jpg"
    alt="orange chicken"
  />
  </div>
  <div class="carousel-item">
  <img
    src="./images/ribs.jpg"
    alt="ribs"
    class="d-block w-100"
  />
  </div>
  <div class="carousel-item">
  <img
    src="./images/rice.jpg"
    alt="rice"
    class="d-block w-100"
  />
  </div>
  <div class="carousel-item">
  <img
    src="./images/steak.jpg"
    alt="steak"
    class="d-block w-100"
  />
  </div>
  `;
}

export { home }