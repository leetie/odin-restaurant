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
}

export { home }