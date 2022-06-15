var beginEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("card");
var timeLeft = 90;
var questionEl = document.getElementById("questions");
var submitEl = document.getElementById("submit");
var resultEl = document.getElementById("result");
var questionNum = 0
var quizQuestions = [
  {
    question: "A variable is a name of a storage location",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'True'
  },
  {
    question: "console.log(); writes a message to the console",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'True'
  },
  {
    question: "A boolean is another form of a string",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'False'
  },
  {
    question: "A function is a block of code designed to perform a specific task.",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'True'
  },
  {
    question: "mathrandom.(); returns a random number from 0(inclusive) up to but not including 1(exclusive)",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'False'
  }
]

console.log(quizQuestions);

// once the begin button is clicked
beginEl.addEventListener("click", startGame)

// the button itself dissapears, the main card appears, and the timer begins 
function startGame() {
  // console.log("startGame");

  var answerA = document.getElementById("answer-a");
  var answerB = document.getElementById("answer-b");

  beginEl.classList.add('hide');
  mainEl.classList.remove('hide');
  document.getElementById("questions").textContent = quizQuestions[questionNum]['question'];
  answerA.textContent = quizQuestions[questionNum]['answers']['a'];
  answerB.textContent = quizQuestions[questionNum]['answers']['b'];
  setTime();

  answerA.addEventListener("click", answerQuestion);
  answerB.addEventListener("click", answerQuestion);
}

// time remaining function 
function setTime() {


  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';


    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

function answerQuestion(e) {
  var userAnswer = e.target.textContent;
  var correctAnswer = quizQuestions[questionNum]['correctAnswer'];

  //  console.log(userAnswer);
  //  console.log(correctAnswer);

  if (userAnswer === correctAnswer) {
    resultEl.textContent = "correct";

  } else {
    resultEl.textContent = "incorrect";
    //     timeleft = timeLeft - 20000;
    //     timerEl.textContent = timeLeft + ' - seconds'
  }
  setTimeout(function () {
    nextQuestion()
    resultEl.textContent = "";
  }, 1000);

}

// once submit button is clicked 
submitEl.addEventListener("click", nextQuestion)
// moves on to next question 
function nextQuestion() {
  questionNum += 1;
  document.getElementById("questions").textContent = quizQuestions[questionNum]['question'];
  document.getElementById("answer-a").textContent = quizQuestions[questionNum]['answers']['a'];
  document.getElementById("answer-b").textContent = quizQuestions[questionNum]['answers']['b'];
}


