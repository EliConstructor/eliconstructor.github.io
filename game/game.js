const defaultGame = {
    bananas: 0,
    bananasCopy: 0,
    farms: 0,
    workers: 0,
    pickers: 0,
    printers: 0,
    goblins: 0,
    finders: 0,
    gatherers: 0,
    generators: 0
}
var game = {}
var lastClick = 0;

function tick() {
    /*if (game.bananas > game.bananasCopy){
        //alert("pyry älä tee tota")
        console.log("pyry älä tee tota")
        game.bananas = 0
    }*/

    updateBananaCounter()
    game.bananas += getProduction()
    game.bananasCopy = game.bananas
    // Ensure game.bananas isnt modified using the browser console
}

function updateBananaCounter(){
    document.getElementById("bananacounter").innerHTML = Math.round(game.bananas)
    document.getElementById("bananaproduction").innerHTML = Math.round(getProduction() * 100) / 100
}

function bananaClick(){
    // Antiautoclick
    if (Date.now() - lastClick > 33){
        game.bananas += 1 + game.pickers + (game.gatherers * 10)
        game.bananasCopy = game.bananas
        updateBananaCounter()
    }
    lastClick = Date.now()
}

function getProduction(){
    var production = 0
    production += game.farms * 1
    production += game.printers * 2
    production += game.goblins * 5
    production += game.finders * 10
    production += game.generators * 20
    for (let i = 0; i < game.workers; i++) {
        production *= 1.05
    }
    return production
}

function updatePrices(){
    document.getElementById("workerprice").innerHTML = getWorkerPrice()
    document.getElementById("farmprice").innerHTML = getFarmPrice()
    document.getElementById("pickerprice").innerHTML = getPickerPrice()
    document.getElementById("printerprice").innerHTML = getPrinterPrice()
    document.getElementById("goblinprice").innerHTML = getGoblinPrice()
    document.getElementById("finderprice").innerHTML = getFinderPrice()
    document.getElementById("gathererprice").innerHTML = getGathererPrice()
    document.getElementById("generatorprice").innerHTML = getGeneratorPrice()
}

function updateCounters(){
    document.getElementById("farmcounter").innerHTML = game.farms
    document.getElementById("workercounter").innerHTML = game.workers
    document.getElementById("pickercounter").innerHTML = game.pickers
    document.getElementById("printercounter").innerHTML = game.printers
    document.getElementById("goblincounter").innerHTML = game.goblins
    document.getElementById("findercounter").innerHTML = game.finders
    document.getElementById("gatherercounter").innerHTML = game.gatherers
    document.getElementById("generatorcounter").innerHTML = game.generators
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