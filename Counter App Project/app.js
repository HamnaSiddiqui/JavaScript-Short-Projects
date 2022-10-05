let lowerbtn = document.querySelector(".lowercount");
let addbtn = document.querySelector(".addcount");
let counter = document.querySelector(".count");

let count = 0;


lowerbtn.addEventListener("click", lowercount);
addbtn.addEventListener("click", addcount);

function lowercount(){
    count ++;
    counter.innerHTML = count;
    if(count>0){
        counter.style.color = "green";
    }
}

function addcount(){
    count --;
    counter.innerHTML = count;
    if(count<0){
        counter.style.color = "red";
    }
}