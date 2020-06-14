var movingrect,fixedrect;




function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite (600,400,50,80);
  movingrect = createSprite (800,400,80,30);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
 // movingrect.velocityY = -2;
 // fixedrect.velocityY = 2;
gameobject1 = createSprite(100,100,50,50);
gameobject1.shapeColor ="green";
gameobject2=createSprite(200,100,50,50);
gameobject2.shapeColor ="green";
fixedrect.velocityY =  -4
fixedrect.velocityX =  -4
gameobject2.velocityX = 8
gameobject2.velocityY = 8;

}

function draw() {
  background("black");
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  

if(istouching(movingrect,gameobject1)){
  gameobject1.shapeColor = "blue";  
  movingrect.shapeColor = "blue";

}
else{
  gameobject1.shapeColor = "green";
  movingrect.shapeColor = "green";
}


  bounceoff(fixedrect,gameobject2);

  drawSprites();
}
