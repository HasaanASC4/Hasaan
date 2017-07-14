
// var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');


// var counter = 1;
// while(money < 11) {
    // console.log(counter);
    // counter++;
// }

var prompt = require('prompt-sync') ;
var money = 1000;
var items = [];

while (money > 99){
    console.log("You have $" + money + "left. Shirt = $100, Computer = $500. ");
    var answer = prompt("Which item do you want to buy? ");
    if (answer == "Shirt") {    
    money -= 100;
    items.push("Shirt");
    console.log("You bought a Shirt!");
    }
else if (answer == "Computer"){
     money -= 400;
    items.push("Computer");
    console.log("You bought a Computer!");
}
else {
    console.log("I didnt understand Try Again")
}

}