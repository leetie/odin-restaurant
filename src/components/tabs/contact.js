import { checkPlatform } from '../../checkplatform';

function contact() {
  // contact form! 
  // show location on google map, and add links for yelp maybe?
  // email contact form

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
  `;

  let tab = document.getElementById('tab');
  tab.innerHTML = `
    <div class="container text-center">
      <h2>We Would love to hear from you!</h2>
      <h4>Please consider leaving us a review on <a href="https://www.google.com/maps/place/Dragon+Star/@43.2003959,-71.534841,17z/data=!3m1!5s0x89e26a8e96aea455:0x22dd89a68dd2cbda!4m7!3m6!1s0x89e26a8e8d383ae1:0xf9b806b603a003e1!8m2!3d43.200392!4d-71.5326577!9m1!1b1" target="_blank">Google!</a></h4>

      <div class="row">
        <div class="col">
        <a id="mapLink" href="#">
            <img
            id="map"
            class="img img-fluid"
            src="https://maps.googleapis.com/maps/api/staticmap?center=Dragon+Star+Concord,NH&size=600x300&markers=color:red|Dragon+Star+Concord+NH&key=${process.env.MAP_KEY}"
            alt="map"
            />
        </a>
        </div>
      </div>
    </div>
  `

  let map = document.getElementById('mapLink');
  // check for platform and conditionally generate either google or apple link
  switch (checkPlatform()) {
    case 'iOS':
      map.href = 'http://maps.apple.com/?daddr=1600+Amphitheatre+Pkwy,+Mountain+View+CA';
      break;
    case 'Linux':
      map.href = 'https://whispering-everglades-16718.herokuapp.com/'
      break;
    default:
      map.href = 'http://maps.apple.com/?daddr=1600+Amphitheatre+Pkwy,+Mountain+View+CA';
      break;
  }
}

export { contact }