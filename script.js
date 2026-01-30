const effects = document.getElementById("effects");

const colors = [
  "#e75480",
  "#f8c8dc",
  "#a4decb",
  "#fff5ba",
  "#cdb4db"
];

// CONFETTI
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  confetti.style.animationDuration = 3 + Math.random() * 3 + "s";

  effects.appendChild(confetti);

  setTimeout(() => confetti.remove(), 6000);
}

setInterval(createConfetti, 150);

// BALLOONS
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  balloon.style.animationDuration = 8 + Math.random() * 6 + "s";

  effects.appendChild(balloon);

  setTimeout(() => balloon.remove(), 15000);
}

setInterval(createBalloon, 2500);