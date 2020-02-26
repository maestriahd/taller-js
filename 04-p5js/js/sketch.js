let pmouseX = 0;
let pmouseY = 0;

function setup(){
  let cnv = createCanvas(500, 500);
  cnv.parent('main');
}

function draw(){
  let d = dist(mouseX, mouseY, pmouseX, pmouseY);
  console.log(d);
  ellipse(mouseX, mouseY, d, d);
  pmouseX = mouseX;
  pmouseY = mouseY;
}
