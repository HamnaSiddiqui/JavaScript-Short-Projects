const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const image = document.querySelector('.image');

left.addEventListener("click", () => {
    slider.style.transform = `translateX(29em)`;
})