function randLetter(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[rand(alphabet.length)];  
}
function randWord(){
    var string = ""
 for(var i=0; i<5; i++){
     string = string + randLetter()
 }
     return string
}
function rand(upperBd){
 return Math.floor(Math.random()*upperBd);  
}

   var array1 = ["Pikachu",23,100];
   var array2 = ["Charized",50,200];
 
 function pokeAttack(array1, array2){
       array2[2] -= array1[1];
       return (array1, array2);
  }
 


console.log(randLetter());
console.log(randWord());
console.log(pokeAttack(array1,array2));