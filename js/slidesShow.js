const slides = document.getElementById('slides');
const slidesContent = document.querySelectorAll(".slidesContent");
// * Posição do slide mostrado

let idx = 0
// * Posição inicial

function next(){
  idx++;
  if(idx > slidesContent.length - 1) { idx = 0; }
  slides.style.transform = `translateX(${-idx * 90}vw)`;
  // ? Mudança no CSS
};

function prev(){
  if(idx <= 0) idx = 5;
  idx--;
  slides.style.transform = `translateX(${-idx * 90}vw)`;
  // ? Mudança no CSS
};