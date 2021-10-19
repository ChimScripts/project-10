var sea, seaImage;
var ship, shipAnimation;

function preload(){
  seaImage=loadImage("sea.png")
  shipAnimation=loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png")
}

function setup(){
  createCanvas(displayWidth, displayHeight);
  sea=createSprite(width/2 , height/2)
  sea.addImage(seaImage)
  sea.scale=0.5
  sea.velocityX = -3

  ship=createSprite(width/2 , height/2)
  ship.addAnimation("moving" , shipAnimation)
  ship.scale = 0.3
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/4
  }
  drawSprites();
}