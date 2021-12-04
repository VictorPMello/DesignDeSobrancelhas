const slides = document.getElementById('slides');
const slidesContent = document.querySelectorAll(".slidesContent")

let idx = 0

function next(){
  idx++;
  if(idx > slidesContent.length - 1) idx = 0;
  slides.style.transform = `translateX(${-idx * 90}vw)`;
};

function prev(){
  if(idx <= 0) idx = 5;
  idx--;
  slides.style.transform = `translateX(${-idx * 90}vw)`;
};