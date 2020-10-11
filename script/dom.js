const getComputerChoice = () => {
    const computer = Math.random()

    if (computer < 0.34) return 'batu'
    if (computer >= 0.34 && computer < 0.67) return 'gunting'
    return 'scissor'
}