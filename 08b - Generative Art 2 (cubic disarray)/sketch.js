// Generative Art 2 (Cubic Disarray)

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();

  drawDisarray();
}

function drawDisarray() {
  //using a grid arrangement, draw squares
  //that are increasingly offset from the
  //predictable pattern.
  for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
    for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
      push();  //each square has its own unique transforms.
      //rotation  
      translate(x,y); //moves origin to square center
      let rAmount = map(y,0,height,1,45);
      rotate(random(-rAmount,rAmount));
      let offset = map(y, 0, height, 0, 15);
      square(random(-offset,offset), random(-offset,offset), gridSpacing);
      pop();
    }
  }
}



function draw() {

}
