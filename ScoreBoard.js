var Games = ["Knockout", "Tens"]
var Players = ["Sumeet", "Omar", "Mark"]
var gameSelected = 99
var playersSelected = []
var ScoreBoards = []

Games.forEach(addGameButton)
Players.forEach(addPlayerButton)

function addGame(){
    var newGame = prompt("What is the new game?")
    Games.push(newGame)
}

//function addNewPlayer(){}

function addGameButton(game, index){
    var btn = document.createElement("button");
    btn.innerHTML = game
    btn.id = index
    btn.setAttribute("onclick", "gameSelected = this.id")
    document.getElementById("gameButtons").appendChild(btn)
}

function addPlayerButton(player, index){
    var btn = document.createElement("button")
    btn.innerHTML = player
    document.getElementById("playerButtons").appendChild(btn)
    btn.id = index
    btn.setAttribute("onclick", "playersSelected.push(this.id)")
}

function clearGame(){
    playersSelected = []
    gameSelected = 99
    document.getElementById("scoreboard").innerHTML="Empty Scoreboard"
}

function buildScoreboard(){
    "newScoreBoard"[
        {"game": Games[gameSelected]},
        {"players": playersSelected}
    ]
    ScoreBoards.push(newScoreBoard)
    document.getElementById("scoreboard").innerHTML="Game:" + Games[gameSelected] + "   Players:" + playersSelected
}
