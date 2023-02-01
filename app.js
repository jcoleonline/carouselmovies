const images = ["poster1.png","poster2.png","poster3.png","poster4.png","poster5.png"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
    startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add('fade');
    if( index > images.length - 1) index = 0;
}