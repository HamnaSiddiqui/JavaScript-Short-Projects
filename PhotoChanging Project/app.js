let nextbtn = document.querySelector("#nextbtn");
let prevbtn = document.querySelector("#prevbtn");
let display = document.querySelector(".container");

nextbtn.addEventListener("click", nextphoto);
prevbtn.addEventListener("click", prevphoto);

const counter = 0;

function nextphoto(){
    counter++;
    display.style.backgroundImage = `url(images/bcg-${counter}.jpg)`;
}

function prevphoto(){
    counter --;
    display.style.backgroundImage = `url(images/bcg-${counter}.jpg)`
}