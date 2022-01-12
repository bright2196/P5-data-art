let a = 1.4,
  b = 1.1,
  c = 2.8,
  d = 1.5;
let x = 1,
  y = 1;

function setup() {
  loadJSON("data/evolution-activite.json", gotData, "jsonp");
  let canva = createCanvas(500, 500);
  stroke(190, 50, 120, 10);
  canva.position(550, 180);
};

function gotData(data) {
  printIn(data);
};

function draw() {
  for (let i = 0; i < 1000; i++) {
    let oldX = x;
    let oldY = y;
    x = sin(a * oldY) - cos(b * oldX);
    y = sin(c * oldX) - cos(d * oldY);
    let scaledX = map(x, -2, 2, 0, width);
    let scaledY = map(y, -2, 2, 0, height);
    point(scaledX, scaledY);
  }
};
