//state variables
let growing = false;
let circleSize = 50;
let currentColor = 0; //0, 1, 2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //circle code - fill color
  switch(currentColor){
    case 0:
      fill(255,0,0);
      break;
    case 1:
      fill(0,200,200);
      break;
    case 2:
      fill(0,50, 210);
      break;
  }
  
  circle(width/2, height/2, circleSize);
  
  if(growing){
    circleSize += 1;
  }
  else{
    circleSize -= 1;
    if(circleSize < 10){circleSize = 10;}
  }
  
  if(frameCount % 20 === 0){//0,1,2 
    currentColor+=1;
    if(currentColor > 2)currentColor = 0;
  }
  print(currentColor);
}

function keyPressed(){
  if(key==="a"){
    growing = !growing;
  }
}