function Pokemon(pokemonName,atk,def,hp,legend,type){
    this.pokemonName = pokemonName;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.legend = legend;
    this.type = type;


}

var pikachu = new Pokemon("Pikachu",55,40,35,false,"Electric");
var Rayquaza = new Pokemon("Rayquaza",150,90,105,false,"Dragon,Flying");
var Reshiram = new Pokemon("Reshiram",120,100,100,false,"Dragon,Fire");
var Machamp = new Pokemon("Machamp",130,80,90,false,"Fighting");
var Golem = new Pokemon("Golem",120,130,80,false,"Rock,Ground");
var Donphan = new Pokemon("Donphan",120,120,90,false,"Ground");


var pokeRoster =[pikachu,Rayquaza,Reshiram,Machamp,Golem,Donphan]

function printRoster(roster){
console.log("Printing Roster!");
for (var = i=0; i<roster.length; i++){
console.log(roster[i]);
    }


}

function pokemonAttacked(roster){
console.log("Printing Roster!");
for (var = i=0; i<roster.length; i++){
roster[i].hp = roster[i].hp - 10;
    }
printRoster(roster);
}


printRoster(pokeRoster);
console.log("Calling pokemonAttacked()!")
printRoster(pokeRoster);

