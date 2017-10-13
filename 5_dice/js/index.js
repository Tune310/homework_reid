
/*Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2

* concatenate the string 'dice-' and random1 to form the css class value for firstDie
* concatenate the string 'dice-' and random2 to form the css class value for secondDie

* Use jQuery to select first-die by ID and change the class value 
* Use jQuery to select second-die by ID and change the class value

Helpful Hints :)
- $('#first-die').attr('class', 'dice-4'); will set the first die to the number 4
- The easiest way to get a number from 3 to 15, is: Math.floor(Math.random() * 13) + 3;
*/

//Variables
var random1;
var random2;
var playerOne = {
    score: 0,
    maxScore: 10
}
var playerTwo = {
    score: 0,
    maxScore: 10
}

var game = {
    name: 'Lucky 7',
    score: 0,
    maxScore: 10,
    money: 10
}

//Functions

// Player One Dice Roll
function diceRollOne() {
    console.log("Roll the dice");
    random1 = getRandomNumber();
    random2 = getRandomNumber();

    $('#first-die').attr('class', 'dice-' + random1);
    $('#second-die').attr('class', 'dice-' + random2);

    if(random1 + random2 >= 9)
    {
        playerOne.score++;
        $("#playerOne span").html(playerOne.score)

    }

    if(playerOne.score == playerOne.maxScore)
    {
        alert("playerOne Wins");
        $(".container").css({"display": "flex", "justify-content": "center"}).html("<h1 style='color: blue;'>Player One Wins</h1>").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
        return true;
    }
    // console.log("Your score:" + game.score);
    console.log("Player One's Score:" + playerOne.score);
}


// PLAYER TWO DICE ROLL
function diceRollTwo() {
    console.log("Roll the dice");
    random1 = getRandomNumber();
    random2 = getRandomNumber();

    $('#first-die').attr('class', 'dice-' + random1);
    $('#second-die').attr('class', 'dice-' + random2);

    if(random1 + random2 >= 9)
    {
        playerTwo.score++;
        $("#playerTwo span").html(playerTwo.score)

    }

    if(playerTwo.score == playerTwo.maxScore)
    {
        alert("playerTwo Wins");
        $(".container").css({"display": "flex", "justify-content": "center"}).html("<h1 style='color: red;'>Player Two Wins</h1>").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
        return true;
        // console.log("You win $" + game.money);
    }
    console.log("Player Two's Score:" + playerTwo.score);
}

function getRandomNumber() 
{
    return Math.floor(Math.random()*6) + 1;
}

//Event Handlers
// $('#roll-dice').on('click', diceRollOne).show();
$('#roll-dice-two').on('click', diceRollTwo).hide();

$('#roll-dice').on('click', function(){
    diceRollOne();
    $(this).hide();
    $('#roll-dice-two').show();
});

$('#roll-dice-two').on('click', function(){
    diceRollTwo();
    $(this).hide();
    $('#roll-dice').show();
});