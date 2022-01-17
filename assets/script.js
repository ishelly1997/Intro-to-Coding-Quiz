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



startBtn.addEventListener('click', startQuiz)
(function(){
        instructionsEl.setAttribute("style", "hidden")
        // Functions
    
        function startQuiz(){
          // variable to store the HTML output
          const output = [];
      
          // for each question...
          myQuestions.forEach(
            (currentQuestion, questionNumber) => {
      
              // variable to store the list of possible answers
              const answers = [];
      
              // and for each available answer...
              for(letter in currentQuestion.answers){
      
                // ...add an HTML radio button
                answers.push(
                  `<label>
                    <input type="button" name="question${questionNumber}" value="${currentQuestion.answers[letter]}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                );
              }
      
              // add this question and its answers to the output
              output.push(
                `<div class="slide">
                  <div class="question"> ${currentQuestion.question} </div>
                  <div class="answers"> ${answers.join("")} </div>
                </div>`
              );
            }
          );
      
          // finally combine our output list into one string of HTML and put it on the page
          quizContainer.innerHTML = output.join('');
        }
      
        function showResults(){
      
          // gather answer containers from our quiz
          const answerContainers = quizContainer.querySelectorAll('.answers');
      
          // keep track of user's answers
          let numCorrect = 0;
      
          // for each question...
          myQuestions.forEach( (currentQuestion, questionNumber) => {
      
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
            // if answer is correct
            if(userAnswer === currentQuestion.correctAnswer){
              // add to the number of correct answers
              numCorrect++;
      
              // color the answers green
              answerContainers[questionNumber];
            }
            // if answer is wrong or blank
            else{
              // color the answers red
              answerContainers[questionNumber].style.color = 'red';
            }
          });
      
          // show number of correct answers out of total
          resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        }
      
        function showSlide(n) {
          slides[currentSlide].classList.remove('active-slide');
          slides[n].classList.add('active-slide');
          currentSlide = n;
          if(currentSlide === 0){
            previousButton.style.display = 'none';
          }
          else{
            previousButton.style.display = 'inline-block';
          }
          if(currentSlide === slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
          }
          else{
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
          }
        }
      
        function showNextSlide() {
          showSlide(currentSlide + 1);
        }
      
        function showPreviousSlide() {
          showSlide(currentSlide - 1);
        }
      
        // Variables
        const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');
        const submitButton = document.getElementById('submit');
    
      
        var myQuestions = [
            {
                question: 'The condition in an if/else statement is enclosed with ',
                answers: {
                    a :	'1. quotes',
                    b : '2.	curly brackets',
                    c : '3.	parenthesis',
                    d : '4.	square brackets'
                },
                correctAnswer: 'b'
            },
            {
                question: 'Arrays in Javascript can be used to store ',
                answers: {
                    a :	'1. numbers and strings',
                    b : '2.	other arrays',
                    c : '3.	booleans',
                    d : '4.	all of the above'
                },
                correctAnswer: 'd'
            },
            {
                question: 'String values must be enclosed within _____ when being assigned to variables ',
                answers: {
                    a :	'1.	commas',
                    b : '2.	curly brackets',
                    c : '3.	quotes',
                    d : '4.	parenthesis'
                },
                correctAnswer: 'c'
            },
            {
                question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
                answers: {
                    a :	'1.	Javascript',
                    b : '2.	terminal/bash',
                    c : '3.	for loops',
                    d : '4.	console.log'
                },
                correctAnswer: 'd'
            }
        ];
        // Kick things off
        startQuiz();
      
        // Pagination
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;
      
        // Show the first slide
        showSlide(currentSlide);
      
        // Event listeners
        submitButton.addEventListener('click', showResults);
      })();
      