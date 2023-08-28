const video = document.querySelector('.video__player');
const link = document.querySelector('.video__button');

export const videoLoad = () => {
  if (link && video) {
    link.addEventListener('click', () => {
      if (video.classList.contains('active')) {
        return;
      }
      let src = video.dataset.src;
      video.classList.add('active');
      video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    });
  }
};
