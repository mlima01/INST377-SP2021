/* eslint-disable no-console */
// const listElems = document.querySelectorAll('li');
function myFunction (item, index) {
  // eslint-disable-next-line no-param-reassign
  item.style.position = 'relative';
  item.insertAdjacentHTML('beforeend',
    `<span style= 'position:absolute;left:0;top:0'> ${index + 1}</span>`);
}

const listElems = document.querySelectorAll('.pics li');
listElems.forEach(myFunction);

const width = 130;
const count = 3;
let pos = 0;
// const next = document.getElementById('carousel__button--next');
// const prev = document.getElementById('carousel__button--prev');

document.getElementById('carousel__button--next').onclick = function moveNext() {
  const list = document.querySelectorAll('.pics ul');

  pos -= width * count;
  pos = Math.max(pos, -width * (listElems.length - count));
  list.style.marginLeft = `${pos}px`;
};

document.getElementById('carousel__button--prev').onclick = function movePrev() {
  const list = document.querySelectorAll('.pics ul');
  pos += width * count;
  pos = Math.min(pos, 0);
  console.log(pos);
  list.style.marginLeft = `${pos}px`;
};