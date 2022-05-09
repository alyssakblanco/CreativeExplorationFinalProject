console.log("options room page");

let btn1, btn2, btn3;
let x, y;
let tried = false;

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");

    btn1 = createButton("pick me");
    btn1.addClass('btn');
    btn1.addClass('btnA');
    btn1.position(width/3, height/3);
    btn1.mouseOver(disappear);
    btn1.attribute("onmouseout", "appear(this)");

    btn2 = createButton("pick me");
    btn2.addClass('btn');
    btn2.addClass('btnB');
    btn2.position((width/3)*1.5, (height/3)*1.5);
    btn2.mouseOver(changePosition);
    btn2.position(mouseX, mouseY);

    btn3 = createButton("pick me");
    btn3.mousePressed(linkToA);
    btn3.addClass('btn');
    btn3.addClass('btnC');
    btn3.position((width/3)*2, (height/3)*2);
}

function draw(){
    let lightPurple = color('#9959D9');
    let darkPurple = color('#401C8C');
    let orange = color('#F28322');
    let darkOrange = color('#F26716');
    let redOrange = color('#F2360C');

    background(lightPurple);

    btn2.position(x, y);

    if(tried){
        x = mouseX + 30; 
        y = mouseY + 30;  
    }
}

function changePosition(){ 
    x = mouseX + 30; 
    y = mouseY + 30;
    tried = true;
}


function disappear(){
    btn1.style("display", "none");
}
function appear(){
    btn1.show();
}


function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/end.html","_self");
}