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
        question: "How many ring have Olympic Flag?",
        options: ["Two", "Five", "six", "Nine"],
        correctAnswer: "Five"
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
        options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", " Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: 'What year did the United States gain independence?',
        options: ["1776", "1676", "1576", "1476"],
        correctAnswer: "1776"
    },
    {
        question: "Who is known as the “Father of Modern Physics”?",
        options: ["Michael Karin", "Albert Einstein", "Eric S. Lander", "Guido Kroemer"],
        correctAnswer: "Albert Einstein"

    },
    {
        question: "Who was the first woman to win a Nobel prize(in 1903) ?",
        options: ["Jane Addams", "Marie Curie", "Betty Williams", "Emily Greene Blach"],
        correctAnswer: "Marie Curie"

    },
    {
        question: "Which tree is used to make paper from these 4?",
        options: ["Peepal", "Rosewood", "Ashoka", "Bamboo"],
        correctAnswer: "Bamboo"
    },
    {
        question: "APJ Abdul Kalam played a crucial role in which space mission?",
        options: ["Chandrayaan-1", "Mangalyan", "GSLV Mk III", "INSAT-3DR"],
        correctAnswer: "Mangalyan"
    },
    {
        question: "who is the richest man in the world 2023?",
        options: ["Elon Musk", "Bernard Arnault", "Jeff Bezos", "Bill Gates"],
        correctAnswer: "Elon Musk"
    },
    {
        question: "What country has the most islands in the world?",
        options: ["Norway", "Indonesia", "Sweden", "Australia"],
        correctAnswer: "Sweden"
    },
    {
        question: "What is the most consumed alcoholic drink in the world?",
        options: ["Beer", "Wine", "Whisky", "Brandy"],
        correctAnswer: "Beer"
    }
]

document.addEventListener('DOMContentLoaded', function () {
    /*document.body.style.backgroundImage="url('assets\images\6114100.jpg')";*/

    const nameInput = document.getElementById("name");
    let startBtn = document.querySelector(".start_btn button");
    let exitBtn = document.getElementsByClassName(".exit");
    let nextBtn = document.getElementsByClassName(".next");
    let gameArea = document.querySelector(".game-area");
    let questionElement = document.getElementById("question");
    let timeLeftElement = document.querySelector(".time-left");
    let optionsContainer = document.getElementById("options");
    let continueBtn = document.getElementsByClassName(".continue");
    let scoreValue = document.getElementById("score");
    const generalMessage=document.getElementById("message");
    let userScore=document.getElementById("score-value");
    let feedback=document.getElementById("feedback");
    let restartBtn = document.getElementById("restart");
    homePage();
    /*Event listener for Buttons */
    /* Event listener for the Start Quiz button*/
    startBtn.addEventListener("click", startQuiz);
    continueBtn.addEventListener("click", continueWithUsername);
    exitBtn.addEventListener("click", exitQuiz);
    optionsContainer.addEventListener("click", selectAnswer);
    nextBtn.addEventListener("click", nextQuestion);
    optBtn.addEventListener("click", showQuestion);
    restartBtn.addEventListener("click", resetQuiz);//restart quiz
});

let userName = "";
let score = 0;
const selectedQuestions = [];//Randomly selecting questions are stored in an array
let questionNumber = 0;
let time;
let timeLeft;
let seconds = 15;//Intial value for seconds is set to 15
let answer = [];
let optionsElement;//option buttons
let randomNumbers;
const numOfQuestions = 10;//Number of questions to display in the quiz
/*show only heading and start button in home page*/
function homePage() {
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "block";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";
}
 /*show only heading rules and username when click startbutton*/
function startQuiz() {
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "block";
    document.querySelector(".username").style.display = "block";
    document.querySelector(".game-area").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none";
}
 /*show only game area when click continue button*/
function gameSection() {
    /*Display only the game area */
    document.querySelector(".heading").style.display = "none";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "block";
    document.getElementById("score").style.display = "none";
    document.getElementById("restart").style.display = "none"
}
//Dsplay only score area
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
    console.log('continueWithUsername');  //to check weather the code enters the function
    const nameInput = document.getElementById("name").value.trim();
    const isAlphabets = /^[a-zA-Z\s.]*$/;//The name can have letters and spaces and .period
    /*Get user input*/
    if (nameInput === "") {
        alert("Please enter your name before starting.");
    } else if (!isAlphabets.test(nameInput)) {
        alert("Your name can contain only alphabets,space and (.), Please enter a valid name");
    } else {
        /*Display the game section when user enters the name*/
        gameSection();
        randomNumbers = getRandomUniqueNumbers(numOfQuestions, 0, (quizData.length - 1));
        console.log("Generated unique random numbers:", randomNumbers);//To check the generaed unique numbers in the console
        nextQuestion();
        alert("Quiz started! Welcome to GK QUIZ, " + nameInput + "!");
    }
}
/**
 * Generating random numbers as array
 * @param {number} amount 
 * @param {number} firstNum 
 * @param {number} maxNum 
 * @returns random numbers as array  
 */
function getRandomUniqueNumbers(amount, firstNum, maxNum) {
    if (amount > (maxNum - firstNum + 1)) {
        return [];
    }
    let randomUniqueNumber = [];
    while (randomUniqueNumber.length < amount) {
        let randomNumber = Math.floor(Math.random() * (maxNum - firstNum + 1)) + firstNum;
        // Check weather the number already in random number array
        if (!randomUniqueNumber.includes(randomNumber)) {
            randomUniqueNumber.push(randomNumber);
            //if the number is already there it will go get the other random number
        }
    }
    return randomUniqueNumber;
}
/*Get random index*/
function getIndex() {
    if (questionNumber < randomNumbers.length) {
        console.log('random number', randomNumbers[questionNumber]);  // to check the random question  in console
        return randomNumbers[questionNumber];
    }else {
        console.error("Error: question number exceeded maximum number of range.");// to check in the console
        return [];
    }
}
let currentQuestionIndex = 0;//declaring globally to use in other functions
/*Display question in the quiz */ 
function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    /*get random index */
    currentQuestionIndex = getIndex();
    /*assign the current index to current question*/
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerHTML = (questionNumber + 1) + "." + currentQuestion.question;//Display the questions with question number
    optionsElement.innerHTML = ''; //clear  the text already in option buttons
    // display the answer options of selected questions
    for (let index = 0; index < currentQuestion.options.length; index++) {  //Loopting through index value 
        const option = currentQuestion.options[index];
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('btn');
        optionButton.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(optionButton);
    }
}
/*Go to next question each ime the function calls*/ 
function nextQuestion() {
    if (questionNumber < numOfQuestions) {
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
    for (let i = 0; i < optionButtons.length; i++) {
        const button = optionButtons[i];
        if (button.textContent === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        } else if (button.textContent === selectedOption) {
            button.classList.add("incorrect");
        }
    }
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        console.log("score increased:" + score);
    }
}
//option buttons disabled to avoid further clicks after select the answer 
function optionButtonsDisable() {
    let optionButtons = document.querySelectorAll(".btn");
    optionButtons.forEach(button => {
        button.disabled = true;
    });
}
/*Display score of the user*/
function displayScore() {
    scoreSection();
    console.log("score increased:" + score);// to check the score in console
    const nameInput = document.getElementById("name").value.trim();
    const generalMessage=document.getElementById("message");
    let userScore=document.getElementById("score-value");
    let feedback=document.getElementById("feedback");
    generalMessage.textContent=` ${nameInput}`;
    userScore.textContent=score + " out of " + numOfQuestions ;
    if (score < 5) {
        feedback.textContent="You can improve Next time";
    } else {
       
        feedback.textContent="Great job! Keep It Up";
    }
}
function exitQuiz() {
    // get confirmation from the user
    const confirmExit = confirm("Are you sure you want to exit the quiz?");
    // If the user confirms, end the quiz
    if (confirmExit) {
        alert("Quiz exited. Thank you!");
        resetQuiz();
    }
}
/*reset all the values and ui elements*/
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
/*start the timer with 15 seconds and reduce the time for 1 second*/ 
function startTimer() {
    let remainingTime = seconds;
    let timeLeftElement = document.querySelector(".time-left");
    /* Check already a timer instance created and running then stop before new instance*/
    if (globalCountDownTimer_Id != 0) {
        stopTimer();
    }
    globalCountDownTimer_Id = setInterval(() => {    // which returns an id and store in the variable
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
    }, 1000); // Update the time every 1 second
}
function stopTimer() {
    /* stop interval timer using timerId */
    clearInterval(globalCountDownTimer_Id);
}

