var prompt = require('prompt-sync')();

var mashArray = ["Place1","Place2","Place3", "Place4"];

var firstQuestion = ["1","2"];

var secondQuestion = ["Mario","Yoshi"];

function AskQuestions(){
firstQuestion.push(prompt("How many times will you strike?"));
secondQuestion.push(prompt("Who will you choose to fight?"));
}

function rand(upperbound){
    return Math.floor(Math.random()* upperbound);
}

function displayAnswer() {
    var stage = mashArray[rand(mashArray.length)];
    var hits = firstQuestion[rand(firstQuestion.length)];
    var opponent = secondQuestion[rand(secondQuestion.length)];
    console.log("You Fought " + opponent + " in the " + stage + " and hit them " + hits + " times. Too Bad. Mewtwo wins! " )
}

AskQuestions();
displayAnswer();
