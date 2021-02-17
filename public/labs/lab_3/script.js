// const listElems = document.querySelectorAll('li').map(
//   li.style.position = 'relative'
//   && (li.insertAdjacentHTML('beforeend',
//     "<span style= 'position:absolute;left:0;top:0'></span>"))
// );

// const listElems = document.querySelectorAll('li');
function myFunction (item) {
  // eslint-disable-next-line no-param-reassign
  item.style.position = 'relative';
  item.insertAdjacentHTML('beforeend',
    "<span style= 'position:absolute;left:0;top:0'></span>");
}
const listElems = document.querySelectorAll('li').forEach(myFunction);

const list = document.querySelectorAll('ul');
const width = 130;
const count = 3;
let pos = 0;
const next = document.getElementById('carousel__button--next');
const prev = document.getElementById('carousel__button--prev');

function moveNext() {
  pos -= width * count;
  pos = Math.max(pos, -width * (listElems.length - count));
  list.style.marginLeft = `${pos}px`;
}

function movePrev() {
  pos += width * count;
  pos = Math.min(pos, 0);
  list.style.marginLeft = `${pos}px`;
}

next.addEventListener('click', moveNext());
prev.addEventListener('click', movePrev());