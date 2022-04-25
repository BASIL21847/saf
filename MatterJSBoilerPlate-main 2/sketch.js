
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	 
	 
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	
	}
	ball = Bodies.circle(200,100,50,ball_options)
	World.add(world, ball)
	//Create the Bodies Here.
groundObj= new ground(width/2,670,width,20);
leftSide = new ground(600,600,20,120);
rightSide = new ground(700,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,50,50)
groundObj.show()
leftSide.show()
rightSide.show()
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


