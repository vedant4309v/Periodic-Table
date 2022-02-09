var path, leftBoundary,rightBoundary;
var pathImg;
var i;

function preload(){
  pathImg = loadImage("TABLE1.jpeg");
  
}

function setup(){
  
  createCanvas(1360,640);
  
// Moving background
path=createSprite(700,330);
path.addImage(pathImg);
path.velocityY = 0;
path.scale=0.8;

// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 0;
  
  
  
  edges= createEdgeSprites();
  
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
