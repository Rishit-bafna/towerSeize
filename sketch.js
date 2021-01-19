const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var engine,world;
var ground1,ground2;
var heaxgon1,launcher,hexagonI;
function preload(){
    hexagonI = loadImage("polygon.png")
}

function setup(){
createCanvas(1800,800);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(750,730,600,20);
ground2 = new Ground(1400,400,400,20);

hexagon1 = new hexagon(50,200,80);

launcher = new rope(hexagon1.body,{x:190,y:460})

block1 = new block(550,660,100,120);
block2 = new block(650,660,100,120);
block3 = new block(750,660,100,120);
block4 = new block(850,660,100,120);
block5 = new block(950,660,100,120);
block6 = new block(650,540,100,120);
block7 = new block(750,540,100,120);
block8 = new block(850,540,100,120);
block9 = new block(750,420,100,120);
block10 = new block(1300,330,100,120);
block11 = new block(1400,330,100,120);
block12 = new block(1500,330,100,120);
block13 = new block(1400,210,100,120);

}
function draw(){
Engine.update(engine);
background("#FF6091");

ground1.display();
ground2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();

launcher.display();

hexagon1.display();
  
drawSprites();

}

function mouseDragged()
{
	Matter.Body.setPosition(hexagon1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(hexagon1.body, {x:50, y:200}) 
	  launcher.attach(hexagon1.body);
	}
  }
