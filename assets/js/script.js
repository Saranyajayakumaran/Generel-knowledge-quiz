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
    let startGame=document.getElementsByClassName("continue");


    homePage();

    /* Event listener for the Start Quiz button*/
    startBtn.addEventListener("click", startQuiz);

    /*Event listener for the Continue Button */

    startGame.addEventListener(click,gameSection());

});

function homePage() {
    /*show only heading and start button in home page*/
    document.querySelector(".heading").style.display = "block";
    document.querySelector(".start_btn").style.display = "button";
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
    /*show only game area when click continue button*/
    document.querySelector(".heading").style.display = "none";
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display = "none";
    document.querySelector(".game-area").style.display = "block";


}
