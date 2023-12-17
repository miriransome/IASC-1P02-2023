//Main Page https://www.w3schools.com/howto/howto_js_typewriter.asp Accessed Dec.15, 2023
var i = 0;
var txt = 'The Blog';
var speed = 100;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("mainhead").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

//Cinema page - slideshow https://www.w3schools.com/howto/howto_js_slideshow.asp Accessed Dec. 11, 2023
let slideIndex = 1;
showSlides(slideIndex);

//Next and previous Buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("stills");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
