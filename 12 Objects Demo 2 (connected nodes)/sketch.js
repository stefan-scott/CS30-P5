// Object Demo Two (Object Interactions)
// Mr. Scott
// April 10, 2024
// Objects Recap, Perlin Noise, Object interactions

// Global Variables
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let p of points){ 
    //this style of loop is perfect as long as we don't
    //need to delete any items from the array.
    p.display();
  }
}

function mouseClicked(){
  //trigger on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX,mouseY));
}

class MovingPoint{
  
  constructor(x, y){ //gets called once each time we make an obj
    //related to position/rendering
    this.x = x;   this.y = y;   this.size = 20;
    this.c = color(random(255),random(255),random(255));

    //related to motion
    this.xTime = random(10);  this.yTime = random(10);
    this.timeShift = 0.01;  this.maxSpeed = 5;
    
  }

  //class methods/functions
  display(){
    fill(this.c);
    noStroke();

    circle(this.x, this.y, this.size);
  }
}

