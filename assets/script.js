
var quizState = { 
    quizIsRunning: false, //this is a key in our object- each key needs a value (false in this case) //key- value pair requires a comma to separate them. 
//to acess a key in an object, we write the name of the object and put a "dot" then the name of the key we wnat to access. 
questionNumber: 0,
timer: 60, //key is "timer", and the value is "60" ( object is a collection of diefferent value pairs)
score: 0, 

}//object
console.log(quizState.quizIsRunning)
console.log(quizState.questionNumber)
console.log(quizState.timer)
var timerElement = document.getElementById("QuizTimer")//setting the variable "timerElement" as a reference to the whole HTML emelment, where the ID is equal to "QuizTimer.
console.log(timerElement)
var scoreElement = document.getElementById("QuizScore") 
var endScoreElement = document.getElementById("endquizscore")
var endSectionElement = document.getElementById("endsection")
var formElement = document.getElementById("form")
var inputElement = document.getElementById("saveInput")
formElement.addEventListener("submit", function (event){
    event.preventDefault()
    console.log(quizState.score)
    var userInitials = inputElement.value
    console.log(userInitials)
    var saveData = {
        score: quizState.score,
        userInitials: userInitials, 

    }
    localStorage.setItem("Quiz Results", JSON.stringify(saveData)) //JSON.stringify takes a JavaScript object (saveData) and turns it into a string

})
function createTimer() {
    //everytime you have a function, you need the curly braces; even if it's inside another curly brace.

    var timer = setInterval(function (){
        quizState.timer = quizState.timer -1//equals changes a value inside an object
        timerElement.textContent = quizState.timer //we want to display the time remaining in the quiz to the user.
        if (quizState.timer <= 0){
            //three equals signs = "the equality operator." It checks if things are equal to each other. i.e would 60 be equal to zero?
    //curly braces = block of code; block = like a room in a hosue. 
            clearInterval(timer)//everytime we hae a functions, we have parenthesis. 
            //quizState.quizIsRunning = false 
            console.log(quizState)
            endQuiz()
        }
        console.log(quizState.timer)//referencing quiz object from line 2
},1000)//every one second, we'll console log the timer. 

}
function startQuiz() {
    // console.log("clickedButton")
    //defines function to be called when we click the start quiz button^
    document.getElementById("question1") .style.display = "block"
    //document= page you're viewing getElementById= lets us know which question (id) to display
    //style.display =changes the style so that you can see it
    //this changes visibility of questions when you click the start button ^
    quizState.quizIsRunning = true
    scoreElement.textContent = quizState.score 
    console.log(quizState)
    createTimer() 
}
function endQuiz(){
    quizState.quizIsRunning = false 
    quizState.timer = 0
    endSectionElement.style.display = "block"
    endScoreElement.textContent = quizState.score
}
//make a global var to hold score, so it can be accessed from anywhere- start at zero. in the function where is says 
//answer is "correct" add points to wherever the console log says it's correct. 10032022NOTES

 var answers = {
    "question1": "yes",
    "question2": "no",
    "question3": "yes",
    "question4": "no",
    "question5": "yes",
 }
 function question1(userAnswer) {
    if (userAnswer === answers.question1) {
        console.log("answer is correct")
        quizState.score = quizState.score +1
        scoreElement.textContent = quizState.score
    } else { 
        console.log("answer is incorrect")
        quizState.score = quizState.score -1 
        quizState.timer = quizState.timer -10
        scoreElement.textContent = quizState.score

    }
    document.getElementById("question1") .style.display = "none" //this is so that the first question disappears after it is answered
    document.getElementById("question2") .style.display = "block" //this is so the second question appears- repeat as needed. 
 }
 function question2(userAnswer) {
    if (userAnswer === answers.question2) { //if the answer the user sumbmitted is equal to the answer in the answer key, then the answer is correct. If it's not equal, then the answer is incorrect. 
        console.log("answer is correct")
        quizState.score = quizState.score +1
        scoreElement.textContent = quizState.score
    } else { 
        console.log("answer is incorrect")
        quizState.score = quizState.score -1
        quizState.timer = quizState.timer -10
        scoreElement.textContent = quizState.score
    }
    document.getElementById("question2") .style.display = "none"
    document.getElementById("question3") .style.display = "block"


 }
 function question3(userAnswer) {
    if (userAnswer === answers.question3) {
        console.log("answer is correct")
        quizState.score = quizState.score +1
        scoreElement.textContent = quizState.score
    } else { 
        console.log("answer is incorrect")
        quizState.score = quizState.score -1
        quizState.timer = quizState.timer -10
        scoreElement.textContent = quizState.score
    }
    document.getElementById("question3") .style.display = "none"
    document.getElementById("question4") .style.display = "block"

 }
 function question4(userAnswer) {
    if (userAnswer === answers.question4) {
        console.log("answer is correct")
        quizState.score = quizState.score +1
        scoreElement.textContent = quizState.score
    } else { 
        console.log("answer is incorrect")
        quizState.score = quizState.score -1
        quizState.timer = quizState.timer -10
        scoreElement.textContent = quizState.score
    }
    document.getElementById("question4") .style.display = "none"
    document.getElementById("question5") .style.display = "block"
 }
 function question5(userAnswer) {
    if (userAnswer === answers.question5) {
        console.log("answer is correct")
        quizState.score = quizState.score +1
        scoreElement.textContent = quizState.score
    } else { 
        console.log("answer is incorrect")
        quizState.score = quizState.score -1
        quizState.timer = quizState.timer -10
        scoreElement.textContent = quizState.score
    }
    document.getElementById("question5") .style.display = "none"
    endQuiz()

 }


//   function chooseYes() {
//     if (answers.question1 === "yes"){
//         console.log("answer is correct")
//     } else {
//             console.log("answers is incorrect")
//     }    

// }
// function chooseNo() {
//     if (answers.question1 === "no"){
//         console.log("answer is incorrect")
//     } else {
//         console.log("answer is correct")
//     }



