const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var stand1, stand2;
var polygon;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;

function setup() {
  createCanvas(1360,655);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(700,650,1400,25);
  stand1=new Ground(675,450,220,15);
  stand2=new Ground(1005,260,200,15);

  polygon=new Polygon(135,470,50)

  slingshot=new Slingshot(polygon.body,{x:135,y:470});

  block1=new Block(630,448,30,40);
  block2=new Block(660,448,30,40);
  block3=new Block(690,448,30,40);
  block4=new Block(720,448,30,40);
  block5=new Block(660,348,30,40);
  block6=new Block(690,348,30,40);
  block7=new Block(675,248,30,40);
  block8=new Block(960,248,30,40);
  block9=new Block(990,248,30,40);
  block10=new Block(1020,248,30,40);
  block11=new Block(1050,248,30,40);
  block12=new Block(990,148,30,40);
  block13=new Block(1020,148,30,40);
  block14=new Block(1005,48,30,40);

  Engine.run(engine);
}

function draw() {
  background(rgb(56,44,44));  
  
  ground.display();
  stand1.display();
  stand2.display();
  polygon.display();
  slingshot.display();
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
  block14.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
