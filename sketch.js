
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bin,bin1,bin2,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;

  

  
  ground = new Ground(600,380,1200,10);
  bin2 = new Bin(1092,317,15,100);
  bin1 = new Bin(908,317,15,100);
  bin = new Bin(1000,367,200,15);
  paper = new Paper(100,360,10,10);  
  
  
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-15})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  bin2.display();
  bin1.display();
  bin.display();
  paper.display();

  
  
  drawSprites();
 
}





