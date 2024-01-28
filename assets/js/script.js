document.addEventListener('DOMContentLoaded', function() {
    let userName="";
    let currentQuestionIndex=0;

    let nameInput=document.getElementById("name");
    let startBtn = document.querySelector(".start_btn button");
    let exitBtn = document.getElementsByClassName("exit");
    let nextBtn = document.getElementsByClassName("next");
    
});


function startQuiz(){
    // Hide start button and show game area
    document.querySelector(".start_btn").style.display = "none";
    document.querySelector(".game-info").style.display = "none";
    document.querySelector(".username").style.display="none";
    document.querySelector(".game-area").style.display = "block";

}
