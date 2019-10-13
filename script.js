
// clicking start button starts timer
document.getElementById("start-btn").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function timer(){
    document.getElementById("timer").innerHTML = "Time: " + timeleft;

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);
});

document.getElementById("start-btn").addEventListener("click", changeVisibility, null);
function changeVisibility() { 
	document.getElementById("directions").style.display="none"; 
    document.getElementById("question1").style.display="block";
}

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
];

document.getElementById("start-btn").addEventListener("click", function() {
    for (var i = 0; i < questions.length; i++) {
    
    }
});