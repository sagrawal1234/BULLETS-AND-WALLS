var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(32,52);
  bullet = createSprite(50,200,20,20);
  bullet.shapeColor = color("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.y = wall.y-1200;
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  
 
}

function draw() {
  background("black");
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
    wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
    wall.shapeColor = color(0,255,0);
    }
    }
  drawSprites();
} 

function hasCollided(lbullet,lwall){
  bulletRightEdge= lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
return true
  }
  return false;
}
