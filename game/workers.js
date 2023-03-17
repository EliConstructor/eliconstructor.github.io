function buyWorker(){
    if (game.bananas >= getWorkerPrice()){
        game.bananas -= getWorkerPrice()
        game.workers += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getWorkerPrice(){
    var price = 1000
    for (let i = 0; i < game.workers; i++) {
        price *= 1.5
    }
    return Math.round(price)
}