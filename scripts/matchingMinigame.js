console.log("matching minigame page");

let r,g,b,val;
let button, btn1, btn2;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);  
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  newColor();

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

  val = slider.value();
  changeCircleFill();
  if(val === g){
      winState();
  }
}

function winState(){
    btn1.style("display", "block");
    btn2.style("display", "block");
    button.style("display", "block");
}

function newColor() {
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  

  if( g < 95 ){
    g += 95;
  }

  console.log(g);
  background(r,g,b);
}

function changeCircleFill(){
  fill(r, val, b);
  circle(width/2 ,(height/4)*1.75, height/2);
}

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
