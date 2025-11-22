const telegramUrl = 'https://t.me/+6i_IEET22FBhMWY1';

// Button click redirect
const joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', () => {
  joinBtn.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(0.97)' },
      { transform: 'scale(1)' }
    ],
    { duration: 300, easing: 'ease-out' }
  );

  window.open(telegramUrl, '_blank');
});

// Auto Redirect Timer (5 sec)
let timeLeft = 15;
const autoTimer = document.getElementById('autoTimer');

function startAutoRedirect() {
  autoTimer.textContent = `Redirecting in ${timeLeft} sec...`;

  if (timeLeft === 0) {
    window.location.href = telegramUrl;
    return;
  }

  timeLeft--;
  setTimeout(startAutoRedirect, 1000);
}

startAutoRedirect();

// Card entrance animation
window.addEventListener('load', () => {
  const card = document.querySelector('.card');
  card.style.opacity = 0;
  card.style.transform = 'translateY(16px)';

  setTimeout(() => {
    card.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.9,.3,1)';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, 80);
});

