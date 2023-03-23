function buyPrinter() {
    if (game.bananas >= getPrinterPrice()) {
        game.bananas -= getPrinterPrice()
        game.printers += 1
        updateBananaCounter()
        updatePrices()
        updateCounters()
    }
}

function getPrinterPrice() {
    var price = 250
    for (let i = 0; i < game.printers; i++) {
        price *= 1.1
    }
    return Math.round(price)
}