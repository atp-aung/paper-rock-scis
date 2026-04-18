// const tess1 = function getComputerChoice() {
//   const randomNumber = Math.random();
//   if (randomNumber < 1 / 3) {
//     return "rock";
//   } else if (randomNumber < 2 / 3) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// };

// const tess2 = function getHumanChoice() {
//   const signButton = document.querySelector("#humanChooseButton");
//   const log = document.querySelector("#log");

//   signButton.addEventListener("click", () => {
//     let sign = prompt(`type (p,r,s)`);

//     if (sign === null) {
//       log.innerText = "OK, maybe next time.";
//     } else if (sign.toLowerCase() === "") {
//       log.innerText = "Don't be shy, enter your sign!";
//     } else if (sign.toLowerCase() === "p") {
//       log.innerText = "you choose paper";
//     } else if (sign.toLowerCase() === "r") {
//       log.innerText = "you choose rock";
//     }
//   });
// };

function getHumanChoice() {
  // Select the button
  const button = document.getElementById("humanChooseButton");

  // Add click event
  button.addEventListener("click", function () {
    let userInput = prompt("Enter your name:");

    if (userInput !== null && userInput !== "") {
      alert("Hello, " + userInput + "!");
    } else {
      alert("You didn't enter anything.");
    }
  });
}

//module.exports = { tess1, tess2 };
//module.exports = tess1;
