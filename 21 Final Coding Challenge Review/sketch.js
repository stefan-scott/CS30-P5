// Final Coding Challenge Review

let gorillaIdle = [];
let goriallaSwipe = [];
let spiralImages = [];

// Global Variables...


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
 
}
