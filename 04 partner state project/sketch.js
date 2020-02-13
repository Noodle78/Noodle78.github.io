// 04 partner project

let state = 0;

let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  rect(x,y,40,40);
  changeState();

}

function changeState(){
  if (state === 0){
    x += 5;
    if (x >= width - 40){
      state = 1;
    }
  }
  else if (state === 1){
    y += 5;
    if (y >= height - 40){
      state = 2;
    }
  }
  else if (state === 2){
    x -= 5;
    if (x <= 0){
      state = 3;
    }
  }
  else{
    y -= 5;
    if (y <= 0){
      state = 0;
    }
  }
}