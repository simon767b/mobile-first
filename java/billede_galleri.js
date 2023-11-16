let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    currentSlide = index;
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3; // Handling wrap-around for previous
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3; // Handling wrap-around for next
    showSlide(currentSlide);
}