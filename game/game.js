const defaultGame = {
    bananas: 0,
    bananasCopy: 0,
    farms: 0,
    workers: 0,
    pickers: 0
}
var game = {}
var lastClick = 0;

function tick() {
    if (game.bananas > game.bananasCopy){
        alert("pyry älä tee tota")
        console.log("pyry älä tee tota")
        game.bananas = 0
    }

    updateBananaCounter()
    game.bananas += getProduction()
    game.bananasCopy = game.bananas
}

function updateBananaCounter(){
    document.getElementById("bananacounter").innerHTML = Math.round(game.bananas)
    document.getElementById("bananaproduction").innerHTML = Math.round(getProduction() * 100) / 100
}

function bananaClick(){
    // Antiautoclick
    if (Date.now() - lastClick > 33){
        game.bananas += 1 + game.pickers
        game.bananasCopy = game.bananas
        updateBananaCounter()
    }
    lastClick = Date.now()
}

function getProduction(){
    var production = 0
    production += game.farms * 1
    for (let i = 0; i < game.workers; i++) {
        production *= 1.05
    }
    return production
}

function updatePrices(){
    document.getElementById("workerprice").innerHTML = getWorkerPrice()
    document.getElementById("farmprice").innerHTML = getFarmPrice()
    document.getElementById("pickerprice").innerHTML = getPickerPrice()
}

function updateCounters(){
    document.getElementById("farmcounter").innerHTML = game.farms
    document.getElementById("workercounter").innerHTML = game.workers
    document.getElementById("pickercounter").innerHTML = game.pickers
}

function loadGame(){
    game = defaultGame
    if (localStorage.getItem("game") != null){
        Object.assign(game, JSON.parse(localStorage.getItem("game")))
    }
    updatePrices()
    updateCounters()
    console.log("moikka pyry ja/tai jesper :)")
    console.log("mitäs täällä consoleissa teet?")
    console.log("toivottavasti ette yritä muokata baananeiden määrää")
}

function saveGame(){
    localStorage.setItem("game", JSON.stringify(game))
    console.log("saved")
}

function resetGame(){
    game = defaultGame
}

var tickInterval = window.setInterval(function () {
    tick()
}, 1000);

var saveInterval = window.setInterval(function () {
    saveGame()
}, 2000);