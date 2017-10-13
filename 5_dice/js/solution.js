//Variables
var random1;
var random2;

//Functions
function diceRoll() {
    //Reasign variables
    random1 = getRandomNumber();
    random2 = getRandomNumber();

    //Output
    console.log("Roll the dice",random1, random2);
    $('#first-die').attr('class', 'dice-' + random1);
    $('#second-die').attr('class', 'dice-' + random2);
}

function getRandomNumber() 
{
    return Math.floor(Math.random()*6)+1;
}

//Event Handlers
$('#roll-dice').on('click', diceRoll);