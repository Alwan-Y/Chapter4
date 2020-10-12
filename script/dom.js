const resultDisplay = document.getElementById('gameResult')
const refresh = document.querySelector('.refresh')
const playerChoice = document.querySelectorAll('.player')
const bgComputer = document.querySelectorAll('.computer')

const getComputerChoice = () => {
    const computer = Math.random()

    if (computer < 0.34) return 'rock'
    if (computer >= 0.34 && computer < 0.67) return 'scissor'
    return 'paper'
}

let startResult = null
const getResult = (player, computer) => {
    if (player == computer) return result = 'DRAW'
    if (player == 'rock') return (computer == 'scissor') ? startResult = 'WINNER' : startResult = 'LOSER'
    if (player == 'scissor') return (computer == 'rock') ? startResult = 'LOSER' : startResult = 'WINNER'
    if (player == 'paper') return (computer == 'scissor') ? startResult = 'LOSER' : startResult = 'WINNER'
}

const turning = () => {
    const start = new Date().getTime();
    let i = 0;

    setInterval = () => {
        if (new Date().getTime() - start >= 1000) {
            clearInterval
            return
        }
    }

}

const endResult = (result) => {
    if ('DRAW' == result) {
        resultDisplay.innerHTML = 'DRAW';
        resultDisplay.style.color = 'white'
        resultDisplay.style.fontSize = '40px'
        resultDisplay.style.backgroundColor = '#1A6932'
        resultDisplay.style.padding = '20px'
    } else if ('WINNER' == result) {
        resultDisplay.innerHTML = 'PLAYER WIN';
        resultDisplay.style.color = 'white'
        resultDisplay.style.fontSize = '30px'
        resultDisplay.style.backgroundColor = '#4c9653'
        resultDisplay.style.padding = '15px'
    } else if ('LOSER' == result) {
        resultDisplay.innerHTML = 'COM WIN';
        resultDisplay.style.color = 'white'
        resultDisplay.style.fontSize = '30px'
        resultDisplay.style.backgroundColor = '#4c9653'
        resultDisplay.style.padding = '15px'
    } else {
        resultDisplay.innerHTML = 'VS';
        resultDisplay.style.backgroundColor = '#9b835f'
        resultDisplay.style.fontSize = '40pt'
        resultDisplay.style.color = '#bd0100'
        resultDisplay.style.fontWeight = 'bolder'
    }
}

let reset = ''
playerChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
        if (startResult === null) {
            const playerChoice = choice.classList[1]
            const computerChoice = getComputerChoice()
            getResult(playerChoice, computerChoice)
            choice.style.backgroundColor = '#d8d8d8'
            choice.style.padding = '5px'
            console.log(playerChoice)
            console.log(computerChoice)
            console.log(startResult)
            endResult(startResult)
            reset = choice
        } else if (startResult) {
            alert('Tekan Refresh dulu !!')
        }
    })
})

refresh.addEventListener('click', () => {
    reset.style.backgroundColor = '#9b835f'
    reset.style.padding = '0px'
    startResult = null
    console.log(startResult)
    endResult(startResult)
})