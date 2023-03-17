function buyPicker(){
    if (game.bananas >= getPickerPrice()){
        game.bananas -= getPickerPrice()
        game.pickers += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getPickerPrice(){
    var price = 50
    for (let i = 0; i < game.pickers; i++) {
        price *= 1.5
    }
    return Math.round(price)
}