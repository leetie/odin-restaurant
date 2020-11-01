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
    linkOne.classList = 'nav-item nav-link footer-icon mx-2';
    linkOne.href = '#';
    let linkOneIcon = document.createElement('i');
    linkOneIcon.classList = 'fab fa-twitter';
    linkOne.appendChild(linkOneIcon);

    let linkTwo = document.createElement('a');
    linkTwo.classList = 'nav-item nav-link footer-icon mx-2';
    linkTwo.href = '#';
    let linkTwoIcon = document.createElement('i');
    linkTwoIcon.classList = 'fab fa-facebook';
    linkTwo.appendChild(linkTwoIcon);

    let linkThree = document.createElement('a');
    linkThree.classList = 'nav-item nav-link footer-icon mx-2';
    linkThree.href = '#';
    let linkThreeIcon = document.createElement('i');
    linkThreeIcon.classList = 'fab fa-instagram';
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