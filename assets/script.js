var timerEl = document.getElementById('timer')
var startQuiz = document.getElementById('startQuiz')
var resultsContainer = document.getElementById('results')

function viewHighScores() {
    addEventListener('click', viewHighScores);
    console.log
}
document.querySelector("#save-answer");

var questions = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answers: {
            1 : '1.	strings',
            2 : '2.	booleans',
            3 : '3.	alerts',
            4 : '4.	numbers'
        },
        correctAnswer: '3'
    },
    {
        question: 'The condition in an if/else statement is enclosed with ',
        answers: {
            1 :	'1. quotes',
            2 : '2.	curly brackets',
            3 : '3.	parenthesis',
            4 : '4.	square brackets'
        },
        correctAnswer: '2'
    },
    {
        question: 'Arrays in Javascript can be used to store ',
        answers: {
            1 :	'1. numbers and strings',
            2 : '2.	other arrays',
            3 : '3.	booleans',
            4 : '4.	all of the above'
        },
        correctAnswer: '4'
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables ',
        answers: {
            1 :	'1.	commas',
            2 : '2.	curly brackets',
            3 : '3.	quotes',
            4 : '4.	parenthesis'
        },
        correctAnswer: '3'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
        answers: {
            1 :	'1.	Javascript',
            2 : '2.	terminal/bash',
            3 : '3.	for loops',
            4 : '4.	console.log'
        },
        correctAnswer: '4'
    }
]


startButton.addEventListener('click', startQuiz)
function startQuiz() {
    var questionEl = document.createAttribute('h1');
    var choicesEl = document.createElement('ul');
    var selectionEl = document.createElement('li');
    var selectionEl = document.createElement('li');
    var selectionEl = document.createElement('li');
    var selectionEl = document.createElement('li');
    
}

function timer() {
    var timeLeft = 75;
    var timeInterval = setInterval(function), {
        if (timeLeft > 0) {
            timerEl.textContent = 'Seconds Remaining: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Seconds Remaining: 0';
            timeLeft--;

            clearInterval(timeInterval);
        }
    }, 1000);
}
function selection(){
    console.log()
}
function nextQuetion(){

}
