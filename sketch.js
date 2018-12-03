var stars = [];
var bg;
var speed;
var button;

function setup() {
  bg = loadImage("neonflames.png");
  createCanvas(1920,1006);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  button=createButton("Click");
  button.mousePressed(triggerGIF);
}

function triggerGIF() {
  window.open("whatamdoing.html");
  bg=loadImage("I-have-no-idea-what-I-am-doing.gif");
}



function draw() {
  background(bg);
  speed = map(mouseX, 0, width, 0, 50);

  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
