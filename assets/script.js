var timerEl = document.getElementById('start');
var mainEl = document.getElementById('main');




// Beginning sequence 
function startCountdown() {
    var startTimer = 5;

    var timerInterval = setInterval(function () {
        if (startTimer > 1) {
            timerEl.textContent = "Pop quiz begins in " + startTimer;
            startTimer--;



        } else if (secondsLeft === 0) {
            timerEl.textContent = startTimer + ' seconds remaining';
            startTimer--;
        } else {
            timerEl.textContent = '';
            clearInterval(timerInterval);
        }
     }, 1000);
}
startCountdown()



console.log(startCountdown);




// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById("main")






// var quizQuestions
// var quizContainer
// var resultContainer
// var submitButton


// function generateQuiz(questions, quizContainer, resultContainer, submitButton);

// function showQuestions(questions, quizContainer) {
// // // code WIP

// // }

// // function showResults(questions)