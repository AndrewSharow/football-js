let scores = 0
let loses = 0
gates.addEventListener("click", event => {
    const gatesRect = document.querySelector("#gates").getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
    const points = document.getElementById("score");
    let xCor = event.clientX - gatesRect.x;
    let yCor = event.clientY - gatesRect.y;
    ball.style.left = xCor - (ballRect.width/2) + 'px';
    ball.style.top = yCor - (ballRect.height/2) + 'px';
    if (parseInt(ball.style.left) > gatesRect.left - gatesRect.x + 25 && parseInt(ball.style.left) + ballRect.width < gatesRect.right - gatesRect.x -25 && parseInt(ball.style.top) > gatesRect.top - gatesRect.y + 25 && parseInt(ball.style.top) + ballRect.height < gatesRect.bottom - gatesRect.y - 145){
        scores ++;
        points.innerHTML = `${loses}:${scores}`;
        setTimeout("[ball.style.left, ball.style.top] = [200 + 'px', 300 + 'px']", 1000);
    }
    else {
        if (parseInt(ball.style.left) < gatesRect.left - gatesRect.x){
            ball.style.left = gatesRect.left - gatesRect.x + "px";
        }
        if (parseInt(ball.style.left) + ballRect.width > gatesRect.right - gatesRect.x){
            ball.style.left = gatesRect.right - gatesRect.x - ballRect.width + "px";
        }
        if (parseInt(ball.style.top) < gatesRect.top - gatesRect.y){
            ball.style.top = gatesRect.top - gatesRect.y + "px";
        }
        if (parseInt(ball.style.top) + ballRect.height > gatesRect.bottom - gatesRect.y){
            ball.style.top = gatesRect.bottom - gatesRect.y - ballRect.height + "px";
        }
        loses ++;
        points.innerHTML = `${loses}:${scores}`;
    }
    // Получаем поинт если координата нажатия больше чем нижняя граница ворот
    // setTimeout
});