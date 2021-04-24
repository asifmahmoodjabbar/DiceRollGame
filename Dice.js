/* Game rules */

let scores, activePlayer, gamePlaying, player1, player2;

document.querySelector(".btn-roll").addEventListener("click", function () {
  let dice;
  if (gamePlaying) {
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    let diceDom = document.querySelector(".dice");
    diceDom.removeAttribute("style");
    diceDom.style.display = "block";
    diceDom.setAttribute("src", `./images/dice-${dice}.png`);
  }
  
  addScore(dice);
  if (scores[activePlayer] >= 20) {
    //  document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector(`#name-${activePlayer}`).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".winner-msg").classList.add("winner");
    document
      .querySelector(`.player-${activePlayer}-side`)
      .classList.toggle("active");
    gamePlaying = false;
    document.querySelector(".btn-roll").disabled = true;
  } else {
// Next player
    nextPlayer(dice);
  }
});

function nextPlayer(dice) {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-side").classList.toggle("active");
  document.querySelector(".player-1-side").classList.toggle("active");
}
// Start the game
function init() {
  scores = [0, 0];
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".btn-roll").disabled = false;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-side").classList.remove("winner");
  document.querySelector(".player-1-side").classList.remove("winner");
  document.querySelector(".player-0-side").classList.remove("active");
  document.querySelector(".player-1-side").classList.remove("active");
  document.querySelector(".player-0-side").classList.add("active");
  enterName();
}

document.querySelector(".btn-start").addEventListener("click", init);

// Enter name
player1 = "Player 1";
player2 = "Player 2";

function enterName() {
  player1 = prompt("Enter Player 1 Name");
  player2 = prompt("Enter Player 2 Name");

  document.querySelector("#name-0").textContent = player1;
  document.querySelector("#name-1").textContent = player2;
}

// add score
function addScore(dice) {
  scores[activePlayer] += dice;
  document.getElementById("current-0").textContent = scores[0];
  document.getElementById("current-1").textContent = scores[1];
}
