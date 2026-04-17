function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

test("getComputerChoice returns valid options", () => {
  const choices = ["rock", "paper", "scissors"];
  for (let i = 0; i < 100; i++) {
    // Run many times to cover all branches
    const result = getComputerChoice();
    expect(choices).toContain(result);
  }
});
