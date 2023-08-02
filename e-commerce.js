const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav =  document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',() => {
     nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',() => {
     nav.classList.remove('active')
    })
}

// ========================================================================
let row = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")
let btn= document.getElementById("remove")
btn.addEventListener("click",function(){
  row.remove();
  console.log("clicked")
})


let btn2= document.getElementById("remove2")
btn2.addEventListener("click",function(){
  row2.remove();
})

let btn3= document.getElementById("remove3")
btn3.addEventListener("click",function(){
  row3.remove();
})

// shop-by========================================================

corusal-slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide)


// cart=====================================================================






