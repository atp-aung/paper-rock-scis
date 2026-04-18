const tess1 = function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

const tess2 = function getHumanChoice() {
  const signButton = document.querySelector("#humanChooseButton");
  const log = document.querySelector("#log");

  signButton.addEventListener("click", () => {
    let sign = prompt("What's your sign?");

    if (sign === null) {
      log.innerText = "OK, maybe next time.";
    } else if (sign.toLowerCase() === "") {
      log.innerText = "Don't be shy, enter your sign!";
    } else if (sign.toLowerCase() === "scorpio") {
      log.innerText = "Wow! I'm a Scorpio too!";
    } else {
      log.innerText = `${sign} is my favorite!`;
    }
  });
};

module.exports = { tess1, tess2 };
