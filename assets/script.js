var timerEl = document.getElementById('timer')
var startQuiz = document.getElementById('startQuiz')
var resultsContainer = document.getElementById('results')

var questions = [
    {
        question: 'Commonly used data types DO NOT include: '
    },
    {
        question: 'The condition in an if/else statement is enclosed with '
    },
    {
        question: 'Arrays in Javascript can be used to store '
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables '
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is '
    }
]

function startQuiz() {
    
}
function timer() {
    var timeLeft = 75;
    var timeInterval = setInterval(function) {
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
function viewHighScores() {
    addEventListener.'clicked'(viewHighScores)
}