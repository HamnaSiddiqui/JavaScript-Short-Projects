let btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let equalbtn = document.querySelector(".btn-equal");
let clearbtn = document.querySelector(".btn-clear");

for(let i=0; i < btn.length; i++){
    btn[i].addEventListener('click',function(){
        let number = btn[i].getAttribute('data-num');
        screen.value += number;
    })
}

equalbtn.addEventListener('click', function(){
    let val = eval(screen.value);
    screen.value = val;
})


clearbtn.addEventListener('click',function(){
    screen.value = '';
})