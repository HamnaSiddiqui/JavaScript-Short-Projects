let msgbtn = document.querySelector("#btn");
let input = document.querySelector(".type");
let display = document.querySelector(".msgdel");

msgbtn.addEventListener("click",displaytype);

function displaytype(){
    if(input.value == 0){
        alert("Please type something");
        return;
    }
    else{
        display.innerHTML = input.value;}
}