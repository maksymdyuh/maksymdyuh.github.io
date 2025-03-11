const selectBox = document.querySelector(".select-box"), selectBtnX = selectBox.querySelector(".options .playerX"), selectBtnO = selectBox.querySelector(".options .playerO"), playBoard = document.querySelector(".play-board"), players = document.querySelector(".players"), allBox = document.querySelectorAll("section span"), resultBox = document.querySelector(".result-box"), wonText = resultBox.querySelector(".won-text"), replayBtn = resultBox.querySelector("button");
window.onload = ()=>{
    for(let i = 0; i < allBox.length; i++)allBox[i].setAttribute("onclick", "clickedBox(this)");
};
selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
};
selectBtnO.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
};
let playerXIcon = "fas fa-times", playerOIcon = "far fa-circle", playerSign = "X", runBot = true;
function clickedBox(element) {
    if (players.classList.contains("player")) {
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.setAttribute("id", playerSign);
        players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none";
    playBoard.style.pointerEvents = "none";
    let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
    setTimeout(()=>{
        bot(runBot);
    }, randomTimeDelay);
}
function bot() {
    let array = [];
    if (runBot) {
        playerSign = "O";
        for(let i = 0; i < allBox.length; i++)if (allBox[i].childElementCount == 0) array.push(i);
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if (array.length > 0) {
            if (players.classList.contains("player")) {
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                allBox[randomBox].setAttribute("id", playerSign);
                players.classList.add("active");
            } else {
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "X";
    }
}
function getIdVal(classname) {
    return document.querySelector(".box" + classname).id;
}
function checkIdSign(val1, val2, val3, sign) {
    if (getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign) return true;
}
function selectWinner() {
    if (checkIdSign(1, 2, 3, playerSign) || checkIdSign(4, 5, 6, playerSign) || checkIdSign(7, 8, 9, playerSign) || checkIdSign(1, 4, 7, playerSign) || checkIdSign(2, 5, 8, playerSign) || checkIdSign(3, 6, 9, playerSign) || checkIdSign(1, 5, 9, playerSign) || checkIdSign(3, 5, 7, playerSign)) {
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700);
        wonText.innerHTML = `\u{413}\u{440}\u{430}\u{432}\u{435}\u{446}\u{44C} <p>${playerSign}</p> \u{43F}\u{435}\u{440}\u{435}\u{43C}\u{456}\u{433}!`;
    } else if (getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != "") {
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700);
        wonText.textContent = "\u041D\u0456\u0447\u0438\u044F!";
    }
}
replayBtn.onclick = ()=>{
    window.location.reload();
};
document.addEventListener('DOMContentLoaded', function() {
    // Отримайте елемент кнопки back-to-games
    var backButton = document.querySelector('.back-to-games button');
    // Додайте слухач подій кліку для кнопки
    backButton.addEventListener('click', function() {
        // Закрийте поточне вікно
        window.close();
    });
});

//# sourceMappingURL=tictactoe.b07a6fb7.js.map
