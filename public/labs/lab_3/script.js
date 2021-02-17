/* eslint-disable no-console */
// const listElems = document.querySelectorAll('li');
// function myFunction (item, index) {
//   // eslint-disable-next-line no-param-reassign
//   item.style.position = 'relative';
//   item.insertAdjacentHTML('beforeend',
//     `<span style= 'position:absolute;left:0;top:0'> ${index + 1}</span>`);
// }

const listElems = document.querySelectorAll('.pics li');
// listElems.forEach(myFunction);

const width = 140;
const count = 3;
let pos = 0;
// const next = document.getElementById('carousel__button--next');
// const prev = document.getElementById('carousel__button--prev');
const list = document.querySelectorAll('ul');
function myFunction2 (item) {
  // eslint-disable-next-line no-param-reassign
  item.style.marginLeft = `${pos}px`;
}

function moveNext() {
  // const list = document.querySelectorAll('.pics ul');
  list.forEach(myFunction2);
  pos -= width * count;
  pos = Math.max(pos, -width * (listElems.length - count));
}

function movePrev() {
  list.forEach(myFunction2);
  pos += width * count;
  pos = Math.min(pos, 0);
}

// next.addEventListener('click', moveNext(), false);
// prev.addEventListener('click', movePrev(), false);

document.querySelector('carousel__button--next').onclick = moveNext();
document.querySelector('carousel__button--prev').onclick = movePrev();