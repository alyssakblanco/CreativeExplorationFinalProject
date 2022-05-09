console.log("start page");

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    background(color('#F2D5EA'));

    // creating two buttons and attaching them to the DOM
    const btn1 = createButton("this way");
    btn1.mousePressed(linkToB);
    btn1.addClass('btn');
    btn1.addClass('btnA');
    btn1.parent("btnHolder");
    btn1.attribute("onmouseover", "btn1Hover()");
    btn1.attribute("onmouseout", "btn1Out()");

    const btn2 = createButton("that way");
    btn2.mousePressed(linkToA);
    btn2.addClass('btn');
    btn2.addClass('btnB');
    btn2.parent("btnHolder");
    btn2.attribute("onmouseover", "btn2Hover()");
    btn2.attribute("onmouseout", "btn2Out()");
}

// functions to change background color on hover only
function btn1Hover(){
    background(color('#F2CB07'));
}
function btn1Out(){
    background(color('#F2D5EA'));
}

function btn2Hover(){
    background(color('#2CB1BF'));
}
function btn2Out(){
    background(color('#F2D5EA'));
}

// links to the next page
function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/catchMeIfYouCan.html","_self");
}
function linkToB(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/partyRoom.html","_self");
}

// resizing canvas with window
function windowResized() {
    background(color('#F2D5EA'));
    resizeCanvas(windowWidth, windowHeight);
}


