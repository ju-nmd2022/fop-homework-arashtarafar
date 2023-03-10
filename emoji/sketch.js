function setup(){
    createCanvas(600, 500);
}

function draw(){
    // Fill entire canvas with background color    
    background(30);    

    // Draw the face
    noFill();
    stroke('#FFBF00');
    strokeWeight(10);
    ellipse(300, 245, 290);

    strokeWeight(0);
    fill('#FFBF00');
    ellipse(300, 245, 282);

    // Draw the mouth
    translate(-30, -30);
    scale(1.1);
    fill('#674601');
    ellipse(300, 300, 75, 60);
    fill('#FFBF00');
    ellipse(300, 280, 125, 50);

    // Draw the eyes
    fill('#674601');
    ellipse(255, 225, 50, 35);
    ellipse(345, 225, 50, 35);
    fill('#FFBF00');
    ellipse(255, 211, 70, 35);
    ellipse(345, 211, 70, 35);

    // Draw the eyebrows
    noFill();
    stroke('#674601');
    strokeWeight(8);
    strokeCap(ROUND);

    // Left eyebrow
    beginShape();
    vertex(225, 200);
    bezierVertex(240, 180, 265, 180, 270, 182);
    endShape();
    
    // Right eyebrow
    beginShape();
    vertex(371, 200);
    bezierVertex(355, 180, 330, 180, 325, 182);
    endShape();

    push();
        translate(310, 340);
        scale(2);
        fill(200);
        stroke(40);
        strokeWeight(0.4);
        beginShape();
        vertex(0, 0);
        vertex(20, 20);
        vertex(100, 20);
        vertex(100, 50);
        vertex(-10, 50);
        vertex(-10, 20);
        vertex(0, 20);
        vertex(0, 0);
        endShape();
    pop();

    push();
        translate(310, 417);
        scale(2);
        fill(40);
        noStroke();
        text("So glad its over...", 0, 0);
    pop();    
}