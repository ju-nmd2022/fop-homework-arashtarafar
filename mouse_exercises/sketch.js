let circleRadius = 100;
let circleHorizontalPosition = 50;
let circleMoveDirection = true;
let bounceOffAccel = 10;
let velocity = 0;
let ellipseColor = "lightblue";
let buttonActive = false;

function setup(){
    createCanvas(750, 660);    
    background(40);

    frameRate(60);
}

function draw(){
    background(40);

    // Ball physics
    push();
    noStroke();
    fill(ellipseColor);
    ellipse(circleHorizontalPosition, 200, circleRadius);
    pop();

    if((circleHorizontalPosition > width - 80) || (circleHorizontalPosition < 50)){
        circleMoveDirection = !circleMoveDirection;
    }

    if(circleMoveDirection){
        velocity = 10 * (1 - circleHorizontalPosition / width);

    }else{
        velocity =  -10 * (circleHorizontalPosition / width);
    }

    circleHorizontalPosition += velocity;    

    // Button logic
    push();
    if(buttonActive){
        stroke(0);
        strokeWeight(5);
        rect(300, 500, 100, 50);
        strokeWeight(0.5);
        text("Click Meh", 325, 529);
    }else{
        stroke(200);
        strokeWeight(5);
        fill(40);
        rect(300, 500, 100, 50);
        strokeWeight(0.5);
        stroke(200);
        fill(200);
        text("Click Meh", 325, 529);
    }
    pop();
}

function mousePressed(){
    if((mouseX > 300 && mouseX < 400) && (mouseY > 500 && mouseY < 550)){
        // Me button clicketh
        ellipseColor = "pink";
        buttonActive = true;
    }
}

function mouseReleased(){
    if((mouseX > 300 && mouseX < 400) && (mouseY > 500 && mouseY < 550)){
        // Me button clicketh
        ellipseColor = "lightblue";
        buttonActive = false;
    }
}