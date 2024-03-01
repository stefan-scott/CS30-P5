// Gradient Background + Nested Loops
// Mr. Scott
// Feb 29th, 2024
// Creating a gradient + drawing with nested loops

let rectHeight = 10;
let circleSize = 20;
let spacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  gradientBackground();
  nestedLoops();
}

function nestedLoops(){
  // using a loop within a loop, generate a grid arrangement
  // for some circles
  for(let x = 0; x < width; x+=spacing){ //COLUMN 0 20 40 60 80
    for(let y = 0; y< height; y+=spacing){ //ROWS 0 20 40 60 80
      fill(0);
      circle(x, y, circleSize);
      fill(255);
      text(10, x, y);
    }
  }
}

function gradientBackground(){
   // use a single loop to draw several rectangles
   // then color them into a gradient
   let y = 0;
   while(y < height){
      let c = color(mouseX,map(y,0,height,255,0),map(y,0,height,0,255));
      fill(c); 
      rect(0,y,width,rectHeight);
      y += rectHeight;
   }

}
