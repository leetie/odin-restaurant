function footer() {
    let footer = document.createElement('footer');
    footer.classList = 'page-footer fixed-bottom my-3';

    let container = document.createElement('div');
    container.classList = 'container-fluid text-center';

    let row = document.createElement('div');
    row.classList = 'row align-items-center';

    let col = document.createElement('div');
    col.classList = 'col align-items-center';

    let linkOne = document.createElement('a');
    linkOne.setAttribute('target', '_blank');
    linkOne.classList = 'nav-item nav-link footer-icon mx-2';
    linkOne.href = 'https://www.yelp.com/biz/dragon-star-chinese-restaurant-concord?start=20';
    let linkOneIcon = document.createElement('i');
    linkOneIcon.classList = 'fab fa-yelp';
    linkOne.appendChild(linkOneIcon);

    let linkTwo = document.createElement('a');
    linkTwo.setAttribute('target', '_blank');
    linkTwo.classList = 'nav-item nav-link footer-icon mx-2';
    linkTwo.href = 'https://www.tripadvisor.com/Restaurant_Review-g46052-d5042535-Reviews-Dragon_Star_Chinese_Restaurant-Concord_New_Hampshire.html';
    let linkTwoIcon = document.createElement('i');
    linkTwoIcon.classList = 'fab fa-tripadvisor';
    linkTwo.appendChild(linkTwoIcon);

    let linkThree = document.createElement('a');
    linkThree.setAttribute('target', '_blank');
    linkThree.classList = 'nav-item nav-link footer-icon mx-2';
    linkThree.href = 'https://www.google.com/maps/place/Dragon+Star/@43.2003959,-71.534841,17z/data=!3m1!5s0x89e26a8e96aea455:0x22dd89a68dd2cbda!4m7!3m6!1s0x89e26a8e8d383ae1:0xf9b806b603a003e1!8m2!3d43.200392!4d-71.5326577!9m1!1b1';
    let linkThreeIcon = document.createElement('i');
    linkThreeIcon.classList = 'fab fa-google';
    linkThree.appendChild(linkThreeIcon);

    col.appendChild(linkOne);
    col.appendChild(linkTwo);
    col.appendChild(linkThree);
    row.appendChild(col);
    container.appendChild(row);
    footer.appendChild(container);

    document.body.appendChild(footer);
}

export {footer};