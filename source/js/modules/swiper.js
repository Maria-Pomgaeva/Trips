export const initSwiper = function () {
  const swiperPromo = new Swiper ('.promo__swiper', {
    pagination: {
      el: '',
      clickable: true,
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'trainers__slide--visible',
    loop: true,
    slidesPerView: 1,
  });

  // const swiperComment = new Swiper('.comment__items', {
  //   navigation: {
  //     nextEl: '.comment__swiper-button--next',
  //     prevEl: '.comment__swiper-button--prev',
  //   },

  //   watchSlidesProgress: true,
  //   slideVisibleClass: 'comment__slide--visible',
  //   loop: false,
  //   autoHeight: true,
  //   slidesPerView: 1,
  // });
};
