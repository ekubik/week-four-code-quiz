var timeLeft;
var countdown;
var score = 0;
var startButton = document.querySelector("#quiz-start-btn");
var qIndex = 0;
var lastQuestionIndex = 5;
var answerChoices = document.getElementById("multiple-choice");
var options;
var wrongAnswerChosen = document.getElementById("incorrect-answer");
var correctAnswerChosen = document.getElementById("correct-answer");
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
  var questionsText = document.getElementById("question-text");
  questionsText.textContent = yourQuestion.question;

  for (var i = 0; i < codeQuizQuestions[qIndex].options.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "answer-btn");
    choiceButton.textContent = codeQuizQuestions[qIndex].options[i];
    answerChoices.append(choiceButton);

    choiceButton.addEventListener("click", function (event) {
      if (event.target.textContent === codeQuizQuestions[qIndex].answer) {
        console.log("correct");
        correctAnswerChosen.style.display = "block";
        wrongAnswerChosen.style.display = "none";
        score = score + 20;
      } else {
        console.log("wrong");
        wrongAnswerChosen.style.display = "block";
        correctAnswerChosen.style.display = "none";
        timeLeft = timeLeft - 10;
      }
      qIndex++;

      if (qIndex > lastQuestionIndex) {
        endScreen.style.display = "block";
        quizBody.style.display = "none";
        clearInterval(countdown);
        displayScore.textContent = score;
        
      } else {
        displayQuestions();
      }
    });
  }
}

submitInitialsBtn.addEventListener("click", function () {
  event.preventDefault();
  window.location.href = "./highscorespg.html";
  userInitials = highScore.value;
  console.log(userInitials);
  localStorage.setItem("initials", userInitials);
  localStorage.setItem("userScore", score);

  //var listItem = document.createElement("p");
  //listItem.textContent = localStorage.getItem("initials") + ":" + " " + localStorage.getItem("userScore");
  //scoresList.appendChild(listItem);
});

//var x = {
  //  name= userInitials,
    //userScore = score}


//submitInitialsBtn.addEventListener("click", function () {
// window.location.href = "./highscorespg.html";
//});

//function displayQuestions() {
// showQuestion(codeQuizQuestions[questionIndex]);
//}

//function showQuestion() {
//questionElement.innerText = codeQuizQuestions[questionIndex].question;
//}

//var yourQuestion = codeQuizQuestions[questionIndex];
//var questionsText = document.getElementById("question-text");
//questionsText.textContent = yourQuestion.question;

//for (var i = 0; i < codeQuizQuestions.options.length; i++) {
// function optionsLoop() {
//  var choiceButton = document.createElement("button");
//  choiceButton.textContent = codeQuizQuestions.options[i];
// answerChoices.append(choiceButton);
//  }
// }

/*function optionsLoop() {
  for (var i = 0; i < codeQuizQuestions[qIndex].options.length; i++) {
    let buttons = document.createElement("button");
    buttons.textContent = codeQuizQuestions[qIndex].options[i];
    answerChoices.append(buttons);
  }
}
optionsLoop();

function correctAnswer() {
  correctAnswerChosen.style.display = "block";
}

function wrongAnswer() {
  wrongAnswerChosen.style.display = "block";
  timeLeft = timeLeft - 10;
}*/
