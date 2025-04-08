const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

yesBtn.onclick = () => {
  alert("БУМ! Фейерверки и песня!");
  song.play();
  startFireworks();
  createHearts();
};

noBtn.onmouseover = () => {
  const i = Math.random() * (window.innerWidth - 100);
  const j = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
};

// Функция фейерверка
function startFireworks() {
  const colors = ["red", "yellow", "blue", "green", "purple", "white"];
  setInterval(() => {
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fill();
    }
  }, 500);
}

// Функция сердечек
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 200);
}
