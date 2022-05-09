console.log("btn room page");

let pop;


function preload(){
    pop = loadSound("scripts/pop_sound.mp3");
}

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");
}

class Btn {
    constructor(i, color) {
        this.x = random(width);        
        this.y = random(height);
        this.i = i;
        
        const w = width/5;
        const h = height/10;
        if(this.x + w > width){
            this.x -= w;
        }
        if(this.y + h > height){
            this.y -= h;
        }

        let btn = createButton("pick me");
        btn.position(this.x,this.y);
        btn.attribute('onClick', "popBtn(this.id)");
        btn.addClass("btn");
        btn.id(this.i);
        btn.style("background-color", color);
        if(this.i == 25){btn.mousePressed(linkToA)}        
    }
}

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

    noLoop();
    for (var i = 0; i < 50; i++) {
        let j = i%3;
        new Btn(i, colors[j]);
    }
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/end.html","_self");
}
