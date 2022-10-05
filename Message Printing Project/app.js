let msgbtn = document.querySelector("#btn");
let input = document.querySelector(".type");
let display = document.querySelector(".msgdel");

msgbtn.addEventListener("click",displaytype);

function displaytype(){
  display.innerHTML = input.value;
}