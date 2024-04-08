// Object Notation
// Mr. Scott
// March 28, 2024
// Look at Object Notation

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}

function spawnBall(initialX, initialY){
  //create a Ball object and store in the array
  let ball = {
    x: initialX,
    y: initialY,
    radius: 30,
    xSpeed: random(-5,5),
    ySpeed: random(-5,5), 
  };
  ballArray.push(ball);
}

function draw() {
  background(220);
  //Loop through all the balls
  for(let b of ballArray){
    //enhanced for loop 
    b.x += b.xSpeed;
    if(b.x < 0 || b.x > width){
      b.xSpeed *= -1;
    }

    b.y += b.ySpeed;
    circle(b.x, b.y, b.radius);
  }
}
