var fixedRect,moveRect





function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(170, 200, 50, 80);
   moveRect = createSprite(320,200,80,50)
   moveRect.shapeColor="red"
   fixedRect.shapeColor="red"

}

function draw() {
  background(0);  
  moveRect.x=mouseX
  moveRect.y=mouseY
if (fixedRect.x-moveRect.x<=fixedRect.width/2+moveRect.width/2 &&
  moveRect.x-fixedRect.x<=fixedRect.width/2+moveRect.width/2 &&
  fixedRect.y-moveRect.y<=fixedRect.height/2+moveRect.height/2&&
  moveRect.y-fixedRect.y<=fixedRect.height/2+moveRect.height/2 ){
  moveRect.shapeColor="blue"
  fixedRect.shapeColor="blue"

}
else{
  moveRect.shapeColor="red"
  fixedRect.shapeColor="red"

}

  
  drawSprites();
}