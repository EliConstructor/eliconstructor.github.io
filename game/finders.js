function buyFinder() {
    if (game.bananas >= getFinderPrice()) {
        game.bananas -= getFinderPrice()
        game.finders += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getFinderPrice() {
    var price = 3000
    for (let i = 0; i < game.finders; i++) {
        price *= 1.1
    }
    return Math.round(price)
}