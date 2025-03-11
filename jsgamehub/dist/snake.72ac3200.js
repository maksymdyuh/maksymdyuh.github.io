const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `\u{420}\u{435}\u{43A}\u{43E}\u{440}\u{434}: ${highScore}`;
const updateFoodPosition = ()=>{
    // Passing a random 1 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};
const handleGameOver = ()=>{
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("\u0412\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043B\u0438! \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E...");
    location.reload();
};
const changeDirection = (e)=>{
    // Changing velocity value based on key press
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
};
// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach((button)=>button.addEventListener("click", ()=>changeDirection({
            key: button.dataset.key
        })));
const initGame = ()=>{
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    // Checking if the snake hit the food
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([
            foodY,
            foodX
        ]); // Pushing food position to snake body array
        score++; // increment score by 1
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `\u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}: ${score}`;
        highScoreElement.innerText = `\u{420}\u{435}\u{43A}\u{43E}\u{440}\u{434}: ${highScore}`;
    }
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;
    // Shifting forward the values of the elements in the snake body by one
    for(let i = snakeBody.length - 1; i > 0; i--)snakeBody[i] = snakeBody[i - 1];
    snakeBody[0] = [
        snakeX,
        snakeY
    ]; // Setting first element of snake body to current snake position
    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) return gameOver = true;
    for(let i = 0; i < snakeBody.length; i++){
        // Adding a div for each part of the snake's body
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) gameOver = true;
    }
    playBoard.innerHTML = html;
};
updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);
document.addEventListener('DOMContentLoaded', function() {
    // Отримайте елемент кнопки back-to-games
    var backButton = document.querySelector('.back-to-games button');
    // Додайте слухач подій кліку для кнопки
    backButton.addEventListener('click', function() {
        // Закрийте поточне вікно
        window.close();
    });
});

//# sourceMappingURL=snake.72ac3200.js.map
