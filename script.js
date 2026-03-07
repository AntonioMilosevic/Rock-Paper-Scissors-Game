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
const displayMessage = function (message) {
  document.querySelector(".message-2").textContent = message;
};

// let ako se vrijednost mijenja, const ako je konstantna

let player;
let computer;
let playerScore = 0;
let computerScore = 0;

// let playerChoice = x
// Trebace mi varijabla za izbor igraca i varijabla za izbor computera
// Kada se pozovu funkcije getPlayerCh i getCompCh ovim var dodijeliti odgovarajucu vrijednost
// I onda uporediti te 2 varijable

function getPlayerChoice(e) {
  //  console.dir("ovo je getPlayerChoice", e.target);
  console.log(e.target.textContent);

  const value = e.target.id;
  const text = e.target.textContent;
  playerChoice.textContent = text;
  player = value;

  //playerChoice.textContent = e.target.textContent;
  // player = e.target.textContent;
  // console.log(player);
}

//2. Define the computer's choice function
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const compChoice = choices[randomIndex].id;
  const compChoiceEM = choices[randomIndex].textContent;

  computer = computer = compChoice.textContent;
  computerChoice.textContent = compChoiceEM;
  computer = compChoice;

  // computerChoiceDisplay("click", getComputerChoice);
  // console.log(getComputerChoice);
  // return computerChoiceDisplay;
}
// function displayPlayerChoice (){
// }

function checkRound(e) {
  // console.log(e);
  getPlayerChoice(e);
  getComputerChoice();
  console.log("Player", player);
  console.log("Computer", computer);
  roundWinner();
}

const roundWinner = function () {
  console.log("Ovo je player", player);
  console.log("Ovo je computer", computer);

  if (player === computer) {
    displayMessage("It's a draw");
    console.log("Draw");
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    displayMessage("Player wins");
    console.log("Player wins");
  } else {
    displayMessage("Computer wins");
    console.log("COmp wins");
  }
};
// if (player === computer) {
//   // displayMessage(`It's a draw`);
//   console.log(player, computer, player === computer);
// }

//   if (player ===rockBtn && computer===scissorsBtn,
//     player=== scissorsBtn && computer === paperBtn,
//     player===paperBtn && computer === rockBtn,
//   ){
//     displayMessage('Player wins')
//     playerScore=playerScore+1  ili ++
//   } else {
//     displayMessage ('Computer wins')
//     computerScore=computerScore+1
//   }

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
