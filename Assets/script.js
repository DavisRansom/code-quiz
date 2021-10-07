
//Then users are asked random questions from an array, about the book Ready Player One
//The question is displayed in the question text area
//The user inputs their answer by choosing from a multiple-choice area
//When a user misses a question the timer goes down by an additional 5 seconds
//Every time a user gets a question correct, they add +10 to their score total
//When the timer gets to 0, a message that says "Game Over" comes up
//Another message comes up saying "Congratulations! Your score is:   ."
//The top 3 scorers are kept in localstorage for someone to try to beat again

//html elements
const timeElement = document.querySelector("time"),
    main = document.querySelector("main"),
    nameInput = document.querySelector("input"),
    startButton = document.querySelector("button");

//settings
const secondsForEachQuestion = 10;
const pointsPerCorrectAnswer = 10;
const pointsPerIncorrectAnswer = -5;

var userScore = 0;

//state variables
var timeRemaining,
    timer;

//event listener to setup and start the game
startButton.addEventListener("click", setup);
//and on start button click the question will appear in the question box

//event listeners for each answer choice that runs a function that: 
//1. signals whether or not the user got it correct or not (and possibly the correct answer and interesting fact about question) 
//and 2. adds points to the user score or not
//       Button.addEventListener("click",         );

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
    //Input a random question from the array into the main h2 area 
}


//what the user sees with the timer
function updateTimeRemaining() {
    timeElement.textContent = timeRemaining;
}

function updateUserScore() {
    userScore.textContent = userTotalScore;
}

function addScore() {
if (userAnswer === true) {
    userScore + pointsPerCorrectAnswer === userScore}


    document.getElementById("quizQuestion").innerHTML = ;
}


//quiz controller - end the game
function endGame() {
    //stop timer
    clearInterval(timer);
    //and switch states from quizmode to not quizmode
    document.body.classList.remove("quizmode");
    //and then store score in localstorage and/or High Scorers list


}

//timer controller
function tick() {
    //decrement timeRemaining
    timeRemaining = Math.max(0, timeRemaining - 1);
    //check for time expired and if time is up, end the game
    if (timeRemaining === 0) endGame();
    //update user view
    updateTimeRemaining();
}

//subtract time (5 seconds) if the user misses a question???

//data - questions 

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
        q: "What is the name of the main character in the book?",
        a: [
            "Wade Watts",
            "Nora Wade",
            "Juliet o'Day",
            "Captain Obvious"
        ]
    },
    {
        q: "What is the virtual reality experience that people spend most of their time in, called?",
        a: [
            "The Oasis",
            "Decentraland",
            "The Metaverse",
            "The Immaculata"
        ]
    },
    {
        q: "How much does it cost to purchase the immersive virtual reality experience from Ready Player One",
        a: [
            "25 cents",
            "$299.99",
            "$1",
            "$999.99"
        ]
    },
    {
        q: "In Ready Player One, why do people immerse themselves in virtual reality",
        a: [
            "All of the above",
            "They can be or do anything they want",
            "Their avatars can become incredibly powerful",
            "The world has gone to shambles"
        ]
    },
    {
        q: "What is the ultimate prize for winning The Contest",
        a: [
            "A lot of money and control over The Oasis",
            "Solving The Earth's energy crisis",
            "Becoming CEO of The Sixers",
            "Superpowers within the virtual reality system"
        ]
    }
];


//shuffle the questions
function shuffle(arr) {
    //make a copy of arr
    const clone = [...arr];
} //"shallow clone"
//return a randomly rearranged version of the array above//



    //stores the user score in the list of high scorers
    //and loads the top 3 scorers after the game is over
