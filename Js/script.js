// Game Score
let score = 100;

// Generate random
function rollDice() {
    let dice1 = document.getElementById("diceOne");
    dice1.innerHTML = Math.floor(Math.random() * 6) + 1;
    let dice2 = document.getElementById("diceTwo");
    dice2.innerHTML = Math.floor(Math.random() * 6) + 1;
    let dice3 = document.getElementById("diceThree");
    dice3.innerHTML = Math.floor(Math.random() * 6) + 1;
    document.getElementById("message").textContent = "";
}

// Disable button
function disableBtn() {
    let button = document.getElementById("button");
    button.disabled = true;
}

// Reset all
function resetScore() {
    score = 100;
    document.getElementById("button").disabled = false;
    document.getElementById("diceOne").textContent = "0";
    document.getElementById("diceTwo").textContent = "0";
    document.getElementById("diceThree").textContent = "0";
    document.getElementById("message").textContent = "";
    document.getElementById("score").textContent = score;
    document.body.style.backgroundColor = "white";
    document.getElementById("message").textContent = "You have reset the game";
}

// Game play
function playGame() {
    if (score !== 1) {
        rollDice();

        if (
            (document.getElementById("diceOne").textContent) == (document.getElementById("diceTwo").textContent) && (document.getElementById("diceTwo").textContent) ==
            (document.getElementById("diceThree").textContent)
        ) {
            console.log("JackPOT XXX!!!");
            score = score + 5;
            document.getElementById("score").textContent = score;
        } else {
            score = score - 1;
            document.getElementById("score").textContent = score;
        }
    } else {
        disableBtn();
        alert("You lose the GAME");
        console.log("You lose the GAME");
        document.getElementById("message").textContent = "You lost all your MONEY!!!";
    }
}


// Arrays of Colors
const changeColor = document.getElementById('button'),
    // Define Colors
    colors = ['red', 'green', 'blue', 'yellow', 'orange', 'navy'];

// Define Colorindex
let colorIndex = 0;

// Add event listener add click change color
changeColor.addEventListener('click', () => {

    // If higher then use variable colorindex
    document.body.style.backgroundColor = colors[colorIndex];
    
    // Color index + 1
    colorIndex = (colorIndex + 1) % colors.length
});
