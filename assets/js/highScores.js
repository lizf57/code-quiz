// define variables
var highscore = document.querySelector("#highscore")
var clear = document.querySelector("#clear")
var goBack = document.querySelector("#goBack")

var allHighscores = localStorage.getItem("allHighscores")
allHighscores = allHighscores ? JSON.parse(allHighscores) : [];

if(allHighscores !== null){
    for(var i = 0; i <allHighscores.length; i++){
        var orderedList = document.createElement("li");
            orderedList.style.listStyle = "none"
            orderedList.style.marginBottom = "16px"
            orderedList.style.display = "flex"
            orderedList.style.justifyContent = "space-between";

            var inputSpan = document.createElement("span");
                inputSpan.textContent = allHighscores[i].initials;
            
            var scoreSpan = document.createElement("span");
                scoreSpan.textContent = allHighscores[i].score;

            orderedList.appendChild(inputSpan)
            orderedList.appendChild(scoreSpan)
            highScore.appendChild(orderedList)
    }
}

// clear scores
clear.addEventListener("click", function(){
    localStorage.clear()
    location.reload();
});

//  Go back to home screen
goBack.addEventListener("click", function(){
    window.location.replace("./index.html")
})


