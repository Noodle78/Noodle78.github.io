// rollovers
// Adam
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant = 0;
let x,y;
const FADE_SPEED = 5;
let quad1fill, quad2fill, quad3fill, quad4fill;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  fill(255);
  rect(0, 0, width/2, height/2);
  rect(width/2, 0, width/2, height/2);
  rect(0, height/2, width/2,height/2);
  rect(width/2,height/2,width/2,height/2);
  mouseQuad(mouseX,mouseY);
  if (quadrant === 1){
    //quad 1 rect
    fill(quad1fill);
    rect(0, 0, width/2, height/2);
    //quad 2 rect


    //quad 3 rect


    //quad 4 rect
   
    
  }
  else if (quadrant === 2){
    fill(quad2fill);
    rect(width/2, 0, width/2, height/2);
  }
  else if (quadrant ===3){
    fill(quad3fill);
    rect(0, height/2, width/2,height/2);
  }
  else if (quadrant === 4){
    fill(quad4fill);
    rect(width/2,height/2,width/2,height/2);
  }

}


function mouseQuad(x,y){

  if (x <= width/2 && y <= height/2){
    quadrant = 1;
    quad1fill = 0;

  }
  else if (x >= width/2 && y <= height/2){
    quadrant = 2;
    quad2fill = 0;
  }
  else if (x <= width/2 && y >= height/2){
    quadrant = 3;
    quad3fill = 0;
  }
  else if (x >= width/2 && y >= height/2){
    quadrant = 4;
    quad4fill = 0;
  }



}