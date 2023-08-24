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
    allowTouchMove: false,
  });

  const promoContent = new Swiper ('.promo__container-content', {
    slideVisibleClass: 'trainers__slide--visible',
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
  });

  promoImage.controller.control = promoContent;
  promoContent.controller.control = promoImage;

  const swiperTours = new Swiper ('.tours__swiper', {
    navigation: {
      prevEl: '.tours__navigation--prev',
      nextEl: '.tours__navigation--next',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'tours__slide--visible',
    allowTouchMove: false,

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

  const swiperTraining = new Swiper ('.training__swiper', {
    navigation: {
      nextEl: '.training__navigation--next',
      prevEl: '.training__navigation--prev',

    },

    watchSlidesProgress: true,
    slideVisibleClass: 'training__slide--visible',
    allowTouchMove: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const swiperReviews = new Swiper ('.reviews__swiper', {
    navigation: {
      nextEl: '.reviews__navigation--next',
      prevEl: '.reviews__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'reviews__slide--visible',
    allowTouchMove: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    },
  });

  const swiperAdv = new Swiper ('.adv__swiper', {
    navigation: {
      nextEl: '.adv__navigation--next',
      prevEl: '.adv__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'adv__slide--visible',
    allowTouchMove: false,

    breakpoints: {
      320: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 3.75,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 2,
      },
    },
  });

  const swiperGallery = new Swiper ('.gallery__swiper', {
    navigation: {
      nextEl: '.gallery__navigation--next',
      prevEl: '.gallery__navigation--prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'gallery__slide--visible',
    allowTouchMove: false,
    slidesPerColumn: 2,

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 6,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 6,
      },
    },
  });
};
