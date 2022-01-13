let a = 2.6,
  b = 3.2,
  c = 3.7,
  d = 4.1;
let x = 1,
  y = 1;


function setup() {
  let canva = createCanvas(500, 500);
  stroke(190, 50, 120, 10);
  canva.position(500, 130);
 
  
};


function draw() {
  for (let i = 0; i < 2000; i++) {
    let oldX = x;
    let oldY = y;
    x = sin(a * oldY) - cos(b * oldX);
    y = sin(c * oldX) - cos(d * oldY);
    let scaledX = map(x, -2, 2, 0, width);
    let scaledY = map(y, -2, 2, 0, height);
    point(scaledX, scaledY);
  }

};

