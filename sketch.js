let distance =  23;
let rectX = 20;
let rectY =20;
let rectWidth =50;
let rectHeight =50;
let numBoxs = 5;
let spacing = 5;

clap(69,420);

function setup(){
    createCanvas(500,500);
    background(0);
}

function draw(){
    fill(255,140,0);
    noStroke();
    drawBoxs();
}

function drawBoxs(){
    for(let i = 0; i<numBoxs; i++){
        let totalSpacing = rectWidth + spacing;
        rect(i*totalSpacing + rectX, rectY, rectWidth, rectHeight); 
    }
}

function clap(startnum, endnum){
    let loopCount = endnum - startnum;
    for(let i=0; i<=loopCount; i++){
    console.log("hi again" + ( startnum+i))
    }
}

function addMeUp(num01,num02){
    let total = num01 + num02;
    console.log("job done");
    return total;
}