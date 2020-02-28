// Loop Grid
//Adam
//February 28
//Shift and left click to get bigger
//left click to get smaller
//up arrow to change colour
//down arrow to reset size and colour

let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectGrid();
}

function mouseClicked(LEFT) {
  if (keyIsDown(SHIFT)) {
    gridSpacing += 5;
    rectGrid();
  }
  else {
    if (gridSpacing <= 10) {
      rectGrid();
    }
    else {
      gridSpacing -= 5;
      rectGrid();
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    rectGrid();
  }
  else if (keyCode === DOWN_ARROW) {
    gridSpacing = 40;
    rectGrid();
  }
}





function rectGrid() {
  for (let y = 0; y < height; y += gridSpacing) {
    for (let x = 0; x < width; x += gridSpacing) {
      fill(random(40, 60), random(40, 60), random(80, 255));
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

function draw() {

}