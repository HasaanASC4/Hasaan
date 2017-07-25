function setup(){
    createCanvas(1200,800);
    background(200);


}


function mouseDragged(){
     fill(random(255),random(255),random(255));
     var radius = random(1,500);
     var shapeNum = random(2)
       
ellipse(mouseX,mouseY,radius);
rect(mouseX-radius, mouseY-radius,radius *2,radius *2);
triangle(30, 75, 58, 20, 86, 75);

}
   