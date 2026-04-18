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
