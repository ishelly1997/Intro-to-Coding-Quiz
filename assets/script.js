var timerEl = document.querySelector('timer')
var startBtn = document.querySelector("#start-button");
var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var questionEl = document.getElementById('h1');
var instructionsEl = document.getElementById('instructions')
var answersEl = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');



(function start(){

        function startQuiz() {

            instructionsEl.setAttribute('style', 'hidden');

            var output = [];
        
            myQuestions.forEach(
              (currentQuestion, questionNumber) => {
        

                var answers = [];

                for(letter in currentQuestion.answers){
        

                  answers.push(
                    `<label>
                      <input class="multi" type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                  );
                }
        
  
                output.push(
                  `<div class="step">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                  </div>`
                );
              }
            );
        

            quizContainer.innerHTML = output.join('');
            function showQuestion(n) {
                slides[thisQuestion].classList.remove('current-question');
                slides[n].classList.add('current-question');
                thisQuestion = n;
                console.log('66');

                //var multiBtn = document.querySelectorAll('.multi');
                //multiBtn.addEventListener('click', nextq);
              }
              console.log('12');
              function nextq() {
                showQuestion(thisQuestion + 1);
              }
              console.log('34');
            const slides = document.querySelectorAll(".step");
            let thisQuestion = 0;
            

console.log('78');
showQuestion(thisQuestion);
//const multiBtn = quizContainer.querySelectorAll('.multi');

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'input') {
      console.log('cow');
      nextq();
      showResults();
    }
  });
//showResults();
          }

      
        function showResults(){
      
          const answerContainers = quizContainer.querySelectorAll('.answers');
      

          let numCorrect = 0;
      
          console.log('99');
          myQuestions.forEach( (currentQuestion, questionNumber) => {
      
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
            if(userAnswer === currentQuestion.right){

              numCorrect++;

              answerContainers[questionNumber];
            }
            else{

              answerContainers[questionNumber];
            }
            console.log('88');
            //selector.addEventListener('click', nextq);
            //nextq();
          });
      

          resultsContainer.innerHTML = `${numCorrect} / ${myQuestions.length}`;
        }
        console.log('77');

        const submitButton = document.getElementById('submit');
    
        console.log('56');
        var myQuestions = [
            {
                question: 'The condition in an if/else statement is enclosed with ',
                answers: {
                    a :	'1. quotes',
                    b : '2.	curly brackets',
                    c : '3.	parenthesis',
                    d : '4.	square brackets'
                },
                right: 'b'
            },
            {
                question: 'Arrays in Javascript can be used to store ',
                answers: {
                    a :	'1. numbers and strings',
                    b : '2.	other arrays',
                    c : '3.	booleans',
                    d : '4.	all of the above'
                },
                right: 'd'
            },
            {
                question: 'String values must be enclosed within _____ when being assigned to variables ',
                answers: {
                    a :	'1.	commas',
                    b : '2.	curly brackets',
                    c : '3.	quotes',
                    d : '4.	parenthesis'
                },
                right: 'c'
            },
            {
                question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
                answers: {
                    a :	'1.	Javascript',
                    b : '2.	terminal/bash',
                    c : '3.	for loops',
                    d : '4.	console.log'
                },
                right: 'd'
            }
        ];

        //startQuiz();
        startBtn.addEventListener('click', startQuiz);
        //submitButton.addEventListener('click', showResults);
        //const multiBtn = document.querySelectorAll('.multi');
        //multiBtn.addEventListener('click', showResults);



      }
    
)()