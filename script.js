const slider = document.getElementById('slider');

  function slideLeft() {
    slider.scrollBy({ left: -302, behavior: 'smooth' });
    highlightCenterCard();
  }

  function slideRight() {
    slider.scrollBy({ left: 302 , behavior: 'smooth' });
    highlightCenterCard();
  }

  function highlightCenterCard() {
    const cards = document.querySelectorAll('.slider-card');
    const sliderRect = slider.getBoundingClientRect();

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const sliderCenter = sliderRect.left + sliderRect.width / 2;
      const isCentered = Math.abs(cardCenter - sliderCenter) < cardRect.width / 2;
      card.classList.toggle('centered', isCentered);
    });
  }

  window.addEventListener('load', highlightCenterCard);
  slider.addEventListener('scroll', () => {
    clearTimeout(window._centerTimer);
    window._centerTimer = setTimeout(highlightCenterCard, 100);
  });

       function openModal() {
      document.getElementById('requestModal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('requestModal').style.display = 'none';
    }

const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const overlayImg = document.getElementById('videoOverlay');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.classList.remove('play-icon');
    playPauseBtn.classList.add('pause-icon');
    overlayImg.style.display = 'none';
  } else {
    video.pause();
    playPauseBtn.classList.remove('pause-icon');
    playPauseBtn.classList.add('play-icon');
  }
});

video.addEventListener('ended', () => {
  playPauseBtn.classList.remove('pause-icon');
  playPauseBtn.classList.add('play-icon');
});

 // Show the counter and hide initial plus
    document.querySelectorAll('.initial-plus').forEach(plusBtn => {
      plusBtn.addEventListener('click', function () {
        const wrapper = this.closest('.counter-wrapper');
        this.style.display = 'none';
        wrapper.querySelector('.counter').style.display = 'flex';
      });
    });

    // Handle increment
    document.querySelectorAll('.increment').forEach(btn => {
      btn.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.quantity');
        input.value = parseInt(input.value) + 1;
      });
    });

    // Handle decrement
    document.querySelectorAll('.decrement').forEach(btn => {
      btn.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.quantity');
        const val = parseInt(input.value);
        if (val > 1) {
          input.value = val - 1;
        }
      });
    });
