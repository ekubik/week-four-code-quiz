var timeLeft;
var countdown;
var startButton;
var counter;

function startQuiz() {
  timeLeft = 75;

  document.getElementById("secondsLeft").innerText = timeLeft;

  countdown = setInterval(function () {
    timeLeft--;
    document.getElementById("secondsLeft").innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

startButton = document.querySelector("quiz-start-btn")
