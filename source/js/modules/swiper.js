export const initSwiper = function () {
<<<<<<< HEAD
  const promoImage = new Swiper ('.promo__container-image', {
    pagination: {
      el: '.swiper-pagination',
=======
  const swiperPromo = new Swiper ('.promo__swiper', {
    pagination: {
      el: '',
>>>>>>> 2f8e1db8eeb4fbf74a8c89c95f98e7845ee87400
      clickable: true,
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'trainers__slide--visible',
    loop: true,
    slidesPerView: 1,
  });

<<<<<<< HEAD
  const promoContent = new Swiper ('.promo__container-content', {
    slideVisibleClass: 'trainers__slide--visible',
    loop: true,
    slidesPerView: 1,
  });

  promoImage.controller.control = promoContent;
  promoContent.controller.control = promoImage;
=======
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
>>>>>>> 2f8e1db8eeb4fbf74a8c89c95f98e7845ee87400
};
