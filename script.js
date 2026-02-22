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

paperBtn.addEventListener("click", getPlayerChoice);
scissorsBtn.addEventListener("click", getPlayerChoice);

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
