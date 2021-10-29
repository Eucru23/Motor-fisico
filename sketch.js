const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine, world;
var suelo;
var ball;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic: true
  }
  suelo = Bodies.rectangle(400,400,800,20, options);
  
  World.add(world,suelo);

  var ballOptions={
    restitution: 10
  }
  ball = Bodies.circle(100,20,20,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(suelo.position.x, suelo.position.y, 800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  drawSprites();
}