

var a=1.4, b=1.1, c=2.8, d=1.5;
var x=1, y=1;

function setup() {

    loadJSON("patatap/data/evolution-activite.json", gotData, 'jsonp');
    // put setup code here
    var canva = createCanvas(500, 500);
    stroke(190,50,120,10);
    canva.position(550,180);
    

}

function gotData(data) {
PrintIn(data);
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

//load the data

//figure out the height