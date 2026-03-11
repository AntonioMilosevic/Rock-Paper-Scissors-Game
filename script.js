//1. select elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const emojis = document.getElementsByClassName(".emojis");

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerDisplay = document.getElementById("player-s");
const compDisplay = document.getElementById("computer-s");

const choices = [rockBtn, paperBtn, scissorsBtn];

const displayMessage1 = function (result, message) {
  document.querySelector(".message-1").textContent = result;
  document.querySelector(".message-2").textContent = message;
};
// const displayMessage2 = function (message) {
//   document.querySelector(".message-2").textContent = message;
// };

// let ako se vrijednost mijenja, const ako je konstantna

let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let playing = true;

const winningScore = 5;
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

function updateScore() {
  playerDisplay.textContent = playerScore;
  compDisplay.textContent = computerScore;
}

function resetGame() {
  if (playerScore === winningScore) {
    displayMessage1("Player wins the game!");
    playing = false;
  }
  if (computerScore === winningScore) {
    displayMessage1("Computer wins the game!");
    playing = false;
  }
}

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

  computer = compChoice.textContent;
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
  // ako igra nije aktivna, funkcija se ne izvrsava
  if (!playing) return;

  getPlayerChoice(e);
  getComputerChoice();
  console.log("Player", player);
  console.log("Computer", computer);
  roundWinner();
}
//
const roundWinner = function () {
  console.log("Ovo je player", player);
  console.log("Ovo je computer", computer);

  if (player === computer) {
    // player === "rock" && computer === "rock";
    displayMessage1(
      "It's a draw",
      `${player.charAt(0).toUpperCase() + player.slice(1)} 
      ties with
      ${computer}`,
      // za veliko slovo prve rijeci
    );
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    displayMessage1(
      "Player wins",
      `${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}`,
    );
    playerScore++;
    console.log("ovo je playerScore");
  } else {
    displayMessage1(
      "Computer wins",
      `${
        computer.charAt(0).toUpperCase() + computer.slice(1)
      } beats ${player} `,
    );
    computerScore++;
  }
  updateScore();
  resetGame();
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
