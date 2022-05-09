console.log("catch me page");

let bugs = []; // array of Jitter objects
let btn1, btn2;
let x;
let colors = [];

function setup() {
  //setting canvas as full screen background
  let canvas = createCanvas(windowWidth, windowHeight);  
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  colors = [color('#F2D338'), color('#F2622E'), color('#F23030')];

  // Create objects
  for (let i = 0; i < 50; i++) {
    if( i === 0 ){
        bugs.push(new Button("click me!", linkToA));
    }else if( i === 25 ){
        bugs.push(new Button("pick me!", linkToB));
    }else{
        bugs.push(new Jitter());
    } 
  }
}

function draw() {
  background(color('#25C7D9'));
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

class Button {
  constructor(txt, f) {
    this.x = random(width);
    this.y = random(height);
    this.d = random(70, 90);
    this.speed = random(5,8);

    if(this.y + 90 >= height){
      this.y -= 90;
    }

    this.move = function () {
      this.x += random(this.speed);
      if (this.x >= window.width) {
        this.x = 0;
      }
    };

    let btn = createButton(txt);
    this.display = function () {
      btn.size(this.d, this.d);
      btn.position(this.x, this.y);
      btn.mousePressed(f);
      btn.addClass('btn');
      btn.attribute("style", this.color);
    };
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 90);
    this.speed = random(5,8);

    let r = floor(random(0,3));
    let c = colors[r];
    this.color = c;
  }

  move() {
    this.x += random(this.speed);
    if(this.x >= window.width){
        this.x = 0;
    }
  }

  display() {
    strokeWeight(3);
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/numberBlocksMiniGame.html","_self");
}
function linkToB(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/matchingMinigame.html","_self");
}
