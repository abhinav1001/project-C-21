var fixedrect,movingrect;
var goat,dog;
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  goat=createSprite(10,100,50,50);
  dog=createSprite(500,100,50,50);
  movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
  dog.velocityX=-5;
  goat.velocityX=5;
}
function draw() {
  background(0,0,0);  
  bounceoff(dog,goat);
  drawSprites();
  
}
