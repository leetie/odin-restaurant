function contact() {
  // contact form! 
  // show location on google map, and add links for yelp maybe?
  // email contact form
  console.log('rendering contact elements');

  // change carousel items to show 'local' chefs
  let carousel = document.getElementById('carouselInner');
  carousel.innerHTML = `
    <div class="carousel-item active">
      <img
        class="d-block w-100"
        src="../assets/images/chef-1.jpg"
        alt="chef"
      />
    </div>
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src="../assets/images/chef-3.jpg"
        alt="chef"
      />
    </div>
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src="../assets/images/chef-4.jpg"
        alt="chef"
      />
    </div>
  `
}

export { contact }