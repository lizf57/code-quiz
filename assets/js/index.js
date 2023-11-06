// Coding questions
var questions = [
    {
        title: "When using Javascript, which of the following are data types?",
        choices: ["Strings", "Booleans", "Numbers", "All of the Above"],
        answer: "All of the Above"
    },
    {
        title: "What does Math.Random()*100 mean in Javascript?",
        choices: ["Returns a random number between zero and 100", "Multiplies a number by 100", "Returns 100 random numbers", "Adds 100 to any number"],
        answer: "Returns a random number between zero and 100"
    },
    {
        title: "What is 'var' short for in Javascript?",
        choices: ["variant", "variation", "variable", "varies"],
        answer: "variable"
    },
    {
        title: "What symbol is used to put in front of a condition to make it stand for the opposite of what it really is?",
        choices: ["%", "@", "&", "!"],
        answer: "!"
    },
    {
        title: "When using CSS, how do you change the font style of a text?",
        choices: ["font-size", "font-family", "text-decoration", "color"],
        answer: "font-family"
    },
    {
        title: "Which of the following correctly shows how to link a CSS stylesheet to HTML?",
        choices: ["<link rel='stylesheet' href=style.css'>", "<link src='stylesheet' href='style.css'>", "<img src='stylesheet' href='style.css'>", "<link rel=stylesheet href='css'>" ],
        answer: "<link rel='stylesheet' href=style.css'>"
    },
    {
        title: "What does debugging mean?",
        choices: ["The action of doing something over and over again", "Finding similarities between things", "Finding and fixing a problem", "A list of steps to finish a task"],
        answer: "Finding and fixing a problem"
    },
    {
        title: "What programming language adds interactivity to a webpage?",
        choices: ["CSS", "HTML", "A and B", "Javascript"],
        answer: "Javascript"
    }
];

// variables defined
var timer;
var currentTime = document.getElementById("currTime");
var timeLeft = 60;
var questionIndex = 0;
var holdInterval = 0;
var score = 0;
var penalty = 2;
var startBtn = document.getElementById("start-quiz-btn")
var questionsDiv = document.getElementById("question-div")
var createList = document.createElement("ul")
