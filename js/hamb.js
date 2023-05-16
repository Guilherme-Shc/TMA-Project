hamburger = document.querySelector(".hamburger");
move = document.querySelector(".move");
nav = document.querySelector("nav");

hamburger.onclick = function() {
    nav.classList.toggle("active");
    move.classList.toggle("active")
}