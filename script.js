// document ready for entire code
$(document).ready(function () {
  // declaring variables
  var timer = $(".timer");
  var codeHeader = $(".codeHeader");
  var codeText = $(".codeText");
  var startButton = $(".startBtn");
  var ansArea = $(".answerArea");
  var scores = $(".scores");
  var highscores = [];

  var seconds = 120;
  var interval = 0;

  // function starts the timer at 120 seconds
  function startTimer() {
    if (seconds === 120) {
      interval = setInterval(function () {
        seconds--;

        renderTime();
      }, 1000);
    }
  }

  // this function will make the seconds appear on the page
  function renderTime() {
    timer.text("Timer: " + seconds);
  }

  // this function will clear interval and pause the time
  function pauseTimer() {
    clearInterval(interval);
    renderTime();
  }

  // when the start button is clicked the timer will start and the first question will appear
  startButton.click(function () {
    startTimer();
    qOne();
  });

  // this function simply clears out the text area for a new question and answer to appear
  function clearText() {
    startButton.replaceWith("");
    codeText.empty();
    ansArea.empty();
  }

  // this function decrements the time by 10 seconds
  function decTime() {
    seconds -= 10;
    renderTime();
  }

  // function that prompts user to add their initials and saves it to the local storage
  function addInitials() {
    clearText();
    codeHeader.empty();

    var initials = $(
      "<form><input class = 'addedInput' placeholder = 'your initials'></form><button class = 'submitBtn'>Submit</button>"
    );
    scores.append(initials);

    $(".submitBtn").click(function (event) {
      event.preventDefault();

      var scoreText = $.trim($(".addedInput").val());

      if (scoreText === "") {
        return;
      }

      localStorage.setItem(scoreText, seconds);
      highscores.push(scoreText);

      var name = localStorage.getItem(scoreText, seconds);
      scores.prepend("Your Score is: " + name);
    });
  }

  // the question functions below will clear the text and show a new set of question and answers.  If the wrong answer is chosen the time will decrement by 10.
  function qOne() {
    clearText();
    codeHeader.text("What is code?");

    var oneAnswers = [
      "a language among secret agents",
      "how we communicate with computers",
      "a series of numbers",
      "a city in the state of Kansas",
    ];

    for (i = 0; i < oneAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aOne-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(oneAnswers[i]);
      ansArea.append(answersBtn);
    }

    $(".aOne-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qTwo();
        alert("you got the right answer");
      } else {
        decTime();
        qTwo();
        alert("time to go!");
      }
    });
  }

  function qTwo() {
    clearText();
    codeHeader.text("Which element creates the smallest heading?");

    var twoAnswers = [
      "<h1> Welcome to the Page!</h1>",
      "<h2> Welcome to the Page!</h2>",
      "<h3> Welcome to the Page!</h3>",
      "<h4> Welcome to the Page!</h4>",
    ];

    for (i = 0; i < twoAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aTwo-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(twoAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aTwo-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 3) {
        qThree();
        alert("you got the right answer");
      } else {
        decTime();
        qThree();
        alert("time to go!");
      }
    });
  }

  function qThree() {
    clearText();
    codeHeader.text("What does the computer language HTML do?");

    var threeAnswers = [
      "it adds interactivity to the webpages",
      "it determines how content is laid out",
      "it locates websites on the internet",
      "it styles the website",
    ];

    for (i = 0; i < threeAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aThree-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(threeAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aThree-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qFour();
        alert("you got the right answer");
      } else {
        decTime();
        qFour();
        alert("time to go!");
      }
    });
  }

  function qFour() {
    clearText();
    codeHeader.text(
      "What is the action of doing something over and over again, repeating code?"
    );

    var fourAnswers = ["code", "loop", "program", "bug"];

    for (i = 0; i < fourAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aFour-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(fourAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aFour-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qFive();
        alert("you got the right answer");
      } else {
        decTime();
        qFive();
        alert("time to go!");
      }
    });
  }

  function qFive() {
    clearText();
    codeHeader.text("What is the following code doing: totalMarks = 8;");

    var fiveAnswers = [
      "declaring a variable",
      "assigning a value to a variable",
      "performing a calculation",
      "finding the running total",
    ];

    for (i = 0; i < fiveAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aFive-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(fiveAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aFive-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qSix();
        alert("you got the right answer");
      } else {
        decTime();
        qSix();
        alert("time to go!");
      }
    });
  }

  function qSix() {
    clearText();
    codeHeader.text(
      "What is a CSS property and value pair like, color: crimson, called?"
    );

    var sixAnswers = [
      "an HTML tag",
      "a declaration",
      "an attribute",
      "an object",
    ];

    for (i = 0; i < sixAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aSix-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(sixAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aSix-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qSeven();
        alert("you got the right answer");
      } else {
        decTime();
        qSeven();
        alert("time to go!");
      }
    });
  }

  function qSeven() {
    clearText();
    codeHeader.text("How do you save information in your local browser?");

    var sevenAnswers = ["console.log", "localStorage.", "window", "array"];

    for (i = 0; i < sevenAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aSeven-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(sevenAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aSeven-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qEight();
        alert("you got the right answer");
      } else {
        decTime();
        qEight();
        alert("time to go!");
      }
    });
  }

  function qEight() {
    clearText();
    codeHeader.text(
      "In javascript, what element is used to store and manipulate text usually in multiples?"
    );

    var eightAnswers = ["function", "array", "variables", "strings"];

    for (i = 0; i < eightAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aEight-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(eightAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aEight-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qNine();
        alert("you got the right answer");
      } else {
        decTime();
        qNine();
        alert("time to go!");
      }
    });
  }

  function qNine() {
    clearText();
    codeHeader.text(
      "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?"
    );

    var nineAnswers = ["scope", "range", "output level", "restriction"];

    for (i = 0; i < nineAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aNine-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(nineAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aNine-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 0) {
        qTen();
        alert("you got the right answer");
      } else {
        decTime();
        qTen();
        alert("time to go!");
      }
    });
  }

  function qTen() {
    clearText();
    codeHeader.text(
      "What is the Javascript element that represents either TRUE or FALSE values?"
    );

    var tenAnswers = ["boolean", "condition", "event", "object"];

    for (i = 0; i < tenAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aTen-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(tenAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aTen-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 0) {
        alert("you got the right answer");
        pauseTimer();
        addInitials();
      } else {
        decTime();
        pauseTimer();
        addInitials();
      }
    });
  }
});
