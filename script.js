//define variables

var timeLeft;
var countdown;
var score = 0;
var startButton = document.querySelector("#quiz-start-btn");
var qIndex = 0;
//quiz has 6 questions, last at position 5
var lastQuestionIndex = 5;
var answerChoices = document.getElementById("multiple-choice");
var options;
var hideElement = document.querySelectorAll(".hide");
var clearScore = document.getElementById("clear-score");
var quizBody = document.getElementById("quiz-body");
var endScreen = document.getElementById("game-over");
var questionsContainer = document.getElementById("quiz-questions-container");
var questionElement = document.getElementById("question-text");
var displayScore = document.getElementById("user-score");
var highScore = document.getElementById("high-scorers");
var submitInitialsBtn = document.getElementById("submit-score");
var highScoresList = document.getElementById("recordHighScore");
var scoresList = document.getElementById("high-scores-list");

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
    //once timer reaches zero, timer is stopped and user is shown end screen
    if (timeLeft === 0) {
      clearInterval(countdown);
      endScreen.style.display = "block";
      quizBody.style.display = "none";
    }
  }, 1000);
}

function displayQuestions() {
  answerChoices.innerHTML = "";
  var yourQuestion = codeQuizQuestions[qIndex];
  //h2 with id question-text replaced with question from codeQuizQuestions object
  var questionsText = document.getElementById("question-text");
  questionsText.textContent = yourQuestion.question;

  //loop through options relating to relevant index position. create a button for each option and append to answerChoices element
  for (var i = 0; i < codeQuizQuestions[qIndex].options.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "answer-btn");
    choiceButton.textContent = codeQuizQuestions[qIndex].options[i];
    answerChoices.append(choiceButton);


// when user selects questions, click triggers function - compares text content of button with answer from codeQuizQuestions object
    choiceButton.addEventListener("click", function (event) {
      if (event.target.textContent === codeQuizQuestions[qIndex].answer) {
        //if answer matches, console displays correct, and 20points added to user score
        console.log("correct");
        score = score + 20;
      } else {
        //console displays "wrong" and 10 seconds subtracted from timeLeft
        console.log("wrong");
        timeLeft = timeLeft - 10;
      }
      //question at next index is displayed. user receives next question once they answer the previous
      qIndex++;
// if questions run out, user shown end screen, timer stops, and their score is displayed
      if (qIndex > lastQuestionIndex) {
        endScreen.style.display = "block";
        quizBody.style.display = "none";
        clearInterval(countdown);
        displayScore.textContent = score;
      } else {
        //if questions remaining, display next
        displayQuestions();
      }
    });
  }
}

//user clicks submit button, triggering this function
submitInitialsBtn.addEventListener("click", function () {
  //prevents default actions of refreshing page on submit
  event.preventDefault();
  //user taken to high scores page
  window.location.href = "./highscorespg.html";
  userInitials = highScore.value;
  console.log(userInitials);
  //score and user initials are stored under keys "initials" and "userScore"
  localStorage.setItem("initials", userInitials);
  localStorage.setItem("userScore", score);
});
