// Generative Art - HSB and Custom Palettes
// Mr. Scott
// March 26, 204

let rectWidth = 50, rectHeight = 10;
let colors = ["#D1313D", "#E5625C", "#F9BF76", "#8EB2C5", "#615375"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawCustom(width*0.7);
}

function drawCustom(x){
  //draw a stack of rectangles at x = x. Using Custom Palette
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    //option 1 → cycle through custom palette
    fill(colors[index % colors.length]);  //0-4  0 - colors.length
    
    //option 2 → random selection from palette
    fill(colors[int(random(colors.length))]);
    rect(x, y, rectWidth, rectHeight);

    index++;  //index = index + 1
  }
}




function drawHSB(x){
  //draw a stack of rectangles at x = x. Using HSB 0-360
  colorMode(HSB);
  for(let y = 0; y < height; y += rectHeight){
    let hue = map(y, 0, height, 0, 360);
    fill(hue, 360, 360); //Hue, Sat, Bright
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawRGB(x){
  //draw a stack of rectangles at x = x. Using R,G,B random
  colorMode(RGB);
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255),random(255), random(255));
    rect(x, y, rectWidth, rectHeight);
  }
}
