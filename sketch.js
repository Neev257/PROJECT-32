const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snake1;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snake1 = new snake(10,100,50,50);
}

function draw() {
  background(5,255,255);  
  Engine.update(engine);
    strokeWeight(4);
 
  snake1.display();
}