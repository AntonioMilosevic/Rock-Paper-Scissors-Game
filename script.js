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

const displayMessage = function (message) {
  document.querySelector(".message-1").textContent = message;
};

let player = 0;
let computer = 0;
//console.log(player);

// let playerChoice = x
// Trebace mi varijabla za izbor igraca i varijabla za izbor computera
// Kada se pozovu funkcije getPlayerCh i getCompCh ovim var dodijeliti odgovarajucu vrijednost
// I onda uporediti te 2 varijable

function getPlayerChoice(e) {
  console.dir("ovo je getPlayerChoice", e.target);
  playerChoice.textContent = e.target.textContent;
  // playerChoice.textContent = e.target.id;
  player = e.target.textContent;
  console.log(player);
}

//2. Define the computer's choice function
function getComputerChoice(e) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const compChoice = choices[randomIndex];
  // computerChoice.textContent
  console.log(compChoice);
  computer = computer = compChoice.textContent;
  computerChoice.textContent = compChoice.textContent;

  // computerChoiceDisplay("click", getComputerChoice);
  // console.log(getComputerChoice);
  // return computerChoiceDisplay;
}
// function displayPlayerChoice (){
// }

function checkRound(e) {
  getPlayerChoice(e);
  getComputerChoice(e);
  console.log("Player", player);
  console.log("Computer", computer);
  roundWinner();
}

const roundWinner = function (playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displayMessage(`It's a draw`);
  }
};

rockBtn.addEventListener("click", checkRound);
//rockBtn.addEventListener("click", function () {
// console.log("click");
// });
paperBtn.addEventListener("click", checkRound);
scissorsBtn.addEventListener("click", checkRound);

//3.Game rules

// Pratit score igre , izbor playera*, izbor computera,
// napravit funkciju gdje se cuva izbor igraca i prikaze u (user interfejs)browser ,
// napravi f gdje comp bira izbor -||-
// napravi f koja pokazuje ko je dobio u toj rundi i na osnovu toga prikazati rezultat u browseru

// razlika izmedju func definition i expression
