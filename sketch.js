
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ground
function setup()
{
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  rectMode(CENTER)
  var ballOptions = {
    restitution:0.95,
    friction:0.01
  }
  ball = Bodies.circle(100,20,20,ballOptions)
  World.add(world,ball)

var groundOption = {
  isStatic:true
}
ground = Bodies.rectangle(200,390,400,10,groundOption)
World.add(world,ground)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,400,10)
 
}

