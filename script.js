let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    console.log(`computer: rock`);
    return `rock`;
    // return `comp choose rock`;
  } else if (randomNumber < 2 / 3) {
    console.log(`computer: paper`);
    return `paper`;
    //return `comp choose paper`;
  } else {
    console.log(`computer: scissors`);
    return `scissors`;
    //return `comp choose scissors`;
  }
}

function getHumanChoice() {
  console.log("testing");
  let userInput = prompt(`type rock, paper or scissors`);

  //let compChoice = getComputerChoice();

  if (userInput === "" || userInput === null) {
    console.log(`type something`);
  } else if (userInput.toLowerCase() === "rock") {
    console.log(`human: rock`);
    return `rock`;
    //console.log(`${compChoice}`);
  } else if (userInput.toLowerCase() === "paper") {
    console.log(`human: paper`);
    return `paper`;
    //console.log(`${compChoice}`);
  } else if (userInput.toLowerCase() === "scissors") {
    console.log(`human: scissors`);
    return `scissors`;
    //console.log(`${compChoice}`);
  } else {
    console.log(`human: invalid input`);
    return `invalid human input`;
  }

  // if (!userInput) {
  //   console.log("You didn't enter anything.");
  //   return;
  // }

  // userInput = userInput.toLowerCase();

  // // Validate input
  // if (!choicesMap[userInput]) {
  //   console.log("Please type r, p, or s");
  //   return;
  // }

  // // Human choice
  // const humanChoice = choicesMap[userInput];
  // console.log(`You chose ${humanChoice}`);

  // // Computer choice
  // const computer = getComputerChoice();
  // console.log(
  //   `Computer choose ${computer.choice} and the value is ${computer.value}`,
  // );
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
  } else if (humanChoice === "invalid human input") {
    console.log(`invalid human input`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose!\n${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  console.log(`human: ${humanScore}`);
  console.log(`computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Select the button
// const humanChooseButton = document.getElementById("humanChooseButton");

// Choices map
// const choicesMap = {
//   r: "rock",
//   p: "paper",
//   s: "scissors",
// };

// Function to get computer choice
// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomNumber = Math.random();
//   console.log(randomNumber);

//   const index = Math.floor(randomNumber * choices.length);
//   console.log(index);

//   return {
//     choice: choices[index],
//     value: randomNumber,
//   };
// }

// // Add click event
// humanChooseButton.addEventListener("click", function () {
//   let userInput = prompt("type (r, p, s)");

//   if (!userInput) {
//     console.log("You didn't enter anything.");
//     return;
//   }

//   userInput = userInput.toLowerCase();

//   // Validate input
//   if (!choicesMap[userInput]) {
//     console.log("Please type r, p, or s");
//     return;
//   }

//   // Human choice
//   const humanChoice = choicesMap[userInput];
//   console.log(`You chose ${humanChoice}`);

//   // Computer choice
//   const computer = getComputerChoice();
//   console.log(
//     `Computer choose ${computer.choice} and the value is ${computer.value}`,
//   );
// });
