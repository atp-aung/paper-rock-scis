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

function playGame(ev) {
  const computerChoice = getComputerChoice();
  const humanChoice = ev.target.textContent.toLowerCase();

  console.log(`You: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose!\n${computerChoice} beats ${humanChoice}`);
  }

  console.log(`------------------------------`);
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", playGame);

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
btnPaper.addEventListener("click", playGame);

btnPaper.addEventListener("mouseover", () => {
  btnPaper.style.backgroundColor = "black";
  btnPaper.style.color = "white";
});

btnPaper.addEventListener("mouseout", () => {
  btnPaper.style.backgroundColor = "white";
  btnPaper.style.color = "black";
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", playGame);

btnScissors.addEventListener("mouseover", () => {
  btnScissors.style.backgroundColor = "black";
  btnScissors.style.color = "white";
});

btnScissors.addEventListener("mouseout", () => {
  btnScissors.style.backgroundColor = "white";
  btnScissors.style.color = "black";
});

// function playGame() {
//   console.log(`Human chose: ${humanChoice}`);
//   console.log(`Computer chose: ${computerChoice}`);

//   const result = playRound(humanChoice, computerChoice);

//   if (result === "human") {
//     humanScore++;
//   } else if (result === "computer") {
//     computerScore++;
//   } else {
//     console.log(`return ${result} only`);
//   }

//   console.log(`Score => Human: ${humanScore}, Computer: ${computerScore}`);

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
