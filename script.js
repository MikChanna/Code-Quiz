var timer = document.querySelector("timer");
var codeHeader = document.querySelector("codeHeader");
var codeText = document.querySelector("codeText");

function startTimer() {
  var seconds = 120;

  if ((seconds = 120)) {
    interval = setInverval(function () {
      seconds--;

      renderTime();
    }, 1000);
  }
}
