/* Put your javascript in here */

let listElems = document.querySelectorAll('.pics img')
const array1 = Array.from(listElems)

let position = 0;

carousel.querySelector('.arrowprev').onclick = function() {
    position += width * 2;
}
