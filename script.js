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

const rock = document.querySelector(".rock");
// const rock = document.getElementsByClassName("rock")[0];
rock.addEventListener("click", function () {
  console.log("kliknuto");
});
console.log(rock);
