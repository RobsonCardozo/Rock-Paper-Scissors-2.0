let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(word){
    if (word === "r") return "Rock";
    if (word === "p") return "Paper";
    if (word === "s") return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(compChoice)}. You WIN!!! 🔥`;
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(compChoice)} beats ${convert(userChoice)}. You LOSE... 😢`;
}

function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Both have choose ${convert(userChoice)}... It's a DRAW! 😖`;
}

function game (userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
           lose(userChoice, compChoice);
           break;
        case "rr":
        case "pp":
        case "ss":
           draw(userChoice, compChoice);
            break;
    }
}

function main () {
    rock_div.addEventListener("click", function () {
        game("r");   
    })

    paper_div.addEventListener("click", function () {
        game("p");   
    })

    scissors_div.addEventListener("click", function () {
        game("s");   
    })
}

main();