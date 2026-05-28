let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return `rock`;
  } else if (randomNumber < 2 / 3) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

// function getHumanChoice() {
//   //let userInput = prompt(`type rock, paper or scissors`);

//   if (userInput === "" || userInput === null) {
//     console.log(`type something`);
//     return "nothing";
//   } else if (userInput.toLowerCase() === "rock") {
//     return `rock`;
//   } else if (userInput.toLowerCase() === "paper") {
//     return `paper`;
//   } else if (userInput.toLowerCase() === "scissors") {
//     return `scissors`;
//   } else {
//     console.log(`invalid input`);
//     return `invalid input`;
//   }
// }

function getHumanChoice(ev) {
  const humanChoice = ev.target.textContent;
  if (humanChoice.toLowerCase() === "rock") {
    console.log(humanChoice);
    return `rock`;
  } else if (humanChoice.toLowerCase() === "paper") {
    console.log(humanChoice);
    return `paper`;
  } else {
    console.log(humanChoice);
    return `scissors`;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
  } else if (humanChoice === "nothing" || humanChoice === "invalid input") {
    console.log(`nothing or invalid`);
    //return "invalid";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`You lose!\n${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", getHumanChoice);

btnRock.addEventListener("mouseover", () => {
  btnRock.style.backgroundColor = "black";
  btnRock.style.color = "white";
});

btnRock.addEventListener("mouseout", () => {
  btnRock.style.backgroundColor = "white";
  btnRock.style.color = "black";
});

// btnRock.addEventListener("mousedown", () => {
//   btnRock.style.backgroundColor = "yellow";
//   btnRock.style.color = "black";
// });

// btnRock.addEventListener("mouseup", () => {
//   btnRock.style.backgroundColor = "green";
//   btnRock.style.color = "white";
// });

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", getHumanChoice);

btnPaper.addEventListener("mouseover", () => {
  btnPaper.style.backgroundColor = "black";
  btnPaper.style.color = "white";
});

btnPaper.addEventListener("mouseout", () => {
  btnPaper.style.backgroundColor = "white";
  btnPaper.style.color = "black";
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", getHumanChoice);

btnScissors.addEventListener("mouseover", () => {
  btnScissors.style.backgroundColor = "black";
  btnScissors.style.color = "white";
});

btnScissors.addEventListener("mouseout", () => {
  btnScissors.style.backgroundColor = "white";
  btnScissors.style.color = "black";
});

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`--- Round ${i} ---`);

//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();

//     console.log(`Human chose: ${humanChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     const result = playRound(humanChoice, computerChoice);

//     if (result === "human") {
//       humanScore++;
//     } else if (result === "computer") {
//       computerScore++;
//     } else {
//       console.log(`return ${result} only`);
//     }

//     console.log(`Score => Human: ${humanScore}, Computer: ${computerScore}`);
//   }

//   console.log(`--- Final Result ---`);

//   if (humanScore > computerScore) {
//     console.log("You are the overall winner!");
//   } else if (computerScore > humanScore) {
//     console.log("Computer is the overall winner!");
//   } else {
//     console.log("The game is a tie!");
//   }
// }

// playGame();
