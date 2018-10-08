let canvas = {
    height: 500,
    width: 1000,
    halfWidth: 1000 / 2
  },
  stageHeight = 350,
  rocket = {
    height: 100,
    left: canvas.width / 2 - 50,
    right: canvas.width / 2 + 50,
    bottom: stageHeight - 70
  },
  cloud = {diameter: 40};

function setup() {
  createCanvas(canvas.width, canvas.height);
  noStroke();
}

function draw() {
  drawScene();
  drawMultipleClouds(0.5);
  drawStage();
  drawRocket();

}

function drawScene() {
  noStroke();
  background("#5A89FF");
}

function drawStage() {
  noStroke();
  fill("black");
  rect(rocket.left, stageHeight, 100, 50, 10);
  fill("gray");
  rect(0, 400, canvas.width, 100);
}

function drawRocket() {
  stroke("black");
  strokeWeight(4);
  fill("white");
  ellipse(canvas.halfWidth, 200, 157, 250);
  fill("red");
  triangle(
    rocket.left,
    rocket.height,
    rocket.right,
    rocket.height,
    canvas.halfWidth,
    rocket.height - 50
  );
  triangle(
    rocket.left,
    stageHeight,
    rocket.left,
    rocket.bottom,
    rocket.left - 50,
    stageHeight
  );
   triangle(
    rocket.right,
    stageHeight,
    rocket.right,
    rocket.bottom,
    rocket.right + 50,
    stageHeight
  );
  rect(
    rocket.left,
    rocket.bottom - 3,
    (rocket.right - rocket.left),
    rocket.height - 25
  );

}


function drawCloud(x, y) {
  fill("white");
  //main ellipse
  ellipse(x, y + 110, 100, 70);
  //little circles that make up cloud
  ellipse(x, y + 90, cloud.diameter);
  ellipse(x + 30, y + 95, cloud.diameter);
  ellipse(x - 30, y + 95, cloud.diameter);
  ellipse(x + cloud.diameter, y + 115, cloud.diameter);
  ellipse(x - cloud.diameter, y + 115, cloud.diameter);
  ellipse(x, y + 150, cloud.diameter);
  ellipse(x + 35, y + 140, cloud.diameter);
  ellipse(x - 35, y + 140, cloud.diameter);
  ellipse(x + 20, y + 147, cloud.diameter);
  ellipse(x - 20, y + 150, cloud.diameter);
}

function drawMultipleClouds(x) {
  //need to figure out how to move it
  drawCloud((100 + x) % canvas.width, 160);
  drawCloud((300 + x) % canvas.width, 100);
  drawCloud((250 + x) % canvas.width, -50);
  drawCloud((410 + x) % canvas.width, 200);
  drawCloud((560 + x) % canvas.width, -80);
  drawCloud((670 + x) % canvas.width, 155);
  drawCloud((870 + x) % canvas.width, 55);
}
