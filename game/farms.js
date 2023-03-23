function buyFarm(){
    if (game.bananas >= getFarmPrice()){
        game.bananas -= getFarmPrice()
        game.farms += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getFarmPrice(){
    var price = 20
    for (let i = 0; i < game.farms; i++) {
        price *= 1.1
    }
    return Math.round(price)
}