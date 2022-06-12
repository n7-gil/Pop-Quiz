var beginEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("card");

// once the begin button is clicked
beginEl.addEventListener("click", startGame) 

// the button itself dissapears, the main card appears, and the timer begins 
function startGame(){
    console.log("startGame");
    beginEl.classList.add('hide');
    mainEl.classList.remove('hide');
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





function nextQuestion() {

}

