export const initPromoSlider = function () {
  const promo = document.querySelector('[data-slider-full]');
  const promoSlider = promo.querySelector('.swiper');
  const videos = document.querySelectorAll('.video');
  const YT = window.YT;
  let player = null;
  let players = [];

  if (!promoSlider) {
    return;
  }

  function onYouTubeIframeAPIReady(item, id) {
    if (!YT) {
      return;
    }

    player = new YT.Player(item, {
      videoId: id,
      playerVars: {
        // rel: 0,
        playsinline: 1,
      },
      events: {
        'onReady': onPlayerReady,
      },
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // Видео
  videos.forEach((item) => {
    const btnVideo = item.querySelector('.video__button');
    const frame = item.querySelector('.video__player');
    const videoID = frame.dataset.video;

    if (btnVideo) {
      btnVideo.addEventListener('click', function () {
        item.classList.add('is-show');
        onYouTubeIframeAPIReady(frame, videoID);
        players.push(player);
      });
    }
  });

  // Слайдер
  // const setTabIndex = () => {
  //   const swiperWrapper = promoSlider.querySelector('.swiper-wrapper');
  //   const allBtns = swiperWrapper.querySelectorAll('button, a, iframe');

  //   allBtns.forEach((btn) => {
  //     if (btn.closest('.swiper-slide-active')) {
  //       btn.setAttribute('tabindex', '0');
  //     } else {
  //       btn.setAttribute('tabindex', '-1');
  //     }
  //   });
  // };

  // eslint-disable-next-line
  const swiperPromoSlider = new Swiper(promoSlider, {
    autoHeight: true,
    speed: 300,
    loop: false,
    watchSlidesProgress: true,
    // slideVisibleClass: 'fullscreen__swiper-slide--active',

    pagination: {
      el: '.promo__pagination',
      bulletActiveClass: 'is-active',
      bulletClass: 'promo__pagination-bullet',
      renderBullet(index, className) {
        return '<button class="' + className + '" type="button"></button>';
      },
      clickable: true,
    },

    on: {
      // slideChangeTransitionEnd: () => {
      //   setTabIndex();
      // },
      slideChange() {
        let slide = promo.querySelector('.swiper-slide-visible');
        let slideData = slide.dataset.slide;
        if (slideData) {
          promo.dataset.slide = slideData;
        } else {
          promo.dataset.slide = '';
        }

        players.forEach((item) => {
          if (item.playerInfo.playerState === YT.PlayerState.PLAYING) {
            item.pauseVideo();
          }
        });

      },
    },
  });

  // setTabIndex();
};
