const grid = document.querySelector('.grid');
const doodler = document.createElement('div');
let isGameOver = false;
const speed = 3;
const platformCount = 5;
const platforms = [];
const score = 0;
let doodlerLeftSpace = 50;
const startPoint = 150;
let doodlerBottomSpace = startPoint;
const gravity = 0.9;
let upTimerId;
let downTimerId;
const isJumping = true;
const isGoingLeft = false;
const isGoingRight = false;
let leftTimerId;
let rightTimerId;

function createDoodler() {
  grid.appendChild(doodler);
  doodler.classList.add('doodler');
  doodlerLeftSpace = platforms[0].left;
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

function control(event) {
  doodler.style.bottom = `${doodlerBottomSpace}px`;
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  } else if (event.key === 'ArrowUp') {
    moveStraight();
  }
}

function start() {
  if (!isGameOver) {
    createPlatforms();
    createDoodler();
    setInterval(movePlatforms, 30);
    jump();
  }
}
// attach to a button
start();
