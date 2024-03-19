// An analog clock exercise
// Mr. Scott
// March 19 2024
//...using basic transformations
// 1. draw the base clock (static)
// 2. add animated clock hands (hours, minutes, seconds)

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawStaticClock();
  drawClockHands();
}

function drawClockHands(){
  //seconds hand first:
  push();
  stroke(200,0,0);
  strokeWeight(1);
  rotate(second()*6);
  line(0,0,0,130);
  pop();
  //minutes hand second:

  //hour hand third:
}


function drawStaticClock(){
  // Using basic transformations, draw 
  // an analog clock face
  // main circle first:
  stroke(0);
  translate(width/2, height/2);
  push(); //new coordinate system
  circle(0,0,300);

  // all the individual ticks
  let count = 0; let angle = 6;
  while(count < 60){
    if(count % 5 === 0){
      strokeWeight(3);
      line(110,0,140,0);
    }
    else{
      strokeWeight(1);
      line(125,0,140,0);
    }
   
    rotate(angle);
    count++;
  }
  pop();
}
