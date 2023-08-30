
export const initSwiper = function () {
// eslint-disable-next-line
  const promoImage = new Swiper ('.promo__container-image', {
    pagination: {
      el: '.promo__pagination',
      clickable: true,
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'promo__slide--visible',
    loop: true,
    slidesPerView: 1,
    simulateTouch: false,
  });
  // eslint-disable-next-line
  const promoContent = new Swiper ('.promo__container-content', {
    slideVisibleClass: 'promo__slide--visible',
    loop: true,
    slidesPerView: 1,
    simulateTouch: false,
  });

  promoImage.controller.control = promoContent;
  promoContent.controller.control = promoImage;
  // eslint-disable-next-line
  const swiperTours = new Swiper ('.tours__swiper', {
    navigation: {
      nextEl: '.tours__navigation--next',
      prevEl: '.tours__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'tours__slide--visible',
    simulateTouch: false,

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
  // eslint-disable-next-line
  const swiperTraining = new Swiper ('.training__swiper', {
    navigation: {
      nextEl: '.training__navigation--next',
      prevEl: '.training__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'training__slide--visible',
    simulateTouch: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // eslint-disable-next-line
  const swiperReviews = new Swiper ('.reviews__swiper', {
    navigation: {
      nextEl: '.reviews__navigation--next',
      prevEl: '.reviews__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'reviews__slide--visible',
    simulateTouch: false,
    watchSlidesVisibility: true,

    preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1.25,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
  });

  if (document.documentElement.clientWidth > 1199) {
  // eslint-disable-next-line
    const swiperAdv = new Swiper ('.adv__swiper', {
      navigation: {
        nextEl: '.adv__navigation--next',
        prevEl: '.adv__navigation--prev',
      },

      watchSlidesProgress: true,
      slideVisibleClass: 'adv__slide--visible',
      simulateTouch: false,

      slidesPerView: 3.5,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 2,
    });
  }

  // eslint-disable-next-line
  const swiperGallery = new Swiper ('.gallery__swiper', {
    navigation: {
      nextEl: '.gallery__navigation--next',
      prevEl: '.gallery__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'gallery__slide--visible',
    simulateTouch: false,
    slidesPerColumn: 2,
    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 2.75,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
    },
  });
};
