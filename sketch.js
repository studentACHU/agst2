const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var box2;
var pig2;
var log2;
var box3;
var log3;
var box4;
var box5;
var log4;
var b1;

var log1;
function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,750,100,100);
    box2 = new Box(900,750,100,100);
    ground = new Ground(600,800,1200,200)
    pig1 = new Pig(750,750);
    log1 = new Log(750,550,500,PI/2);
    box3 = new Box(600,520,100,100);
    box4= new Box(900,520,100,100);
    pig2= new Pig(750,520);
    log2 = new Log(750,430,500,PI/2)
    box5 = new Box(750,410,100,100);
  log3=new Log (670,300,200,PI/7);
  log4=new Log (900,280,200,-PI/8);
  b1=new bird(200,200)
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    b1.display();
}