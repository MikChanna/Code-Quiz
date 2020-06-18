var timer = $(".timer");
var codeHeader = $(".codeHeader");
var codeText = $(".codeText");
var startButton = $(".startBtn");

var seconds = 120;
var interval;

function startTimer() {
  if (seconds === 120) {
    interval = setInterval(function () {
      seconds--;

      renderTime();
    }, 1000);
  }
  // if (seconds === 0) {
  // }
  console.log(seconds);
}

function renderTime() {
  timer.text("Timer:" + seconds);
}

startButton.on("click", startTimer);
