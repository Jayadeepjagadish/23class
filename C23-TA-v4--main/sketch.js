const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
function setup() {
    createCanvas(400,400);
engine=Engine.create();
world=engine.world;
ball=Bodies.circle(100,10,20);
World.add(world,ball);
}

function draw() 
{
  background("blue");
Engine.update(engine)
ellipse(ball.position.x,ball.position.y, 20)






}

