// Loop Grid
let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  cirlceGrid();
}

function mouseClicked(){
  cirlceGrid();
}

function cirlceGrid() {
  for (let y = gridSpacing/2; y < height; y += gridSpacing) {
    for (let x = gridSpacing/2; x < width; x += gridSpacing) {
      stroke(random(255), random(255), random(255));
      //fill(random(255), random(255), random(255));
      let size = random(gridSpacing*0.8, gridSpacing*1.3);
      ellipse(x, y, size, size);
    }
  }
}

function draw() {

}
