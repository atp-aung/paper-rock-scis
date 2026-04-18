// Select the button
const humanChooseButton = document.getElementById("humanChooseButton");

// Choices map
const choicesMap = {
  r: "rock",
  p: "paper",
  s: "scissors",
};

// Function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.random();
  console.log(randomNumber);

  const index = Math.floor(randomNumber * choices.length);
  console.log(index);

  return {
    choice: choices[index],
    value: randomNumber,
  };
}

// Add click event
humanChooseButton.addEventListener("click", function () {
  let userInput = prompt("type (r, p, s)");

  if (!userInput) {
    console.log("You didn't enter anything.");
    return;
  }

  userInput = userInput.toLowerCase();

  // Validate input
  if (!choicesMap[userInput]) {
    console.log("Please type r, p, or s");
    return;
  }

  // Human choice
  const humanChoice = choicesMap[userInput];
  console.log(`You chose ${humanChoice}`);

  // Computer choice
  const computer = getComputerChoice();
  console.log(
    `Computer choose ${computer.choice} and the value is ${computer.value}`,
  );
});
