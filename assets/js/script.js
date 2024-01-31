document.addEventListener('DOMContentLoaded', function () {
    let userName = "";
    let currentQuestionIndex = 0;

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

    /* Event listener for the Start Quiz button*/
    startBtn.addEventListener("click", startQuiz);

    /*Event listener for the Continue Button */


    /*startGame.addEventListener("click", continueWithUsername);*/

});

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

function gameSection(){

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
        
        alert("Quiz started! Welcome to GK QUIZ, " + nameInput + "!");
    }
}


/*Get the questions as arrays and objects inside the array*/

const quizData = [
    {
        question: "Which is the largest Spanish-speaking city in the world?",
        options: ["New york", "Paris", "Mexico", "Frankfurt"],
        correctAnswer: "Mexico"

    },
    {
        question: "How many heart does an Octopus have",
        options: ["3", "4", "2", "1"],
        correctAnswer: "3"

    },
    {
        question: "Where is the strongest human muscle located?",
        options: ["Tigh", "Foot", "Elbow", "Jaw"],
        correctAnswer: "Jaw"

    },
    {
        question: "Where is Disney's European theme park located?",
        options: ["New york", "Paris", "Mexico", "Frankfurt"],
        correctAnswer: "Paris"
    },
    {
        question: "Which city is known as 'The Eternal City'",
        options: ["Venice", "Turin", "Rome", "Pisa"],
        correctAnswer: "Rome"

    },
    {
        question: "Which Plnet is closest to the Sun?",
        options: ["Mercury", "Mars", "Earth", "Neptune"],
        correctAnswer: "Mercury"

    },
    {
        question: "In wich country people drink more Coffee?",
        options: ["Ireland", "Germany", "Singapore", "Finland"],
        correctAnswer: "Finland"

    },
    {
        question: "What is the currency of Europe?",
        options: ["Dollar", "Rupee", "Euro", "Dhiram"],
        correctAnswer: "Euro"

    },
    {
        question: "What is the currency of Europe?",
        options: ["Dollar", "Rupee", "Euro", "Dhiram"],
        correctAnswer: "Euro"
    },
    {
        question: "Which planet is known as the “Blue Planet”?",
        options: ["Earth", "Uranus", "Jupiter", "Saturn"],
        correctAnswer: "Earth"
    },
    {
        question: "What is the world's largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who was the first person to step foot on the moon in 1969?",
        options: ["Neil Armstrong ", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong"

    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", " Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", " Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
]

function getrandomQuestion(){

let randomIndex=Math.floor(Math.random()*quizData.length);
let randomQuestion=quizData[randomIndex];

}

function displayQuestions(){

}

function nextQuestion(){

}
function getAnswer(){

}

function checkAnswer(){

    
}

function exitQuiz() {
    // Display a confirmation prompt
    const confirmExit = confirm("Are you sure you want to exit the quiz?");

    // If the user confirms, end the quiz or perform other actions
    if (confirmExit) {
      
        alert("Quiz exited. Thank you!");
        resetQuiz(); // You can replace this with your own logic for handling the exit action*/

       }
}

function resetQuiz(){

    homePage();

}


