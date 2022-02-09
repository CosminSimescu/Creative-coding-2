let chartWidth = 400;
let chartHeight = 400;
let data        = [200,130,200, 250,300];
let scaledData  =[];
let dataLabels  = ["Oranges","Bananas","Lemons","Limes","Apples","Grapes"]

let maxValue;

let spacing =5;
let margin =20;
let availableWidth = chartWidth - (margin*2) - (spacing*(data.length-1));
let barWidth = availableWidth / data.length;
let numTick = 10;
let tickSpacing = chartHeight / numTick;
let tickLenght = 10;
let tickIncrements;

function setup() {
    createCanvas(500, 500);
    background(0);

    maxValue = max(data);
    tickIncrements = Math.round(maxValue / numTick);

    for(let i=0; i <data.length; i++) {
        let tempVal=map(data[i],0,maxValue,0,chartHeight)
        
        scaledData.push(tempVal)
        
    }

}

function draw() {

    background(0);
    translate(50, 450);

    stroke(255,255,0);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0);

    for (let i=0; i <= numTick; i++) {
        stroke(0,0,255)
        strokeWeight(2)
        line(0, -i * tickSpacing, -tickLenght, -i * tickSpacing)

        fill(255,200,0);
        noStroke();
        textSize(12);
        textAlign(RIGHT,CENTER);
        text(i*tickIncrements, -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for (let i = 0; i < scaledData.length; i++) {
        
        fill(0,255,0);
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);
        
        fill(200,255,0);
        noStroke();
        textSize(20);
        textAlign(CENTER,CENTER);
        text(data[i],(barWidth + spacing) *i+(barWidth/2), -scaledData[i]-8);
    }
}
