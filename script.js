const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('music');

yesBtn.addEventListener('click', () => {
  music.play();
  launchFireworks();
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * window.innerWidth - 100);
  const y = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function launchFireworks() {
  alert('БУМ! Фейерверки и песня!');
  // Тут может быть реальная анимация фейерверков
}
