// script.js
let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides manually
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
