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
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", " Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
        used: false

    },

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
    /*startGame.addEventListener("click", continueWithUsername);*/
    /* Event listener for the Start Quiz button*/
    startBtn.addEventListener("click", startQuiz);
    startGame.addEventListener("click", continueWithUsername);
    exitBtn.addEventListener("click", exitQuiz);
    nextBtn.addEventListener("click", nextQuestion);


    showQuestion();


});

    let userName = "";
    let score = 0;


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
        showQuestion();
        
        alert("Quiz started! Welcome to GK QUIZ, " + nameInput + "!");

        /*const selectedQuestions = getRandomQuestions(); // Call getRandomQuestions to get an array of random questions
        displayQuestions(selectedQuestions);*/


    }
}


function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    for(let currentIndex=0; currentIndex<10 ; currentIndex++){
    const currentQuestion = quizData[currentIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('btn');
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}
}


/*Get the questions as arrays and objects inside the array*/



/*function getrandomQuestion() {

    const selectedQuestions = [];

    for (i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * quizData.length);
        let randomQuestion = quizData[randomIndex];
        if (randomQuestion.used === true) {


            continue;

        }

        randomQuestion.used = true;

        selectedQuestions.push(randomQuestion);
    }

    quizData.forEach(question => (question.used = false));
    return selectedQuestions;

}

function displayQuestions(questions) {

    let questionElement = document.getElementById("question");

    questionElement.innerHTML = questions;

}
/*function displayOPtionButtons{
    const optionContainer=document.elementFromPoint('div');
    question.options.forEach((option,index)=>{

    })
}
function nextQuestion() {

}
function getAnswer() {

}

function checkAnswer() {


}*/

function exitQuiz() {
    // Display a confirmation prompt
    const confirmExit = confirm("Are you sure you want to exit the quiz?");

    // If the user confirms, end the quiz or perform other actions
    if (confirmExit) {

        alert("Quiz exited. Thank you!");
        resetQuiz();

    }
}

function resetQuiz() {

    homePage();

}


/*let currentIndex = 0; // Index to track the current question
let timer; // Timer variable for countdown

function startQuiz() {
    const startBtn = document.querySelector('.start_btn');
    const usernameInput = document.querySelector('.username');
    const gameInfo = document.querySelector('.game-info');

    startBtn.style.display = 'none';
    usernameInput.style.display = 'block';
    gameInfo.style.display = 'none';
}

function continueWithUsername() {
    const usernameInput = document.getElementById('name');
    const username = usernameInput.value;

    if (username.trim() !== '') {
        const usernameContainer = document.querySelector('.username');
        const gameInfo = document.querySelector('.game-info');
        const gameArea = document.querySelector('.game-area');

        usernameContainer.style.display = 'none';
        gameInfo.style.display = 'none';
        gameArea.style.display = 'block';

        initializeQuiz();
    } else {
        alert('Please enter your name.');
    }
}

function exitQuiz() {
    // Reset everything and go back to the start
    currentIndex = 0;
    clearInterval(timer);
    resetTimer();
    showQuestion();
    showNextButton(false);

    const startBtn = document.querySelector('.start_btn');
    const usernameInput = document.querySelector('.username');
    const gameInfo = document.querySelector('.game-info');
    const gameArea = document.querySelector('.game-area');

    startBtn.style.display = 'block';
    usernameInput.style.display = 'none';
    gameInfo.style.display = 'block';
    gameArea.style.display = 'none';
}

function initializeQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = quizData[currentIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('btn');
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function startTimer() {
    const secondsElement = document.querySelector('.seconds');
    let secondsLeft = 15;

    timer = setInterval(function () {
        secondsElement.textContent = secondsLeft;
        secondsLeft--;

        if (secondsLeft < 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    const secondsElement = document.querySelector('.seconds');
    secondsElement.textContent = '15';
}

function showNextButton(show) {
    const nextButton = document.querySelector('.next button');
    nextButton.style.display = show ? 'block' : 'none';
}

function nextQuestion() {
    clearInterval(timer);
    resetTimer();
    showNextButton(false);

    currentIndex++;

    if (currentIndex < quizData.length) {
        showQuestion();
        startTimer();
    } else {
        // Quiz finished
        alert('Quiz finished! You can restart if you want.');
        currentIndex = 0;
        showNextButton(false);
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }

    showNextButton(true);
    clearInterval(timer);
    resetTimer();


}*/