var r = 0;
var b = 255;

function setup(){
    createCanvas(600,400);
}

function draw() {
    r= map(mouseX,0,600,0,255);
    b= map(mouseX,0,600,255,0);
    background(r,0,b);

    fill(255,120,225);
    ellipse(mouseX,200,64,64);

}
