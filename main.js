function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawWeirdShape("red", "rebeccapurple");
}

function drawWeirdShape(fillOne, fillTwo){
  fill("rebeccapurple")
   if(mouseX < 100){
    fill(fillOne)
  }else if(mouseX >= 100 && mouseX < 200){
    fill(fillTwo);
  }else if(mouseX >= 200 && mouseX < 300){
    fill("yellow")
  }else{
    fill("black")
  }

  rect(200, 200, 120);
  rectMode(CENTER);
  noStroke();
  ellipse(150, 150, 100);
  ellipse(250, 250, 100);
}
