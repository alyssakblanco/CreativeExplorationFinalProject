console.log("end page");

let btn1, btn2;
let txt = "play again";
let colors = [];
let confetti = [];

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");

    btn1 = createButton("play again");
    btn1.mousePressed(firstClick);
    btn1.addClass('btn');
    btn1.addClass('btnA');
    btn1.parent("btnHolder");
    btn1.style("display", "block");

    btn2 = createButton("you sure?");
    btn2.mousePressed(linkToA);
    btn2.addClass('btn');
    btn2.addClass('btnA');
    btn2.parent("btnHolder");
    btn2.style("display", "none");

    colors = [color('#F2059F'), color('#2CB1BF'), color('#F2CB07')];
    for (let i = 0; i < 100; i++) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(0, 1));
    }
}

function draw(){
    background(color('#F2D5EA'));

    for (let i = 0; i < confetti.length / 2; i++) {
        confetti[i].confettiDisplay();
    
        if (confetti[i].y > height) {
          confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
        }
      }
    
    for (let i = int(confetti.length / 2); i < confetti.length; i++) {
        confetti[i].confettiDisplay();
    
        if (confetti[i].y > height) {
          confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
        }
    }
}


function firstClick(){
    btn1.style("display", "none");
    btn2.style("display", "block");
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/index.html","self");
}

class Confetti {
    constructor(x, y, s) {
      this.x = x;
      this.y = y;
      this.speed = s;
      this.time = random(0, 100);
      this.color = random(colors);
      this.amp = random(2, 30);
      this.phase = random(0.5, 2);
      this.size = random(width / 25, height / 50);
      this.form = round(random(0, 1));
    }
  
    confettiDisplay() {
      fill(this.color);
      noStroke();
      push();
      translate(this.x, this.y);
      translate(this.amp * sin(this.time * this.phase), this.speed * cos(2 * this.time * this.phase));
      rotate(this.time);
      rectMode(CENTER);
      scale(cos(this.time / 4), sin(this.time / 4));
      if (this.form === 0) {
        rect(0, 0, this.size, this.size / 2);
      } else {
        ellipse(0, 0, this.size);
      }
      pop();
  
      this.time = this.time + 0.1;
  
      this.speed += 1 / 200;
  
      this.y += this.speed;
    }
  }