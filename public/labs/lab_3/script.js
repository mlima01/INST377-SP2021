const listElems = document.querySelectorAll('li').map(
  li.style.position = 'relative'
  && (li.insertAdjacentHTML('beforeend',
    "<span style= 'position:absolute;left:0;top:0'></span>"))
);

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

next.addEventListener('click', moveNext(), false);