var ghost,ghost_Image
var boy, boy_Image
var gunShot

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
ghost_Image=loadImage("ghost.jpeg")
boy_Image=loadImage("boy.jpeg")

{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	
	  ghost.addImage(ghost_Image)
    ghost = createSprite(displayWidth-250, displayHeight-300, 50, 50);
    ghost.scale = 0.3
    ghost.debug = true
    ghost.setCollider("rectangle",0,0,150,150)
   

    boy = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    boy.addImage(boy_Image)
    boy.scale = 0.3
    boy.debug = true
    boy.setCollider("rectangle",0,0,150,150)
   
    gunShot = createSprite(displayWidth-1150, player.y, 20, 10)
    gunShot.velocityX=10;
    gunShot.depth=player.depth+0.1;
	
    


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



