function buyGatherer(){
    if (game.bananas >= getGathererPrice()){
        game.bananas -= getGathererPrice()
        game.gatherers += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getGathererPrice(){
    var price = 10000
    for (let i = 0; i < game.gatherers; i++) {
        price *= 1.5
    }
    return Math.round(price)
}