// Variables
let userScore = 0;
let compScore = 0;

/* Constants */
//span
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
//p
const result_p = document.querySelector(".result > p");
//div
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Functions of player inputs
function main () {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
}

//Get computer input by random
function getCompChoice() {
    //all choices available in a array
    const choices = ['r', 'p', 's'];
    //Math.floor is to "unfloat" the number, makes it an integer, and Math.random times 3 to limited it to 3 choices.
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//Conditionals to test all posibilities of win/lose/draw
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

//Function to convert r, p, s to readable words to show on results
function convert(word){
    if (word === "r") return "Rock";
    if (word === "p") return "Paper";
    if (word === "s") return "Scissors";
}

//Win Function: add userScore, updates scores and show message at results
function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(compChoice)}. You WIN!!! 🔥`;
}

//Lose Function: add compScore, updates scores and show message at results
function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convert(compChoice)} beats ${convert(userChoice)}. You LOSE... 😢`;
}

//Draw Function: nobody wins, updates scores (just to maintain the code working) and show message at results
function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Both have choose ${convert(userChoice)}... It's a DRAW! 😖`;
}

main();