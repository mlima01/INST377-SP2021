const listElems = document.querySelectorAll('li');
const array1 = Array.from(listElems);
let list = document.querySelectorAll('ul');
const width = 130;
const count = 3;
let pos = 0;
const next = document.querySelector('.carousel__button--next');
const prev = document.querySelector('.carousel__button--prev');

array1.map(
  li.style.position = 'relative'
  && li.insertAdjacentHTML('beforeend',
    ("<span style='position:absolute;left:0;top:0'></span>"))
);

function moveNext() {
  pos -= width * count;
  pos = Math.min(position, 0);
  list.style.marginLeft = `${pos}px`;
}

next.addEventListener('click', () => {
  // go to next slide on click of the button
  moveNext();
});
