
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(790,690,40,40);

	ground = new Ground(600,height,800,20);

	dustbin = new dustbin(750,690,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  dustbin.display();
  keypressed();
  drawSprites();

 
}

function keypressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}





