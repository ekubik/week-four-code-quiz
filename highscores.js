var returnStart = document.getElementById("backToStart");
var clearScoresBtn = document.getElementById("clear-score");

//back button takes user back to start of quiz upon click
returnStart.addEventListener("click", function () {
  window.location.href = "./index.html";
});

var user = localStorage.getItem("initials");
var score = localStorage.getItem("userScore");
var highScore;

displayHighScore();

//retrieve score and initials from local storage and display on page
function displayHighScore() {
  highScore = document.createElement("p");
  var scoresList = document.getElementById("high-scores-list");
  highScore.innerText = user + ": " + score + " points";
  scoresList.appendChild(highScore);

  //when user clicks "clear score" values are cleared from local storage, inner text cleared, and clear score button removed
  clearScoresBtn.addEventListener("click", function () {
    localStorage.clear();
    highScore.innerText = "";
    clearScoresBtn.style.display = "none";
  });

  //if no user value stored in local storage, no high scores displayed
  if (!user) {
    highScore.innerText = "  ";
    clearScoresBtn.style.display = "none";
  }
}
