let chartWidth = 400;
let chartHeight =400;
let data = [200,150,200, 250,300]
let spacing =5;
let margin =60;
let availableWidth = chartWidth - (margin*2) - (spacing*(data.length-1));
let barWidth = availableWidth / data.length;
let numTick = 40;
let tickSpacing = chartHeight / numTick;
let tickLenght = 5;

console.log(barWidth)

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {

    background(0);
    translate(50, 450);

    stroke(255);
    strokeWeight(2);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    for (let i=0; i <= numTick; i++) {
        stroke(255,200)
        strokeWeight(1)
        line(0, -i * tickSpacing, -tickLenght, -i * tickSpacing)

        fill(255,0,0);
        noStroke();
        textSize(12);
        textAlign(RIGHT,CENTER);
        text(i*tickSpacing, -15, tickSpacing * -i);
    }

    translate(margin, 0);

    for (let i = 0; i < data.length; i++) {
        fill(0,255,0);
        rect((barWidth + spacing) * i, 0, barWidth, -data[i]);

        fill(255,0,0);
        noStroke();
        textSize(12);
        textAlign(RIGHT,CENTER);
        text(-15);
    }



}
