$(document).ready(function () {
  var timer = $(".timer");
  var codeHeader = $(".codeHeader");
  var codeText = $(".codeText");
  var startButton = $(".startBtn");
  var ansArea = $(".answerArea");

  var seconds = 120;
  var interval;

  function startTimer() {
    if (seconds === 120) {
      interval = setInterval(function () {
        seconds--;

        renderTime();
      }, 1000);
    }
    if (seconds === 0) {
      pauseTimer();
    }
  }

  function renderTime() {
    timer.text("Timer: " + seconds);
  }

  function pauseTimer() {
    clearInterval(interval);
    renderTime();
  }

  startButton.click(function () {
    startTimer();
    qOne();
  });

  function clearText() {
    startButton.replaceWith("");
    codeText.empty();
    ansArea.empty();
  }

  function decTime() {
    seconds -= 10;
    renderTime();
  }

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
      if ("data-answer" === 1) {
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
      answersBtn.attr("data-answer", twoAnswers[i]);
      answersBtn.text(twoAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aTwo-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", threeAnswers[i]);
      answersBtn.text(threeAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aThree-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", fourAnswers[i]);
      answersBtn.text(fourAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aFour-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", fiveAnswers[i]);
      answersBtn.text(fiveAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aFive-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", sixAnswers[i]);
      answersBtn.text(sixAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aSix-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", sevenAnswers[i]);
      answersBtn.text(sevenAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aSeven-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", eightAnswers[i]);
      answersBtn.text(eightAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aEight-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", nineAnswers[i]);
      answersBtn.text(nineAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aNine-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
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
      answersBtn.attr("data-answer", tenAnswers[i]);
      answersBtn.text(tenAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aTen-button").click(function () {
      if ("data-answer" === 1) {
        qTwo();
        alert("you got the right answer");
      } else {
        decTime();
        pauseTime();
      }
    });
  }
});
