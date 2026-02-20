/*
const rock = "rock";
console.log(rock);

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end ..");
}

const buttons = document.querySelectorAll(".choice");
const compDisplay = document.getElementById("computer-choice");
const options = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // User choice
    const userChoice = button.dataset.option;

    // Computer choice (random)
    const compChoice = options[Math.floor(Math.random() * options.length)];
    compDisplay.innerText = compChoice;

    console.log(`User: ${userChoice}, Computer: ${compChoice}`);
    // Add logic here to determine winner
  });
}); */

//const rock = document.querySelector(".rock");
// const rock = document.getElementsByClassName("rock")[0];
//rock.addEventListener("click", function () {
// console.log("kliknuto");
//});
//console.log(rock);

//1. select elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerResult = document.getElementById("player-s");
const compResult = document.getElementById("computer-s");

//2. Define the computer's choice function
function getComputerChoice() {
  const choices = ["rock,paper, scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
}

//3.Game rules


/*
// Function to generate a random computer choice
function computerChooses() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to compare choices and determine the winner
function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

// Main game function triggered by user click
function playGame(event) {
  // Get the user's choice from the button's text content
  const userChoice = event.target.textContent;

  // Get the computer's choice
  const computerChoice = computerChooses();

  // Determine the result
  const result = compareChoices(userChoice, computerChoice);

  // Display the results
  document.getElementById("player").textContent = userChoice;
  document.getElementById("computer-choice").textContent = computerChoice;
  document.getElementById("result").textContent = result;
}

// Add event listeners to the buttons
document.getElementsByClassName(".rock").addEventListener("click", playGame);
document.getElementsByClassName(".paper").addEventListener("click", playGame);
document
  .getElementsByClassName(".scissors")
  .addEventListener("click", playGame);
*/
