const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const newGameBtn = document.querySelector(".newGame");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const emojis = document.getElementsByClassName(".emojis");

const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerDisplay = document.getElementById("player-s");
const compDisplay = document.getElementById("computer-s");

const choices = [rockBtn, paperBtn, scissorsBtn];

const displayMessage = function (result, message) {
  document.querySelector(".message-1").textContent = result;
  document.querySelector(".message-2").textContent = message;
};

// let ako se vrijednost mijenja, const ako je konstantna

let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let playing = true;

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const newGame = function () {
  playerScore = 0;
  computerScore = 0;
  playing = true;
  closeModal();
  updateScore();
  displayMessage("Choose your weapon", "First to 5 points wins!");
};

const winningScore = 5;

function updateScore() {
  playerDisplay.textContent = playerScore;
  compDisplay.textContent = computerScore;
}

function resetGame() {
  if (playerScore === winningScore) {
    displayMessage("Player wins the game!");
    playing = false;
    openModal();
  }
  if (computerScore === winningScore) {
    displayMessage("Computer wins the game!");
    playing = false;
    openModal();
  }
}

function getPlayerChoice(e) {
  //  console.dir("ovo je getPlayerChoice", e.target);
  console.log(e.target.textContent);

  const value = e.target.id;
  const text = e.target.textContent;
  playerChoice.textContent = text;
  player = value;
}

//2. Define the computer's choice function
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const compChoice = choices[randomIndex].id;
  const compChoiceEM = choices[randomIndex].textContent;

  computer = compChoice.textContent;
  computerChoice.textContent = compChoiceEM;
  computer = compChoice;
}

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
    displayMessage(
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
    displayMessage(
      "Player wins",
      `${player.charAt(0).toUpperCase() + player.slice(1)} beats ${computer}`,
    );
    playerScore++;
    console.log("ovo je playerScore");
  } else {
    displayMessage(
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
// console.log("click");
// });
paperBtn.addEventListener("click", checkRound);
scissorsBtn.addEventListener("click", checkRound);
newGameBtn.addEventListener("click", newGame);


