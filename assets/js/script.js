
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
        options: ["Neil Armstrong ", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
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
    let timeLeftElement = document.querySelector(".time .seconds");
    let optionsContainer = document.getElementById("options");
    let startGame = document.getElementsByClassName("continue");



    homePage();


    /*Event listener for the Continue Button */
    /* Event listener for the Start Quiz button*/
    startBtn.addEventListener("click", startQuiz);
    startGame.addEventListener("click", continueWithUsername);
    exitBtn.addEventListener("click", exitQuiz);
    optionsContainer.addEventListener("click",selectAnswer);
    
    nextBtn.addEventListener("click", nextQuestion);
    
    //nextBtn[0].addEventListener("click", nextQuestion);
    optBtn.addEventListener("click", showQuestion);


});

let userName = "";
let score = 0;
const selectedQuestions = [];
let questionNumber = 0;
let time;
let seconds = 15;
let answer = [];
let optionsElement;
var randomNumbers;

function homePage() {
    /*show only heading and start button in home page*/
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "block";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "none";

}


function startQuiz() {
    /*show only heading rules and username when click startbutton*/
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "block";
    document.querySelector(".username").style.display = "block";
    document.querySelector(".game-area").style.display = "none";

}

function gameSection() {

    /*Display only the game area */

    /*show only game area when click continue button*/
    document.querySelector(".heading").style.display = "none";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "block";



}

/*Get user name from the user before starting the quiz*/
function continueWithUsername() {
    const nameInput = document.getElementById("name").value.trim();
    /*Get user input*/
    if (nameInput === "") {
        alert("Please enter your name before starting.");
    } else {

        /*Display the game section when user enters the name*/
        gameSection();
        
        randomNumbers = getRandomUniqueNumbers(10, 0, (quizData.length-1));
        //console.log("Generated unique random numbers:", randomNumbers);


        showQuestion();

        alert("Quiz started! Welcome to GK QUIZ, " + nameInput + "!");

    }
}

function getrandomIndex() {

    if (questionNumber < randomNumbers.length)
    {
        return randomNumbers[questionNumber];
    }
    else
    {
        console.error("Error: question number exceeded maximum number of range.");
        return [];
    }
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    /*get random index */
    const randomIndex = getrandomIndex();
    const selectedQuizData = quizData[randomIndex];
    
    questionElement.innerHTML = (questionNumber + 1) + "." + selectedQuizData.question;
    optionsElement.innerHTML = '';//reset the text tin option buttons
    selectedQuizData.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('btn');
        if (option) {
            optionButton.dataset.option = option === selectedQuizData.correctAnswer ? "true" : "false";
        }
        optionButton.addEventListener('click', (fn) => selectAnswer(fn.target));
        optionsElement.appendChild(optionButton);
    });
    
}


/*Code to select option button from the user and check it is correct or not*/

/*function selectAnswer(option) {
    const selectedQuizData = option.textContent;
    const currentQuestion = selectedQuestions[questionNumber].correctAnswer;

    if (selectedOption === currentQuestion) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}*/

function selectAnswer(selectedOption) {
    const currentQuestion = quizData[getrandomIndex()].correctAnswer;

    if (selectedOption.dataset.option === "true") {
        alert("Correct!");
    } else {
        alert("Incorrect! The correct answer is: " + currentQuestion);
    }

    // Proceed to the next question
    nextQuestion();
}

function nextQuestion() {
    //clearInterval(time);
    questionNumber++;//increment the question number each time clicks the next button

    if (questionNumber < 10) {
        showQuestion();

       // timerBegin(15);
    }
    else {
        alert("well done! you finished your quiz, you scored:"+score);
        questionNumber = 0;//resetting the question number to 0 before go for next call
    
    }
}

/*function timerBegin(seconds) {

    var timeLeft = seconds;

    displayUpdatedTime(timeLeft);

    time = setInterval(function () {
        if (timeLeft >= 0) {
            displayUpdatedTime(timeLeft);
            timeLeft--;
        } else {
            clearInterval(time);
            nextQuestion();
        }

    }, 1000);
}

function displayUpdatedTime(timeLeft) {

    document.getElementsByClassName("time-left").innerHTML = "Time Left:" + timeLeft + "seconds";

}*/

function getAnswer() {

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

    homePage();

}


/*Generating random number*/
  function getRandomUniqueNumbers(amount, firstNum, maxNum) {
    if (amount> (maxNum- firstNum + 1)) {
    
      return [];
    }

    var  randomUniqueNumber= [];

    while (randomUniqueNumber.length < amount) {
      var randomNumber = Math.floor(Math.random() * (maxNum- firstNum+ 1)) + firstNum;

      // Check weather the number already in random number array
      if (!randomUniqueNumber.includes(randomNumber)) {
       
        randomUniqueNumber.push(randomNumber);
         //if the number is already there it will go get the other random number
      }

    }

    return randomUniqueNumber;
  }