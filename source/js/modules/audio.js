const audio = document.querySelector('.audio__player');
const link = document.querySelector('.audio__button');

export const audioLoad = () => {
  if (link && audio) {
    link.addEventListener('click', () => {
      if (audio.classList.contains('active')) {
        return;
      }
      let src = audio.dataset.src;
      audio.classList.add('active');
      audio.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" frameborder="0" style="border:none;width:100%;" width="100%" height="220" ></iframe>');
    });

  }
};
