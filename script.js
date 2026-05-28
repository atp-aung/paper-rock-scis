let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");

function updateDisplay(message) {
  resultDiv.textContent = message;
}

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
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  const computerChoice = getComputerChoice();
  const humanChoice = ev.target.textContent.toLowerCase();

  let message = `You: ${humanChoice} \n Computer: ${computerChoice} \n`;

  console.log(`You: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
    message += "Result: Draw\n";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win!\n ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    message += "Result: You win this round!\n";
  } else {
    console.log(`You lose!\n${computerChoice} beats ${humanChoice}`);
    computerScore++;
    message += "Result: Computer wins this round!\n";
  }
  message += `Score -> You: ${humanScore} | Computer: ${computerScore}\n`;
  console.log(`------------------------------`);

  if (computerScore === 5) {
    console.log("💻 Computer wins the game!");
    message += "💻 Computer wins the game!";
  } else if (humanScore === 5) {
    console.log("🎉 Human wins the game!");
    message += "🎉 You win the game!";
  }
  updateDisplay(message);
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

// <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     button {
//       padding: 10px 20px;
//       margin: 5px;
//       font-size: 18px;
//     }

//     #result {
//       margin-top: 20px;
//       font-size: 18px;
//       font-family: Arial;
//       white-space: pre-line;
//     }
//   </style>
// </head>

// <body>

//   <button id="rock">Rock</button>
//   <button id="paper">Paper</button>
//   <button id="scissors">Scissors</button>

//   <div id="result"></div>

//   <script>
//     let humanScore = 0;
//     let computerScore = 0;

//     const resultDiv = document.getElementById("result");

//     function getComputerChoice() {
//       const choices = ["rock", "paper", "scissors"];
//       return choices[Math.floor(Math.random() * 3)];
//     }

//     function updateDisplay(message) {
//       resultDiv.textContent = message;
//     }

//     function playRound(humanChoice) {
//       if (humanScore === 5 || computerScore === 5) return;

//       const computerChoice = getComputerChoice();
//       let message = `You: ${humanChoice}\nComputer: ${computerChoice}\n`;

//       if (humanChoice === computerChoice) {
//         message += "Result: Draw\n";
//       }
//       else if (
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "paper" && computerChoice === "rock") ||
//         (humanChoice === "scissors" && computerChoice === "paper")
//       ) {
//         humanScore++;
//         message += "Result: You win this round!\n";
//       }
//       else {
//         computerScore++;
//         message += "Result: Computer wins this round!\n";
//       }

//       message += `Score -> You: ${humanScore} | Computer: ${computerScore}\n`;

//       if (humanScore === 5) {
//         message += "🎉 You win the game!";
//       }

//       if (computerScore === 5) {
//         message += "💻 Computer wins the game!";
//       }

//       updateDisplay(message);
//     }

//     document.getElementById("rock")
//       .addEventListener("click", () => playRound("rock"));

//     document.getElementById("paper")
//       .addEventListener("click", () => playRound("paper"));

//     document.getElementById("scissors")
//       .addEventListener("click", () => playRound("scissors"));

//   </script>

// </body>
// </html>
