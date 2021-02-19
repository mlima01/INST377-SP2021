document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  const birdLeft = 220;
  let birdBottom = 100;
  const gravity = 2;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = `${birdBottom}px`;
    bird.style.left = `${birdLeft}px`;
  }
  const timerID = setInterval(startGame, 20);

  function jump() {
    if (birdBottom < 500) birdBottom += l50;
    bird.style.bottom = `${birdBottom}px`;
  }
  document.addEventListener('keyup', jump);
//   startGame();
});