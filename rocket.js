let canvas = {
    height: 500,
    width: 1000,
    halfWidth: 1000 / 2
  },
  background = { stageHeight: 350, grassHeight: canvas.height },
  rocket = {
    height: 100,
    left: canvas.width / 2 - 50,
    right: canvas.width / 2 + 50,
    bottom: background.stageHeight - 70
  },
  cloud = { diameter: 40, speed: 0.075 },
  movingValue = { clouds: 0, grass: 0 },
  increasingSpeed = { clouds: 60 };

function setup() {
  createCanvas(canvas.width, canvas.height);
  noStroke();
}

function draw() {
  drawScene();
  drawMultipleClouds(cloud.speed);
  drawFlames();
  drawStage();
  drawRocket();
  moveGround();
}

function drawScene() {
  noStroke();
  fill("#5A89FF");
  rect(0, 0, canvas.width, canvas.height);
}

function drawStage() {
  fill("green");
  rect(0, background.grassHeight - 100, canvas.width, 100);
  fill("gray");
  rect(0, background.grassHeight - 25, canvas.width, 25);
  fill("black");
  rect(0, background.grassHeight - 15, canvas.width, 15);
  fill("gray");
  rect(0, background.grassHeight - 10, canvas.width, 15);
}

function drawRocket() {
  stroke("black");
  strokeWeight(4);
  fill("white");
  ellipse(canvas.halfWidth, 200, 157, 250);
  fill("red");
  //top triangle
  triangle(
    rocket.left,
    rocket.height,
    rocket.right,
    rocket.height,
    canvas.halfWidth,
    rocket.height - 50
  );
  //left triangle
  triangle(
    rocket.left,
    background.stageHeight,
    rocket.left,
    rocket.bottom,
    rocket.left - 50,
    background.stageHeight
  );
  //right triangle
  triangle(
    rocket.right,
    background.stageHeight,
    rocket.right,
    rocket.bottom,
    rocket.right + 50,
    background.stageHeight
  );
  rect(
    rocket.left,
    rocket.bottom - 3,
    rocket.right - rocket.left,
    rocket.height - 25
  );
  fill("blue");
  strokeWeight(3);
  ellipse(canvas.halfWidth, rocket.height + 50, 70);
  noStroke();
  fill("black");
  rect(rocket.left, background.stageHeight, 100, 50, 10);
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
  movingValue.clouds =
    (movingValue.clouds + increasingSpeed.clouds * x) % canvas.width;

  if (movingValue.clouds > 0) {
    drawCloud(100, 160 + movingValue.clouds);
    drawCloud(300, 100 + movingValue.clouds);
    drawCloud(250, -50 + movingValue.clouds);
    drawCloud(410, 200 + movingValue.clouds);
    drawCloud(560, -80 + movingValue.clouds);
    drawCloud(670, 155 + movingValue.clouds);
    drawCloud(870, 55 + movingValue.clouds);
  }
}

function drawFlames() {
  //outer flame
  fill("red");
  ellipse(canvas.halfWidth, background.stageHeight + 50, 90, 80);
  //middle flame
  fill("orange");
  ellipse(canvas.halfWidth, background.stageHeight + 50, 70, 40);
  //inner flame
  fill("yellow");
  ellipse(canvas.halfWidth, background.stageHeight + 50, 50, 20);
}

function moveGround() {
  background.grassHeight = background.grassHeight + 0.5;
  if (background.grassHeight - 100 > canvas.height) {
    cloud.speed = 0.5;
  }
}
