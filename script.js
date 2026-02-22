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

function getPlayerChoice() {
  //const
  console.log("click");
  rockBtn.textContent = "Toni";
}

rockBtn.addEventListener("click", getPlayerChoice);
//rockBtn.addEventListener("click", function () {
// console.log("click");
// });

//2. Define the computer's choice function
function getComputerChoice() {
  const choices = ["rock,paper, scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  return computerChoice;
}

//3.Game rules

  

// Pratit score igre , izbor playera, izbor computera, 
// napravit funkciju gdje se cuva izbor igraca i prikaze u (user interfejs)browser , 
// napravi f gdje comp bira izbor -||- 
// napravi f koja pokazuje ko je dobio u toj rundi i na osnovu toga prikazati rezultat u browseru