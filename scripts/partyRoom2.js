console.log("party room page");

let choiceA, choiceB;
let i = 0;

function setup() {
    //setting canvas as full screen background
    let canvas = createCanvas(windowWidth, windowHeight);  
    canvas.position(0,0);
    canvas.style("z-index", "1");

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

let time1 = 0;
let time2 = 250;
let j = 0;

function draw(){
    let a = color('#248EA6');
    let b = color('#25C7D9');
    let c = color('#F2D338');
    let d = color('#F23030');
    let e = color('#F2622E');

    let colors = [a, b, c, d, e];
    
    if(millis() - time1 > time2){
        background(colors[i]);
        time1 = millis();

        if(j%3 == 0){
            let x1 = random(width - 200);
            let y1 = random(height - 200);
            let x2 = random(width - 200);
            let y2 = random(height - 200);
    
            choiceA.position(x1, y1);
            choiceB.position(x2, y2);
        }
        

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