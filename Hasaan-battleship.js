function setup(){
    createCanvas(800,800);
    background(200);
rect(0, 0, 200, 200);

}

var row1 = ["Op","Op","Op","Op"];
var row2 = ["Op","Op","Chop","Op"];
var row3 = ["Op","Op","Op","Op"];
var row4 = ["Soos","Op","Op","Op"];
var myBoard = [row1,row2,row3,row4];

var s = 200;
function draw(){
for (var i=0; i < 4; i++){
    for ( var j=0; j<4;j++){
        if(myBoard[i][j]=="Op") {
            fill(255,0,0);
    
        }
        else if(myBoard[i][j]=="Soos"){
            fill(0,255,0);
        }
        else if(myBoard[i][j]=="Chop"){
            fill(0,0,255);
        }
        rect(s*j,s*i,s,s);

    }
    }
}

// var row1 = [false,false,false,false];
// var row2 = [true,true,false,false];
// var row3 = [false,false,true,true];

// var myBoard = [row1, row2, row3, row4]
// myBoard[0][0]
// row1[0] 