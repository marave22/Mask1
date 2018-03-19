var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var mySlides = document.getElementsByClassName("slide_content");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > mySlides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    mySlides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}