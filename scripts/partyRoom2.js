console.log("party room page");

// initializing vars
let choiceA, choiceB;
let i = 0;
let time1 = 0;
let time2 = 250;
let j = 0;

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "1");

    // creating two buttons and attaching them to the dom
    choiceA = createButton("choice A");
    choiceA.addClass('btn');
    choiceA.addClass('btnA');
    choiceA.parent("btnHolder2"); 
    choiceA.mousePressed(linkToA);

    choiceB = createButton("choice B");
    choiceB.addClass('btn');
    choiceB.addClass('btnB');
    choiceB.parent("btnHolder2"); 
    choiceB.mousePressed(linkToB);
}

function draw(){
    // colors and saving them in an array
    let a = color('#248EA6');
    let b = color('#25C7D9');
    let c = color('#F2D338');
    let d = color('#F23030');
    let e = color('#F2622E');
    let colors = [a, b, c, d, e];
    
    // function to take the # of millisecons since starting sketch 
    // comparing to 250 milliseconds (time2) 
    // basically, take current time, is it less than 250 since last time?
    // if so, change background
    if(millis() - time1 > time2){
        background(colors[i]);
        time1 = millis();

        // every three runs, change button positions
        if(j%3 == 0){
            let x1 = random(width - 200);
            let y1 = random(height - 200);
            let x2 = random(width - 200);
            let y2 = random(height - 200);
    
            choiceA.position(x1, y1);
            choiceB.position(x2, y2);
        }

        // make sure to stay within bounds of color array
        if(i>3){
            i=0;
        }else{
            i++;
        }

        j++;
    }
}

function linkToA(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/matchingMinigame.html","_self");
}
function linkToB(){
    window.open("https://alyssakblanco.github.io/CreativeExplorationFinalProject/numberBlocksMiniGame.html","_self");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}