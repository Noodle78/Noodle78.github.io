// State variables demo
// Adam
// Feb 11
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft, onRight; //boolean variables

let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 10; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function updateCurrentSide(){
  //update state variables to represent which side of the canvas the mouse is on
  if (mouseX < width / 2){
    //mouse is on left
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on right
    onRight = true;
    onLeft = false;
  }
}


function renderRectangles(){
  //draw 2 rectangles of varying fill values
  if (onLeft){ //onLeft === true
    fill(210,97,130, leftFade);
    leftFade += FADE_SPEED;


  }
  else{ 
    fill(97,130,210);
    leftFade = 0;
  }
  rect(0,0,width/2,height);

  if(onRight){
    fill(20,170,90,rightFade);
    rightFade += FADE_SPEED;
    
  }
  else{ fill(200,150,70);
    rightFade = 0;
  }
  rect(width/2,0,width/2,height);
}


function draw() {
  background(220);
  updateCurrentSide();
  //print(" left: " + onLeft + " right: " + onRight);
  renderRectangles();
  if (mouseX > width*.25 && mouseX < width*.75 && mouseY > height*.25 && mouseY < height*.75){
    fill(80,160,240,120);

  }
  else{ 
    fill(0,255,0,120);
  }

  rect(width*.25, height*.25,width/2,height/2);
}
