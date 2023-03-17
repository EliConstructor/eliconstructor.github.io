const defaultGame = {
    bananas: 0,
    farms: 0,
    workers: 0
}
var game


function tick() {
    updateBananaCounter()
    game.bananas += getProduction()
}

function updateBananaCounter(){
    document.getElementById("bananacounter").innerHTML = Math.round(game.bananas)
    document.getElementById("bananaproduction").innerHTML = Math.round(getProduction() * 100) / 100
}

function bananaClick(){
    game.bananas += 1
    updateBananaCounter()
}

function getProduction(){
    var production = 0
    production += game.farms * 1
    for (let i = 0; i < game.workers; i++) {
        production *= 1.017
    }
    return production
}

function updatePrices(){
    document.getElementById("workerprice").innerHTML = getWorkerPrice()
    document.getElementById("farmprice").innerHTML = getFarmPrice()
}

function updateCounters(){
    document.getElementById("farmcounter").innerHTML = game.farms
    document.getElementById("workercounter").innerHTML = game.workers
}

function loadGame(){
    if (localStorage.getItem("game") != null){
        game = JSON.parse(localStorage.getItem("game"))
    }
    else {
        game = deafultGame
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