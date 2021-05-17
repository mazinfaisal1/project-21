var mr,fr;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  mr = createSprite(800, 500, 50, 5);
  mr.velocityX = speed;
  mr.shapeColor = "red";
  fr = createSprite(1200,200,thickness,height/2);
  fr.shapeColor = "green"
  
}

function draw() {
  background(255,255,255);  

 
  drawSprites();
}

function hasCollised(mr,fr){

  mrRightEdge = mr.x+mr.width;
  frLeftEdge = fr.x+fr.width;

  if(mrRightEdge=frLeftEdge){

    return true;
  }

  return false;


}