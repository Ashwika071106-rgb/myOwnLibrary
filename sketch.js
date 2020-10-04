var fixedRect, movingRect;






function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="red";
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="red";
  fixedRect.debug=true;
  movingRect.debug=true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("yellow");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
   
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

