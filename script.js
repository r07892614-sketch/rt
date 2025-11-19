const joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', () => {
  const telegramUrl = 'https://t.me/+6i_IEET22FBhMWY1';
  // small pulse animation
  joinBtn.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(0.98)' },
    { transform: 'scale(1)' }
  ], { duration: 300, easing: 'ease-out' });

  // redirect to telegram
  window.open(telegramUrl, '_blank');
});

// Simple entrance animation for card
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