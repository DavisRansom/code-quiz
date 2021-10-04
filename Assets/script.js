//when the user hits a button to begin the game, a timer begins
//Then users are asked questions about the book Ready Player One
//The user inputs their answer by choosing from a multiple-choice area
//When a user misses a question the timer goes down by an additional 5 seconds
//Every time a user gets a question correct, they add +10 to their score total
//When the timer gets to 0, a message that says "Game Over" comes up
//The top 3 scorers are kept in localstorage for someone to try to beat again

//html elements
const timeElement = document.querySelector("time"),
    main = document.querySelector("main"),
    nameInput = document.querySelector("input"),
    startButton = document.querySelector("button");


//settings
const secondsForEachQuestion = 10;


//state variables
var timeRemaining,
    timer;


//event listeners
startButton.addEventListener("click", setup);


//setup game
function setup() {
    //make sure game has not already started
    if (document.body.classList.contains("quizmode")) return;
    //set quizmode
    document.body.classList.add("quizmode");
    //set state variables and view
    timeRemaining = questions.length * secondsForEachQuestion;
    updateTimeRemaining();
    //start timer
    timer = setInterval(tick, 1000); //run the tick() function every second
}


//what the user sees
function updateTimeRemaining() {
    timeElement.textContent = timeRemaining;
}


//quiz controller
function endGame() {
    //stop timer
    clearInterval(timer);
    //update view
    document.body.classList.remove("quizmode");
}


//timer controller
function tick() {
    //decrement timeRemaining
    timeRemaining = Math.max(0, timeRemaining - 1);
    //check for time expired
    if (timeRemaining === 0) endGame();
    //update view
    updateTimeRemaining();
}


//data (questions)
const questions = [
    {
        q: "Who is the main character's love interest?",
        a: [
            "Artemis",
            "Aech",
            "Shoto",
            "Daito"
        ]
    },
    {
        q: "What's the answer (2)?",
        a: [
            "Correct",
            "Incorrect",
            "Wrong",
            "Dead wrong"
        ]
    },
    {
        q: "What's the answer (3)?",
        a: [
            "Correct",
            "Incorrect",
            "Wrong",
            "Dead wrong"
        ]
    }
];


//helper (library)
function shuffle(arr) {
    //make a copy of arr
    const clone = [...arr];} //"shallow clone"
	//return a randomly rearranged version of the array above//
