// Final Coding Challenge Review

let gorillaIdle = [];
let goriallaSwipe = [];
let spiralImages = [];

// Global Variables...
let spirals = []; //to hold spiral objects

function preload(){ //to ensure loading is done
  //Spirals 00-09   10-15
  for (let i = 0; i <= 15; i++){
    if(i < 10){
      spiralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"));
    }
  }

  //Gorialla IDLE images
  for(let i = 1; i <= 6; i++){ //1, 2, 3, 4, 5, 6
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
  }

  //Gorialla SWIPE images
  for(let i = 1; i <= 6; i++){ //1, 2, 3, 4, 5, 6
    goriallaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
   //draw Spirals
   for(let i = 0; i < spirals.length; i++){
     let s = spirals[i];
     s.display();
   }
}

function mousePressed(){
  spirals.push(new Spiral(mouseX, mouseY));
}

class Spiral { //frames 0 - 15    ..16
  constructor(x,y){ //happens once, for each object created
    this.pos = createVector(x,y);
    this.currentFrame = 0;
    this.active = true;  //for deletion purposes
  }

  //class methods
  display(){
    if (this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame],this.pos.x, this.pos.y);
      if(frameCount % 3 === 0){
        this.currentFrame++;
      }
    }
  }
}

