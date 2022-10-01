
var quizState = { 
    quizIsRunning: false, //this is a key in our object- each key needs a value (false in this case) //key- value pair requires a comma to separate them. 
//to acess a key in an object, we write the name of the object and put a "dot" then the name of the key we wnat to access. 
questionNumber: 0,
timer: 15, //key is "timer", and the value is "60" ( object is a collection of diefferent value pairs)


}//object
console.log(quizState.quizIsRunning)
console.log(quizState.questionNumber)
console.log(quizState.timer)
var timerElement = document.getElementById("QuizTimer")//setting the variable "timerElement" as a reference to the whole HTML emelment, where the ID is equal to "QuizTimer.
console.log(timerElement)
function createTimer() {
    //everytime you have a function, you need the curly braces; even if it's inside another curly brace.

    var timer = setInterval(function (){
        quizState.timer = quizState.timer -1//equals changes a value inside an object
        timerElement.textContent = quizState.timer //we want to display the time remaining in the quiz to the user.
        if (quizState.timer === 0){
            //three equals signs = "the equality operator." It checks if things are equal to each other. i.e would 60 be equal to zero?
    //curly braces = block of code; block = like a room in a hosue. 
            clearInterval(timer)//everytime we hae a functions, we have parenthesis. 
            quizState.quizIsRunning = false 
            console.log(quizState)
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
    console.log(quizState)
    createTimer() 

   
}


//focus on making actual questions, work on styling more, etc