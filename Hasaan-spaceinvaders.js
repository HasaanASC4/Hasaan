//function setup(){
  //  createCanvas(1000,1000);

//}

//var x = 500;
//var y = 800;

//function draw(){
//    background(0);
  //  if (keyIsDown(LEFT_ARROW)){
      //  x-=5;
    //if (x<=0)
    //x = 0
    //}
        

    //if (keyIsDown(RIGHT_ARROW))
    //    x+=5;
    //if (x>=970)
//    x = 970

  //  fill(250,0,0);
    //rect(x,y,30,70);
    //;if (x>=500){
      //  xSpeed = 500;
     //}
     //else if (x<=500){
    //xSpeed = 500;
     //}
     //fill("white")
//rect(100, 70, 40, 60);
//rect(200, 70, 40, 60,);
//rect(300, 70, 40, 60,);
//rect(400, 70, 40, 60,);
//rect(500, 70, 40, 60,);
//rect(600, 70, 40, 60,);
//rect(700, 70, 40, 60,);
//rect(800, 70, 40, 60,);
//rect(100, 200, 40, 60);
//rect(200, 200, 40, 60,);
//rect(300, 200, 40, 60,);
//rect(400, 200, 40, 60,);
//rect(500, 200, 40, 60,);
//rect(600, 200, 40, 60,);
//rect(700, 200, 40, 60,);
//rect(800, 200, 40, 60,);
//rect(100, 330, 40, 60);
//rect(200, 330, 40, 60,);
//rect(300, 330, 40, 60,);
//rect(400, 330, 40, 60,);
//rect(500, 330, 40, 60,);
//rect(600, 330, 40, 60,);
//rect(700, 330, 40, 60,);
//rect(800, 330, 40, 60,);
//rect(100, 460, 40, 60);
//rect(200, 460, 40, 60,);
//rect(300, 460, 40, 60,);
//rect(400, 460, 40, 60,);
//rect(500, 460, 40, 60,);
//rect(600, 460, 40, 60,);
//rect(700, 460, 40, 60,);
//rect(800, 460, 40, 60,);

//};


  //      y+=-100;
    //fill(250,0,0);
    //rect(x,y,30,30);

function setup(){
    createCanvas(1000,1000);
    
}

var x = 350;
var y = 625;
var row1 = ["su","su","su","nu","nu","nu"];
var row2  = ["su","nu","nu","su","nu","nu"];
var row3 = ["nu","nu","su","nu","su","nu"];
var row4 = ["nu","su","nu","su","nu","su"];
var row5 = ["su","su","nu","su","nu","nu"];
var row6 = ["nu","nu","su","nu","nu","nu"];

var invaders = [row1,row2,row3,row4,row5,row6];


function draw(){
    background(0);
    if (keyIsDown(LEFT_ARROW)){
        x-=5;
        if (x<=0){
                x = 0
                }
        if (keyIsDown(LEFT_ARROW) && x<=0){
            x++;
        }
    }
    if (keyIsDown(RIGHT_ARROW))
        x+=5;
            if (x>=970){
                x = 970
                }
    fill(250,0,0);
    rect(x,y,30,70);
    var score = 0;
    var w = 50;
    var h = 50;
    strokeWeight(5);
//     for (i=0; i<invaders.length; i++){
//         for (j=0; j<invaders.length; j++){
//                 if (invaders[i][j] == "nu" || invaders[i][j] == 'su'){
//                     fill(255);
//                 } else if (invaders[i][j] == "nc"){
//                     fill(0);
//                 } else if (invaders[i][j] == "sc"){
//                     fill(255,0,0);
//                     score++;
//                 }
//                 rect(i*w, j*h, w,h)

// }
//     }
    fill(255);
    for (i=1; i<9; i++){
    rect(i*100,70,40,60);
    rect(i*100,170,40,60);
    rect(i*100,270,40,60);
    rect(i*100,370,40,60);
}


};
