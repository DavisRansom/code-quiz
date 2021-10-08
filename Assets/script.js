
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
    highScoreOL = document.querySelector("footer OL");

//settings
const secondsForEachQuestion = 10;
const pointsPerCorrectAnswer = 10;
const timePenalty = -5;
const dataStorageName = "quiz";

//state variables
var timeRemaining,
    timer,
    currentQuestionIndex,
    score;

//event listener to setup and start the game
startButton.addEventListener("click", setup);
//show the current High Scorers
renderHighScores()
//setup game
function setup() {
    //make sure game has not already started
    if (document.body.classList.contains("quizmode")) return;
    //set quizmode
    document.body.classList.add("quizmode");
    //set state variables and view
    timeRemaining = questions.length * secondsForEachQuestion;
    updateTimeRemaining();
    currentQuestionIndex = 0;
    score = 0
    //show the first question
    renderQuestion();
    //start timer
    timer = setInterval(tick, 1000); //run the tick() function every second
}
//what the user sees with the timer
function updateTimeRemaining() {
    timeElement.textContent = timeRemaining;
}
function renderQuestion(){
    let question = questions[currentQuestionIndex],
        answers = shuffle(question.a),
        html = '
            <h2>${question.q}</h2>
            <ol>
        ';
    for (let a of answers) {
        html += '<li><button>${a}</button></li>';
    }
    html =+ "</ol>";
    main.innerHTML = html; //converting string to actual html elements
    for (let button of main.querySelectorAll("button")){
    button.addEventListener("click", handleUserAnswer);
    }
}
function renderHighScores(){
    const data = getHighScores();
    var html = "";
    if (!data.length){
        html = "<li>No High Scorers Yet</li>";
    }
    else {
        for (let datum of data){
            html =+ '<li>${datum.name}: ${datum.score}</li>';
        }
    }
    highScoreOL.innerHTML = html;
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
//html elements
const timeElement = document.querySelector("time"),
	  main = document.querySelector("main"),
	  nameInput = document.querySelector("input"),
	  startButton = document.querySelector("button"),
	  highScoreOL = document.querySelector("footer ol");


//settings
const secondsForEachQuestion = 10,
	  scoreBonus = 10,
	  timePenalty = -5,
	  dataStorageName = "quiz";


//state variables
var timeRemaining,
	timer,
	currentQuestionIndex,
	score;


//event listeners
startButton.addEventListener("click", setup);


//init (called once when page loads)
renderHighScores();


//setup game
function setup(){
	//make sure game isn't already started
	if (document.body.classList.contains("quizmode")) return;
	//set quizmode
	document.body.classList.add("quizmode");
	//set state variables and view
	timeRemaining = questions.length * secondsForEachQuestion;
	updateTimeRemaining();
	currentQuestionIndex = 0; //start with the first question
	score = 0;
	//show first question
	renderQuestion();
	//start timer
	timer = setInterval(tick, 1000); //run the tick() function every 1000ms (1 second)
}


//output (what the user sees)
function updateTimeRemaining(){
	timeElement.textContent = timeRemaining;
}
function renderQuestion(){
	let question = questions[currentQuestionIndex],
		answers = shuffle(question.a),
		html = `
			<h2>${question.q}</h2>
			<ol>
		`;
	for (let a of answers){
		html += `<li><button>${a}</button></li>`;
	}
	html += "</ol>";
	main.innerHTML = html; //converting string to actual html elements!!!
	//add event listeners to each button
	for (let button of main.querySelectorAll("button")){
		button.addEventListener("click", handleUserAnswer);
	}
}
function renderHighScores(){
	const data = getHighScores();
	var html = "";
	if (!data.length){
		html = "<li>No high scroes yet</li>";
	}
	else {
		for (let datum of data){
			html += `<li>${datum.name}: ${datum.score}</li>`;
		}
	}
	highScoreOL.innerHTML = html;
}


//quiz controller
function endGame(){
	//stop timer
	clearInterval(timer);
	//update view
	document.body.classList.remove("quizmode");
	//deal with score
	score += timeRemaining;
	const name = nameInput.value.trim();
	if (name){
		addHighScore(name, score);
		renderHighScores();
	}
}
function handleUserAnswer(e){
	//e is the click event object
	//e.target is the button the user clicked on
	//e.target.textContent is the text in the button just clicked on
	const userAnswer = e.target.textContent,
		  correctAnswer = questions[currentQuestionIndex].a[0];
	if (userAnswer === correctAnswer){
		//correct! :D
		score += scoreBonus;
	}
	else {
		//wrong... :{
		timeRemaining += timePenalty;
	}
	//advance to next question...if there is one
	currentQuestionIndex++;
	if (currentQuestionIndex >= questions.length){
		//we're at the end of the quiz
		endGame();
	}
	else {
		//go to next question
		renderQuestion();
	}
}


//timer controller
function tick(){
	//decrement timeRemaining
	timeRemaining = Math.max(0, timeRemaining - 1);
	//update view
	updateTimeRemaining();
	//check for time expired
	if (timeRemaining === 0) endGame();
}


//data (questions)
const questions = [
	{
		q: "What's the answer (1)?",
		a: [
			"Correct",
			"Incorrect",
			"Wrong",
			"Dead wrong"
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


//data (localStorage)
function addHighScore(name, score){
	const data = getHighScores();
	data.push({name, score});
	//sort from high to low
	data.sort((a,b) => b.score - a.score);
	//save data
	localStorage.setItem(dataStorageName, JSON.stringify(data));
}
function getHighScores(){
	const data = localStorage.getItem(dataStorageName);
	if (data) return JSON.parse(data);
	return [];
}


//helper (library)
function shuffle(arr){
	//make a copy of arr
	const clone = [...arr]; //"shallow clone"
	//return a randomly rearranged version of it
	return clone.sort(() => Math.random() - 0.5);
}