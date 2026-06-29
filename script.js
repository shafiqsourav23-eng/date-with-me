// Shared helpers for the date-invitation pages.

// Continuously spawn floating hearts in the background.
(function floatHearts() {
  const container = document.querySelector('.floating-hearts');
  if (!container) return;
  const symbols = ['💕', '💖', '💗', '💞', '🌸', '💘', '❤️'];
  setInterval(function () {
    const heart = document.createElement('span');
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = 16 + Math.random() * 22 + 'px';
    heart.style.animationDuration = 6 + Math.random() * 6 + 's';
    container.appendChild(heart);
    setTimeout(function () { heart.remove(); }, 12000);
  }, 600);
})();

// Wire up an options grid: clicking selects, saves to localStorage, enables Next.
function setupOptions(containerId, storageKey, nextBtnId) {
  const container = document.getElementById(containerId);
  const nextBtn = document.getElementById(nextBtnId);
  if (!container) return;

  container.querySelectorAll('.option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      container.querySelectorAll('.option').forEach(function (o) {
        o.classList.remove('selected');
      });
      opt.classList.add('selected');
      localStorage.setItem(storageKey, opt.dataset.value);
      if (nextBtn) nextBtn.classList.remove('disabled');
    });
  });
}

// Burst of confetti for the final page.
function launchConfetti() {
  const container = document.getElementById('confetti');
  if (!container) return;
  const symbols = ['💖', '💕', '🎉', '✨', '💗', '🌸', '💝'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('span');
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.fontSize = 14 + Math.random() * 18 + 'px';
    piece.style.animationDuration = 2.5 + Math.random() * 3 + 's';
    piece.style.animationDelay = Math.random() * 1.5 + 's';
    container.appendChild(piece);
  }
}
