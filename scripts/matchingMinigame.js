console.log("matching minigame page");

let r,g,b,val;
let button, btn1, btn2;

// adapted from my assignment 3 submission

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);  
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  newColor();

  // creating slider and buttons, attaching to dom
  slider = createSlider(0, 255, 0);
  slider.parent("gameBtns");
  slider.style('width', '50%');

  button = createButton("play again");
  button.style("display", "none");
  button.addClass('btn');
  button.addClass('main');
  button.mousePressed(reset);
  button.parent("gameBtns");

  btn1 = createButton("left");
  btn1.mousePressed(linkToB);
  btn1.addClass('btn');
  btn1.addClass('btnA');
  btn1.parent("btnHolder");
  btn1.style("display", "none");

  btn2 = createButton("right");
  btn2.mousePressed(linkToA);
  btn2.addClass('btn');
  btn2.addClass('btnB');
  btn2.parent("btnHolder");
  btn2.style("display", "none");
}

function draw() {
  noStroke();

  // getting value from slider
  val = slider.value();
  // changing color of circle based on above
  changeCircleFill();
  // checking for win
  if(val === g){
      winState();
  }
}

// displaying buttons on win
function winState(){
    btn1.style("display", "block");
    btn2.style("display", "block");
    button.style("display", "block");
}

// sets current answer color
function newColor() {
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  
  // if the color is to close to 0 (where the slider starts)
  // change green value (dont wanna win right off the bat)
  if( g < 95 ){
    g += 95;
  }

  background(r,g,b);
}

// continuosly changing color based on slider val
function changeCircleFill(){
  fill(r, val, b);
  circle(width/2 ,(height/4)*1.75, height/2);
}

// start over on play again 
function reset(){
  location.reload();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(r,g,b);
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/btnRoom.html","_self");
}
function linkToB(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/optionsRoom.html","_self");
}
