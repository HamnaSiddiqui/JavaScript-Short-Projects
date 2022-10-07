const body = document.querySelector("body"),
  ball = document.querySelector(".ball");

ball.addEventListener("click", function () {
  const hasActive = ball.classList.contains("active");
  const hasPro = ball.classList.contains("pro");
  const hasMoveBack = ball.classList.contains("move-back");

  if (!hasActive && !hasPro) {
    ball.classList.add("active");
    ball.classList.add("move-back");

    body.style.backgroundColor = "hsl(0, 0%, 90%)";
  } 
  else if (hasActive && !hasPro && hasMoveBack) {
    ball.classList.remove("active");
    ball.classList.remove("move-back");
    ball.classList.add("pro");

    body.style.backgroundColor = "hsl(268, 75%, 9%)";
  } 
  else if (!hasActive && hasPro) {
    ball.classList.remove("pro");
    ball.classList.add("active");
    
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
  } 
  else if (hasActive && !hasPro && !hasMoveBack) {
    ball.classList.remove("active");

    body.style.backgroundColor = "hsl(222, 26%, 31%)";
  }
});
