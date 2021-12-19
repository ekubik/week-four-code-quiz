var returnStart = document.getElementById("backToStart");
var clearScoresBtn = document.getElementById("clear-score");

returnStart.addEventListener("click", function () {
  window.location.href = "./index.html";
});

var user = localStorage.getItem("initials");
var score = localStorage.getItem("userScore");
var highScore;

displayHighScore();

function displayHighScore() {
  highScore = document.createElement("p");
  var scoresList = document.getElementById("high-scores-list");
  highScore.innerText = user + ": " + score + " points";
  scoresList.appendChild(highScore);

  clearScoresBtn.addEventListener("click", function () {
    localStorage.clear();
    highScore.innerText = "";
    clearScoresBtn.style.display = "none";
  });

  if (!user) {
    highScore.innerText = "  ";
    clearScoresBtn.style.display = "none";
  }
}
