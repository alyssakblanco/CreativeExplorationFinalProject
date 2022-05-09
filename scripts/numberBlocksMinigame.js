console.log("blocks minigame page");

let btn1, btn2;


function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");

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

function draw(){
    const purple = color('#F2059F');
    const blue = color('#04B2D9');
    const green = color('#04D94F');
    const yellow = color('#F2CB05');
    const orange = color('#F28705');

    background(green);

    const y = height/4;
    const w = height/10;

    strokeWeight(2);

    // group one
    const x1 = (width/4)-(w/2);
    fill(purple);
    rect(x1,y,w,w);
    fill(orange);
    rect(x1+20, y+15, w, w);

    // group two
    const x2 = x1*2;
    const x3 = x2+50;
    fill(purple);
    rect(x2,y,w,w);
    fill(orange);
    rect(x3-20, y-18, w, w);
    fill(blue);
    rect(x3-15,y+10,w,w);
    fill(green);
    rect(x2+10, y+25, w, w);
    fill(yellow);
    rect(x3+10, y-10, w, w);

    // group three
    const x4 = x1*3;
    const x5 = x4+50;
    const x6 = x5+50;
    fill(purple);
    rect(x6-75,y-20,w,w);
    fill(orange);
    rect(x4,y,w,w);
    fill(blue);
    rect(x5-15,y+10,w,w);

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    if(num1 == 2 && num2 == 5 && num3 == 3){
        winState();
    }
    if(num1 != 2 || num2 != 5 || num3 != 3){
        btn1.style("display", "none");
        btn2.style("display", "none");
    }  
}

function winState(){
    btn1.style("display", "block");
    btn2.style("display", "block");
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/btnRoom.html","_self");
}
function linkToB(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/optionsRoom.html","_self");
}