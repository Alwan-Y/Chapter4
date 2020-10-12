const getComputerChoice = () => {
    const computer = Math.random()

    if (computer < 0.34) return 'rock'
    if (computer >= 0.34 && computer < 0.67) return 'scissor'
    return 'paper'
}

const getResult = (player, computer) => {
    if (player == computer) return 'DRAW'
    if (player == 'rock') return (computer == 'scissor') ? 'WINNER' : "LOSER"
    if (player == 'scissor') return (computer == 'rock') ? 'LOSER' : 'WINNER'
    if (player == 'paper') return (computer == 'scissor') ? 'LOSER' : 'WINNER'
}

const playerChoice = document.querySelectorAll('.player')
playerChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.classList[1]
        const computerChoice = getComputerChoice()
        const result = getResult(playerChoice, computerChoice)
        console.log(playerChoice)
        console.log(computerChoice)
        console.log(result)
    })
})

const resultDisplay = document.getElementById('gameResult')
const refresh = document.querySelector('.refresh')