// guessing_game.js
let targetNumber;
let guesses = [];
let attempts = 0;
const maxAttempts = 10;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    attempts = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("guessed-numbers").textContent = "";

    // Show guess form and hide start button
    document.getElementById("guess-form").style.display = "block";
    document.getElementById("start-button").style.display = "none";
}

function makeGuess(event) {
    event.preventDefault();
    const guessInput = document.getElementById("guess");
    const guess = parseInt(guessInput.value);
    guessInput.value = "";
    guessInput.focus();

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("请输入一个有效的数字 (1-100)！");
        return;
    }

    guesses.push(guess);
    attempts++;

    let resultText;
    if (guess === targetNumber) {
        resultText = `恭喜你！猜对了数字 ${targetNumber}。`;
        document.getElementById("guess-form").style.display = "none";
        document.getElementById("start-button").style.display = "block";
    } else if (attempts >= maxAttempts) {
        resultText = `游戏结束！你没有猜对数字。正确的数字是 ${targetNumber}。`;
        document.getElementById("guess-form").style.display = "none";
        document.getElementById("start-button").style.display = "block";
    } else {
        resultText = guess < targetNumber ? "猜测太低！" : "猜测太高！";
    }

    document.getElementById("result").textContent = resultText;
    document.getElementById("guessed-numbers").textContent = "你已猜测的数字: " + guesses.join(", ");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-button").addEventListener("click", startGame);
    document.getElementById("guess-form").addEventListener("submit", makeGuess);
});
