//1. select elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const buttons = document.querySelectorAll("button");


const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerResult = document.getElementById("player-s");
const compResult = document.getElementById("computer-s");

const choices = ["rock,paper, scissors"];

function getPlayerChoice() {
  //const
  console.log("click");
  //rockBtn.textContent = "Toni";
  // if (("click", rockBtn)) {
  //   playerChoice.textContent = "✊🏿";
  // } else if (("click", paperBtn)) {
  //   playerChoice.textContent = "✋🏿";
  //   return playerChoice;
  // }
  playerChoice.textContent = choices;
}

playerChoice.textContent;

rockBtn.addEventListener("click", getPlayerChoice);
//rockBtn.addEventListener("click", function () {
// console.log("click");
// });
paperBtn.addEventListener("click", getPlayerChoice);
scissorsBtn.addEventListener("click", getPlayerChoice);

//2. Define the computer's choice function
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  // computerChoice.textContent
  return computerChoice;
}

//3.Game rules
if (playerChoice === computerChoice) {
}
// Pratit score igre , izbor playera, izbor computera,
// napravit funkciju gdje se cuva izbor igraca i prikaze u (user interfejs)browser ,
// napravi f gdje comp bira izbor -||-
// napravi f koja pokazuje ko je dobio u toj rundi i na osnovu toga prikazati rezultat u browseru
