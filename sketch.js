function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {  

  background(255);
  fill(mouseX);  
  circle(windowWidth / 2, windowHeight / 2, 300);
  textSize(20);
  text(mouseX, 50, 50);
  text( int(mouseY), 50, 100);
  //rect (0, 0, mouseX, mouseY)
  //textSize(25)
  // text(mouseX, 100, 100);
}
