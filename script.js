let angle = 0;
function rotateCarousel() {
    angle = (angle + 1) % 360; 
    document.querySelector('.carousel-inner').style.transform = `rotateY(${angle}deg)`;
}
setInterval(rotateCarousel, 20); 
