function buyGoblin() {
    if (game.bananas >= getGoblinPrice()) {
        game.bananas -= getGoblinPrice()
        game.goblins += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getGoblinPrice() {
    var price = 1000
    for (let i = 0; i < game.goblins; i++) {
        price *= 1.1
    }
    return Math.round(price)
}