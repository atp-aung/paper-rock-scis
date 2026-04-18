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

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return `comp choose rock`;
  } else if (randomNumber < 2 / 3) {
    return `comp choose paper`;
  } else {
    return `comp choose scissors`;
  }
}

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

function humannn() {
  console.log("testing");
  let userInput = prompt(`type rock, paper or scissors`);

  let compChoice = getComputerChoice();

  if (userInput === "" || userInput === null) {
    console.log(`type something`);
  } else if (userInput === "rock") {
    console.log(`you typed rock`);
    console.log(`${compChoice}`);
  } else if (userInput === "paper") {
    console.log(`you typed paper`);
    console.log(`${compChoice}`);
  } else if (userInput === "scissors") {
    console.log(`you typed scissors`);
    console.log(`${compChoice}`);
  } else {
    console.log(`wrong type`);
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

humannn();
