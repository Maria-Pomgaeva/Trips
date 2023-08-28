let navHeader = document.querySelector('.header');
let navToggle = document.querySelector('.header__toggle');

export const menuOpen = () => {
  navHeader.classList.remove('header--nojs');

  navToggle.addEventListener('click', function () {
    if (navHeader.classList.contains('header--closed')) {
      navHeader.classList.remove('header--closed');
      navHeader.classList.add('header--opened');
    } else {
      navHeader.classList.add('header--closed');
      navHeader.classList.remove('header--opened');
    }
  });
};
