//Users input their initials and then click on the Start button
//Then users are asked random questions from an array, about the book Ready Player One
//The question is displayed in the question text area
//The user inputs their answer by choosing from a multiple-choice area
//When a user misses a question the timer goes down by an additional 5 seconds
//Every time a user gets a question correct, they add +10 to their score total
//The top 3 scorers are kept in localstorage for someone to try to beat again

//html elements
const timeElement = document.querySelector("time"),
    main = document.querySelector("main"),
    nameInput = document.querySelector("input"),
    startButton = document.querySelector("button");
    highScoreOL = document.querySelector("footer ol");

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
//renderHighScores()
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
//what the user sees with the timer, questions, and high scorers list
function updateTimeRemaining() {
    timeElement.textContent = timeRemaining;
}

function renderQuestion() {
    let question = questions[currentQuestionIndex],
        answers = shuffle(question.a),
        html = `
            <h2> ${question.q}</h2>
                <ol>
                    `;
    for (let a of answers) {
        html += `<li><button>${a}</button></li>`;
    }
    html += "</ol>";
    main.innerHTML = html; //converting string to actual html elements
    for (let button of main.querySelectorAll("button")) {
        button.addEventListener("click", handleUserAnswer);
    }
}

function renderHighScores() {
    const data = getHighScores();
    console.log (data)
    var html = "";
    if (!data.length) {
        html = `<li>Good Job!</li>`;
    }
    else {
        for (let i=0; i<3; i++) {
            html += `<li>${data[i].name}: ${data[i].score}</li>`;
        }
    }
    highScoreOL.innerHTML = html;
}

//quiz controller - end the game
function endGame() {
    //stop timer
    clearInterval(timer);
    //update view and switch states from quizmode to not quizmode
    document.body.classList.remove("quizmode");
    //score handling
    score = timeRemaining;
    const name = nameInput.value.trim();
    if (name) {
        addHighScore(name, score);
        renderHighScores();
    }
}

function handleUserAnswer(e) {
    //e.target.textContent is the text in the button that the user just clicked on
    const userAnswer = e.target.textContent,
        correctAnswer = questions[currentQuestionIndex].a[0];
    if (userAnswer === correctAnswer) {
        score += pointsPerCorrectAnswer;
    }
    else {
        //wrong
        timeRemaining += timePenalty;
    }
    //advance to next question if there is one
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        endGame();
    }
    else {
        renderQuestion();
    }
}

//timer controller
function tick() {
    //decrement timeRemaining
    timeRemaining = Math.max(0, timeRemaining - 1);
    //update view
    updateTimeRemaining();
    //check for time expired and if time is up, end the game
    if (timeRemaining === 0) endGame();
}

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
//data handling (localStorage)
function addHighScore(name, score) {
    const data = getHighScores();
    data.push({ name, score });
    //sort from high to low
    data.sort((a, b) => b.score - a.score);
    //save data
    localStorage.setItem(dataStorageName, JSON.stringify(data));
}
function getHighScores() {
    const data = localStorage.getItem(dataStorageName);
    if (data) return JSON.parse(data);
    return [];
}
//shuffle the questions
function shuffle(arr) {
    //make a copy of the array
    const clone = [...arr];
    //return a randomly rearranged version of the array above//
    return clone.sort(() => Math.random() - 0.5);
}