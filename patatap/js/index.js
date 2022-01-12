var a=1.4, b=1.1, c=2.8, d=1.5;
var x=1, y=1;

function setup() {
    // put setup code here
    createCanvas(500, 500);
    stroke(150,50,20,30);
}

function draw() {
    for (var i = 0; i<1000; i++) {
  var oldX = x;
  var oldY = y;
  x = sin(a * oldY) - cos(b * oldX)
  y = sin(c * oldX) - cos(d*oldY);
  var scaledX = map(x, -2, 2,  0, width);
  var scaledY = map(y, -2, 2,0, height);
  point(scaledX, scaledY);
}


}