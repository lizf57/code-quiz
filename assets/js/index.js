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
var penalty = 10;
var startBtn = document.getElementById("start-quiz-btn")
var questionsDiv = document.getElementById("question-div")
var createList = document.createElement("ul")

// render quiz 
function render() {
    questionsDiv.innerHTML = ""
    createList.innerHTML = ""
    
    var currentQuestion = questions[questionIndex]
    var nowQuestion = currentQuestion.title;
    var nowChoices = currentQuestion.choices;

    var questionTitle = document.createElement("h2");
    questionTitle.textContent = nowQuestion;
    questionTitle.classList.add("questionTitle")

    questionsDiv.appendChild(questionTitle);

    nowChoices.forEach(function (choice) {
        var listItem =document.createElement("li")
        listItem.textContent = choice;
        questionsDiv.appendChild(createList)
        createList.appendChild(listItem)
        listItem.addEventListener("click", compare);
        listItem.classList.add('listItem')
    });
}

// compare users answers to correct
function compare(event) {
    var element = event.target;

    if(element.matches("li")) {

        var feedbackDiv = document.createElement("div");
        feedbackDiv.setAttribute("id", "feedbackDiv");

        if (element.textContent == questions[questionIndex].answer) {
            // user gets answer correct:
            score ++;
            feedbackDiv.textContent = "Correct Answer!";
        } else {
            // user gets answer incorrect:
            timeLeft = timeLeft - penalty;
            feedbackDiv.textContent = "Wrong Answer! Find the correct answer in the console log";
            console.log(questions[questionIndex].title, questions[questionIndex].answer)
        }
        setTimeout(function (){
            feedbackDiv.textContent = "";
        }, 1500)
    }

    questionIndex++;

    if(questionIndex >= questions.length) {
        quizEnd()
    } else {
        render(questionIndex)
    } 
    questionsDiv.appendChild(feedbackDiv)
}

// timer
startBtn.addEventListener("click", function () {
    timer = setInterval(function () {
        timeLeft--;
        currentTime.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            quizEnd();
            currentTime.textContent = "You're out of Time!";
        }
    }, 1000);
    render()
})

// quiz end
function quizEnd(){
    questionsDiv.innerText=""
    currentTime.innerText=""
    clearInterval(timer);

    var endTitle = document.createElement("h2")
    endTitle.setAttribute("id", "endTitle");
    endTitle.textContent = "All Done!"
    questionsDiv.appendChild(endTitle)

    var endText = document.createElement("p")
    endText.setAttribute("id", "endText")
    questionsDiv.appendChild(endText)

    if (timeLeft >= 0) {
        var timeRemains = timeLeft;
        var endText2 = document.createElement("p")
        clearInterval(holdInterval)
        endText.textContent = "Your final score is: " + timeRemains;

        questionsDiv.appendChild(endText2);
    }

    var userInputDiv = document.createElement("div");
    userInputDiv.setAttribute("id", "userInputDiv");
    userInputDiv.classList.add("userInputDiv");
    questionsDiv.appendChild(userInputDiv);

    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Enter your initials: ";
    label.classList.add("label");

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials");
    input.classList.add("input")

    userInputDiv.appendChild(input)

    var submit = document.createElement("button")
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    submit.classList.add("submit");

    userInputDiv.appendChild(submit);

    submit.addEventListener("click", function (){
        var initials = input.value;
        if(initials === null) {
            console.log("No value entered")
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemains
            }

            var allHighscores = localStorage.getItem("allHighscores");
            if (allHighscores === null ) {
                allHighscores = [];
            } else {
                allHighscores = JSON.parse(allHighscores);
            } 
            allHighscores.push(finalScore);

            var newScore = JSON.stringify(allHighscores);
            localStorage.setItem("allHighscores", newScore);

            window.location.replace("./highScores.html")
        }
    })

}