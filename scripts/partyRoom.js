console.log("party room page");

let btn;

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");

    // only creating one button, needed a new cnavas for the main functionality of this room
    btn = createButton("activate <span id='partyTxt'>party mode</span>");
    btn.addClass('partyBtn');
    btn.parent("btnHolder"); 
    btn.mousePressed(linkToA);
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/partyRoom2.html","_self");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}