console.log("btn room page");

// loding in pop sound effect
let pop;
function preload(){
    pop = loadSound("/scripts/pop_sound.mp3");
}

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");
}

// button object class
class Btn {
    constructor(i, color) {
        this.x = random(width);        
        this.y = random(height);
        this.i = i;
        
        // checking to make sure button is within the canvas completly before setting position
        const w = width/5;
        const h = height/10;
        if(this.x + w > width){
            this.x -= w;
        }
        if(this.y + h > height){
            this.y -= h;
        }

        // actually creating the button
        let btn = createButton("pick me");
        btn.position(this.x,this.y);
        btn.attribute('onClick', "popBtn(this.id)");
        btn.addClass("btn");
        btn.id(this.i);
        btn.style("background-color", color);
        // btn w/ id=25 is the one that takes you to next page
        if(this.i == 25){btn.mousePressed(linkToA)}        
    }
}

// on btn click play sound and disappear
function popBtn(id){
    pop.play();
    document.getElementById(id).style.display = "none";
}

function draw(){
    let lightPurple = color('#9959D9');
    let orange = color('#F28322');
    let darkOrange = color('#F26716');
    let redOrange = color('#F2360C');

    background(lightPurple);

    const colors = [orange, darkOrange, redOrange];

    // crreating buttons and sending next color from array above
    noLoop();
    for (var i = 0; i < 50; i++) {
        let j = i%3; //rotating through color array
        new Btn(i, colors[j]);
    }
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/end.html","_self");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}