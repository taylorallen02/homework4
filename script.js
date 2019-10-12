var highScores = document.getElementById("#scores");
var countdown = document.getElementById("timer");
var startQuiz = document.getElementById("#start-quiz");
var startButton = document.getElementById("#start-btn")



var index = 0;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
    title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
];

// if alerts Correct!
// if else wrong!







FIXTHIS!!!!!var scorelist = document.getElementById("#scores");

var people = [{name: "" }];
var currentId = 0;

function addPersonToList(event) {
    event.preventDefault();
    var name =