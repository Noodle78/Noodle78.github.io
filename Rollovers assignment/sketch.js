// rollovers
// Adam
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant = 0;
let x,y;
let FADE = 10;
let quad1fill, quad2fill, quad3fill, quad4fill;
let allOn = false;


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

  //quad 1 rect
  fill(quad1fill,90,60);
  rect(0, 0, width/2, height/2);
  
  //quad 2 rect
  if (allOn === false) {
    fill(quad2fill,190,30);
  }
  else{
    fill(255,90,30);
  }
  rect(width/2, 0, width/2, height/2);
  
  //quad 3 rect
  if (allOn === false){
    fill(quad3fill,150,75);
  }
  else{
    fill(255,150,75);
  }
  }
  rect(0, height/2, width/2,height/2);
  //quad 4 rect
  fill(quad4fill,90,149);
  rect(width/2,height/2,width/2,height/2);


  

}

function mousePressed(){
  if (quadrant === 1) {
    allOn = true;
  }
}




function mouseQuad(x,y){

  if (x <= width/2 && y <= height/2){
    quadrant = 1;
    quad1fill = 0;
    quad2fill += FADE;
    quad3fill += FADE;
    quad4fill += FADE;
  }
  else if (x >= width/2 && y <= height/2){
    quadrant = 2;
    quad1fill += FADE;
    quad2fill = 0;
    quad3fill += FADE;
    quad4fill += FADE;
  }
  else if (x <= width/2 && y >= height/2){
    quadrant = 3;
    quad1fill += FADE;
    quad2fill += FADE;
    quad3fill = 0;
    quad4fill += FADE;
  }
  else if (x >= width/2 && y >= height/2){
    quadrant = 4;
    quad1fill += FADE;
    quad2fill += FADE;
    quad3fill += FADE;
    quad4fill = 0;
  }
  if (quadrant !== 1){
    allOn = false;
  }


}