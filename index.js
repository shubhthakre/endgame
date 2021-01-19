var readlineSync = require("readline-sync");

var score = 0;


// array of objects
var questions = [{
  question: "Where do Shubham live? ",
  answer: "Butibori"
}, {
  question: "shubham favorite superhero would be? ",
  answer: "thanos"
},
{
  question: "Where do shubham work? ",
  answer: "home"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Shubham?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}


welcome();
game();
showScores();
