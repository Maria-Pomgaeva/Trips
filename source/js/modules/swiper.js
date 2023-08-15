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
};
