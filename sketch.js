var fixed, moving;

function setup() {
  createCanvas(800,400);
  moving = createSprite(200, 200, 50, 50);
  fixed = createSprite(100,200,40,50);
  moving.shapeColor = "blue";
  fixed.shapeColor = "blue";
}
function draw() {
  background(0);  
  moving.y=mouseY;
  moving.x=mouseX;
  if (moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2) 
  {
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
    else {
    moving.shapeColor = "blue";
  fixed.shapeColor = "blue";
  }
  drawSprites();
}