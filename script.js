//define secret number between 1 and 20
let secretNumber = Math.trunc(Math.random()*20) +1


//define Score
let score = 20;

//define high score
let highScore = 0

//display message function
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

//handle click events for check button
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)

    //check for value
    //what happens when guess is correct, too low, or too high
    //score should decrease if guess is wrong
    //if score is 0, get message of you loose
    //high score
    if (!guess) {
        displayMessage("No Number") 
    } else if (guess === secretNumber){
        //when player wins
        displayMessage("Correct Number!");
        //change background color when player wins
        document.querySelector("body").style.backgroundColor= "green";
        //change width
        document.querySelector(".number").style.width="30rem"
        //dispaly secret number
        document.querySelector(".number").textContent =secretNumber

        //check or set high score
        if (score>highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore
        }
    } else if (guess > secretNumber) {
        //if guess too high
        if(score > 1){
            displayMessage("Guess is too high! :(");
        score= score - 1;
        document.querySelector('.score').textContent = score}
        else{
            displayMessage("You Lost! :(");
            document.querySelector('.score').textContent = 0
        }
    } else if (guess < secretNumber) {
        //if guess too low
        if(score > 1){
            displayMessage("Too low! :(");;
            score= score - 1;
            document.querySelector('.score').textContent = score
        } else{
            displayMessage("You Lost! :(");
                document.querySelector('.score').textContent = 0
            }
        
    }

} );

//reset button to play again
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1
    document.querySelector(".score").textContent = score
    displayMessage("Start guessing...") ;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?"
    document.querySelector("body").style.backgroundColor= "#222";
    document.querySelector(".number").style.width="15rem"
})






