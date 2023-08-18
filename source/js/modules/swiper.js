export const initSwiper = function () {
  const promoImage = new Swiper ('.promo__container-image', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'trainers__slide--visible',
    loop: true,
    slidesPerView: 1,
  });

  const promoContent = new Swiper ('.promo__container-content', {
    slideVisibleClass: 'trainers__slide--visible',
    loop: true,
    slidesPerView: 1,
  });

  promoImage.controller.control = promoContent;
  promoContent.controller.control = promoImage;

  const swiperTours = new Swiper ('.tours__swiper', {
    navigation: {
      nextEl: '.tours__navigation--next',
      prevEl: '.tours__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'tours__slide--visible',
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
