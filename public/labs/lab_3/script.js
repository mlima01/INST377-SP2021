/* Put your javascript in here */
document.addEventListener('click', (event) => {
  const listElems = document.querySelectorAll('li');
  const array1 = Array.from(listElems);
  let currentpos = 0;
  const width = 130;
  const count = 3;
  const pos = width * count;
  const next = document.querySelector('.arrownext');
  const prev = document.querySelector('.arrowprev');

  function myFunction2() {
    currentpos -= pos;
    li.style.marginLeft = `${currentpos}px`;
  }
  function prevFunc() {
    array1.forEach(myFunction2());
  }
  prev.addEventListener('click', () => {
    // go to previous slide on click of the button
    prevFunc();
  });

  function myFunction1() {
    currentpos += pos;
    li.style.marginRight = `${currentpos}px`;
  }
  function nextFunc() {
    array1.forEach(myFunction1());
  }

  next.addEventListener('click', () => {
    // go to next slide on click of the button
    nextFunc();
  });
});
