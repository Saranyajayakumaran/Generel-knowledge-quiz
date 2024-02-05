
/*Get the questions as arrays and objects inside the array*/
const quizData = [
    {
        question: "Which is the largest Spanish-speaking city in the world?",
        options: ["New york", "Paris", "Mexico", "Frankfurt"],
        correctAnswer: "Mexico",
        used: false

    },
    {
        question: "How many heart does an Octopus have",
        options: ["3", "4", "2", "1"],
        correctAnswer: "3",
        used: false

    },
    {
        question: "Where is the strongest human muscle located?",
        options: ["Tigh", "Foot", "Elbow", "Jaw"],
        correctAnswer: "Jaw",
        used: false

    },
    {
        question: "Where is Disney's European theme park located?",
        options: ["New york", "Paris", "Mexico", "Frankfurt"],
        correctAnswer: "Paris",
        used: false
    },
    {
        question: "Which city is known as 'The Eternal City'",
        options: ["Venice", "Turin", "Rome", "Pisa"],
        correctAnswer: "Rome",
        used: false

    },
    {
        question: "Which Planet is closest to the Sun?",
        options: ["Mercury", "Mars", "Earth", "Neptune"],
        correctAnswer: "Mercury",
        used: false

    },
    {
        question: "In wich country people drink more Coffee?",
        options: ["Ireland", "Germany", "Singapore", "Finland"],
        correctAnswer: "Finland",
        used: false

    },
    {
        question: "What is the currency of Europe?",
        options: ["Dollar", "Rupee", "Euro", "Dhiram"],
        correctAnswer: "Euro",
        used: false

    },
    {
        question: "Which planet is known as the “Blue Planet”?",
        options: ["Earth", "Uranus", "Jupiter", "Saturn"],
        correctAnswer: "Earth",
        used: false
    },
    {
        question: "What is the world's largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: "Pacific Ocean",
        used: false
    },
    {
        question: "Who was the first person to step foot on the moon in 1969?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong",
        used: false

    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", " Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
        used: false
    },
    {
        question: 'What year did the United States gain independence?',
        options: ["1776", "1676", "1576", "1476"],
        correctAnswer: "1776",
        used: false

    },
    {
        question: "Who is known as the “Father of Modern Physics”?",
        options: ["Michael Karin", " Albert Einstein", "Eric S. Lander", "Guido Kroemer"],
        correctAnswer: "Albert Einstein",
        used: false
    },
    {
        question: "What is the currency of Japan?",
        options: ["Rupees", "Euro", "yen", "frank"],
        correctAnswer: "yen",
        used: false
    }
]

document.addEventListener('DOMContentLoaded', function () {

    /*document.body.style.backgroundImage="url('assets\images\6114100.jpg')";*/

    let nameInput = document.getElementById("name");
    let startBtn = document.querySelector(".start_btn button");
    let exitBtn = document.getElementsByClassName("exit");
    let nextBtn = document.getElementsByClassName("next");
    let gameArea = document.querySelector(".game-area");
    let questionElement = document.getElementById("question");
    //let timeLeftElement = document.querySelector(".time-left");
    let optionsContainer = document.getElementById("options");
    let startGame = document.getElementsByClassName("continue");
    let scoreValue = document.getElementById("score");
    let restartBtn = document.getElementById("restart")



    homePage();


    /*Event listener for Buttons */
    /* Event listener for the Start Quiz button*/
    startBtn.addEventListener("click", startQuiz);
    startGame.addEventListener("click", continueWithUsername);
    exitBtn.addEventListener("click", exitQuiz);
    optionsContainer.addEventListener("click", selectAnswer);
    nextBtn.addEventListener("click", nextQuestion);
    optBtn.addEventListener("click", showQuestion);
    restartBtn.addEventListener("click", resetQuiz);
});

let userName = "";
let score = 0;
const selectedQuestions = [];
let questionNumber = 0;
let time;
var timeLeft;
let seconds = 15;
let answer = [];
let optionsElement;
var randomNumbers;
const numOfQuestions = 10;

function homePage() {
    /*show only heading and start button in home page*/
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "block";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";

}


function startQuiz() {
    /*show only heading rules and username when click startbutton*/
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "block";
    document.querySelector(".username").style.display = "block";
    document.querySelector(".game-area").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";

}

function gameSection() {

    /*Display only the game area */

    /*show only game area when click continue button*/

    document.querySelector(".heading").style.display = "none";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "block";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none"
}

function scoreSection() {

    document.querySelector(".heading").style.display = "none";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("restart").style.display = "block"
}



/*Get user name from the user before starting the quiz*/
function continueWithUsername() {
    console.log('continueWithUsername');  // You can replace this with your desired action for quiz completion
    const nameInput = document.getElementById("name").value.trim();
    /*Get user input*/
    if (nameInput === "") {
        alert("Please enter your name before starting.");
    } else {

        /*Display the game section when user enters the name*/
        gameSection();

        randomNumbers = getRandomUniqueNumbers(10, 0, (quizData.length - 1));
        //console.log("Generated unique random numbers:", randomNumbers);

        nextQuestion();

        alert("Quiz started! Welcome to GK QUIZ, " + nameInput + "!");

    }
}

/*Generating random number*/
function getRandomUniqueNumbers(amount, firstNum, maxNum) {
    if (amount > (maxNum - firstNum + 1)) {

        return [];
    }

    var randomUniqueNumber = [];

    while (randomUniqueNumber.length < amount) {
        var randomNumber = Math.floor(Math.random() * (maxNum - firstNum + 1)) + firstNum;

        // Check weather the number already in random number array
        if (!randomUniqueNumber.includes(randomNumber)) {

            randomUniqueNumber.push(randomNumber);
            //if the number is already there it will go get the other random number
        }

    }

    return randomUniqueNumber;
}

function getIndex() {

    if (questionNumber < randomNumbers.length) {
        console.log('random number', randomNumbers[questionNumber]);  // You can replace this with your desired action for quiz completion

        return randomNumbers[questionNumber];
    }
    else {
        console.error("Error: question number exceeded maximum number of range.");
        return [];
    }
}
let currentQuestionIndex = 0;

function showQuestion() {

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    /*get random index */
    currentQuestionIndex = getIndex();

    const currentQuestion = quizData[currentQuestionIndex];


    questionElement.innerHTML = (questionNumber + 1) + "." + currentQuestion.question;
    optionsElement.innerHTML = '';//reset the text tin option buttons

    // display the answer options of selected questions
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('btn');
        optionButton.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(optionButton);
    });

}

function nextQuestion() {

    if (questionNumber < numOfQuestions) {

        //optionButtonsDisable();
        showQuestion();
        startTimer();
          
        questionNumber++;//increment the question number each time clicks the next button
    }
    else {


        alert("quiz finished");
        displayScore();

    }
}


/*Code to select option button from the user and check it is correct or not*/

function selectAnswer(selectedOption) {

    const currentQuestion = quizData[currentQuestionIndex];

    const optionButtons = document.querySelectorAll(".btn");
//display the correct answer buton and wrong anser in red
   
    optionButtonsDisable();// call the function to disable the option buttons 
    
    optionButtons.forEach(button=>{
        if (button.textContent === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        } else if (button.textContent === selectedOption) {
            button.classList.add("incorrect");
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        console.log("score increased:" + score);
    } 
       
}
  //option buttons disabled to avoid further clicks after select the answer 
function optionButtonsDisable(){
    let optionButtons=document.querySelectorAll(".btn");
    optionButtons.forEach(button=>{
    button.disabled=true;
    });
}

function displayScore() {

    scoreSection();
    console.log("score increased:" + score);// to check the score in console
    let scoreValue = document.getElementById("score");
    let nameInput = document.getElementById("name").value.trim();
    scoreValue.innerHTML = '';
    scoreValue.innerHTML = 'Congragulation!' + nameInput +  'Your Score:'  + score +  'out of'  + randomNumbers.length;

}


function exitQuiz() {
    // get confirmation from the user
    const confirm = confirm("Are you sure you want to exit the quiz?");

    // If the user confirms, end the quiz
    if (confirm) {

        alert("Quiz exited. Thank you!");
        resetQuiz();

    }
}

function resetQuiz() {
    // Reset everyting before go to home page
    userName = "";
    score = 0;
    selectedQuestions.length = 0;
    time = undefined;
    seconds = 15;
    optionsElement = undefined;
    currentQuestionIndex = 0;
    answer.length = 0;
    questionNumber = 0;
    randomNumbers = undefined;

    // Reset UI elemens
    let nameInput = document.getElementById("name");
    let scoreValue = document.getElementById("score");
    let questionElement = document.getElementById("question");
    let optionsContainer = document.getElementById("options");

    nameInput.value = "";
    scoreValue.innerHTML = "";
    questionElement.innerHTML = "";
    optionsContainer.innerHTML = "";

    homePage();
}

let globalCountDownTimer_Id = 0;

function startTimer() {
    let remainingTime = seconds;
    let timeLeftElement = document.querySelector(".time-left");

    /* Check already a timer instance created and running then stop before new instance*/
    if (globalCountDownTimer_Id != 0) {
        stopTimer();
    }

    globalCountDownTimer_Id = setInterval(() => {
        timeLeftElement.innerHTML = `Time left: ${remainingTime}`;

        if (remainingTime <= 0) {
            stopTimer();

            // Check if there are more questions or show the final result
            if (questionNumber < numOfQuestions) {
                setTimeout(() => {

                    nextQuestion();
                }, 2000); // Wait for 2 seconds before loading the next question
            } else {
                console.log('Quiz completed.');  // You can replace this with your desired action for quiz completion
            }
        }

        remainingTime--;
    }, 1000); // Update every second
}
function stopTimer() {
    /* stop interval timer using timerId */
    clearInterval(globalCountDownTimer_Id);
}

