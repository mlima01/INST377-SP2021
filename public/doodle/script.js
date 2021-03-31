const { create } = require('cypress/types/lodash');

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
  doodler.style.left = doodlerLeftSpace + 'px';
  doodler.style.bottom = doodlerBottomSpace + 'px';
  
}
createDoodler();
