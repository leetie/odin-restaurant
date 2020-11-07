function home() {
  const tab = document.getElementById('tab');
  tab.innerHTML = `
  <div class="container text-center">
  <div class="jumbotron notice">
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
}

export { home }