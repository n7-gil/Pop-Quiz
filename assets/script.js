var beginEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("card");
var questionEl = document.getElementById("questions")
var quizQuestions = [
  {
    question: "What is this question?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'a'
  },
  {
    question: "What is question number two?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'a'
  },
  {
    question: "What is question number three?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'b'
  },
  {
    question: "What is question number four?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'a'
  },
  {
    question: "What is question number five?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: 'b'
  }
]

console.log(quizQuestions);

// once the begin button is clicked
beginEl.addEventListener("click", startGame) 

// the button itself dissapears, the main card appears, and the timer begins 
function startGame(){
    // console.log("startGame");
    beginEl.classList.add('hide');
    mainEl.classList.remove('hide');
    document.getElementById("questions").textContent= quizQuestions[0]['question'];
    document.getElementById("answer-a").textContent=quizQuestions[0]['answers']['a'];
    document.getElementById("answer-b").textContent=quizQuestions[0]['answers']['b'];
    setTime();
}
// time remaining function 
function setTime() {
    var timeLeft = 90;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;

      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;

      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  function answerQuestion() {
    let userAnswer = answer.textContent;
    let correctAnswer = questions.answer;

    if (userAnswer === correctAnswer) {
      userScore += 1;
      answer.classList.add("Correct"); 

    }else{
      answer.classList.add("Incorrect");
      timeleft = timeLeft -20
    }
  }

  
function nextQuestion() {
    questionlist.textContent = questions[questionIndex].question;
    button1.textContent = questions[questionIndex].answers[0].text
    button2textContent = questions[questionIndex].answers[1].text

    selectAnswer()
}

