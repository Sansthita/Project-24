
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
    paperball = new Paper(200, 200);
	leftdustbin = new Dustbin(600, 650, 10, 50);
	bottomdustbin = new Dustbin(545, 670, 100, 10);
	rightdustbin = new Dustbin(500, 650, 10, 50);
	ground = new Ground(400, 680, 800, 10);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyDown(UP_ARROW)){
	  keyPressed();
}
  drawSprites();
  paperball.display();
  ground.display();
  leftdustbin.display();
  bottomdustbin.display();
  rightdustbin.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:80, y:-1});
	}
}

