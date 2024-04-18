// Random Partners
// Working with Arrays...

let hat = [
  "Assiya",
  "Jeffrey",
  "Yurui",
  "Dilpreet",
  "Nancy",
  "Adam",
  "Kaveen",
  "Rurik",
  "Trydon",
  "Carter",
  "Tanya",
  "Melody",
  "Luke",
  "Omar",
  "Faris",
  "Ahmed"
];

// PAIR PROGRAMMING
// old-timey:  navigator-driver
// contemporary:  dual live editing


function setup() {
  createCanvas(windowWidth, windowHeight);
  while( hat.length > 1){
    //pick two names per iteration
    let index1 = int(random(hat.length));  //0-15
    let name1 = hat[index1];
    hat.splice(index1,1);

    let index2 = int(random(hat.length));
    let name2 = hat[index2];
    hat.splice(index2,1);

    print(name1 + " works with " + name2);
  }
}


