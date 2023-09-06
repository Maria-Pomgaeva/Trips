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

  // eslint-disable-next-line
  const promoImage = new Swiper('.promo__swiper-image', {

    watchSlidesProgress: true,
    slideVisibleClass: 'promo__slide--visible',
    loop: true,
    slidesPerView: 1,
    simulateTouch: false,
  });
  // eslint-disable-next-line
  const promoContent = new Swiper('.promo__swiper-content', {
    pagination: {
      el: '.promo__pagination',
      clickable: true,
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'promo__slide--visible',
    loop: true,
    slidesPerView: 1,
    simulateTouch: false,

    on: {
      slideChange() {
        players.forEach((item) => {
          if (item.playerInfo.playerState === YT.PlayerState.PLAYING) {
            item.pauseVideo();
          }
        });

      },
    },
  });


  promoImage.controller.control = promoContent;
  promoContent.controller.control = promoImage;
};
