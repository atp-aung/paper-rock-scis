// Select the button
const humanChoosebutton = document.getElementById("humanChooseButton");

// Add click event
humanChoosebutton.addEventListener("click", function () {
  let userInput = prompt(`type (p,r,s)`);

  if (userInput === null || userInput === "") {
    console.log(`You didn't enter anything.`);
  } else if (userInput.toLowerCase() === "r") {
    console.log(`You choose rock`);
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      console.log(`computer choose rock and the value is ${randomNumber}`);
    } else if (randomNumber < 2 / 3) {
      console.log(`computer choose paper and the value is ${randomNumber}`);
    } else {
      console.log(`computer choose scissors and the value is ${randomNumber}`);
    }
  } else if (userInput.toLowerCase() === "p") {
    console.log(`You choose paper`);
  } else {
    console.log(`type r,p,s`);
  }
});
