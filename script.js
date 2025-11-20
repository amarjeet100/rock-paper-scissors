 const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = checkWinner(userChoice, computerChoice);

        resultText.textContent = `You: ${userChoice} | Computer: ${computerChoice} → ${winner}`;
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(user, computer) {
    if (user === computer) return "Draw!";
    
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    }

    return "You Lose!";
}
