function buyGenerator() {
    if (game.bananas >= getGeneratorPrice()) {
        game.bananas -= getGeneratorPrice()
        game.generators += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getGeneratorPrice() {
    var price = 10000
    for (let i = 0; i < game.generators; i++) {
        price *= 1.1
    }
    return Math.round(price)
}