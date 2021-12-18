var timeLeft;
var countdown;
var score = 0;
var startButton = document.querySelector("#quiz-start-btn");
var qIndex = 0;
var answer = codeQuizQuestions.answer;
var answerChoices = document.getElementById("multiple-choice");
var options;
var wrongAnswerChosen = document.getElementById("incorrect-answer");
var correctAnswerChosen = document.getElementById("correct-answer");
var hideElement = document.querySelectorAll(".hide");
var returnStart = document.getElementById("backToStart");
var clearScore = document.getElementById("clear-score");
var quizBody = document.getElementById("quiz-body");
var endScreen = document.getElementById("game-over");

var optionOne = document.getElementById("option1")
var optionTwo = document.getElementById("option2");
var optionThree = document.getElementById("option3");
var optionFour = document.getElementById("option4");

returnStart.onclick = function () {
  window.location.href = "./index.html";
};

function startQuiz() {
  // hide quiz intro and start button //
  for (var i = 0; i < hideElement.length; i++) {
    hideElement[i].style.display = "none";
  }
  //display first question//
  displayQuestions();

  //function starts timer, replaces inner text of span with time remaining//
  timeLeft = 75;

  document.getElementById("secondsLeft").innerText = timeLeft;

  countdown = setInterval(function () {
    timeLeft--;
    document.getElementById("secondsLeft").innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdown);
      endScreen.style.display = "block";
      quizBody.style.display = "none";
    }
  }, 1000);
}

function displayQuestions() {
  var yourQuestion = codeQuizQuestions[qIndex];
  var questionsText = document.getElementById("question-text");
  questionsText.textContent = yourQuestion.question;



  //for (var i = 0; i < codeQuizQuestions.options.length; i++) {
   // function optionsLoop() {
    //  var choiceButton = document.createElement("button");
    //  choiceButton.textContent = codeQuizQuestions.options[i];
     // answerChoices.append(choiceButton);
  //  }
 // }
}

function correctAnswer() {
  correctAnswerChosen.style.display = "block";
}

function wrongAnswer() {
  wrongAnswerChosen.style.display = "block";
  timeLeft = timeLeft - 10;
}
