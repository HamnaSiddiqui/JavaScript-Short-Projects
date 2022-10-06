const body = document.querySelector("body"),
    ball = document.querySelector(".ball");

ball.addEventListener('click', function () {
    let res = ball.classList.toggle('active');
    if(res){
        body.style.backgroundColor = "hsl(0, 0%, 90%)";
    }
    else if(ball.classList.toggle('pro')){
        body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }
    else{
        body.style.backgroundColor = "hsl(222, 26%, 31%)";

    }
})