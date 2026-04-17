const tess = require("./script");

describe("computerChoice", function () {
  test("getComputerChoice returns valid options", () => {
    const choices = ["rock", "paper", "scissors"];
    for (let i = 0; i < 100; i++) {
      expect(choices).toContain(tess());
    }
  });
});
