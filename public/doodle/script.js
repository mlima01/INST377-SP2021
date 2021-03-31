const grid = document.querySelector('.grid');
const doodler = document.createElement('div');
const isGameOver = false;
const speed = 3;
const platformCount = 5;
const platforms = [];
const score = 0;
const doodlerLeftSpace = 50;
const startPoint = 150;
const doodlerBottomSpace = startPoint;
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
  doodler.style.left = `${doodlerLeftSpace}px`;
  doodler.style.bottom = `${doodlerBottomSpace}px`;
}

class Platform {
    constructor(newPlatBottom){
        this.bottom = newPlatBottom
        this.left = Math.random() * 315
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
    }
}

function createPlatforms() {
  for (let i = 0; i < platformCount; i++) {
    let platformSpace = 600 / platformCount;
    let newPlatBottom = 100 + i * platGap
    let newPlatform = new Platform()

  }
}

function start() {
  if (!isGameOver) {
    createDoodler();
  }
}
// attach to a button
start();
