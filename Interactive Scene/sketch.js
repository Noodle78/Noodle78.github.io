// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x,y;
let tf = true;

function keyPressed(){
  if (key === " "){
    tf = !tf;
  }
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  backStuff();
  if (tf === true){
    push();
    translate(mouseX,mouseY);
    rotate(PI);
    superman(0,0);
    pop();
  }
  else if (tf === false){
    superman(mouseX,mouseY);

  }
}
  
  
function backStuff(){
  stroke(200);
  fill(200);
  ellipse(1550, 70, 200, 200);
  fill(50,150,50);
  stroke(50,150,50);
  rect(0, 600, 5000,5000);
  fill(255,255,255);
}
  

function superman(x,y){
  //head
  stroke(255,210,175);
  fill(255,218,185);
  ellipse(x,y,50,50);
  //body
  strokeWeight(10);
  stroke(20,20,210);
  line(x-32,y, x-125, y);
  //arms
  line(x-60, y,x+40,y-60);
  line(x-60, y,x+40,y+60);
  //legs
  
  line(x-125, y, x-240, y-25);
  line(x-125,y,x-240,y+25);

  //cape
  stroke(210,20,20);
  fill(210,20,20);
  rect(x-200,y-25,165,50);
  strokeWeight(3);
  textSize(60);
  stroke(0,0,0);
  push();
  translate(x-125,y+8);
  rotate(radians(90));
  text("S", -25,5);
  pop();
}