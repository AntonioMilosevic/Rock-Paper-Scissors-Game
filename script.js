//1. select elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const emojis = document.getElementsByClassName(".emojis");

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerResult = document.getElementById("player-s");
const compResult = document.getElementById("computer-s");

const choices = [rockBtn, paperBtn, scissorsBtn];
// let playerChoice = x

const getPlayerChoice = function (e) {
  console.dir(e.target);
  playerChoice.textContent = e.target.textContent;
  // playerChoice.textContent = e.target.id;
};

//2. Define the computer's choice function
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const compChoice = choices[randomIndex];
  // computerChoice.textContent
  console.log(compChoice);
  computerChoice.textContent = compChoice.textContent;

  // computerChoiceDisplay("click", getComputerChoice);
  // console.log(getComputerChoice);
  // return computerChoiceDisplay;
}
// function displayPlayerChoice (){

function checkRound(e) {
  getPlayerChoice(e);
  getComputerChoice();
}

// }

rockBtn.addEventListener("click", checkRound);
//rockBtn.addEventListener("click", function () {
// console.log("click");
// });
paperBtn.addEventListener("click", getPlayerChoice);
scissorsBtn.addEventListener("click", getPlayerChoice);

//3.Game rules
if (playerChoice === computerChoice) {
}
// Pratit score igre , izbor playera*, izbor computera,
// napravit funkciju gdje se cuva izbor igraca i prikaze u (user interfejs)browser ,
// napravi f gdje comp bira izbor -||-
// napravi f koja pokazuje ko je dobio u toj rundi i na osnovu toga prikazati rezultat u browseru
