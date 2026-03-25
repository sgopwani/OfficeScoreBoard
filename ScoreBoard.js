var games = ["Knockout", "Tens"];
var players = ["Sumeet", "Omar", "Mark"];
var gameSelected = null;
var playersSelected = [];
var scoreBoards = [];

// Initialize buttons on page load
games.forEach(addGameButton);
players.forEach(addPlayerButton);

// Prompt user for a new game name and add it
function addGame() {
    var newGame = prompt("What is the new game?");
    if (newGame && newGame.trim() !== "") {
        games.push(newGame.trim());
        addGameButton(newGame.trim(), games.length - 1);
    }
}

// Prompt user for a new player name and add them
function addPlayer() {
    var newPlayer = prompt("What is the new player's name?");
    if (newPlayer && newPlayer.trim() !== "") {
        players.push(newPlayer.trim());
        addPlayerButton(newPlayer.trim(), players.length - 1);
    }
}

// Create and append a game selection button
function addGameButton(game, index) {
    var btn = document.createElement("button");
    btn.innerHTML = game;
    btn.id = "game-" + index;
    btn.className = "selector-btn";
    btn.addEventListener("click", function () {
        // Deselect previously selected game button
        document.querySelectorAll("#gameButtons .selector-btn").forEach(function (b) {
            b.classList.remove("selected");
        });
        gameSelected = index;
        btn.classList.add("selected");
    });
    document.getElementById("gameButtons").appendChild(btn);
}

// Create and append a player selection button
function addPlayerButton(player, index) {
    var btn = document.createElement("button");
    btn.innerHTML = player;
    btn.id = "player-" + index;
    btn.className = "selector-btn";
    btn.addEventListener("click", function () {
        var playerIndex = playersSelected.indexOf(index);
        if (playerIndex === -1) {
            // Player not yet selected — add them
            playersSelected.push(index);
            btn.classList.add("selected");
        } else {
            // Player already selected — deselect them
            playersSelected.splice(playerIndex, 1);
            btn.classList.remove("selected");
        }
    });
    document.getElementById("playerButtons").appendChild(btn);
}

// Reset all selections and clear the scoreboard
function clearGame() {
    playersSelected = [];
    gameSelected = null;
    document.querySelectorAll(".selector-btn").forEach(function (b) {
        b.classList.remove("selected");
    });
    document.getElementById("scoreboard").innerHTML = "";
}

// Build and display the scoreboard from current selections
function buildScoreboard() {
    if (gameSelected === null) {
        alert("Please select a game first.");
        return;
    }
    if (playersSelected.length === 0) {
        alert("Please select at least one player.");
        return;
    }

    var selectedPlayerNames = playersSelected.map(function (i) {
        return players[i];
    });

    var newScoreBoard = {
        game: games[gameSelected],
        players: selectedPlayerNames
    };
    scoreBoards.push(newScoreBoard);

    // Render the scoreboard
    var html = "<h2>" + newScoreBoard.game + "</h2><table><thead><tr><th>Player</th><th>Score</th></tr></thead><tbody>";
    selectedPlayerNames.forEach(function (name) {
        html += "<tr><td>" + name + "</td><td>0</td></tr>";
    });
    html += "</tbody></table>";
    document.getElementById("scoreboard").innerHTML = html;
}
