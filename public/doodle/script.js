const grid = document.querySelector('.grid');
const doodler = document.createElement('div');
let isGameOver = false;
let speed = 3;
let platformCount = 5;
let platforms = [];
let score = 0;
let doodlerLeftSpace = 50;
const startPoint = 150;
let doodlerBottomSpace = startPoint;
const gravity = 0.9;
let upTimerId;
let downTimerId;
const isJumping = true;
let isGoingLeft = false;
let isGoingRight = false;
let leftTimerId;
let rightTimerId;

function createDoodler() {
  grid.appendChild(doodler);
  doodler.classList.add('doodler');
  doodler.style.left = `${doodlerLeftSpace}px`;
  doodler.style.bottom = `${doodlerBottomSpace}px`;
}

class Platform {
  constructor(newPlatBottom) {
    this.bottom = newPlatBottom;
    this.left = Math.random() * 315;
    this.visual = document.createElement('div');

    const {visual} = this;
    visual.classList.add('platform');
    visual.style.left = `${this.left}px`;
    visual.style.bottom = `${this.bottom}px`;
    grid.appendChild(visual);
  }
}

function createPlatforms() {
  for (let i = 0; i < platformCount; i++) {
    const platGap = 600 / platformCount;
    const newPlatBottom = 100 + i * platGap;
    const newPlatform = new Platform(newPlatBottom);
    platforms.push(newPlatform);
    console.log(platforms);
  }
}

function movePlatforms() {
  if (doodlerBottomSpace > 200) {
    platforms.forEach((platform) => {
      platform.bottom -= 4;
      const {visual} = platform;
      visual.style.bottom = `${platform.bottom}px`;
    });
  }
}

function gameOver() {
  console.log('Game Over');
  isGameOver = true;
  clearInterval(upTimerId);
  clearInterval(downTimerId);
}

function fall() {
  clearInterval(upTimerId);
  downTimerId = setInterval(() => {
    doodlerBottomSpace -= 5;
    doodler.style.bottom = `${doodlerBottomSpace}px`;
    if (doodlerBottomSpace <= 0) {
      gameOver();
    }
  }, 30);
}

function jump() {
  clear(downTimerId);
  upTimerId = setInterval(() => {
    doodlerBottomSpace += 20;
    doodler.style.bottom = `${doodlerBottomSpace}px`;
    if (doodlerBottomSpace > 350) {
      fall();
    }
  }, 30);
}
function start() {
  if (!isGameOver) {
    createDoodler();
    createPlatforms();
    setInterval(movePlatforms, 30);
    jump();
  }
}
// attach to a button
start();
